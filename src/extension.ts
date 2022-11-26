import * as vscode from 'vscode';
import * as path from 'path';
import { DynamicDictionary } from './utils/dynamic_dictionary';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider } from './autocomplete';

 export function activate(context:vscode.ExtensionContext) {
	const dd = DynamicDictionary.getInstance();
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', getASPIntellisenseProvider(context), '#', '&',':','-'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", getASPIntellisenseHoverProvider(context)));

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
					snippet = match2[1]+"(${1},${2})";
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

function deactivate() {}	

module.exports = {
	activate,
	deactivate
};