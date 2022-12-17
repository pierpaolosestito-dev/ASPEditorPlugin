"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dictionarizer_1 = require("../../src/utils/dictionarizer");
const assert = require("assert");
describe('Dictionarizer Test Suite', () => {
    it('dictionarizer must construct the correct data structure', () => {
        assert.deepStrictEqual((0, dictionarizer_1.dictionarizer)("constants.json"), {
            "language-constants": ["U_INT", "UT_INT", "UR_INT", "T_INT", "R_INT", "CONST", "Q_CONST"]
        });
    });
});
//# sourceMappingURL=dictionarizer.spec.js.map