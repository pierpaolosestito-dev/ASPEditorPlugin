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
const parsing_1 = require("./parsing");
/** String to detect in the text document. */
exports.CODE_ERROR = "Errore 104";
/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param errorDiagnostics diagnostic collection
 */
let opened = false;
function refreshDiagnostics(doc, errorDiagnostics) {
    const regex = /\.(asp|lp|dlv)$/g;
    const atoms = [];
    if (regex.test(doc.fileName)) {
        let diagnostics = [];
        for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
            const lineOfText = doc.lineAt(lineIndex);
            const input = new ANTLRInputStream_1.ANTLRInputStream(lineOfText.text);
            const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
            const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
            tokens.fill();
            const aspParser = new ASPCore2Parser_1.ASPCore2Parser(tokens);
            aspParser.removeErrorListeners();
            if (lineOfText.text.includes("%/") || lineOfText.text.includes("%**")) {
                opened = true;
            }
            if (lineOfText.text.includes("/%") || lineOfText.text.includes("**%")) {
                opened = false;
                // continue;
            }
            if (!opened) {
                aspParser.addErrorListener({
                    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                        diagnostics.push(createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error));
                    },
                });
            }
            aspParser.program();
            const constructs = (0, parsing_1.tokenize)(tokens);
            const [heads, tails, tails_negative, tails_in_symbols] = (0, parsing_1.tokenize_head_tail)(constructs, atoms);
            const msg = `The rule at line ${lineIndex + 1} is not safe`;
            if (!(0, parsing_1.checkSafe)(heads, tails, tails_negative, tails_in_symbols) && (0, parsing_1.checkIsRule)(constructs) && !(0, parsing_1.check_comment_or_test)(doc, lineIndex).check) {
                diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning));
            }
            else {
                diagnostics = diagnostics.filter(obj => {
                    return !obj.message.includes(msg);
                });
            }
            diagnostics = addWarningProbablyWrongName(diagnostics, atoms, doc);
        }
        errorDiagnostics.set(doc.uri, diagnostics);
    }
}
exports.refreshDiagnostics = refreshDiagnostics;
function addWarningProbablyWrongName(diagnostics, atoms, doc) {
    atoms.map(atom => {
        const elem = (0, parsing_1.countElem)(doc, atom);
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
        }
        else {
            diagnostics = diagnostics.filter(obj => {
                return !obj.message.includes(`${elem.token} is used only once`);
            });
        }
    });
    return diagnostics;
}
//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
function createDiagnostic(doc, lineOfText, lineIndex, codeError, severity) {
    // const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);
    const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + lineOfText.text.length);
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
function createDiagnosticForFacts(doc, lineOfText, lineIndex, endCharacter, codeError, severity) {
    let range = undefined;
    if (codeError.includes("no viable alternative at input") && !lineOfText.text.includes("/%")) {
        const error = codeError.split("'");
        const startCharacter = lineOfText.text.indexOf(error[1]);
        if (startCharacter >= 0) {
            range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
        }
        else {
            return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
        }
    }
    else {
        return createDiagnostic(doc, lineOfText, lineIndex, codeError, severity);
    }
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
function createDiagnosticForAtoms(doc, lineOfText, lineIndex, atom, codeError, severity) {
    const regex_for_token = new RegExp(`${atom}\\b`, "g");
    const startCharacter = lineOfText.text.search(regex_for_token);
    const endCharacter = startCharacter + (atom.length - 1);
    const range = new vscode.Range(lineIndex, startCharacter, lineIndex, 0 + (endCharacter + 1));
    const diagnostic = new vscode.Diagnostic(range, codeError, severity);
    return diagnostic;
}
function subscribeToDocumentChanges(context, errorDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, errorDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            refreshDiagnostics(editor.document, errorDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((e) => refreshDiagnostics(e.document, errorDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument((doc) => errorDiagnostics.delete(doc.uri)));
}
exports.subscribeToDocumentChanges = subscribeToDocumentChanges;
//# sourceMappingURL=diagnostics.js.map