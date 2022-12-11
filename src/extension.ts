import * as vscode from 'vscode';
import { getASPIntellisenseProvider,getASPIntellisenseHoverProvider,fillDictionaryWithDynamicPredicates} from './autocomplete';
import { subscribeToDocumentChanges } from './diagnostics';
import { BuiltinAggregateFixer,	BuiltinAggregateInfo } from './prompter';


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
	
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('asp', getASPIntellisenseProvider(context), '#', '&',':','-'));
	context.subscriptions.push(vscode.languages.registerHoverProvider("asp", getASPIntellisenseHoverProvider(context)));

	fillDictionaryWithDynamicPredicates();
	
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function deactivate() {}	

module.exports = {
	activate,
	deactivate
};