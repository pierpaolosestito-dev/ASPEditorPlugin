/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
import { CommonTokenStream, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { cp } from "fs";
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

		let global_constructs: [string, number, number][] = [];

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
				},
			});
			aspParser.program();

			const constructs: [string, number, number][] = [];
			for (let i = 0; i < tokens.getTokens().length; i++) {
				const text = tokens.get(i).text as string;
				const type = tokens.get(i).type;
				const index = tokens.get(i).line;
				constructs.push([text, type, index]);
				global_constructs.push([text, type, index]);
			}

			global_constructs = remove_tc(global_constructs, '%**', '**%');
			const heads = [];
			const tails = [];
			const tails_negative = [];
			const tails_in_symbols = [];

			let head = true;
			let negation = false;
			
			for (let i = 0; i < constructs.length; i++) {
				//TODO filtrare i token
				const s = constructs[i][0];
				if (constructs[i][1] === ASPCore2Lexer.CONS) { // se trovo un simbolo di constraint capisco che sono passata alla coda
					head = !head;
					continue;
				}
				if((negation && constructs[i][1] === ASPCore2Lexer.PARAM_CLOSE)){
					negation = false;
					continue;
				}

				if (constructs[i][1] === ASPCore2Lexer.NAF || negation) { // se sono atomi negativi non li inserisco né in coda né in testa
					if (constructs[i][1] === ASPCore2Lexer.CONS) {
						negation = false;
					} else {
						negation = true;
					}
				}
				if (constructs[i][1] >= 29 && constructs[i][1] <=34) {
					if(constructs[i-1][1] === ASPCore2Lexer.VARIABLE){
						tails_in_symbols.push(constructs[i-1][0]);
						continue;

					}
					if(constructs[i+1][1] === ASPCore2Lexer.VARIABLE){
						tails_in_symbols.push(constructs[i-1][0]);
						continue;
					}

				}
				if(negation && !head && constructs[i][1]==ASPCore2Lexer.VARIABLE){
					tails_negative.push(constructs[i][0]);
					continue;
				}
				if (constructs[i][1] === ASPCore2Lexer.VARIABLE) {
					if (head){
						heads.push(constructs[i][0]);
					}else if(!negation && !(constructs[i-1][1] > 29 && constructs[i-1][1]<34) &&  
					!(constructs[i+1][1] > 29 && constructs[i+1][1]<34)){
						tails.push(constructs[i][0]);
					}else if(negation){
						tails_negative.push(constructs[i][0]);
					}
					continue;
				}
				// constructsFiltered.push(constructs[i]);
				if (constructs[i][1] === ASPCore2Lexer.SYMBOLIC_CONSTANT) { // se è una atomo lo salvo
					const result = atoms.find(atom => atom.name === constructs[i][0]);
					if (!result) {
						atoms.push({ name: constructs[i][0], count: 1 });
						continue;
					}
					else {
						atoms.map(atom => {
							atom.name === constructs[i][0] ? atom.count = atom.count + 1 : null;
						});
					}
				}
			}

			const msg = `The rule at line ${lineIndex} is not safe`;
			if (!checkSafe(heads, tails,tails_negative,tails_in_symbols) && checkIsRule(constructs)) {
				diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning));
			}else{
				diagnostics = diagnostics.filter(obj => {
					return !obj.message.includes(msg);
				}
				);
			}
			diagnostics = addWarningProbablyWrongName(diagnostics, atoms, global_constructs, doc);
		}
		errorDiagnostics.set(doc.uri, diagnostics);
	}
}

//Rimuove test e commenti
function remove_tc(global_constructs: [string, number, number][], open: string, close: string) {
	let opened = false;
	const result: [string, number, number][] = [];
	for (let i = 0; i < global_constructs.length; i++) {

		if (global_constructs[i][0] === open) {
			opened = true;
		}
		if (global_constructs[i][0] === close && opened) {
			opened = false;
		}
		if (!opened) {
			result.push(global_constructs[i]);
		}

	}
	return result;
}

function addWarningProbablyWrongName(diagnostics: vscode.Diagnostic[], atoms: [{ name: string, count: number }], constructs: [string, number, number][], doc: vscode.TextDocument) {
	atoms.map(atom => {
		if (atom.count === 1) {
			const line = findElemInText(doc, atom.name);
			if (line !== -1) {
				const msg = `${atom.name} is used only once`;
				diagnostics.push(createDiagnostic(doc, doc.lineAt(line), line, msg, vscode.DiagnosticSeverity.Warning));
			}
		} else {
			diagnostics = diagnostics.filter(obj => {
				return !obj.message.includes(`${atom.name} is used only once`);
			}
			);
		}

	});
	return diagnostics;
}


function findElemInText(doc: vscode.TextDocument, token: string) {
	let skip = false;
	const startComment = '%/';
	const endComment = '/%';
	const single_comment = '%';
	const startTest = '%**';
	const endTest = '**%';
	
	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const lineOfText = doc.lineAt(lineIndex);
		const comment_in_line = lineOfText.text.includes(single_comment);
		const ts_in_line = (lineOfText.text.includes(startTest) && lineOfText.text.includes(endTest));
		let text_line = lineOfText.text;


		if ((comment_in_line || ts_in_line) || (comment_in_line && !ts_in_line && !comment_in_line) ){
			const reg_multi = /%.*%/;
			const reg_single_comment = /%.*/;
			text_line = text_line.replace(reg_multi,"");
			text_line = text_line.replace(reg_single_comment,"");
			skip = false;
		}
		if (text_line.includes(token) && ((text_line.includes(startComment) || text_line.includes(startTest)))) {
			if (text_line.indexOf(token) < text_line.indexOf(startComment) || (text_line.indexOf(token) < text_line.indexOf(startTest))) {
				skip = false;
				return lineIndex;
			} else {
				skip = true;
				continue;

			}

		}
		if ((text_line.includes(endComment) || text_line.includes(endTest)) && text_line.includes(token)) {
			if (
				(text_line.indexOf(token) > text_line.indexOf(endComment) && text_line.indexOf(endComment) !== -1)
				|| (text_line.indexOf(token) > text_line.indexOf(endTest) && text_line.indexOf(endTest) !== -1)) {
				skip = false;

				return lineIndex;
			} else {
				skip = false;
				continue;
			}
		}
		if (skip && (text_line.includes(endComment) || text_line.includes(endTest))) {
			skip = false;

		}
		if (!skip && (text_line.includes(startComment) || text_line.includes(startTest))) {
			skip = true;

		}
		const reg = `${token}\\W`;
		if (text_line.includes(token) && text_line.match(reg)!=null && !text_line.includes("not") && !skip) {
			skip = false;
			return lineIndex;
		}
	}

	return -1;
}


function checkIsRule(constructs: [string, number, number][]) {
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
function checkSafe(heads: string[], tails: string[],tails_negative:string[],tails_in_symbols:string[]) {
	let safe = true;
	
	if (heads.length === 0 || tails.length === 0)
		return !safe;
	//  variabili negative nel corpo devono apparire in atomi positivi nel corpo
	tails_negative.map((el) => {
		if (!tails.includes(el)) {
			safe = false;
		}
	});
	// tutto ciò che è in testa deve apparire positivamente nel corpo
	heads.map((el) => {
		if (!tails.includes(el)) {
			safe = false;

		}
	});

	//tutto ciò che è in <>!= deve apparire positivamente nel corpo
	tails_in_symbols.map((el) => {
		if (!tails.includes(el)) {
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