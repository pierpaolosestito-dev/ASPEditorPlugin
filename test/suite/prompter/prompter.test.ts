/*import { Prompter } from "../../../src/prompter";
import * as vscode from 'vscode';
import * as assert from 'assert';
suite('Prompter Test Suite',
  () => {
    //Descrizione del risultato del test
    test('isAtStartOfBuiltins ', async () => {
		const context = await vscode.commands.executeCommand("getContext") as vscode.ExtensionContext;

		await vscode.workspace.openTextDocument({
			language: 'text',
			content: 'ciao'
		}).then(doc => {				
				const prompter = new Prompter(context);
				const pos :vscode.Position = {
					line: 0, character: 0,
				
				};
				prompter.isAtStartOfAggregate(doc,doc.getWordRangeAtPosition(pos)!);
				assert.equal(doc.getText(),"ciao");
			});
    });
  });*/