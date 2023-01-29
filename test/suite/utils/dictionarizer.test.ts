import 'mocha';
import * as os from 'os';
import * as assert from 'assert';
import { dictionarizer } from '../../../src/utils/dictionarizer';
import { PATH_TO_JSON_DICTIONARY } from '../../../src/utils/consts';

suite('Dictionarizer Test Suite', () => {
	test('dictionarizer must construct the correct data structure', () => {
		const operative_system = os.type();
		if (operative_system === 'Linux' || operative_system === 'Darwin') {
			assert.deepStrictEqual(dictionarizer(PATH_TO_JSON_DICTIONARY.CONSTANTS),
				{
					'language-constants': ['U_INT', 'UT_INT', 'UR_INT', 'T_INT', 'R_INT', 'CONST', 'Q_CONST']
				});
		}
		else if (operative_system === 'Windows_NT') {
			assert.deepStrictEqual(dictionarizer("../../" + PATH_TO_JSON_DICTIONARY.CONSTANTS),
				{
					'language-constants': ['U_INT', 'UT_INT', 'UR_INT', 'T_INT', 'R_INT', 'CONST', 'Q_CONST']
				});
		}
	});
});