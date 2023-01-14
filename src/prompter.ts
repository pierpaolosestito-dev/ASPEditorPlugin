import { CODE_ERROR} from './diagnostics';
import { similarity } from './utils/similarity';
import { dictionarizer } from './utils/dictionarizer';
import { DynamicPredicateDictionary } from './utils/dynamic_predicate_dictionary';
import * as path from 'path';
import * as vscode from 'vscode';

const COMMAND = 'code-actions-sample.command';

export class BuiltinAggregateFixer implements vscode.CodeActionProvider {

	context : vscode.ExtensionContext;

	constructor(context:vscode.ExtensionContext) {
		this.context = context;
	}

	public static readonly providedCodeActionKinds = [
		vscode.CodeActionKind.QuickFix
	];

	public provideCodeActions(document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction[] | undefined {
		
	const result = [];
	if (this.isAtStartOfBuiltins(document, range)) {
		
		let builtinsDict = dictionarizer(this.context.asAbsolutePath('builtins.json')); //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const builtinRegex = /(&\w+)\{/gm;
		const matches = line.matchAll(builtinRegex);
		if(matches){
			
		for(const match of matches){
			const m1 = match[1];			
			if(m1){
				
				for(const elem of Object.values<any>(builtinsDict['&'])) {
					if(similarity(m1,"&"+elem.label+"{")>=0.5 && similarity(m1,"&"+elem.label+"{")<1.00){
						const replaceWithRightBuiltin = this.createFix(document,range,"&"+elem.label+"{",("&"+elem.label+"{").length);
						const commandAction = this.createCommand();
						result.push(replaceWithRightBuiltin);
						result.push(commandAction);
					}

                }
				
				if(result.length == 0){
					builtinsDict = dictionarizer(this.context.asAbsolutePath('aggregates.json'));
					for(const elem of Object.values<any>(builtinsDict['#'])) {
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
	
	}
	if (this.isAtStartOfAggregate(document, range)) {
		
		let aggregatesDict = dictionarizer(this.context.asAbsolutePath('aggregates.json')); //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const aggregateRegex = /(#\w+)\{/gm; //#count{}
		const matches = line.matchAll(aggregateRegex);
		if(matches){
		for(const match of matches){
			const m1 = match[1];			
			if(m1){ //#coutn
				for(const elem of Object.values<any>(aggregatesDict['#'])) {
					if(similarity(m1,"#"+elem.label+"{")>=0.5 && similarity(m1,"#"+elem.label+"{")<1.00){
						const replaceWithRightAggregate = this.createFix(document,range,"#"+elem.label+"{",("#"+elem.label+"{").length);
						const commandAction = this.createCommand();
						result.push(replaceWithRightAggregate);
						result.push(commandAction);
					}

                }
				//&coutn
				if(result.length == 0){
					aggregatesDict = dictionarizer(this.context.asAbsolutePath('builtins.json'));
					for(const elem of Object.values<any>(aggregatesDict['&'])) {
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
	
	}
	if(this.isAtStartOfConstants(document,range)){
		const constantsDict = dictionarizer(this.context.asAbsolutePath('constants.json')); //La dobbiamo leggere da aggregates.json
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const constantsRegex = /([A-Z]+_+)*[A-Z]+/gm; //#count{}
		const matches = line.matchAll(constantsRegex);
		if(matches){
			for(const match of matches){
				const m1 = match[0];			
				if(m1){
					for(const elem of Object.values<any>(constantsDict['language-constants'])) {
						
						if(similarity(m1,elem) == 1.00){
							return;
						}
						if(similarity(m1,elem)>=0.5 && similarity(m1,elem)<1.00){
							const replaceWithRightConstant = this.createFix(document,range,elem,elem.length);
							const commandAction = this.createCommand();
							result.push(replaceWithRightConstant);
							result.push(commandAction);
						}
	
					}

				}
			}
		}
	}
	if (this.isAtStartOfDynamicPredicates(document, range)) {
		//Starting point for dynamic predicates correction
		const chiave = path.basename(document.fileName);
		const dd = DynamicPredicateDictionary.getInstance();
		const start = range.start;
		const line = document.lineAt(start.line).text;
		const aggregateRegex = /(\w+)\(/gm;
		const matches = line.matchAll(aggregateRegex);
		
		if(matches){
			for(const match of matches){
				const m1 = match[1];			
				if(m1){
					for(const elem of Object.values<any>(dd.get_field(chiave))) {
						const indexOf = elem.label.indexOf("(");
						const substringToCompare = elem.label.substring(0,indexOf);
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
		
	}

	
	
	return result;
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
		return line.text[start.character].match(/[a-zA-Z]/gm);
	}

	private isAtStartOfConstants(document:vscode.TextDocument,range:vscode.Range){
		const start = range.start;
		const line = document.lineAt(start.line);
		return line.text[start.character].match(/[A-Z_]/gm);
	}


	private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string, endstring=2): vscode.CodeAction {
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
