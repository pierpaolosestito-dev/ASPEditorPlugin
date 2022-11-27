import * as vscode from 'vscode';
import * as path from 'path';
import { dictionarizer } from './utils/dictionarizer';
import { DynamicDictionary } from './utils/dynamic_dictionary';

//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
export function getASPIntellisenseProvider(context: vscode.ExtensionContext): vscode.CompletionItemProvider<vscode.CompletionItem> {
    const dd = DynamicDictionary.getInstance();
    const autocompleteDict = readDictionariesandMergeIt(context);

    return {
        //autocompleteDict: readDictionariesandMergeIt(context),
        
        //Provides autocomplete
		provideCompletionItems: function(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            //Leggiamo il file a prescindere, se ha contenuto, con una regex prendiamo i predicati e facciamo la stessa cosa.
            const completionItems: vscode.CompletionItem[] = [];
            const activeTextEditor = vscode.window.activeTextEditor;
            let chiave = '';
            if(activeTextEditor){
                chiave = path.basename(activeTextEditor.document.fileName);
            }
            
         
            //Checks if the text being inserted is after a trigger character (# or &)
            let triggerCharacter;
            //Con questa funzione possiamo prendere la linea scritta.
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[a-zA-Z0-9_#&:-]/;
         
            while(character >= 0 && validCharacters.test(line.text[character])) {
                if(line.text[character] === '#' || line.text[character] === '&' ) {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }

            //If the trigger character is found it provides every completion item associated with that character
            if(triggerCharacter) {
                // eslint-disable-next-line no-inner-declarations
                function registerAutcompleteEntry(elem:any) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Method));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }
            
                //#,&
                for(const elem of Object.values(autocompleteDict[triggerCharacter])) {
                    registerAutcompleteEntry(elem);
                }

            }
            else {
                // eslint-disable-next-line no-inner-declarations
                function registerDynamicEntry(elem: any) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }

                autocompleteDict["language-constants"].forEach((elem: string) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                for(const elem of Object.values(dd.get_dictionary().get(chiave))) {
                    registerDynamicEntry(elem);
                }
          
            }

            return completionItems;
		}
	};
}

export function getASPIntellisenseHoverProvider(context: vscode.ExtensionContext): vscode.HoverProvider {
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //Provides details on hover
        provideHover: function(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

            //Checks if the text the cursor is on is after a trigger character (# or &)
            let triggerCharacter;
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[a-zA-Z0-9_#&]/;

            while(character >= 0 && validCharacters.test(line.text[character])) {
                if(line.text[character] === '#' || line.text[character] === '&') {
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }

            //If the trigger character is found it finds the entire word after the character and provides hover details for that word if there exists a completion item for that word
            if(triggerCharacter) {
                const start = character;
                let end = position.character;

                while(end < line.text.length && validCharacters.test(line.text[end])) {
                    ++end;
                }
                const hoverWord = line.text.substring(start, end);

                if(hoverWord in autocompleteDict[triggerCharacter]) {
                    const hoverElement = autocompleteDict[triggerCharacter][hoverWord];
                    return new vscode.Hover([hoverElement.detail, hoverElement.documentation]);
                }
            }
        }
    };
}


function readDictionariesandMergeIt(context: vscode.ExtensionContext): any{

    const languages_constants = dictionarizer(context.asAbsolutePath('constants.json'));
    const builtins = dictionarizer(context.asAbsolutePath('builtins.json'));
    const aggregates = dictionarizer(context.asAbsolutePath('aggregates.json'));

    const completeDictionary = Object.assign(aggregates,builtins,languages_constants);
    return completeDictionary;
}