"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emojinfo = exports.Emojizer = exports.activate = void 0;
const vscode = require("vscode");
const path = require("path");
const dynamic_dictionary_1 = require("./utils/dynamic_dictionary");
const autocomplete_1 = require("./autocomplete");
const diagnostics_1 = require("./diagnostics");
const similarity_1 = require("./scripts/similarity");
const cpanel = require("./cpanel/run");
const COMMAND = 'code-actions-sample.command';
function activate(context) {
    //Cookbook
    const provider = new CodePanelViewProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
    vscode.commands.registerCommand('asp-panel.ASPCookbook', () => {
        context.subscriptions.push(vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
    });
    //Quick-Fix
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider('asp', new Emojizer(), {
        providedCodeActionKinds: Emojizer.providedCodeActionKinds
    }));
    const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
    context.subscriptions.push(emojiDiagnostics);
    (0, diagnostics_1.subscribeToDocumentChanges)(context, emojiDiagnostics);
    context.subscriptions.push(vscode.languages.registerCodeActionsProvider('asp', new Emojinfo(), {
        providedCodeActionKinds: Emojinfo.providedCodeActionKinds
    }));
    context.subscriptions.push(vscode.commands.registerCommand(COMMAND, () => vscode.env.openExternal(vscode.Uri.parse('https://www.dlvsystem.it/dlvsite/it/home_it/'))));
    //IntelliSense
    const dd = dynamic_dictionary_1.DynamicDictionary.getInstance();
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', (0, autocomplete_1.getASPIntellisenseProvider)(context), '#', '&', ':', '-'));
    context.subscriptions.push(vscode.languages.registerHoverProvider("asp", (0, autocomplete_1.getASPIntellisenseHoverProvider)(context)));
    // eslint-disable-next-line no-useless-escape
    const regexp = /(\w+\s*\(\s*\w+(?:\s*\,\s*\w+\s*)*\s*\))\s*(?:\:\-|\||\.)/g;
    const regexp2 = /(\w+)\s*\(/g;
    vscode.workspace.onDidChangeTextDocument(document => {
        const chiave = path.basename(document.document.fileName);
        if (chiave.endsWith(".asp") || chiave.endsWith('.dlv') || chiave.endsWith('.lp')) {
            const text = document.document.getText();
            const splitted_text = text.split("\n");
            const array_valori = [];
            for (let i = 0; i < splitted_text.length; i++) {
                const matches = splitted_text[i].matchAll(regexp);
                for (const match of matches) {
                    let virgole = -1;
                    if (match[1].includes(",")) {
                        const m1 = match[1];
                        if (m1) {
                            const m2 = m1.match(/,/g);
                            if (m2) {
                                virgole = m2.length;
                            }
                        }
                    }
                    if (virgole < 0) {
                        const matches2 = match[1].matchAll(regexp2);
                        let label = "";
                        let snippet = "";
                        for (const match2 of matches2) {
                            label = match2[1] + "(_)";
                            snippet = match2[1] + "(${1},${2})";
                        }
                        const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicates) " + label, "documentation": "**PREVIOUS PREDICATES**\n\n" + label + "\n\n---" };
                        array_valori.push(obj);
                        continue;
                    }
                    let parenthesis = "(_";
                    let counter = 1;
                    let snippetTag = "(${" + counter + "}";
                    for (let i = 0; i < virgole; i++) {
                        counter += 1;
                        parenthesis = parenthesis + ",_";
                        snippetTag = snippetTag + ",${" + counter + "}";
                    }
                    snippetTag += ")";
                    parenthesis += ")";
                    const matches2 = match[1].matchAll(regexp2);
                    let label = "";
                    let snippet = "";
                    for (const match2 of matches2) {
                        label = match2[1] + parenthesis;
                        snippet = match2[1] + snippetTag;
                    }
                    const obj = { "label": label, "snippet": snippet, "detail": "(previous written predicates) " + label, "documentation": "**PREVIOUS PREDICATES**\n\n" + label + "\n\n---" };
                    array_valori.push(obj);
                }
                //Noi dobbiamo aggiungere questi valori trovati, alla chiave, senza sovrascrivere quelli precedenti
                dd.add_field(chiave, array_valori);
            }
        }
    });
}
exports.activate = activate;
//TODO traduce azioni in testo
class Emojizer {
    provideCodeActions(document, range) {
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
            if (matches) {
                console.log("Matcha aggregato");
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        for (let i = 0; i < aggregatesList.length; i++) {
                            if ((0, similarity_1.similarity)(m1, aggregatesList[i]) >= 0.5 && (0, similarity_1.similarity)(m1, aggregatesList[i]) < 1.00) {
                                const replaceWithRightAggregate = this.createFix(document, range, aggregatesList[i], (aggregatesList[i].length));
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
    isAtStartOfSmiley(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === ':' && line.text[start.character + 1] === ')';
    }
    isAtStartOfAggregate(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "#";
    }
    isAtStartOfBuiltins(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "&";
    }
    /*private isAtEndOfAggregateorBuiltin(document:vscode.TextDocument,range:vscode.Range){
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "}";
    }*/
    createFix(document, range, emoji, endstring = 2) {
        const fix = new vscode.CodeAction(`Convert to ${emoji}`, vscode.CodeActionKind.QuickFix);
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, endstring)), emoji);
        return fix;
    }
    createCommand() {
        const action = new vscode.CodeAction('Learn more about ASP', vscode.CodeActionKind.Empty);
        action.command = { command: COMMAND, title: 'Learn more about ASP', tooltip: 'This will open the ASP documentation.' };
        return action;
    }
}
exports.Emojizer = Emojizer;
Emojizer.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix
];
/**
 * Provides code actions corresponding to diagnostic problems.
 */
class Emojinfo {
    provideCodeActions(document, range, context, token) {
        // for each diagnostic entry that has the matching `code`, create a code action command
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === diagnostics_1.CODE_ERROR)
            .map(diagnostic => this.createCommandCodeAction(diagnostic));
    }
    createCommandCodeAction(diagnostic) {
        const action = new vscode.CodeAction('Fix rule', vscode.CodeActionKind.QuickFix);
        action.command = { command: COMMAND, title: 'Fix rule.', tooltip: 'Fix rule' };
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        return action;
    }
}
exports.Emojinfo = Emojinfo;
Emojinfo.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix
];
// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() { }
module.exports = {
    activate,
    deactivate
};
class CodePanelViewProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,
            enableForms: true,
            enableCommandUris: true,
            localResourceRoots: [
                this._extensionUri
            ]
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
        webviewView.webview.onDidReceiveMessage(data => {
            // select text
            const active = vscode.window.activeTextEditor;
            if (!active) {
                return;
            } // null check
            const selection = active.selection;
            if (!selection) {
                return;
            } // null check
            switch (data.type) {
                // DLV
                case 'ADVANCED_KNAPSACK_PROBLEM':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('ADVANCED_KNAPSACK_PROBLEM'));
                    });
                    break;
                case 'KNAPSACK_PROBLEM':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('KNAPSACK_PROBLEM'));
                    });
                    break;
                case '3_COLORABILITY':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('3_COLORABILITY'));
                    });
                    break;
                case 'HAMILTON_PATH':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('HAMILTON_PATH'));
                    });
                    break;
                case 'MINIMUM_SPANNING_TREE':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('MINIMUM_SPANNING_TREE'));
                    });
                    break;
                case 'SEATING':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('SEATING'));
                    });
                    break;
                case 'STRATEGIC_COMPANIES':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('STRATEGIC_COMPANIES'));
                    });
                    break;
                case 'VERTEX_COVER':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('VERTEX_COVER'));
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
    _getHtmlForWebview(webview) {
        // Do the same for the stylesheet.
        const styleBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css', 'bootstrap.min.css'));
        // const styleBootStrapIconUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap-icon', 'bootstrap-icons.css'));
        const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css', 'main.css'));
        // Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
        const scriptBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'js', 'bootstrap.min.js'));
        const scriptMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'js', 'main.js'));
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
    showPanel(webview) {
        const active = vscode.window.activeTextEditor;
        if (!active)
            return;
        const type = active.document.fileName.split('.').pop();
        webview.postMessage({ command: type });
    }
}
CodePanelViewProvider.viewType = 'asp-panel.ASPCookbook';
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
        

		<!--
			// ///////////////////////////////
			// DLV Panel
			// ///////////////////////////////
		-->
        <h1>Cookbook</h1>
        <div class="panel panel-primary panel-dlv">
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="VERTEX_COVER"><span class="panel-title">Vortex Cover</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="HAMILTON_PATH"><span class="panel-title">Hamilton Path</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="STRATEGIC_COMPANIES"><span class="panel-title">Strategic Companies</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="3_COLORABILITY"><span class="panel-title">3 Colorability</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="SEATING"><span class="panel-title">Seating</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="MINIMUM_SPANNING_TREE"><span class="panel-title">Minimum Spanning Tree</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="KNAPSACK_PROBLEM"><span class="panel-title">Knapsack Problem</span></a>
                    </div>
                </div>
            </div>
    </div><div id="check"></div>
	`;
    return htmlBody;
}
