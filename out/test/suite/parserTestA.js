"use strict";
//I test si eseguono tramite il comando npm run tests
Object.defineProperty(exports, "__esModule", { value: true });
exports.trasformText = exports.dummy = void 0;
//import { ... } from '../../src/parsing'; //Funzioni da testare
const chai_1 = require("chai");
require("mocha");
const assert = require("assert");
const antlr4ts_1 = require("antlr4ts");
const ANTLRInputStream_1 = require("antlr4ts/ANTLRInputStream");
const ASPCore2Lexer_1 = require("../../src/parser/ASPCore2Lexer");
const parsing_1 = require("../../src/parsing");
//Test
describe('Dummy test A', () => {
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
//Trasforma un input testuale in un CommonTokenStream, utilizzato nei test
function trasformText(text) {
    const input = new ANTLRInputStream_1.ANTLRInputStream(text);
    const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
    const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
    return tokens;
}
exports.trasformText = trasformText;
//Test
describe('tokenize positive test 1', () => {
    //Descrizione del risultato del test
    it('Tests if an empty rule is tokenized correctly', () => {
        //Corpo del test
        const input = "";
        const tokens = trasformText(input);
        const result = (0, parsing_1.tokenize)(tokens); //Risultato della funzione da testare
        const expected_result = [
            ['<EOF>', -1, 1]
        ]; //Risultato atteso
        console.log('[0][0]', result[0][0] === expected_result[0][0]);
        console.log('[0][1]', result[0][1] === expected_result[0][1]);
        console.log('[0][2]', result[0][2] === expected_result[0][2]);
        console.log('[0]', result[0] === expected_result[0]);
        console.log(result[0]);
        console.log(expected_result[0]);
        //expect(result).to.equal(expected_result); //Asserzione
        assert.strictEqual(result, expected_result);
    });
});
//Testing tokenize and tokenize_head_tail.
//# sourceMappingURL=parserTestA.js.map