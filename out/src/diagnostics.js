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
/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param errorDiagnostics diagnostic collection
 */
let opened = false;
function refreshDiagnostics(doc, errorDiagnostics) {
    const regex = /\.(asp|lp|dlv)$/g;
    let atoms = [];
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
                continue;
            }
            if (!opened) {
                aspParser.addErrorListener({
                    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
                        diagnostics.push(createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error));
                    },
                });
            }
            aspParser.program();
            const constructs = [];
            for (let i = 0; i < tokens.getTokens().length; i++) {
                const text = tokens.get(i).text;
                const type = tokens.get(i).type;
                const index = tokens.get(i).line;
                constructs.push([text, type, index]);
            }
            // Divisione del costrutto tra testa e coda, simboli e negazioni per controllare la safeness
            const heads = [];
            const tails = [];
            const tails_negative = [];
            const tails_in_symbols = [];
            let head = true;
            let negation = false;
            for (let i = 0; i < constructs.length; i++) {
                const s = constructs[i][0];
                if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) { // se trovo un simbolo di constraint capisco che sono passata alla coda
                    head = !head;
                }
                else if ((negation && constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.PARAM_CLOSE)) {
                    negation = false;
                    continue;
                }
                else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.NAF || negation) { // se sono atomi negativi non li inserisco né in coda né in testa
                    if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) {
                        negation = false;
                    }
                    else {
                        negation = true;
                    }
                }
                else if (constructs[i][1] >= 29 && constructs[i][1] <= 34) { // Se sono presenti simboli inserisco il valore prima del simbolo
                    if (constructs[i - 1][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) {
                        tails_in_symbols.push(constructs[i - 1][0]);
                        continue;
                    }
                    if (constructs[i + 1][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) { // ... e quello dopo 
                        tails_in_symbols.push(constructs[i - 1][0]);
                        continue;
                    }
                }
                else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) {
                    if (head)
                        heads.push(constructs[i][0]);
                    else if (negation && !head && constructs[i][1] == ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) { // mi salvo separatamente le variabili negative
                        tails_negative.push(constructs[i][0]);
                    }
                    else if (!negation && !(constructs[i - 1][1] > 29 && constructs[i - 1][1] < 34) &&
                        !(constructs[i + 1][1] > 29 && constructs[i + 1][1] < 34)) {
                        tails.push(constructs[i][0]);
                    }
                    else if (negation) {
                        tails_negative.push(constructs[i][0]);
                    }
                }
                else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.SYMBOLIC_CONSTANT) { // se è una atomo lo salvo
                    const result = atoms.find(atom => atom === constructs[i][0]);
                    if (!result) {
                        atoms.push(constructs[i][0]);
                    }
                }
            }
            const msg = `The rule at line ${lineIndex + 1} is not safe`;
            if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs) && !check_comment_or_test(doc, lineIndex).check) {
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
        const elem = countElem(doc, atom);
        if (elem?.count === 1) {
            if (elem.line !== -1) {
                const msg = `${elem.token} is used only once`;
                diagnostics.push(createDiagnostic(doc, doc.lineAt(elem.line), elem.line, msg, vscode.DiagnosticSeverity.Warning));
            }
        }
        else {
            diagnostics = diagnostics.filter(obj => {
                return !obj.message.includes(`${elem?.token} is used only once`);
            });
        }
    });
    return diagnostics;
}
function check_comment_or_test(doc, line) {
    let check = false;
    let index_start = -1;
    let index_end = -1;
    const startComment = '%/';
    const endComment = '/%';
    const startTest = '%**';
    const endTest = '**%';
    const single_comment = '%';
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);
        if (lineOfText.text.includes(startComment) && !check) {
            index_start = lineOfText.text.indexOf(startComment);
            check = true;
        }
        if (lineOfText.text.includes(endComment)) {
            index_end = lineOfText.text.indexOf(endComment);
            check = false;
        }
        if (lineOfText.text.includes(startTest) && !check) {
            index_start = lineOfText.text.indexOf(startTest);
            check = true;
        }
        if (lineOfText.text.includes(endTest)) {
            index_end = lineOfText.text.indexOf(endTest);
            check = false;
        }
        if (lineOfText.text.includes(single_comment)
            && !check
            && !lineOfText.text.includes(startComment)
            && !lineOfText.text.includes(endComment)
            && !lineOfText.text.includes(startTest)
            && !lineOfText.text.includes(endTest)) {
            index_start = lineOfText.text.indexOf(single_comment);
        }
        if (line == lineIndex)
            return {
                'check': check,
                'index_start': index_start,
                'index_end': index_end,
                'line': line
            };
    }
    return {
        'check': check,
        'line': line,
        'index_start': index_start,
        'index_end': index_end
    };
}
// Restituisce il token, la linea e la frequenza
function countElem(doc, token) {
    let count = 0;
    let found_at_line = -1;
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);
        const result = check_comment_or_test(doc, lineIndex);
        const text_line = lineOfText.text;
        if (text_line.includes(token)) {
            const index_of_token = text_line.indexOf(token);
            if ((result?.check === false && text_line.includes(token) && !text_line.includes("not"))) { // Non ci sono commenti e ho trovato il token
                found_at_line = lineIndex;
                count += 1;
            }
            else if (result?.check === true) { // Ci sono commenti
                if (result.index_end == -1) { // caso del single_comment %
                    count += 1;
                    if (index_of_token < result.index_start && lineIndex < result.line) {
                        found_at_line = lineIndex;
                    }
                }
                else if (index_of_token < result.index_start || (index_of_token > result.index_end && (lineIndex >= result.line))) { // nel caso sia prima o dopo un blocco di commenti/test multiline
                    count += 1;
                    if (found_at_line < lineIndex) {
                        found_at_line = lineIndex;
                    }
                }
            }
        }
    }
    return { 'token': token, 'line': found_at_line, 'count': count };
}
function checkIsRule(constructs) {
    if (constructs[0][1] !== ASPCore2Lexer_1.ASPCore2Lexer.SYMBOLIC_CONSTANT) { // non inizia con un atomo CODE 2
        return false;
    }
    for (let i = 0; i < constructs.length; i++) {
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) { // è presente il :-
            return true;
        }
    }
    return false;
}
function checkSafe(heads, tails, tails_negative, tails_in_symbols) {
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
function createDiagnostic(doc, lineOfText, lineIndex, codeError, severity) {
    // const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);
    const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + lineOfText.text.length);
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