import * as assert from 'assert';
import { DynamicPredicateDictionary } from '../../../src/utils/dynamic_predicate_dictionary';

describe('Dynamic Predicate Dictionary Test Suite', () => {
	it("Dynamic Predicate Dictionary is singleton",()=>{
		const dynamicdictionary= DynamicPredicateDictionary.getInstance();
		const dynamicdictionary2= DynamicPredicateDictionary.getInstance();
		assert.equal(dynamicdictionary,dynamicdictionary2);
	});

/*
	const dynamicdictionary= new DynamicPredicateDictionary();

	beforeEach(() => {
			dynamicdictionary.add_field('1',[{label:"Test",detail:"",documentation:"",snippet:""}]);
			dynamicdictionary.add_field('2',[{label:"Test",detail:"",documentation:"",snippet:""},{label:"Test",detail:"",documentation:"",snippet:""}]);
			const vals = [];
			vals[1]=[{label:"Test"}];
			vals[2]=[{label:"Test"}];	
		});
	
		it("add value in dictionary and get value by key",()=>{
			assert.deepStrictEqual(dynamicdictionary.get_field('1'),[{label:"Test"}]);
		});
	
		it("add value and get full dictionary",()=>{
			const expectedMap = new Map();
			expectedMap.set('1', [ { label: 'Test' }]);
			expectedMap.set('2', [ { label: 'Test' }]);
			assert.deepStrictEqual(dynamicdictionary.get_dictionary(), expectedMap);
		});

		it("no duplication inside the value",()=>{
			assert.deepStrictEqual(dynamicdictionary.get_field('2'), [{ label: 'Test' } ]);	
		});
		
		afterEach(() => {
			dynamicdictionary.clear();
		}); */
});
