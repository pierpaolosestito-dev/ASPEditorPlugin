import * as vscode from 'vscode';
import * as path from 'path';
import { DynamicDictionary } from './utils/dynamic_dictionary';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider } from './autocomplete';
import { CODE_ERROR, subscribeToDocumentChanges } from './diagnostics';
import { similarity } from './scripts/similarity';
import { dictionarizer } from './utils/dictionarizer';

const COMMAND = 'code-actions-sample.command';

 export function activate(context:vscode.ExtensionContext) {
	//Quick-Fix
	context.subscriptions.push(
		
		
		vscode.languages.registerCodeActionsProvider('asp', new BuiltinAggregateFixer(context), {
			providedCodeActionKinds: BuiltinAggregateFixer.providedCodeActionKinds
		}));

	const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
	context.subscriptions.push(emojiDiagnostics);

	subscribeToDocumentChanges(context, emojiDiagnostics);

	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('asp', new BuiltinAggregateInfo(), {
			providedCodeActionKinds: BuiltinAggregateInfo.providedCodeActionKinds
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
				console.log("M1",match[1]);
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
export class BuiltinAggregateFixer implements vscode.CodeActionProvider {

	context : vscode.ExtensionContext;

	constructor(context:vscode.ExtensionContext) {
		this.context = context;
	}

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
		if (this.isAtStartOfSmiley(document, range)) {
		

		const replaceWithSmileyCatFix = this.createFix(document, range, 'ASP 💣');

		const replaceWithSmileyFix = this.createFix(document, range, 'ASP 😍');
		// Marking a single fix as `preferred` means that users can apply it with a
		// single keyboard shortcut using the `Auto Fix` command.
		replaceWithSmileyFix.isPreferred = true;

		const replaceWithSmileyHankyFix = this.createFix(document, range, 'ASP 👊');

		const commandAction = this.createCommand();

		return [
			replaceWithSmileyCatFix,
			replaceWithSmileyFix,
			replaceWithSmileyHankyFix,
			commandAction
		];
	}
	if (this.isAtStartOfBuiltins(document, range)) {
		const result = [];
		let builtinsDict = dictionarizer(this.context.asAbsolutePath('builtins.json')); //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const builtinRegex = /(\&\w+)\{/gm;
		const matches = line.matchAll(builtinRegex);
		if(matches){
			
		for(const match of matches){
			const m1 = match[1];			
			if(m1){
				
				for(const elem of Object.values(builtinsDict['&'])) {
					if(similarity(m1,"&"+elem.label+"{")>=0.5 && similarity(m1,"&"+elem.label+"{")<1.00){
						const replaceWithRightBuiltin = this.createFix(document,range,"&"+elem.label+"{",("&"+elem.label+"{").length);
						const commandAction = this.createCommand();
						result.push(replaceWithRightBuiltin);
						result.push(commandAction);
					}

                }
				
				if(result.length == 0){
					builtinsDict = dictionarizer(this.context.asAbsolutePath('aggregates.json'));
					for(const elem of Object.values(builtinsDict['#'])) {
						if(similarity(m1,"&"+elem.label+"{")>=0.5 && similarity(m1,"&"+elem.label+"{")<1.00){
							const replaceWithRightAggregate = this.createFix(document,range,"#"+elem.label+"{",("#"+elem.label+"{").length);
							const commandAction = this.createCommand();
							result.push(replaceWithRightAggregate);
							result.push(commandAction);
						}
	
					}
				}
			}
		}
	}
	return result;
	}
	if (this.isAtStartOfAggregate(document, range)) {
		const result = [];
		let aggregatesDict = dictionarizer(this.context.asAbsolutePath('aggregates.json')); //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const aggregateRegex = /(\#\w+)\{/gm;
		const matches = line.matchAll(aggregateRegex);
		if(matches){
		for(const match of matches){
			const m1 = match[1];			
			if(m1){
				for(const elem of Object.values(aggregatesDict['#'])) {
					if(similarity(m1,"#"+elem.label+"{")>=0.5 && similarity(m1,"#"+elem.label+"{")<1.00){
						const replaceWithRightAggregate = this.createFix(document,range,"#"+elem.label+"{",("#"+elem.label+"{").length);
						const commandAction = this.createCommand();
						result.push(replaceWithRightAggregate);
						result.push(commandAction);
					}

                }
				if(result.length == 0){
					aggregatesDict = dictionarizer(this.context.asAbsolutePath('builtins.json'));
					for(const elem of Object.values(aggregatesDict['&'])) {
						if(similarity(m1,"#"+elem.label+"{")>=0.5 && similarity(m1,"#"+elem.label+"{")<1.00){
							const replaceWithRightAggregate = this.createFix(document,range,"&"+elem.label+"{",("&"+elem.label+"{").length);
							const commandAction = this.createCommand();
							result.push(replaceWithRightAggregate);
							result.push(commandAction);
						}
	
					}
				}
			}
		}
	}
	return result;
	}

	if (this.isAtStartOfDynamicPredicates(document, range)) {
		//Starting point for dynamic predicates correction
		const chiave = path.basename(document.fileName);
		const dd = DynamicDictionary.getInstance();
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const aggregateRegex = /(\w+)\(/gm;
		const matches = line.matchAll(aggregateRegex);
		const result = [];
		if(matches){
			for(const match of matches){
				const m1 = match[1];			
				if(m1){
					for(const elem of Object.values(dd.get_dictionary().get(chiave))) {
						let indexOf = elem.label.indexOf("(");
						let substringToCompare = elem.label.substring(0,indexOf);
						if(similarity(m1,substringToCompare)>=0.5 && similarity(m1,substringToCompare)<1.00){
							const replaceWithRightAggregate = this.createFix(document,range,substringToCompare,substringToCompare.length);
							const commandAction = this.createCommand();
							result.push(replaceWithRightAggregate);
							result.push(commandAction);
						}
					}				
				}
			}
		}
		
	
	return result;	
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
	private isAtStartOfDynamicPredicates(document:vscode.TextDocument,range:vscode.Range){
		const start = range.start;
		const line = document.lineAt(start.line);

		return line.text[start.character].match(/[a-zA-Z]/i);
	}
	private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string,endstring:number=2): vscode.CodeAction {
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

export class BuiltinAggregateInfo implements vscode.CodeActionProvider {

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