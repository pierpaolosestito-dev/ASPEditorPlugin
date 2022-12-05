import { DynamicDictionary } from '../../src/utils/dynamic_dictionary';
import { dictionarizer } from '../../src/utils/dictionarizer';
import * as assert from 'assert';

describe('Dynamic Dictionary Test Suite', () => {

	const dynamicdictionary= new DynamicDictionary();

	beforeEach(() => {
			dynamicdictionary.add_field('1',[{label:"Test"}]);
			dynamicdictionary.add_field('2',[{label:"Test"},{label:"Test"}]);
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
		});
});
