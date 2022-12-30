import * as vscode from 'vscode';
import * as path from 'path';
import { dictionarizer } from './utils/dictionarizer';
import { DynamicPredicateDictionary } from './utils/dynamic_predicate_dictionary';
import { DynamicTermsDictionary } from './utils/dynamic_terms_dictionary';
import { match } from 'assert';
import { stringify } from 'querystring';
import { ParseInfo } from 'antlr4ts/atn/ParseInfo';

//Returns a provider that manages intellisense for directives, aggregates, default and custom external atoms
export function getASPIntellisenseProvider(context: vscode.ExtensionContext): vscode.CompletionItemProvider<vscode.CompletionItem> {
    const dd = DynamicPredicateDictionary.getInstance();
    const terms_dd = DynamicTermsDictionary.getInstance();
    const autocompleteDict = readDictionariesandMergeIt(context);

    return {        
        //Provides autocomplete
		provideCompletionItems: function(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            //Reads the whole file to retrieve predicates and terms
            const completionItems: vscode.CompletionItem[] = [];
            const activeTextEditor = vscode.window.activeTextEditor;
            let fileName = '';
            if(activeTextEditor){
                fileName = path.basename(activeTextEditor.document.fileName);
            }
            
         
            //Checks if the text being inserted is after a trigger character (',','(','#','&')
            let triggerCharacter;
            
            const line = document.lineAt(position);
            let character = position.character - 1;
            const validCharacters = /[ (,a-zA-Z0-9_#&:-]/;
         
            while(character >= 0 && validCharacters.test(line.text[character])) {
                if([',','(','#','&',' '].includes(line.text[character])){
                    triggerCharacter = line.text[character];
                    break;
                }
                --character;
            }

            //If the trigger character is found it provides every completion item associated with that character
            if(triggerCharacter == '#' || triggerCharacter == '&') {
            
                //#,&
                for(const elem of Object.values<any>(autocompleteDict[triggerCharacter])) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Method));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
                }

            }else if(triggerCharacter == ',' || triggerCharacter == ' '){
                let match_open_bracket = false;
                let predicato = "";
                --character;
                while (character >= 0){
                    if(line.text[character] === "("){
                        match_open_bracket = true;
                    }
                    if([')','<','>','}'].includes(line.text[character]))
                    {
                        break;
                    }
                    predicato+=line.text[character];
                    --character;
                }
                if(match_open_bracket){
                    const dictionary = terms_dd.get_field(fileName);
                    const dic2 = dictionary?.get(predicato.split("").reverse().join("").split('(')[0].trim());
                    if(dic2){
                        for(const suggest of dic2){
                            //if(!line.text.includes(suggest))
                            completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                        }
                    }
                }
                
            }else if(triggerCharacter == '('){
                let predicato = "";
                --character;
                while (character >= 0 && line.text[character] !== "," && line.text[character] !== " "){ //Condizione da rafforzare
                    predicato+=line.text[character];
                    --character;
                }
                
                const dictionary = terms_dd.get_field(fileName);
                const dic2 = dictionary?.get(predicato.split("").reverse().join(""));
                if(dic2){
                    for(const suggest of dic2){
                        completionItems.push(new vscode.CompletionItem(suggest, vscode.CompletionItemKind.Constant));
                    }
                }
            
            }
            else {

                autocompleteDict["language-constants"].forEach((elem: string) => {
                    completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                });
                
                for(const elem of Object.values<any>(dd.get_field(fileName))) {
                    completionItems.push(new vscode.CompletionItem(elem.label, vscode.CompletionItemKind.Field));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
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
    const dd = DynamicPredicateDictionary.getInstance();
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
    terms = terms.replace(" ","").replace(/\w+\(/,"").replace(").","").replace(/\w+\(/,"").replace(")|","").replace(/\w+\(/,"").replace("):-","");
     return terms;
}

function onlyUnique(value:string, index:number, self:string[]) {
    return self.indexOf(value) === index;
  }

export function fillDictionaryWithDynamicTerms(){
    const terms_regex = /\w+\s*\(\s*\w+(?:\s*,\s*\w+\s*)*\s*\)\s*(?::-|\||\.)/g;
    const dd = DynamicTermsDictionary.getInstance();

    vscode.workspace.onDidChangeTextDocument(document => {
        const allContent = document.document.getText();
        const rows = allContent.split("\n");
        const filename = path.basename(document.document.fileName);
        const predicatesMap = new Map<string,string[]>;
        for(let i=0;i<rows.length;i++){
            if(rows[i].startsWith('%')){
                continue;
            }
            const matches = rows[i].match(terms_regex);
            if(matches){
                for(let i=0;i<matches.length;i++){
                    const matches_predicate = matches[i].match(/\w+/);
                    if(matches_predicate){
                    
                    const sanitized = sanitizeTerms(matches[i]);
                    if(sanitized){
                        if(predicatesMap.has(matches_predicate[0])){
                            let terms = sanitized.split(",");
                            const previousTerms = predicatesMap.get(matches_predicate[0]);
                            if(previousTerms !== undefined){
                                terms = terms.concat(previousTerms);
                            }
                            predicatesMap.set(matches_predicate[0], terms.filter(onlyUnique));
                        }
                        else{
                            predicatesMap.set(matches_predicate[0],sanitized.split(",").filter(onlyUnique));
                        }
                    }
                    
                    }
                    
                }
            } 
        }
        dd.add_field(filename,predicatesMap);   
    });
    

}
