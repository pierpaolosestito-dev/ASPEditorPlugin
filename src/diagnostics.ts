/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
import { CommonTokenStream, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { removeAllListeners } from "process";
import { text } from "stream/consumers";
import * as vscode from "vscode";
import { ASPCore2Lexer } from "./parser/ASPCore2Lexer";
import { ASPCore2Parser } from "./parser/ASPCore2Parser";
/** String to detect in the text document. */
const END_CHARACTER_OF_A_RULE = ".";
export const CODE_ERROR = "Errore 104";

/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param errorDiagnostics diagnostic collection
 */
export function refreshDiagnostics(
	doc: vscode.TextDocument,
	errorDiagnostics: vscode.DiagnosticCollection
): void {
	const regex = /\.(asp|lp|dlv)$/g;
	const atoms: [{ name: string, count: number }] = [{ name: "", count: 0 }];

	if (regex.test(doc.fileName)) {
		let diagnostics: vscode.Diagnostic[] = [];

		for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
			const lineOfText = doc.lineAt(lineIndex);

			const input = new ANTLRInputStream(lineOfText.text);
			const aspLexer = new ASPCore2Lexer(input);
			const tokens = new CommonTokenStream(aspLexer);
			tokens.fill();
			const aspParser = new ASPCore2Parser(tokens);
			aspParser.removeErrorListeners();
			aspParser.addErrorListener({
				syntaxError<T>(
					recognizer: Recognizer<T, any>,
					offendingSymbol: T,
					line: number,
					charPositionInLine: number,
					msg: string,
					e: Error | undefined
				): void {
					diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
					//console.log('lineOfText = ', lineOfText.text, '\nlineIndex = ', lineIndex, 'msg = ', msg);
					//console.log(msg);
				},
			});
			aspParser.program();

			const constructs: [string, number][] = [];
			for (let i = 0; i < tokens.getTokens().length; i++) {
				constructs.push([tokens.get(i).text as string, tokens.get(i).type]);
			}

			//constructs.map(l => console.log(l, '\n'));

			const constructsFiltered: [string, number][] = [];
			const heads = [];
			const tails = [];

			let head = true;
			let negation = false;

			for (let i = 0; i < constructs.length; i++) {
				//TODO filtrare i token

				if (constructs[i][1] === ASPCore2Lexer.NAF || negation) { // se sono atomi negativi non li inserisco né in coda né in testa
					if (constructs[i][1] === ASPCore2Lexer.CONS) {
						negation = false;
					} else {
						negation = true;
					}
					continue;
				}
				if (constructs[i][1] === ASPCore2Lexer.CONS) { // se trovo un simbolo di constraint capisco che sono passata alla coda
					head = !head;
				}
				if (constructs[i][1] === ASPCore2Lexer.VARIABLE) {
					head ? heads.push(constructs[i][0]) : tails.push(constructs[i][0]);
				}
				// constructsFiltered.push(constructs[i]);
				if (constructs[i][1] === ASPCore2Lexer.SYMBOLIC_CONSTANT) { // se è una atomo lo salvo
					const result = atoms.find(atom => atom.name === constructs[i][0]);
					if (!result) {
						atoms.push({ name: constructs[i][0], count: 1 });
					}
					else {
						atoms.map(atom => {
							atom.name === constructs[i][0] ? atom.count = atom.count + 1 : null;
						});
					}
				}
			}
			if (!checkSafe(heads, tails) && checkIsRule(constructs)) {
				const msg = "This rule is not safe";
				diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning));
				//console.log('lineOfText = ', lineOfText.text, '\nlineIndex = ', lineIndex, 'msg = ', msg);
			}
			diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);

		}

		errorDiagnostics.set(doc.uri, diagnostics);
	}
}
function addWarningProbablyWrongName(diagnostics: vscode.Diagnostic[], atoms: [{ name: string, count: number }], doc: vscode.TextDocument) {
	// atoms.map(el => console.log(el));

	atoms.map(atom => {
		if (atom.count === 1) {
			const line = findElemInText(doc, atom.name);
			if (line !== -1) {
				const msg = `${atom.name} is used only once`;
				diagnostics.push(createDiagnostic(doc, doc.lineAt(line), line, msg, vscode.DiagnosticSeverity.Warning));
				//console.log('lineOfText = ', doc.lineAt(line), '\nlineIndex = ', line, 'msg = ', msg);
			}

		} else {
			diagnostics = diagnostics.filter(obj => {
				//console.log(obj.message);
				return !obj.message.endsWith("once");
			}
			);


		}

	});
	return diagnostics;
}
// return vscode.TextDocument to create after diagnostics
function findElemInText(doc: vscode.TextDocument, token: string) {
	const multilineTestSameLine = new RegExp('\\%\\*\\*\\n*(?:.+\\n*)*\\*\\*\\%');
	const multilineCommentSameLine = new RegExp('\\%\\/\\n*(?:.+\\n*)*\\/\\%');
	let openTests = false;
	let closeTests = false;
	let openComments = false;
	let closeComments = false;
	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const index = lineIndex;
		//I test sono esenti dai Warning, vanno quindi rimossi.
		const lineOfText = doc.lineAt(lineIndex).text;

		//Controllo se lineOfText si trova in un test
		if (!openTests) {
			openTests = checkRegex(lineOfText, multilineTestSameLine, '%**');
		}
		if (!closeTests) {
			closeTests = checkRegex(lineOfText, multilineTestSameLine, '**%');
		}
		//Controllo se lineOfText si trova in un commento
		if (!openComments) {
			openComments = checkRegex(lineOfText, multilineCommentSameLine, '%/');
		}
		if (!closeComments) {
			closeComments = checkRegex(lineOfText, multilineCommentSameLine, '/%');
		}

		//Se tests=true, siamo ancora in un test
		//Se tests=false non siamo più in un test
		//Stesso per i commenti
		if (lineOfText.includes(token) && !lineOfText.includes("not") && !closeTests && !closeComments) {
			return lineIndex;
		}

	}
	return -1;
}

function checkRegex(lineOfText: string, regex: RegExp, splitter: string) {
	let result = false;
	const sameLine = regex.test(lineOfText);
	if (sameLine) {
		lineOfText = lineOfText.replace(regex, "");
	}

	if (splitter === '%**' || splitter === '%/') {
		const open = lineOfText.split(splitter).length > 1;
		if (open) { result = true; }
	}
	if (splitter === '**%' || splitter === '/%') {
		const close = lineOfText.split(splitter).length > 1;
		if (close) { result = false; }
	}
	return result;
}

function checkIsRule(constructs: [string, number][]) {
	if (constructs[0][1] !== ASPCore2Lexer.SYMBOLIC_CONSTANT) { // non inizia con un atomo CODE 2
		return false;
	}
	for (let i = 0; i < constructs.length; i++) {
		if (constructs[i][1] === ASPCore2Lexer.CONS) { // è presente il :-
			return true;
		}
	}
	return false;
}
function checkSafe(heads: string[], tails: string[]) {
	let safe = true;
	if (heads.length === 0 || tails.length === 0)
		return !safe;
	tails.map((el) => {
		if (!heads.includes(el)) {
			safe = false;
		}
	});
	return safe;
}
//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
function createDiagnostic(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity
): vscode.Diagnostic {
	// const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);

	const range = new vscode.Range(
		lineIndex,
		0,
		lineIndex,
		0 + lineOfText.text.length
	);
	const diagnostic = new vscode.Diagnostic(
		range,
		codeError,
		severity
	);
	//In questa sezione di codice si inferisce qual'è la causa dell'errore
	//Modifica il messaggio d'errore in base alla causa dell'errore
	/*if(codeError == "001"){ 
				diagnostic.message = "The format of the aggregate is incorrect.";
				diagnostic.code = "001";
			}
			else if(codeError == "010"){
				diagnostic.message = "The format of the built-in is incorrect";
				diagnostic.code = "010";
			}*/

	return diagnostic;
}

export function subscribeToDocumentChanges(
	context: vscode.ExtensionContext,
	errorDiagnostics: vscode.DiagnosticCollection
): void {
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(
			vscode.window.activeTextEditor.document,
			errorDiagnostics
		);
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor((editor) => {
			if (editor) {
				refreshDiagnostics(editor.document, errorDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument((e) =>
			refreshDiagnostics(e.document, errorDiagnostics)
		)
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument((doc) =>
			errorDiagnostics.delete(doc.uri)
		)
	);
}