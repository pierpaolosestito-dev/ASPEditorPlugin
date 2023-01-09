import { sanitizeTerms } from "../../autocomplete";
import * as assert from 'assert';


describe('Dictionarizer Test Suite', () => {
	it('dictionarizer must construct the correct data structure', () => {
		assert.equal(sanitizeTerms("ciao)."), 
		
			"ciao"
		);
	});
});