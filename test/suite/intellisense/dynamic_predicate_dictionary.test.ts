import 'mocha';
import * as assert from 'assert';
import { DynamicPredicateDictionary } from '../../../src/intellisense/dynamic_predicate_dictionary';



suite('Dynamic Predicate Dictionary Test Suite', () => {
	test("Dynamic Predicate Dictionary is singleton",()=>{
		const dynamicdictionary= DynamicPredicateDictionary.getInstance();
		const dynamicdictionary2= DynamicPredicateDictionary.getInstance();
		assert.equal(dynamicdictionary,dynamicdictionary2);
	});

	test("Dynamic Predicate add field",()=>{
		const dynamicdictionary= DynamicPredicateDictionary.getInstance();
		dynamicdictionary.add_field("test_key",[{label:"test(_,_)",documentation:"doc1",detail:"det1",snippet:"sni1"},{label:"test2(_,_)",documentation:"doc2",detail:"det2",snippet:"sni2"}]);
		
		assert.equal(dynamicdictionary.get_field("test_key").length,2);
		assert.equal(dynamicdictionary.get_field("test_key")[0].label,"test(_,_)");
		assert.equal(dynamicdictionary.get_field("test_key")[1].label,"test2(_,_)");
	});

	test("Dynamic Predicate add field on same key subscribe older records",()=>{
		const dynamicdictionary= DynamicPredicateDictionary.getInstance();
		dynamicdictionary.add_field("test_key",[{label:"test(_,_)",documentation:"doc1",detail:"det1",snippet:"sni1"},{label:"test2(_,_)",documentation:"doc2",detail:"det2",snippet:"sni2"}]);
		
		assert.equal(dynamicdictionary.get_field("test_key").length,2);
		assert.equal(dynamicdictionary.get_field("test_key")[0].label,"test(_,_)");
		assert.equal(dynamicdictionary.get_field("test_key")[1].label,"test2(_,_)");

		dynamicdictionary.add_field("test_key",[{label:"test3(_,_)",documentation:"doc1",detail:"det1",snippet:"sni1"},{label:"test4(_,_)",documentation:"doc2",detail:"det2",snippet:"sni2"}]);
		assert.equal(dynamicdictionary.get_field("test_key").length,2);
		assert.equal(dynamicdictionary.get_field("test_key")[0].label,"test3(_,_)");
		assert.equal(dynamicdictionary.get_field("test_key")[1].label,"test4(_,_)");
	});

	test("Dynamic Predicate remove duplicates based on label",()=>{
		const dynamicdictionary= DynamicPredicateDictionary.getInstance();
		dynamicdictionary.add_field("test_key",[{label:"test(_,_)",documentation:"doc1",detail:"det1",snippet:"sni1"},{label:"test(_,_)",documentation:"doc2",detail:"det2",snippet:"sni2"}]);
		assert.equal(dynamicdictionary.get_field("test_key").length,1);
		assert.equal(dynamicdictionary.get_field("test_key")[0].label,"test(_,_)");
	});

});
