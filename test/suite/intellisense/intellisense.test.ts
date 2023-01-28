import * as intellisense from "../../../src/intellisense";
import 'mocha';
import * as assert from 'assert';
import { IntelliDetail } from "../../../src/intellisense/intelli_detail";
import * as vscode from 'vscode';
import { DynamicPredicateDictionary } from "../../../src/intellisense/dynamic_predicate_dictionary";
import { DynamicTermsDictionary } from "../../../src/intellisense/dynamic_terms_dictionary";

suite('Util function inside intellisense Test Suite',
  () => {

    test('sanitizeTerms remove ', () => {
      
		assert.equal(intellisense.sanitizeTerms("predicate(test)."), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test):-"), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test),"), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test)|"),"test");

		assert.equal(intellisense.sanitizeTerms("predicate(test1,test2)."), "test1,test2");
    });


	test('onlyUnique removes duplicate ', () => {
      
		const array = ["test","test1","test2","test"];
		assert.deepStrictEqual(array.filter(intellisense.onlyUnique),["test","test1","test2"]);
    });

	test("isASPorDLVorLP check if file name contains extension type" , () => {
      
		const array = ['test.asp','test.dlv','test.lp'];
		for(let i=0;i<array.length;i++){
		assert.deepStrictEqual(intellisense.isASPorDLVorLP(array[i]),true);
		}

		const arrayDifferentExtension = ['test.txt','test.py','test.java'];
		for(let i=0;i<arrayDifferentExtension.length;i++){
		assert.deepStrictEqual(intellisense.isASPorDLVorLP(arrayDifferentExtension[i]),false);
		}
	});

	test('buildPredicates add entry into predicatesArray with IntelliDetail object ', () => {
      
		const arrayPredicates : IntelliDetail[] = [];
		intellisense.buildPredicates(0,"predicate(test):-",arrayPredicates);
		assert.deepStrictEqual(arrayPredicates[0],{'label':"predicate(_)",'snippet':"predicate(${1})",'detail':"(previous written predicate) predicate(_)","documentation": "**PREVIOUS PREDICATE**\n\n"+"predicate(_)"+"\n\n---"});
    });

	test('addEntryinAutocompleteItems provide a list of AutocompleteItems ', () => {
      
		const completionItems: vscode.CompletionItem[] = [];
		intellisense.addEntryInAutocompleteItems(completionItems,{'label':"predicate(_)",'snippet':"predicate(${1})",'detail':"(previous written predicate) predicate(_)","documentation": "**PREVIOUS PREDICATE**\n\n"+"predicate(_)"+"\n\n---"},vscode.CompletionItemKind.Method);
		assert.deepStrictEqual(completionItems[completionItems.length-1].label,"predicate(_)");
    });
	test('__fillPredicates fill DynamicPredicateDictionary with finding predicates into file asp,dlv,lp', async () => {
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: 'test(X,Y).'
		}).then(doc => {			
				const dd = DynamicPredicateDictionary.getInstance();	
				intellisense.__fillPredicates(doc.getText(),doc.fileName,dd);
				assert.equal(dd.get_field(doc.fileName).length,1);
				assert.equal(dd.get_field(doc.fileName)[0].label,"test(_,_)");
			});
    });
	test('__fillTerms fill DynamicTermsDictionary with finding terms into file asp,dlv,lp', async () => {
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: 'test(X,Y).'
		}).then(doc => {			
				const dd = DynamicTermsDictionary.getInstance();	
				intellisense.__fillTerms(doc.getText(),doc.fileName,dd);
				assert.equal(dd.get_field(doc.fileName).get("test")?.length,2);
				assert.deepStrictEqual(dd.get_field(doc.fileName).get("test"), ['X','Y']);
			});
    });
	test('readDictionariesandMergeIt reads constants,builtins,aggregates JSON dictionary and merge into only one dictionary', async () => {
		const ext = vscode.extensions.getExtension("VSCodeEditor.asp-language-support-dlv2");
		const myExtensionContext = await ext?.activate() as vscode.ExtensionContext;
		const autocompleteDict = intellisense.readDictionariesandMergeIt(myExtensionContext);
		
		assert.equal("#" in autocompleteDict,true);
		assert.equal("&" in autocompleteDict,true);
		assert.equal("language-constants" in autocompleteDict,true);
	
    });

	test('reversePredicate takes in input a reversedPredicate and returns it in order.', async () => {
		assert.equal(intellisense.reversePredicate("etaciderp"),"predicate");
		assert.equal(intellisense.reversePredicate("tset"),"test");
    });
	
  });
