import * as vscode from 'vscode';
import * as path from 'path';
import { dictionarizer } from './utils/dictionarizer';
import { DynamicDictionary } from './utils/dynamic_dictionary';
import { match } from 'assert';

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
            let parenthesis;
            let parenthesisPosition = position.character-1;
            //Con questa funzione possiamo prendere la linea scritta.
            
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[(a-zA-Z0-9_#&:-]/;
         
            while(character >= 0 && validCharacters.test(line.text[character])) {
                if(line.text[character] === "("){
                    console.log("Founded (");
                    parenthesis = line.text[character];
                    parenthesisPosition = character;
                    break;
                }
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
                if(parenthesis){
                    console.log("parenthesisPosition",parenthesisPosition);
                    console.log(line.text[parenthesisPosition-1]);
                    console.log("Ciao");
                }
                // eslint-disable-next-line no-inner-declarations
                function registerDynamicPredicateEntry(elem: any) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }

                autocompleteDict["language-constants"].forEach((elem: string) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                
                for(const elem of Object.values(dd.get_field(chiave))) {
                    registerDynamicPredicateEntry(elem);
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

export function fillDictionaryWithDynamicPredicates(){
    const dd = DynamicDictionary.getInstance();
	// eslint-disable-next-line no-useless-escape
	const regexp = /(\w+\s*\(\s*\w+(?:\s*\,\s*\w+\s*)*\s*\))\s*(?:\:\-|\||\.)/g;
	const regexp2 = /(\w+)\s*\(/g;

	vscode.workspace.onDidChangeTextDocument(document => {
		const chiave = path.basename(document.document.fileName);
		if(chiave.endsWith(".asp")||chiave.endsWith('.dlv')||chiave.endsWith('.lp')){
			
		const text = document.document.getText();

		const splitted_text = text.split("\n");
		const array_valori = [];
		for(let i=0;i<splitted_text.length;i++){
			
			const matches = splitted_text[i].matchAll(regexp);
			for (const match of matches) {
				
				let virgole = -1;
				if(match[1].includes(",")){
					const m1 = match[1];
					if(m1){
						const m2 = m1.match(/,/g);
						if(m2){
							virgole = m2.length;
						}
					}
				}
				if(virgole < 0){
					const matches2 = match[1].matchAll(regexp2);
					let label = "";
					let snippet = "";
					for(const match2 of matches2){
					label = match2[1]+"(_)";
					snippet = match2[1]+"(${1})";
					}
					const obj = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
					array_valori.push(obj);
					continue;
				}
				let parenthesis = "(_";
				let counter=1;
				let snippetTag = "(${"+counter+"}";
				for(let i=0;i<virgole;i++){
					counter+=1;
					parenthesis = parenthesis + ",_";
					snippetTag = snippetTag + ",${"+counter+"}";
				}
				snippetTag += ")";
				parenthesis += ")";
				const matches2 = match[1].matchAll(regexp2);
				let label = "";
				let snippet = "";
				for(const match2 of matches2){
					label = match2[1]+parenthesis;
					snippet = match2[1]+snippetTag;
				}
				const obj = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
				array_valori.push(obj);
			}
			//Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
			dd.add_field(chiave,array_valori);
		}                

	}
	});
}


function sanitizeTerms(terms:string){
    if(terms.endsWith(")."))
     return terms.replace(/\w+\(/,"").replace(").","");

    if(terms.endsWith(")|"))
     return terms.replace(/\w+\(/,"").replace(")|","");

    if(terms.endsWith("):-"))
     return terms.replace(/\w+\(/,"").replace("):-","");
}

export function fillDictionaryWithDynamicTerms(){
    const terms_regex = /\w+\s*\(\s*\w+(?:\s*,\s*\w+\s*)*\s*\)\s*(?::-|\||\.)/g;
    
    vscode.workspace.onDidChangeTextDocument(document => {
        const text = document.document.getText();
        const splitted_text = text.split("\n");
        const sanitized_terms = [];
        for(let i=0;i<splitted_text.length;i++){
            const matches = splitted_text[i].match(terms_regex);

            if(matches){
                for(let i=0;i<matches.length;i++){
                    const matches_predicate = matches[i].match(/\w+/);
                    if(matches_predicate){
                     const obj = {'membership_predicate':matches_predicate[0],"terms":sanitizeTerms(matches[i])?.split(",")};
                     console.log("Base object",obj);
                     /*La struttura dati potrebbe essere formata così:
                        IDEA 1:
                            struttura_dati[nome_file] = obj, dove obj ha la forma di sopra.
                        IDEA 2:
                            struttura_dati[nome_predicato] = {"nomefile":nomefile,"terms":termini}
                     */
                    }
                    sanitized_terms.push(sanitizeTerms(matches[i]));
                }
            } 
        }

        
    });
    

}