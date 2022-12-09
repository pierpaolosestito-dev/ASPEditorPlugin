"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const cpanel = require("./cpanel/run");

function activate(context) {
    const provider = new CodePanelViewProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
    vscode.commands.registerCommand('asp-panel.ASPCookbook', () => {
        context.subscriptions.push(vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
    });
}
exports.activate = activate;
class CodePanelViewProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
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
                case 'example':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
                        editBuilder.replace(selection, code.dlv('example'));
                    });
                    break;
                // Javascript
                case 'jsIF':
                    active.edit(editBuilder => {
                        const code = new cpanel.Code(this._extensionUri);
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
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map