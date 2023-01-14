import * as assert from 'assert';
import { similarity } from '../../../src/utils/similarity';

describe('Similarity Test Suite', () => {
	
	it("similarity returns 1.0 when 2 strings are equals",()=>{
			assert.equal(similarity("test","test"), 1.0);
		});
	
	it("similarity returns > 0.5 when 2 strings differs by 1 char",()=>{
		assert.equal(similarity("const","conts") > 0.5, true);
	});

	it("similarity returns 0 when 2 strings are not equals",()=>{
		assert.equal(similarity("test","src"), 0.0);
	});
});
