const util = require('./util.js');
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const dictionarizer = require("../media/js/dictionarizer.js");
const dynamicdictionary = require("../media/js/dynamic_dictionary.js");

//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
function getASPIntellisenseProvider(context) {
    
    return {
        autocompleteDict: readDictionariesandMergeIt(context),
        
        //Provides autocomplete
		provideCompletionItems: function(document, position, token, context) {
            //Leggiamo il file a prescindere, se ha contenuto, con una regex prendiamo i predicati e facciamo la stessa cosa.
            let completionItems = [];
       
            let chiave = path.basename(vscode.window.activeTextEditor.document.fileName);
         
            //Checks if the text being inserted is after a trigger character (# or &)
            let triggerCharacter;
            //Con questa funzione possiamo prendere la linea scritta.
            let line = document.lineAt(position);
            let character = position.character - 1;
            let validCharacters = /[a-zA-Z0-9_#&:-]/
         
            while(character >= 0 && validCharacters.test(line.text[character])) {
                if(line.text[character] === '#' || line.text[character] === '&' ) {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }

            //If the trigger character is found it provides every completion item associated with that character
            if(triggerCharacter) {
                function registerAutcompleteEntry(elem) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Method));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }
            
                //#,&
                for(const elem of Object.values(this.autocompleteDict[triggerCharacter])) {
                    registerAutcompleteEntry(elem);
                }

            }
            else {
                function registerDynamicEntry(elem) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }

                this.autocompleteDict["language-constants"].forEach(elem => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                for(const elem of Object.values(dynamicdictionary.get_dictionary()[chiave])) {
                    registerDynamicEntry(elem);
                }
          
            }

            return completionItems;
		},

        //Provides details on hover
        provideHover: function(document, position, token) {

            //Checks if the text the cursor is on is after a trigger character (# or &)
            let triggerCharacter;
            let line = document.lineAt(position);
            let character = position.character - 1;
            let validCharacters = /[a-zA-Z0-9_#&]/

            while(character >= 0 && validCharacters.test(line.text[character])) {
                if(line.text[character] === '#' || line.text[character] === '&') {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }

            //If the trigger character is found it finds the entire word after the character and provides hover details for that word if there exists a completion item for that word
            if(triggerCharacter) {
                let start = character;
                let end = position.character;
    
                while(end < line.text.length && validCharacters.test(line.text[end])) {
                    ++end;
                }
                let hoverWord = line.text.substring(start, end);

                if(hoverWord in this.autocompleteDict[triggerCharacter]) {
                    let hoverElement = this.autocompleteDict[triggerCharacter][hoverWord];
                    return new vscode.Hover([hoverElement.detail, hoverElement.documentation]);
                }
            }
        }
	}
}
//My function
function readDictionariesandMergeIt(context){
    
    let languages_constants = dictionarizer(context.asAbsolutePath('constants.json'));
    let builtins = dictionarizer(context.asAbsolutePath('builtins.json'));
    let aggregates = dictionarizer(context.asAbsolutePath('aggregates.json'));

    //FA MERGE DEI DIZIONARI, QUINDI SOSTANZIALMENTE, E' COME CHE ABBIAMO QUELLO DA autocomplete.json
    let completeDictionary = Object.assign(aggregates,builtins,languages_constants);
    return completeDictionary;
}

module.exports = {
    getASPIntellisenseProvider
}