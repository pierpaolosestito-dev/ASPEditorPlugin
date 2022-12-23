"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToDocumentChanges = exports.refreshDiagnostics = exports.CODE_ERROR = void 0;
/** To demonstrate code actions associated with Diagnostics problems, this file provides a mock diagnostics entries. */
const antlr4ts_1 = require("antlr4ts");
const ANTLRInputStream_1 = require("antlr4ts/ANTLRInputStream");
const vscode = require("vscode");
const ASPCore2Lexer_1 = require("./parser/ASPCore2Lexer");
const ASPCore2Parser_1 = require("./parser/ASPCore2Parser");
/** String to detect in the text document. */
const END_CHARACTER_OF_A_RULE = ".";
exports.CODE_ERROR = "Errore 104";
const aggregatesRegex = new RegExp(/^#(?:count|sum|times|min|max){\s*(?:\w+|_)\s*(,\s*(?:\w+|_))*\s*:\s*\w+\(\s*(?:\w+|_)(\s*(?:,\s*(?:\w+|_)*\s*|\s*\))*\s*)\s*(?:,\s*\w+\(\s*(?:\w+|_)(\s*,\s*(?:\w+|_)*\s*)*\)\s*)*\s*}$/g);
const builtInRegex = new RegExp(/^&\w+\s*\(\s*\w+\s*(\s*,\s*\w+\s*)*(\s*;\s*\w+\s*)\)$/g);
/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param emojiDiagnostics diagnostic collection
 */
function refreshDiagnostics(doc, emojiDiagnostics) {
    const regex = /\.(asp|lp)$/g;
    if (regex.test(doc.fileName)) {
        const diagnostics = [];
        for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            const lineOfText = doc.lineAt(lineIndex);
            const input = new ANTLRInputStream_1.ANTLRInputStream(lineOfText.text);
            const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
            const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
            tokens.fill();
            const aspParser = new ASPCore2Parser_1.ASPCore2Parser(tokens);
            aspParser.removeErrorListeners();
            aspParser.addErrorListener({
                syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                    console.log(regex.test(doc.fileName));
                    diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg));
                    console.log(msg);
                },
            });
            aspParser.program();
            //console.log(tree.toStringTree(aspParser));
            /*const constructs: [string, number][] = [];
              for(let i = 0; i < tokens.getTokens().length; i++){
                  constructs.push([tokens.get(i).text as string, tokens.get(i).type]);
              }
      
              const constructsFiltered: [string, number][] = [];
      
              for(let i = 0; i<constructs.length;i++){
                  //TODO filtrare i token
                  constructsFiltered.push(constructs[i]);
              }
      
              console.log(constructsFiltered.join("  ")); */
            //Questa riga di codice crea un oggetto diagnostica all'esatta posizione scelta
            //diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, "010"));
        }
        emojiDiagnostics.set(doc.uri, diagnostics);
    }
}
exports.refreshDiagnostics = refreshDiagnostics;
//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
function createDiagnostic(doc, lineOfText, lineIndex, codeError) {
    const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);
    const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + lineOfText.text.length);
    const diagnostic = new vscode.Diagnostic(range, codeError, vscode.DiagnosticSeverity.Error);
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
function subscribeToDocumentChanges(context, emojiDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, emojiDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            refreshDiagnostics(editor.document, emojiDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => refreshDiagnostics(e.document, emojiDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument((doc) => emojiDiagnostics.delete(doc.uri)));
}
exports.subscribeToDocumentChanges = subscribeToDocumentChanges;
//# sourceMappingURL=diagnostics.js.map