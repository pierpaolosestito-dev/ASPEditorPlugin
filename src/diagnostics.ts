/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
import { CommonTokenStream, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import * as vscode from "vscode";
import { ASPCore2Lexer } from "./parser/ASPCore2Lexer";
import { ASPCore2Parser } from "./parser/ASPCore2Parser";

import { check_comment_or_test, countElem, checkIsRule, checkSafe, tokenize, tokenize_head_tail, input_text, /*inputText*/ } from "./parsing";

/** String to detect in the text document. */
export const CODE_ERROR = "Errore 104";

/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param errorDiagnostics diagnostic collection
 */
let opened = false;
export function refreshDiagnostics(
	doc: vscode.TextDocument,
	errorDiagnostics: vscode.DiagnosticCollection
): void {
	const regex = /\.(asp|lp|dlv)$/g;
	const atoms: string[] = [];
	//let runDiagnostic = false;
	if (regex.test(doc.fileName)) {
		let diagnostics: vscode.Diagnostic[] = [];

		for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
			const lineOfText = doc.lineAt(lineIndex);
			const [input, runDiagnostic] = input_text(lineOfText);
			const aspLexer = new ASPCore2Lexer(input);
			const tokens = new CommonTokenStream(aspLexer);
			tokens.fill();
			const aspParser = new ASPCore2Parser(tokens);
			aspParser.removeErrorListeners();
			if (lineOfText.text.includes("%/") || lineOfText.text.includes("%**")) {
				opened = true;
			}
			if (lineOfText.text.includes("/%") || lineOfText.text.includes("**%")) {
				opened = false;
				if (!runDiagnostic) {
					continue;
				}
			}
			if (!opened || runDiagnostic) {
				aspParser.addErrorListener({
					syntaxError<T>(
						recognizer: Recognizer<T, any>,
						offendingSymbol: T,
						line: number,
						charPositionInLine: number,
						msg: string,
						e: Error | undefined
					): void {
						if ((lineOfText.text.includes("/%") && lineOfText.text.search(new RegExp(`/%\\s*.+`)) != -1)
							|| (lineOfText.text.includes("**%") && lineOfText.text.search(new RegExp(`\\*\\*%\\s*.+`)) != -1)) {
							diagnostics.push(createDiagnosticForEndCommentsAndTests(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
						}
						else {
							diagnostics.push(createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error));
						}
					},
				});
			}
			aspParser.program();

			const constructs = tokenize(tokens);

			const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);

			const msg = `The rule at line ${lineIndex + 1} is not safe`;
			if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs) && !check_comment_or_test(doc, lineIndex).check) {
				diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning));
			} else {
				diagnostics = diagnostics.filter(obj => {
					return !obj.message.includes(msg);
				}
				);
			}
			diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);
		}
		errorDiagnostics.set(doc.uri, diagnostics);
	}
}

function addWarningProbablyWrongName(diagnostics: vscode.Diagnostic[], atoms: string[], doc: vscode.TextDocument) {
	atoms.map(atom => {
		const elem = countElem(doc, atom);
		if (elem.count === 1) { // una sola occorrenza
			if (elem.line !== -1) { // se non si trova in un commento
				const msg = `${elem.token} is used only once`;
				const tmp_diagnostic = diagnostics.find(obj => {
					return obj.message == msg;
				});
				if (tmp_diagnostic === undefined) {
					diagnostics.push(createDiagnosticForAtoms(doc, doc.lineAt(elem.line), elem.line, elem.token, msg, vscode.DiagnosticSeverity.Warning));
				}
			}
		} else {
			diagnostics = diagnostics.filter(obj => {
				return !obj.message.includes(`${elem.token} is used only once`);
			}
			);
		}

	});
	return diagnostics;
}

//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
export function createDiagnostic(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity,
): vscode.Diagnostic {
	let endCharacter = undefined;
	if(lineOfText.text.includes("%/")) {
		endCharacter = lineOfText.text.search("%");
	}
	else {
		endCharacter = lineOfText.text.length;
	}
	// const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);
	const range = new vscode.Range(
		lineIndex,
		0,
		lineIndex,
		0 + endCharacter
	);

	const diagnostic = new vscode.Diagnostic(
		range,
		codeError,
		severity
	);
	return diagnostic;
}
export function createDiagnosticForEndCommentsAndTests(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity
): vscode.Diagnostic {
	let regex = undefined;
	let startCharacter = 0;
	if (lineOfText.text.includes("/%")) {
		regex = new RegExp(`/%\\s*.+`);
		startCharacter += 2;
	}
	else {
		regex = new RegExp(`\\*\\*%\\s*.+`);
		startCharacter += 3;
	}
	startCharacter += lineOfText.text.search(regex);
	const endCharacter = lineOfText.text.length - 1;
	const range = new vscode.Range(
		lineIndex,
		startCharacter,
		lineIndex,
		0 + (endCharacter + 1)
	);
	const diagnostic = new vscode.Diagnostic(
		range,
		codeError,
		severity
	);
	return diagnostic;
}
export function createDiagnosticForFacts(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	endCharacter: number,
	codeError: string,
	severity: vscode.DiagnosticSeverity
): vscode.Diagnostic {
	if (codeError.includes("no viable alternative at input")) {
		const error = codeError.split("'");
		const startCharacter = lineOfText.text.indexOf(error[1]);
		if (startCharacter >= 0) {
			const range = new vscode.Range(
				lineIndex,
				startCharacter,
				lineIndex,
				0 + (endCharacter + 1)
			);
			const diagnostic = new vscode.Diagnostic(
				range,
				codeError,
				severity
			);
			return diagnostic;
		}
		return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
	}
	return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
}
export function createDiagnosticForAtoms(
	doc: vscode.TextDocument,
	lineOfText: vscode.TextLine,
	lineIndex: number,
	atom: string,
	codeError: string,
	severity: vscode.DiagnosticSeverity) {
	const regex_for_token = new RegExp(`${atom}\\b`, "g");

	const startCharacter = lineOfText.text.search(regex_for_token);
	const endCharacter = startCharacter + (atom.length - 1);
	const range = new vscode.Range(
		lineIndex,
		startCharacter,
		lineIndex,
		0 + (endCharacter + 1)
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