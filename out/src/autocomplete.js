"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillDictionaryWithDynamicTerms = exports.fillDictionaryWithDynamicPredicates = exports.getASPIntellisenseHoverProvider = exports.getASPIntellisenseProvider = void 0;
const vscode = require("vscode");
const path = require("path");
const dictionarizer_1 = require("./utils/dictionarizer");
const dynamic_predicate_dictionary_1 = require("./utils/dynamic_predicate_dictionary");
const dynamic_terms_dictionary_1 = require("./utils/dynamic_terms_dictionary");
//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
function getASPIntellisenseProvider(context) {
    const dd = dynamic_predicate_dictionary_1.DynamicPredicateDictionary.getInstance();
    const terms_dd = dynamic_terms_dictionary_1.DynamicTermsDictionary.getInstance();
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
            let parenthesis;
            let comma;
            let parenthesisPosition = position.character - 1;
            let commaPosition = position.character - 1;
            //Con questa funzione possiamo prendere la linea scritta.
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[(,a-zA-Z0-9_#&:-]/;
            while (character >= 0 && validCharacters.test(line.text[character])) {
                if (line.text[character] === ",") {
                    console.log("Founded ,");
                    comma = line.text[character];
                    commaPosition = character;
                    break;
                }
                if (line.text[character] === "(") {
                    console.log("Founded (");
                    parenthesis = line.text[character];
                    parenthesisPosition = character;
                    break;
                }
                if (line.text[character] === '#' || line.text[character] === '&') {
                    console.log("Founded triggerChar");
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
            else if (comma) {
                let match_open_bracket = false;
                let predicato = "";
                commaPosition = commaPosition - 1;
                while (commaPosition >= 0 && line.text[commaPosition] !== "," && line.text[commaPosition] !== " ") { //Condizione da rafforzare
                    if (line.text[commaPosition] === "(")
                        match_open_bracket = true;
                    if (line.text[commaPosition] === ")" || line.text[commaPosition] === "<" || line.text[commaPosition] === ">" || line.text[commaPosition] === "}") {
                        console.log("Ho beccato un char che mi ha fatto fermare");
                        break;
                    }
                    predicato += line.text[commaPosition];
                    commaPosition -= 1;
                }
                if (!match_open_bracket)
                    return;
                const dictionary = terms_dd.get_field(chiave);
                const dic2 = dictionary?.get(predicato.split("").reverse().join("").replace(/\(\w+/, ""));
                if (dic2) {
                    console.log(dic2);
                    for (const suggest of dic2) {
                        console.log(suggest);
                        //if(!line.text.includes(suggest))
                        completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                    }
                }
            }
            else if (parenthesis) {
                console.log("parenthesisPosition", parenthesisPosition);
                let predicato = "";
                parenthesisPosition = parenthesisPosition - 1;
                while (parenthesisPosition >= 0 && line.text[parenthesisPosition] !== "," && line.text[parenthesisPosition] !== " ") { //Condizione da rafforzare
                    predicato += line.text[parenthesisPosition];
                    parenthesisPosition -= 1;
                }
                const dictionary = terms_dd.get_field(chiave);
                const dic2 = dictionary?.get(predicato.split("").reverse().join(""));
                if (dic2) {
                    console.log(dic2);
                    for (const suggest of dic2) {
                        console.log(suggest);
                        completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                    }
                }
            }
            else {
                // eslint-disable-next-line no-inner-declarations
                function registerDynamicPredicateEntry(elem) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }
                autocompleteDict["language-constants"].forEach((elem) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                for (const elem of Object.values(dd.get_field(chiave))) {
                    registerDynamicPredicateEntry(elem);
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
    const dd = dynamic_predicate_dictionary_1.DynamicPredicateDictionary.getInstance();
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
                            snippet = match2[1] + "(${1})";
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
function sanitizeTerms(terms) {
    if (terms.endsWith(")."))
        return terms.replace(/\w+\(/, "").replace(").", "");
    if (terms.endsWith(")|"))
        return terms.replace(/\w+\(/, "").replace(")|", "");
    if (terms.endsWith("):-"))
        return terms.replace(/\w+\(/, "").replace("):-", "");
}
function fillDictionaryWithDynamicTerms() {
    const terms_regex = /\w+\s*\(\s*\w+(?:\s*,\s*\w+\s*)*\s*\)\s*(?::-|\||\.)/g;
    const dd = dynamic_terms_dictionary_1.DynamicTermsDictionary.getInstance();
    //Nome del predicato, termini e nome del file in cui si troviamo
    //Quando li mandiamo in output, nella tendina, vogliamo spararli a muzzo ogni ( che viene ape
    vscode.workspace.onDidChangeTextDocument(document => {
        const text = document.document.getText();
        const splitted_text = text.split("\n");
        const chiave = path.basename(document.document.fileName);
        const map = new Map;
        for (let i = 0; i < splitted_text.length; i++) {
            const matches = splitted_text[i].match(terms_regex);
            if (matches) {
                for (let i = 0; i < matches.length; i++) {
                    const matches_predicate = matches[i].match(/\w+/);
                    if (matches_predicate) {
                        const sanitized = sanitizeTerms(matches[i]);
                        if (sanitized) {
                            map.set(matches_predicate[0], sanitized.split(","));
                        }
                    }
                }
            }
        }
        dd.add_field(chiave, map);
    });
}
exports.fillDictionaryWithDynamicTerms = fillDictionaryWithDynamicTerms;
//# sourceMappingURL=autocomplete.js.map