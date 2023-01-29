import { Prompter } from "../../../src/prompter";
import * as vscode from 'vscode';
import * as assert from 'assert';
suite('Prompter Test Suite',
  () => {


      const ext = vscode.extensions.getExtension("VSCodeEditor.asp-language-support-dlv2");
    
	
    //Descrizione del risultato del test
    test('isAtStartOfAggregates return True if triggerCharacter is #', async () => {
		
		const myExtensionContext = await ext?.activate();
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: '#'
		}).then(doc => {				
				const prompter = new Prompter(myExtensionContext);
				assert.equal(prompter.isAtStartOfAggregate(doc,new vscode.Range(new vscode.Position(0,0),new vscode.Position(0,0))),true);
			});
    });
	test('isAtStartOfBuiltins return True if triggerCharacter is &', async () => {
		
		const myExtensionContext = await ext?.activate();
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: '&'
		}).then(doc => {				
				const prompter = new Prompter(myExtensionContext);
				assert.equal(prompter.isAtStartOfBuiltins(doc,new vscode.Range(new vscode.Position(0,0),new vscode.Position(0,0))),true);
			});
    });
	test('isAtStartOfDynamicPredicates return the triggerCharacter if triggerCharacter is a letter', async () => {
		
		const myExtensionContext = await ext?.activate();
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: 'A'
		}).then(doc => {				
				const prompter = new Prompter(myExtensionContext);
				assert.equal(prompter.isAtStartOfDynamicPredicates(doc,new vscode.Range(new vscode.Position(0,0),new vscode.Position(0,0))),'A');
			});
    });
	test('isAtStartOfConstants return triggerCharacter if triggerCharacter is a letter or _', async () => {
		
		const myExtensionContext = await ext?.activate();
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: '_'
		}).then(doc => {				
				const prompter = new Prompter(myExtensionContext);
				assert.equal(prompter.isAtStartOfConstants(doc,new vscode.Range(new vscode.Position(0,0),new vscode.Position(0,0))),'_');
			});
    });

	
  });