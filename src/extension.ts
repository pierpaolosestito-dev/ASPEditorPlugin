import * as vscode from 'vscode';
import * as path from 'path';
import { DynamicDictionary } from './utils/dynamic_dictionary';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider } from './autocomplete';
import { CODE_ERROR, subscribeToDocumentChanges } from './diagnostics';
import { similarity } from './scripts/similarity';
import * as cpanel from './cpanel/run';

const COMMAND = 'code-actions-sample.command';

 export function activate(context:vscode.ExtensionContext) {
	
	//Cookbook

	const provider = new CodePanelViewProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	vscode.commands.registerCommand('asp-panel.ASPCookbook', () => {
		context.subscriptions.push(
			vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	});
	
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
		
		const aggregateRegex = /(\#\w+)\{/gm;
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
	private createFix(document: vscode.TextDocument, range: vscode.Range, emoji: string,endstring: number=2): vscode.CodeAction {
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

class CodePanelViewProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'asp-panel.ASPCookbook';

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,
			enableForms: true,
			enableCommandUris:true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		webviewView.webview.onDidReceiveMessage(data => {
			// select text
			const active = vscode.window.activeTextEditor;
			if (!active) { return; } // null check

			const selection = active.selection;
			if (!selection) { return; } // null check

			switch (data.type) {
				// DLV
				case 'jsIF':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('if'));
					});
					break;
				// Javascript
				case 'jsIF':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('if'));
					});
					break;
				// showPanel
				case 'showPanel':
					this.showPanel(webviewView.webview);
					break;
			}
		});

		vscode.window.onDidChangeActiveTextEditor((editor) => {
			this.showPanel(webviewView.webview);
		});
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// Do the same for the stylesheet.
		const styleBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap.min.css'));
		// const styleBootStrapIconUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap-icon', 'bootstrap-icons.css'));
		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));

		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		const scriptBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap.min.js'));
		const scriptMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));


		// Use a nonce to only allow a specific script to be run.
		const nonce = getNonce();
		const cpBody = getCodePanelBody();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self' data: ${webview.cspSource}; font-src 'self' data: ${webview.cspSource}; img-src 'self' data: ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleBootStrapUri}" rel="stylesheet">
				<link href="${styleMainUri}" rel="stylesheet">

				<title>ASP Cookbook</title>
			</head>
			<body class="text-white" oncopy="return false;">
				${cpBody}
				<script nonce="${nonce}" src="${scriptBootStrapUri}"></script>
				<script nonce="${nonce}" src="${scriptMainUri}"></script>
			</body>
			</html>`;
	}

	private showPanel(webview: vscode.Webview) {
		const active = vscode.window.activeTextEditor;
		if (!active) return;
		const type = active.document.fileName.split('.').pop();
		webview.postMessage({ command: type });
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function getCodePanelBody() {
	const htmlBody = `
    <div class="container m-2">
        <div class="pt-0 ps-1 pe-1 pb-0">
            <h3 class="m-0 mb-2">Code Select</h3>
			<select class="form-select form-select-sm bg-secondary text-white border-secondary mb-3 changeCodePanel">
				<option value="">Code choice</option>
				<option value="dlv">DLV</option>
				<option value="js">Javascript</option>
			</select>
		</div>

		<!--
			// ///////////////////////////////
			// DLV Panel
			// ///////////////////////////////
		-->
        <div class="panel panel-primary panel-dlv">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="example"><span class="panel-title">DLV Example</span></a>
                    </div>
                </div>
            </div>
		</div>

		<!--
			// ///////////////////////////////
			// Javascript Panel
			// ///////////////////////////////
		-->
        <div class="panel panel-primary panel-js">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsIF"><span class="panel-title">IF</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsSwitch"><span class="panel-title">Switch</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsFor"><span class="panel-title">For</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsWhile"><span class="panel-title">While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsDoWhile"><span class="panel-title">Do While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsFunction"><span class="panel-title">Function</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsAsyncFunction"><span class="panel-title">Async Function</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsClass"><span class="panel-title">Class</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsTry"><span class="panel-title">Try Catch</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>Net</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsGet"><span class="panel-title">GET</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsPost"><span class="panel-title">POST</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsJson"><span class="panel-title">JSON</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>ETC</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsHello"><span class="panel-title">Hello</span></a>
                    </div>
                </div>
            </div>
		</div>
    </div><div id="check"></div>
	`;
	
	return htmlBody;
}