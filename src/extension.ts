import * as vscode from 'vscode';
import { subscribeToDocumentChanges } from './diagnostics';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider,fillDictionaryWithDynamicPredicates,fillDictionaryWithDynamicTerms} from './intellisense';
import { Prompter/*,	PrompterInfo */} from './prompter';
import { CodePanelViewProvider } from './cpanel/code_panel_view_provider';


const COMMAND = 'code-actions-sample.command';

 export function activate(context:vscode.ExtensionContext) {
	
	//Cookbook

	const provider = new CodePanelViewProvider(context);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	vscode.commands.registerCommand('asp-panel.ASPCookbook', () => {
		context.subscriptions.push(
			vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	});
	
	//Quick-Fix
	context.subscriptions.push(
		
		
		vscode.languages.registerCodeActionsProvider('asp', new Prompter(context), {
			providedCodeActionKinds: Prompter.providedCodeActionKinds
		}));

	const emojiDiagnostics = vscode.languages.createDiagnosticCollection("emoji");
	context.subscriptions.push(emojiDiagnostics);

	subscribeToDocumentChanges(context, emojiDiagnostics);

	/*context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider('asp', new PrompterInfo(), {
			providedCodeActionKinds: PrompterInfo.providedCodeActionKinds
		})
	);*/

	context.subscriptions.push(
		vscode.commands.registerCommand(COMMAND, () => vscode.env.openExternal(vscode.Uri.parse('https://www.dlvsystem.it/dlvsite/it/home_it/')))
	);
	
	//IntelliSense
	
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', getASPIntellisenseProvider(context), '#', '&'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", getASPIntellisenseHoverProvider(context)));

	fillDictionaryWithDynamicPredicates();	
	fillDictionaryWithDynamicTerms();
	return context;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() {}	

module.exports = {
	activate,
	deactivate
};

