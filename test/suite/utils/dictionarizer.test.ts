import 'mocha';
import * as assert from 'assert';
import { dictionarizer } from '../../utils/dictionarizer';
import { PATH_TO_JSON_DICTIONARY } from '../../utils/consts';



suite('Dictionarizer Test Suite', () => {
	test('dictionarizer must construct the correct data structure', () => {
		assert.deepStrictEqual(dictionarizer(PATH_TO_JSON_DICTIONARY.CONSTANTS), 
		{
			"language-constants": ["U_INT", "UT_INT", "UR_INT", "T_INT", "R_INT", "CONST", "Q_CONST"]
		});
	});
});