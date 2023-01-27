import { dictionarizer } from '../../../src/utils/dictionarizer';
import * as assert from 'assert';

suite('Dictionarizer Test Suite', () => {
	test('dictionarizer must construct the correct data structure', () => {
		assert.deepStrictEqual(dictionarizer("constants.json"), 
		{
			"language-constants": ["U_INT", "UT_INT", "UR_INT", "T_INT", "R_INT", "CONST", "Q_CONST"]
		});
	});
});