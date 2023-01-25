import * as intellisense from "../../../src/intellisense";
import 'mocha';
import * as assert from 'assert';
import { IntelliDetail } from "../../intellisense/intelli_detail";
import * as vscode from 'vscode';
suite('Util function inside intellisense Test Suite',
  () => {

    test('sanitizeTerms remove ', () => {
      
		assert.equal(intellisense.sanitizeTerms("predicate(test)."), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test):-"), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test),"), "test");
		assert.equal(intellisense.sanitizeTerms("predicate(test)|"),"test");
		assert.equal(intellisense.sanitizeTerms("predicate(test) "), "test");
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
		assert.deepStrictEqual(arrayPredicates[0],{'label':"predicate(_)",'snippet':"predicate(${1})",'detail':"(previous written predicates) predicate(_)","documentation": "**PREVIOUS PREDICATES**\n\n"+"predicate(_)"+"\n\n---"})
    });

	test('addEntryinAutocompleteItems provide a list of AutocompleteItems ', () => {
      
		const completionItems: vscode.CompletionItem[] = [];
		intellisense.addEntryInAutocompleteItems(completionItems,{'label':"predicate(_)",'snippet':"predicate(${1})",'detail':"(previous written predicates) predicate(_)","documentation": "**PREVIOUS PREDICATES**\n\n"+"predicate(_)"+"\n\n---"},vscode.CompletionItemKind.Method);
		assert.deepStrictEqual(completionItems[completionItems.length-1].label,"predicate(_)");
    });

	
  });
