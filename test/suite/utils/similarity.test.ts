import 'mocha';
import * as assert from 'assert';
import { similarity } from '../../../src/utils/similarity';

suite('Similarity Test Suite', () => {
	
	test("similarity returns 1.0 when 2 strings are equals",()=>{
			assert.equal(similarity("test","test"), 1.0);
		});
	
	test("similarity returns > 0.5 when 2 strings differs by 1 char",()=>{
		assert.equal(similarity("const","conts") > 0.5, true);
	});

	test("similarity returns 0 when 2 strings are not equals",()=>{
		assert.equal(similarity("test","src"), 0.0);
	});
});
