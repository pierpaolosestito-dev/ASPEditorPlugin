//const linkings = require('./linkings.js');
//const grouding_solving = require('./grounding-solving.js');
const autocomplete = require('./autocomplete.js');
//const advancedOptions = require('./advancedOptions.js');
//const util = require('./util.js');
const vscode = require('vscode');
//const fs = require('fs');
const path = require('path');
const dynamicdictionary = require("../media/js/dynamic_dictionary.js");


/**
 * @param {vscode.ExtensionContext} context
 */

 function activate(context) {

	let aspIntellisenseProvider = autocomplete.getASPIntellisenseProvider(context);
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', aspIntellisenseProvider, '#', '&',':','-'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", aspIntellisenseProvider));

	//TODO REGEX DA SISTEMARE
	let regexp = /(\w+\s*\(\s*\w+(?:\s*\,\s*\w+\s*)*\s*\))\s*(?:\:\-|\||\.)/g;
	let regexp2 = /(\w+)\s*\(/g;

	vscode.workspace.onDidChangeTextDocument(document => {
		let chiave = path.basename(document.document.fileName);
		if(chiave.endsWith(".asp")){
			
		let text = document.document.getText();
		console.log(text);
		let splitted_text = text.split("\n");
		let array_valori = [];
		for(let i=0;i<splitted_text.length;i++){
			
			const matches = splitted_text[i].matchAll(regexp);
			for (const match of matches) {
				console.log("SONO ENTRATO ",match[1]);
				let virgole = -1;
				if(match[1].includes(","))
					virgole = match[1].match(/,/g).length;
				console.log("VIRGOLE ", virgole);
				if(virgole < 0){
					console.log("CAZZO ENTRO");
					const matches2 = match[1].matchAll(regexp2);
					let label = "";
					let snippet = "";
					for(const match2 of matches2){
					label = match2[1]+"(_)";
					snippet = match2[1]+"(${1},${2})"
					}
					let obj = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
					console.log("DOVREI AGGIUNGERE: ",obj);
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
				let obj = {"label":label,"snippet":snippet,"detail": "(previous written predicates) "+label,"documentation": "**PREVIOUS PREDICATES**\n\n"+label+"\n\n---"};
				console.log("DOVREI AGGIUNGERE: ",obj);
				array_valori.push(obj);
			}
			//Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
			dynamicdictionary.add_field(chiave,array_valori);
			console.log(dynamicdictionary.get_dictionary()[chiave]);
		}                

	}
	   });

}

function deactivate() {}	

module.exports = {
	activate,
	deactivate
}