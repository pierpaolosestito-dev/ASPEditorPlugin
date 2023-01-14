"use strict";
//I test si eseguono tramite il comando npm run tests
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummy = void 0;
//import { ... } from '../../src/parsing'; //Funzioni da testare
const chai_1 = require("chai");
require("mocha");
//Test
describe('Dummy test G', () => {
    //Descrizione del risultato del test
    it('should return true', () => {
        //Corpo del test
        const result = dummy(); //Risultato della funzione da testare
        const expected_result = true; //Risultato atteso
        (0, chai_1.expect)(result).to.equal(expected_result); //Asserzione
    });
});
function dummy() {
    return true;
}
exports.dummy = dummy;
//# sourceMappingURL=parserTestG.js.map