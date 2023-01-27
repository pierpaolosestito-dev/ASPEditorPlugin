import * as assert from 'assert';
import { DynamicTermsDictionary } from '../../../src/utils/dynamic_terms_dictionary';

suite('Dynamic Terms Dictionary Test Suite', () => {
	test("Dynamic Terms Dictionary is singleton",()=>{
		const dynamicdictionary= DynamicTermsDictionary.getInstance();
		const dynamicdictionary2= DynamicTermsDictionary.getInstance();
		assert.equal(dynamicdictionary,dynamicdictionary2);
	});

	test("Dynamic Predicate add field",()=>{
		const dynamicdictionary= DynamicTermsDictionary.getInstance();
		const map = new Map<string,string[]>();
		map.set("test_predicate",['X','Y','Z']);

		dynamicdictionary.add_field("test_key",map);
		
		assert.equal(dynamicdictionary.get_field("test_key").size,1);
		assert.equal(dynamicdictionary.get_field("test_key").get('test_predicate')?.length,3);
	});

	test("Dynamic Predicate add field on same key subscribe older records",()=>{
		const dynamicdictionary= DynamicTermsDictionary.getInstance();
		const map = new Map<string,string[]>();
		map.set("test_predicate",['X','Y','Z']);
		
		dynamicdictionary.add_field("test_key",map);
		
		assert.deepEqual(dynamicdictionary.get_field("test_key").get('test_predicate'),['X','Y','Z']);
		
		map.set("test_predicate",['K','W','Z','U']);

		assert.deepEqual(dynamicdictionary.get_field("test_key").get('test_predicate'),['K','W','Z','U']);

	});

	
});
