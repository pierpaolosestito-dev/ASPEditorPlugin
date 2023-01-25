import * as vscode from 'vscode';
import * as path from 'path';
import { dictionarizer } from './utils/dictionarizer';
import { DynamicPredicateDictionary } from './intellisense/dynamic_predicate_dictionary';
import { DynamicTermsDictionary } from './intellisense/dynamic_terms_dictionary';
import { IntelliDetail } from './intellisense/intelli_detail';
import { PATH_TO_JSON_DICTIONARY, DYNAMIC_PREDICATE_REGEXS, DYNAMIC_TERMS_REGEXS } from "./utils/consts";




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
            let characterIndex = position.character - 1;
            const searchedCharacters = /[ (,a-zA-Z0-9_#&:-]/;
         
            while(characterIndex >= 0 && searchedCharacters.test(line.text[characterIndex])) {
                if([',','(','#','&',' '].includes(line.text[characterIndex])){
                    triggerCharacter = line.text[characterIndex];
                    break;
                }
                --characterIndex;
            }

            //If the trigger character is found it provides every completion item associated with that character
            if(triggerCharacter == '#' || triggerCharacter == '&') {
            
                //#,&
                for(const elem of Object.values<any>(autocompleteDict[triggerCharacter])) {
                    addEntryInAutocompleteItems(completionItems,elem,vscode.CompletionItemKind.Method);
                }

            }else if(triggerCharacter == ',' || triggerCharacter == ' '){
                let match_open_bracket = false;
                let predicato = "";
                --characterIndex;
                while (characterIndex >= 0){
                    if(line.text[characterIndex] === "("){
                        match_open_bracket = true;
                    }
                    if([')','<','>','}',':','-'].includes(line.text[characterIndex]) || ([')','<','>','}',':','-',',',' '].includes(line.text[characterIndex]) && match_open_bracket))
                    {
                        break;
                    }
                    predicato+=line.text[characterIndex];
                    --characterIndex;
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
                else{
                    autocompleteDict["language-constants"].forEach((elem: string) => {
                        completionItems.push(new vscode.CompletionItem(elem, vscode.CompletionItemKind.Constant));
                    });
                    
                    for(const elem of dd.get_field(fileName)) {
                        addEntryInAutocompleteItems(completionItems,elem,vscode.CompletionItemKind.Field);
                    }
                }
                
            }else if(triggerCharacter == '('){
                let predicato = "";
                --characterIndex;
                while (characterIndex >= 0 && line.text[characterIndex] !== "," && line.text[characterIndex] !== " "){ //Condizione da rafforzare
                    predicato+=line.text[characterIndex];
                    --characterIndex;
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
                
                for(const elem of dd.get_field(fileName)) {
                    addEntryInAutocompleteItems(completionItems,elem,vscode.CompletionItemKind.Field);
                }
          
            }

            return completionItems;
		}
	};
}

export function addEntryInAutocompleteItems(completionItems : vscode.CompletionItem[], elem: any, completionItemKind : vscode.CompletionItemKind ){
                    completionItems.push(new vscode.CompletionItem(elem.label, completionItemKind));
                    completionItems[completionItems.length - 1].insertText = new vscode.SnippetString(elem.snippet);
                    completionItems[completionItems.length - 1].detail = elem.detail;
                    completionItems[completionItems.length - 1].documentation = new vscode.MarkdownString(elem.documentation);
}

export function getASPIntellisenseHoverProvider(context: vscode.ExtensionContext): vscode.HoverProvider {
    const autocompleteDict = readDictionariesandMergeIt(context);
    return {
        //Provides details on hover
        provideHover: function(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): vscode.ProviderResult<vscode.Hover> {

            //Checks if the text the cursor is on is after a trigger character (# or &)
            let triggerCharacter;
            const line = document.lineAt(position);
            let characterIndex = position.character - 1;
            const searchedCharacters = /[a-zA-Z0-9_#&]/;

            while(characterIndex >= 0 && searchedCharacters.test(line.text[characterIndex])) {
                if(line.text[characterIndex] === '#' || line.text[characterIndex] === '&') {
                    triggerCharacter = line.text[characterIndex];
                    break;
                }
                --characterIndex;
            }

            //If the trigger character is found it finds the entire word after the character and provides hover details for that word if there exists a completion item for that word
            if(triggerCharacter) {
                const start = characterIndex;
                let end = position.character;

                while(end < line.text.length && searchedCharacters.test(line.text[end])) {
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

export function readDictionariesandMergeIt(context: vscode.ExtensionContext): any{
    const languages_constants = dictionarizer(context.asAbsolutePath(PATH_TO_JSON_DICTIONARY.CONSTANTS));
    const builtins = dictionarizer(context.asAbsolutePath(PATH_TO_JSON_DICTIONARY.BUILTINS));
    const aggregates = dictionarizer(context.asAbsolutePath(PATH_TO_JSON_DICTIONARY.AGGREGATES));

    const completeDictionary = Object.assign(aggregates,builtins,languages_constants);
    return completeDictionary;
}


export function isASPorDLVorLP(filename:string){
    return filename.endsWith(".asp") || filename.endsWith(".dlv") || filename.endsWith(".lp");
}
export function buildPredicates(commaOccurrences:number,match:string,arrayPredicates:IntelliDetail[]){
    if(commaOccurrences <= 0){
        //ciao(X):-
        //expected : {'label':ciao(_),'snippet':ciao(${1}),'detail':"(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"}
        const matches2 = match.matchAll(DYNAMIC_PREDICATE_REGEXS.AUX_REGEX);
					let label = "";
                    let snippet = "";
					for(const match2 of matches2){
					label = match2[1]+"(_)";
					snippet = match2[1]+"(${1})";
					}
					const obj: IntelliDetail = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
					arrayPredicates.push(obj);
                    return;
    }else{
        let parenthesis = "(_";
				let counter=1;
				let snippetTag = "(${"+counter+"}";
				for(let i=0;i<commaOccurrences;i++){
					counter+=1;
					parenthesis = parenthesis + ",_";
					snippetTag = snippetTag + ",${"+counter+"}";
				}
				snippetTag += ")";
				parenthesis += ")";
				const matches2 = match.matchAll(DYNAMIC_PREDICATE_REGEXS.AUX_REGEX);
				let label = "";
				let snippet = "";
				for(const match2 of matches2){
					label = match2[1]+parenthesis;
					snippet = match2[1]+snippetTag;
				}
				const obj: IntelliDetail = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
				arrayPredicates.push(obj);
    }
}
export function fillDictionaryWithDynamicPredicates(){
    const dd = DynamicPredicateDictionary.getInstance();
	// eslint-disable-next-line no-useless-escape
	vscode.workspace.onDidChangeTextDocument(document => {

		const fileNameKey = path.basename(document.document.fileName);

		if(isASPorDLVorLP(fileNameKey)){
			
		const fileContent = document.document.getText();

		const splittedFileContent = fileContent.split("\n");
		const arrayPredicates: IntelliDetail[] = [];
        
		for(let i=0;i<splittedFileContent.length;i++){
			if(splittedFileContent[i].startsWith('%')){
                continue;
            }
			const matches = splittedFileContent[i].matchAll(DYNAMIC_PREDICATE_REGEXS.FULL_REGEX);
			for (const match of matches) {
				
				let commaOccurrences = -1;
				if(match[1].includes(",")){
					const m1 = match[1];
					if(m1){
						const m2 = m1.match(/,/g);
						if(m2){
							commaOccurrences = m2.length;
						}
					}
				}
				if(commaOccurrences < 0){
                    buildPredicates(commaOccurrences,match[1],arrayPredicates);
					continue;
				}
				let parenthesis = "(_";
				let counter=1;
				let snippetTag = "(${"+counter+"}";
				for(let i=0;i<commaOccurrences;i++){
					counter+=1;
					parenthesis = parenthesis + ",_";
					snippetTag = snippetTag + ",${"+counter+"}";
				}
				buildPredicates(commaOccurrences,match[1],arrayPredicates);
			}
			//Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
			dd.add_field(fileNameKey,arrayPredicates); 
		}                

	}
	});
}


export function sanitizeTerms(terms:string){
    terms = terms.replace(" ","")
    .replace(/\w+\(/,"")
    .replace(").","").
    replace(")|","").
    replace("):-","").
    replace("),","").
    replace(")","");
     return terms;
}

export function onlyUnique(value:string, index:number, self:string[]) {
    return self.indexOf(value) === index;
  }

export function fillDictionaryWithDynamicTerms(){
    
    const dd = DynamicTermsDictionary.getInstance();

    vscode.workspace.onDidChangeTextDocument(document => {
        
        
        const fileNameKey = path.basename(document.document.fileName);
        if(isASPorDLVorLP(fileNameKey)){
        
        const fileContent = document.document.getText();
        const splittedFileContent = fileContent.split("\n");
        const predicatesMap = new Map<string,string[]>;
        
        for(let i=0;i<splittedFileContent.length;i++){
            if(splittedFileContent[i].startsWith('%')){
                continue;
            }
            const matches = splittedFileContent[i].match(DYNAMIC_TERMS_REGEXS.FULL_REGEX);
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
        dd.add_field(fileNameKey,predicatesMap);  
    } 
    });
    

}
