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
	
	/*linkings.purgeLinkings(context);

	context.subscriptions.push(vscode.commands.registerCommand('asp-language-support-dlv2.computeSingleAnswerSet', function () {
		grouding_solving.computeSingleAnswerSet(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand('asp-language-support-dlv2.computeAllAnswerSets', function () {
		grouding_solving.computeAllAnswerSets(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand('asp-language-support-dlv2.computeGroundProgram', function () {
		grouding_solving.computeGroundProgram(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.linkFiles", function () {
		if(!util.checkWorkspace(true)) return;
		linkings.linkFiles(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.unlinkFiles", function () {
		if(!util.checkWorkspace(true)) return;
		linkings.unlinkFiles(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.disbandPool", function () {
		if(!util.checkWorkspace(true)) return;
		linkings.disbandPool(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.viewAllPools", function () {
		if(!util.checkWorkspace(true)) return;
		linkings.viewAllPools(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.viewCurrentFilePool", function () {
		if(!util.checkWorkspace(true)) return;
		linkings.viewCurrentFilePool(context);
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.manageConfigFile", function () {
		vscode.workspace.openTextDocument(context.asAbsolutePath("config.json")).then((document) => {
			vscode.window.showTextDocument(document);
		}, (error) => {
			vscode.window.showErrorMessage("An error occurred while opening file config.json: " + error);
		});
	}));
	context.subscriptions.push(vscode.commands.registerCommand("asp-language-support-dlv2.manageCustomExternalAtoms", function () {
		
		if(!util.checkWorkspace(true)) return;
		//If a file for custom external atoms does not already exist in the current workspace, it is created
		let externalAtomsFile = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, "external-atoms.py");
		if(!fs.existsSync(externalAtomsFile)) {
			let template;
			try {
				template = fs.readFileSync(context.asAbsolutePath('external-atoms-template.py'), 'utf-8');
			} catch (error) {
				vscode.window.showErrorMessage("An error occurred while reading the file external-atoms-template.py: " + error);
				return;
			}

			try {
				fs.writeFileSync(externalAtomsFile, template, 'utf-8');
			} catch (error) {
				vscode.window.showErrorMessage("An error occurred while creating the file external-atoms.py: " + error);
				return;
			}
		}
	
		vscode.window.showTextDocument(vscode.Uri.file(externalAtomsFile));
	}));

	context.subscriptions.push(vscode.window.registerWebviewViewProvider("asp-language-support-dlv2.interface", advancedOptions.getWebviewViewProvider(context)));
*/
	let aspIntellisenseProvider = autocomplete.getASPIntellisenseProvider(context);
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', aspIntellisenseProvider, '#', '&',':','-'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", aspIntellisenseProvider));

	//TODO REGEX DA SISTEMARE
	let regexp = /(\w+\(\w+(?:\,\w+)*\))(?:\:\-|\|)/g;
	let regexp2 = /(\w+)\(/g;

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

	/*if(util.checkWorkspace()) {
		let externalAtomsFileWatcher = vscode.workspace.createFileSystemWatcher(new vscode.RelativePattern(vscode.workspace.workspaceFolders[0].uri.fsPath, "external-atoms-template.py"));
		externalAtomsFileWatcher.onDidChange(() => {
			aspIntellisenseProvider.refreshCustomExternalAtoms(context);
		});
		externalAtomsFileWatcher.onDidCreate(() => {
			aspIntellisenseProvider.refreshCustomExternalAtoms(context);
		});
		externalAtomsFileWatcher.onDidDelete(() => {
			aspIntellisenseProvider.refreshCustomExternalAtoms(context);
		})
		context.subscriptions.push(externalAtomsFileWatcher);	
	}*/
}

function deactivate() {}	

module.exports = {
	activate,
	deactivate
}