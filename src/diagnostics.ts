/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
import { CommonTokenStream } from 'antlr4ts';
import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream';
import * as vscode from 'vscode';
import { ASPCore2Lexer } from './parser/ASPCore2Lexer';
import { ASPCore2Parser } from './parser/ASPCore2Parser';


/** String to detect in the text document. */
const END_CHARACTER_OF_A_RULE = '.';
export const CODE_ERROR = 'Errore 104';

const aggregatesRegex = new RegExp(/^#(?:count|sum|times|min|max){\s*(?:\w+|_)\s*(,\s*(?:\w+|_))*\s*:\s*\w+\(\s*(?:\w+|_)(\s*(?:,\s*(?:\w+|_)*\s*|\s*\))*\s*)\s*(?:,\s*\w+\(\s*(?:\w+|_)(\s*,\s*(?:\w+|_)*\s*)*\)\s*)*\s*}$/g);
const builtInRegex = new RegExp(/^&\w+\s*\(\s*\w+\s*(\s*,\s*\w+\s*)*(\s*;\s*\w+\s*)\)$/g);

/**
 * Analyzes the text document for problems. 
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param emojiDiagnostics diagnostic collection
 */
export function refreshDiagnostics(doc: vscode.TextDocument, emojiDiagnostics: vscode.DiagnosticCollection): void {
	const diagnostics: vscode.Diagnostic[] = [];
	
	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const lineOfText = doc.lineAt(lineIndex);
		if (lineOfText.text.endsWith(END_CHARACTER_OF_A_RULE)|| (lineIndex != (doc.lineCount)-1 && doc.lineAt(lineIndex+1).text.length == 0 && !lineOfText.text.endsWith(".") ) ) { 
		
			const input = new ANTLRInputStream(lineOfText.text);
			const aspLexer = new ASPCore2Lexer(input);
			const tokens = new CommonTokenStream(aspLexer);
			tokens.fill();
			const aspParser = new ASPCore2Parser(tokens);

			const tree = aspParser.program();
			console.log(tree.toStringTree(aspParser));

			const constructs: [string, number][] = [];
			for(let i = 0; i < tokens.getTokens().length; i++){
				constructs.push([tokens.get(i).text as string, tokens.get(i).type]);
			}

			const constructsFiltered: [string, number][] = [];

			for(let i = 0; i<constructs.length;i++){
				constructsFiltered.push(constructs[i]);
			}

			console.log(constructsFiltered.join("  "));

		}
	}

	emojiDiagnostics.set(doc.uri, diagnostics);
}

//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
function createDiagnostic(doc: vscode.TextDocument, lineOfText: vscode.TextLine, lineIndex: number, codeError: string): vscode.Diagnostic {
	
	const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);

	const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + lineOfText.text.length);
	const diagnostic = new vscode.Diagnostic(range, "Format incorrect.",
	vscode.DiagnosticSeverity.Error);
	//In questa sezione di codice si inferisce qual'è la causa dell'errore
	//Modifica il messaggio d'errore in base alla causa dell'errore
	if(codeError == "001"){ 
		diagnostic.message = "The format of the aggregate is incorrect.";
		diagnostic.code = "001";
	}
	else if(codeError == "010"){
		diagnostic.message = "The format of the built-in is incorrect";
		diagnostic.code = "010";
	}
	
	return diagnostic;
}

export function subscribeToDocumentChanges(context: vscode.ExtensionContext, emojiDiagnostics: vscode.DiagnosticCollection): void {
	if (vscode.window.activeTextEditor) {
		refreshDiagnostics(vscode.window.activeTextEditor.document, emojiDiagnostics);
	}
	context.subscriptions.push(
		vscode.window.onDidChangeActiveTextEditor(editor => {
			if (editor) {
				refreshDiagnostics(editor.document, emojiDiagnostics);
			}
		})
	);

	context.subscriptions.push(
		vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, emojiDiagnostics))
	);

	context.subscriptions.push(
		vscode.workspace.onDidCloseTextDocument(doc => emojiDiagnostics.delete(doc.uri))
	);

}
