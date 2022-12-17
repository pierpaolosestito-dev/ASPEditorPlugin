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
const END_CHARACTER_OF_A_RULE = '.';
exports.CODE_ERROR = 'Errore 104';
const aggregatesRegex = new RegExp(/^#(?:count|sum|times|min|max){\s*(?:\w+|_)\s*(,\s*(?:\w+|_))*\s*:\s*\w+\(\s*(?:\w+|_)(\s*(?:,\s*(?:\w+|_)*\s*|\s*\))*\s*)\s*(?:,\s*\w+\(\s*(?:\w+|_)(\s*,\s*(?:\w+|_)*\s*)*\)\s*)*\s*}$/g);
const builtInRegex = new RegExp(/^&\w+\s*\(\s*\w+\s*(\s*,\s*\w+\s*)*(\s*;\s*\w+\s*)\)$/g);
/**
 * Analyzes the text document for problems.
 * This demo diagnostic problem provider finds all mentions of 'emoji'.
 * @param doc text document to analyze
 * @param emojiDiagnostics diagnostic collection
 */
function refreshDiagnostics(doc, emojiDiagnostics) {
    const diagnostics = [];
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);
        if (lineOfText.text.endsWith(END_CHARACTER_OF_A_RULE) || (lineIndex != (doc.lineCount) - 1 && doc.lineAt(lineIndex + 1).text.length == 0 && !lineOfText.text.endsWith("."))) {
            const input = new ANTLRInputStream_1.ANTLRInputStream(lineOfText.text);
            const lexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
            const tokens = new antlr4ts_1.CommonTokenStream(lexer);
            const parser = new ASPCore2Parser_1.ASPCore2Parser(tokens);
            const tree = parser.program();
            const output = tree.toStringTree(parser);
            console.log("Struttura della regola :\n====================\n" + output + "\n===============\n");
        }
    }
    emojiDiagnostics.set(doc.uri, diagnostics);
}
exports.refreshDiagnostics = refreshDiagnostics;
function parseRule(lineOfText) {
    //console.log("-----parsing rule " + lineOfText + "-----");
    if (lineOfText == "") { //TODO gestire se ci sono spazi ma è comunque vuota
        return [];
    }
    let constructs = [];
    //Divide la testa e la coda che verranno poi parsizzate separatamente siccome usano
    //separatori diversi (ovvero | per una e , per l'altra
    //Splitta in due la regola
    const headAndTail = lineOfText.split(":-");
    //parsing della testa
    const headConstructs = parseHead(headAndTail[0]);
    //parsing della coda
    const tailConstructs = parseTail(headAndTail[1]);
    //console.log("headConstructs = " + headConstructs);
    //console.log("tailConstructs = " + tailConstructs);
    //Se la testa è vuota si considera solo la coda
    //Se la coda è vuota si considera solo la testa
    //Altrimenti si concatenano le due
    if (headConstructs[0] == '') {
        constructs = tailConstructs;
    }
    else if (tailConstructs[0] == '') {
        constructs = headConstructs;
    }
    else {
        constructs = headConstructs.concat(tailConstructs);
    }
    console.log("constructs = ", constructs);
    return constructs;
}
//Funzione di utilità sostituisce all'interno di una string un carattere ad un certo indice
function setCharAt(str, index, chr) {
    if (index > str.length - 1)
        return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
//Fa il parsing della coda
function parseTail(tail) {
    let tailCopy = tail;
    //Gestione caso in cui ci sono spazi dopo il . finale
    const str = tailCopy.split(".");
    if (str[1] != undefined && !str[1].replace(/\s/g, '').length) { //TODO spazi
        tailCopy = tailCopy.substring(0, tailCopy.length - 1); //Rimuove il punto
    }
    else {
        return [];
    }
    //console.log("tail = ", tailCopy);
    //Sostituiamo tutte le virgole che sono all'interno delle parentesi con il carattere speciale £
    for (let i = 0; i < tailCopy.length; i++) {
        //console.log("tailCopy[" + i + "] = ", tailCopy[i]);
        if (tailCopy[i] == "(") {
            //console.log("( trovata");
            for (let j = i; j < tailCopy.length; j++) {
                if (tailCopy[j] == ")") {
                    //console.log(") trovata");
                    break;
                }
                if (tailCopy[j] == ",") {
                    //console.log(", trovata");
                    tailCopy = setCharAt(tailCopy, j, '£');
                    //console.log("tailCopy[j] = ", tailCopy[j]);
                    continue;
                }
            }
        }
        if (tailCopy[i] == "{") {
            //console.log("( trovata");
            for (let j = i; j < tailCopy.length; j++) {
                if (tailCopy[j] == "}") {
                    //console.log(") trovata");
                    break;
                }
                if (tailCopy[j] == ",") {
                    //console.log(", trovata");
                    tailCopy = setCharAt(tailCopy, j, '£');
                    //console.log("tailCopy[j] = ", tailCopy[j]);
                    continue;
                }
            }
        }
    }
    //console.log("tailCopy = ", tailCopy);
    //Facciamo il parsing per , sapendo che non ci sono più , all'interno delle parentesi
    const tailParsed = tailCopy.split(",");
    //Adesso sostituiamo il placeholder £ con le virgole in ogni costrutto
    for (let i = 0; i < tailParsed.length; i++) {
        //console.log(tailParsed[i]);
        tailParsed[i] = tailParsed[i].replaceAll("£", ",");
        //console.log(tailParsed[i]);
    }
    //console.log("tailParsed = ", tailParsed);
    return tailParsed;
}
//Fa il parsing della testa
function parseHead(head) {
    let headCopy = head;
    //console.log("head = ", headCopy);
    //Sostituiamo tutte le | che sono all'interno delle parentesi con il carattere speciale £
    for (let i = 0; i < headCopy.length; i++) {
        //console.log("headCopy[" + i + "] = ", headCopy[i]);
        if (headCopy[i] == "[") {
            //console.log("[ trovata");
            for (let j = i; j < headCopy.length; j++) {
                if (headCopy[j] == "]") {
                    //console.log("] trovata");
                    break;
                }
                if (headCopy[j] == "|") {
                    //console.log("| trovata");
                    headCopy = setCharAt(headCopy, j, '£');
                    //console.log("headCopy[j] = ", headCopy[j]);
                    continue;
                }
            }
        }
    }
    //console.log("headCopy = ", headCopy);
    //Facciamo il parsing per | sapendo che non ci sono più , all'interno delle parentesi
    const headParsed = headCopy.split("|");
    //Adesso sostituiamo il placeholder £ con le virgole in ogni costrutto
    for (let i = 0; i < headParsed.length; i++) {
        //console.log(headParsed[i]);
        headParsed[i] = headParsed[i].replaceAll("£", "|");
        //console.log(headParsed[i]);
    }
    //console.log("headParsed = ", headParsed);
    return headParsed;
}
//Crea una diagnostica, ovvero un oggetto di vscode che indica che errore c'è stato
function createDiagnostic(doc, lineOfText, lineIndex, codeError) {
    const index = lineOfText.text.indexOf(END_CHARACTER_OF_A_RULE);
    const range = new vscode.Range(lineIndex, 0, lineIndex, 0 + lineOfText.text.length);
    const diagnostic = new vscode.Diagnostic(range, "Format incorrect.", vscode.DiagnosticSeverity.Error);
    //In questa sezione di codice si inferisce qual'è la causa dell'errore
    //Modifica il messaggio d'errore in base alla causa dell'errore
    if (codeError == "001") {
        diagnostic.message = "The format of the aggregate is incorrect.";
        diagnostic.code = "001";
    }
    else if (codeError == "010") {
        diagnostic.message = "The format of the built-in is incorrect";
        diagnostic.code = "010";
    }
    return diagnostic;
}
function subscribeToDocumentChanges(context, emojiDiagnostics) {
    if (vscode.window.activeTextEditor) {
        refreshDiagnostics(vscode.window.activeTextEditor.document, emojiDiagnostics);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            refreshDiagnostics(editor.document, emojiDiagnostics);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(e => refreshDiagnostics(e.document, emojiDiagnostics)));
    context.subscriptions.push(vscode.workspace.onDidCloseTextDocument(doc => emojiDiagnostics.delete(doc.uri)));
}
exports.subscribeToDocumentChanges = subscribeToDocumentChanges;
//# sourceMappingURL=diagnostics.js.map