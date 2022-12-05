import * as vscode from 'vscode';
import * as path from 'path';
import { DynamicDictionary } from './utils/dynamic_dictionary';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider } from './autocomplete';
import { CODE_ERROR, subscribeToDocumentChanges } from './diagnostics';
import { similarity } from './scripts/similarity';

const COMMAND = 'code-actions-sample.command';

 export function activate(context:vscode.ExtensionContext) {
	//Quick-Fix
	context.subscriptions.push(
		
		
		vscode.languages.registerCodeActionsProvider('asp', new Emojizer(), {
			providedCodeActionKinds: Emojizer.providedCodeActionKinds
		}));

	const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
	context.subscriptions.push(emojiDiagnostics);

	subscribeToDocumentChanges(context, emojiDiagnostics);

	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('asp', new Emojinfo(), {
			providedCodeActionKinds: Emojinfo.providedCodeActionKinds
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand(COMMAND, () => vscode.env.openExternal(vscode.Uri.parse('https://www.dlvsystem.it/dlvsite/it/home_it/')))
	);
	
	//IntelliSense
	const dd = DynamicDictionary.getInstance();
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', getASPIntellisenseProvider(context), '#', '&',':','-'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", getASPIntellisenseHoverProvider(context)));

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

//TODO traduce azioni in testo
export class Emojizer implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
		if (this.isAtStartOfSmiley(document, range)) {
		

		const replaceWithSmileyCatFix = this.createFix(document, range, 'Prova1');

		const replaceWithSmileyFix = this.createFix(document, range, 'Prova2');
		// Marking a single fix as `preferred` means that users can apply it with a
		// single keyboard shortcut using the `Auto Fix` command.
		replaceWithSmileyFix.isPreferred = true;

		const replaceWithSmileyHankyFix = this.createFix(document, range, 'Prova3');

		const commandAction = this.createCommand();

		return [
			replaceWithSmileyCatFix,
			replaceWithSmileyFix,
			replaceWithSmileyHankyFix,
			commandAction
		];
	}
	//Correzione aggregati scritti male dall'utente
	if (this.isAtStartOfAggregate(document, range)) {
		//TODO aggiungere la lista completa di aggregati e built-ins
		const aggregatesList = ['#count', '#min', '#max', '#times', '#sum']; //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		
		const aggregateRegex = /(#\w+)\{/gm;
		const matches = line.matchAll(aggregateRegex);
		if(matches){
			console.log("Matcha aggregato");
		for(const match of matches){
			const m1 = match[1];			
			if(m1){
				for(let i=0;i<aggregatesList.length;i++){
					if(similarity(m1,aggregatesList[i])>=0.5 && similarity(m1,aggregatesList[i])<1.00){
						const replaceWithRightAggregate = this.createFix(document, range,aggregatesList[i],(aggregatesList[i].length));
						const commandAction = this.createCommand();
						return [
								replaceWithRightAggregate,
								commandAction
						];
					}
				}
			}
		}
	}
	}
	return;
	}

	private isAtStartOfSmiley(document: vscode.TextDocument, range: vscode.Range) {
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character] === ':' && line.text[start.character + 1] === ')';
	}

	private isAtStartOfAggregate(document:vscode.TextDocument,range:vscode.Range){
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character] === "#";
	}

	private isAtStartOfBuiltins(document:vscode.TextDocument,range:vscode.Range){
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character] === "&";
	}
	/*private isAtEndOfAggregateorBuiltin(document:vscode.TextDocument,range:vscode.Range){
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character] === "}";
	}*/
	private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string,endstring=2): vscode.CodeAction {
		const fix = new vscode.CodeAction(`Convert to ${emoji}`, vscode.CodeActionKind.QuickFix);
		fix.edit = new vscode.WorkspaceEdit();
		fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, endstring)), emoji);
		return fix;
	}

	private createCommand(): vscode.CodeAction {
		const action = new vscode.CodeAction('Learn more about ASP', vscode.CodeActionKind.Empty);
		action.command = { command: COMMAND, title: 'Learn more about ASP', tooltip: 'This will open the ASP documentation.' };
		return action;
	}
}

/**
 * Provides code actions corresponding to diagnostic problems.
 */
export class Emojinfo implements vscode.CodeActionProvider {

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): vscode.CodeAction[] {
		// for each diagnostic entry that has the matching `code`, create a code action command
		return context.diagnostics
			.filter(diagnostic => diagnostic.code === CODE_ERROR)
			.map(diagnostic => this.createCommandCodeAction(diagnostic));
	}

	private createCommandCodeAction(diagnostic: vscode.Diagnostic): vscode.CodeAction {
		const action = new vscode.CodeAction('Fix rule', vscode.CodeActionKind.QuickFix);
		action.command = { command: COMMAND, title: 'Fix rule.', tooltip: 'Fix rule' };
		
		action.diagnostics = [diagnostic];
		action.isPreferred = true;
		return action;
	}
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() {}	

module.exports = {
	activate,
	deactivate
};