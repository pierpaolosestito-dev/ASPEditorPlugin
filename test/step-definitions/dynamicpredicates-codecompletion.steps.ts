import {binding, given, then, when} from 'cucumber-tsflow';
import {assert} from 'chai';
import * as vscode from 'vscode';
import { DynamicPredicateDictionary } from '../intellisense/dynamic_predicate_dictionary';
import { __fillPredicates } from '../intellisense';

@binding()
export class DynamicPredicateDictionarySteps {
	private dynamicPredicateDictionary: DynamicPredicateDictionary = DynamicPredicateDictionary.getInstance();
	private fileName= "";
	private fileContent = "";

	@given(/A DynamicPredicateDictionary with 0 saved predicates for that file/)
	public givenAnEmptyDynamicPredicateDictionary(){
		this.dynamicPredicateDictionary = DynamicPredicateDictionary.getInstance();
		
	}

	@when(/A developer open a new file and write a predicate in it./)
	public async developerWriteNewFileAndWriteAPredicate(){
		await vscode.workspace.openTextDocument({
			language: 'asp',
			content: 'test(X,Y).'
		}).then(doc => {			
				this.fileName = doc.fileName;
				this.fileContent = doc.getText();
				__fillPredicates(this.fileContent,this.fileName,this.dynamicPredicateDictionary);
			});
	}

	@then(/DynamicPredicateDictionary saves it/)
	public dictionaryNowContainsARecordWithThisPredicate(){
		assert.equal(this.dynamicPredicateDictionary.get_field(this.fileName).length,1);
				assert.equal(this.dynamicPredicateDictionary.get_field(this.fileName)[0].label,"test(_,_)");
	}
}