"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillDictionaryWithDynamicPredicates = exports.getASPIntellisenseHoverProvider = exports.getASPIntellisenseProvider = void 0;
const vscode = require("vscode");
const path = require("path");
const dictionarizer_1 = require("./utils/dictionarizer");
const dynamic_dictionary_1 = require("./utils/dynamic_dictionary");
//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
function getASPIntellisenseProvider(context) {
    const dd = dynamic_dictionary_1.DynamicDictionary.getInstance();
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //autocompleteDict: readDictionariesandMergeIt(context),
        //Provides autocomplete
        provideCompletionItems: function (document, position, token, context) {
            //Leggiamo il file a prescindere, se ha contenuto, con una regex prendiamo i predicati e facciamo la stessa cosa.
            const completionItems = [];
            const activeTextEditor = vscode.window.activeTextEditor;
            let chiave = '';
            if (activeTextEditor) {
                chiave = path.basename(activeTextEditor.document.fileName);
            }
            //Checks if the text being inserted is after a trigger character (# or &)
            let triggerCharacter;
            //Con questa funzione possiamo prendere la linea scritta.
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[a-zA-Z0-9_#&:-]/;
            while (character >= 0 && validCharacters.test(line.text[character])) {
                if (line.text[character] === '#' || line.text[character] === '&') {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }
            //If the trigger character is found it provides every completion item associated with that character
            if (triggerCharacter) {
                // eslint-disable-next-line no-inner-declarations
                function registerAutcompleteEntry(elem) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Method));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }
                //#,&
                for (const elem of Object.values(autocompleteDict[triggerCharacter])) {
                    registerAutcompleteEntry(elem);
                }
            }
            else {
                // eslint-disable-next-line no-inner-declarations
                function registerDynamicEntry(elem) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }
                autocompleteDict["language-constants"].forEach((elem) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                for (const elem of Object.values(dd.get_field(chiave))) {
                    registerDynamicEntry(elem);
                }
            }
            return completionItems;
        }
    };
}
exports.getASPIntellisenseProvider = getASPIntellisenseProvider;
function getASPIntellisenseHoverProvider(context) {
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //Provides details on hover
        provideHover: function (document, position, token) {
            //Checks if the text the cursor is on is after a trigger character (# or &)
            let triggerCharacter;
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[a-zA-Z0-9_#&]/;
            while (character >= 0 && validCharacters.test(line.text[character])) {
                if (line.text[character] === '#' || line.text[character] === '&') {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }
            //If the trigger character is found it finds the entire word after the character and provides hover details for that word if there exists a completion item for that word
            if (triggerCharacter) {
                const start = character;
                let end = position.character;
                while (end < line.text.length && validCharacters.test(line.text[end])) {
                    ++end;
                }
                const hoverWord = line.text.substring(start, end);
                if (hoverWord in autocompleteDict[triggerCharacter]) {
                    const hoverElement = autocompleteDict[triggerCharacter][hoverWord];
                    return new vscode.Hover([hoverElement.detail, hoverElement.documentation]);
                }
            }
        }
    };
}
exports.getASPIntellisenseHoverProvider = getASPIntellisenseHoverProvider;
function readDictionariesandMergeIt(context) {
    const languages_constants = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath('constants.json'));
    const builtins = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath('builtins.json'));
    const aggregates = (0, dictionarizer_1.dictionarizer)(context.asAbsolutePath('aggregates.json'));
    const completeDictionary = Object.assign(aggregates, builtins, languages_constants);
    return completeDictionary;
}
function fillDictionaryWithDynamicPredicates() {
    const dd = dynamic_dictionary_1.DynamicDictionary.getInstance();
    // eslint-disable-next-line no-useless-escape
    const regexp = /(\w+\s*\(\s*\w+(?:\s*\,\s*\w+\s*)*\s*\))\s*(?:\:\-|\||\.)/g;
    const regexp2 = /(\w+)\s*\(/g;
    vscode.workspace.onDidChangeTextDocument(document => {
        const chiave = path.basename(document.document.fileName);
        if (chiave.endsWith(".asp") || chiave.endsWith('.dlv') || chiave.endsWith('.lp')) {
            const text = document.document.getText();
            const splitted_text = text.split("\n");
            const array_valori = [];
            for (let i = 0; i < splitted_text.length; i++) {
                const matches = splitted_text[i].matchAll(regexp);
                for (const match of matches) {
                    let virgole = -1;
                    if (match[1].includes(",")) {
                        const m1 = match[1];
                        if (m1) {
                            const m2 = m1.match(/,/g);
                            if (m2) {
                                virgole = m2.length;
                            }
                        }
                    }
                    if (virgole < 0) {
                        const matches2 = match[1].matchAll(regexp2);
                        let label = "";
                        let snippet = "";
                        for (const match2 of matches2) {
                            label = match2[1] + "(_)";
                            snippet = match2[1] + "(${1},${2})";
                        }
                        const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicates) " + label, "documentation": "**PREVIOUS PREDICATES**\n\n" + label + "\n\n---" };
                        array_valori.push(obj);
                        continue;
                    }
                    let parenthesis = "(_";
                    let counter = 1;
                    let snippetTag = "(${" + counter + "}";
                    for (let i = 0; i < virgole; i++) {
                        counter += 1;
                        parenthesis = parenthesis + ",_";
                        snippetTag = snippetTag + ",${" + counter + "}";
                    }
                    snippetTag += ")";
                    parenthesis += ")";
                    const matches2 = match[1].matchAll(regexp2);
                    let label = "";
                    let snippet = "";
                    for (const match2 of matches2) {
                        label = match2[1] + parenthesis;
                        snippet = match2[1] + snippetTag;
                    }
                    const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicates) " + label, "documentation": "**PREVIOUS PREDICATES**\n\n" + label + "\n\n---" };
                    array_valori.push(obj);
                }
                //Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
                dd.add_field(chiave, array_valori);
            }
        }
    });
}
exports.fillDictionaryWithDynamicPredicates = fillDictionaryWithDynamicPredicates;
//# sourceMappingURL=autocomplete.js.map