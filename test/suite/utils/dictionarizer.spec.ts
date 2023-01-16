import { dictionarizer } from '../../../src/utils/dictionarizer';
import * as assert from 'assert';
import { PATH_TO_JSON_DICTIONARY } from '../../../assets/consts/consts';



describe('Dictionarizer Test Suite', () => {
	it('dictionarizer must construct the correct data structure', () => {
		assert.deepStrictEqual(dictionarizer(PATH_TO_JSON_DICTIONARY.CONSTANTS), 
		{
			"language-constants": ["U_INT", "UT_INT", "UR_INT", "T_INT", "R_INT", "CONST", "Q_CONST"]
		});
	});
});