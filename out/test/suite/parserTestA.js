"use strict";
//I test si eseguono tramite il comando npm run tests
Object.defineProperty(exports, "__esModule", { value: true });
exports.trasformText = exports.dummy = void 0;
//import { ... } from '../../src/parsing'; //Funzioni da testare
const chai_1 = require("chai");
require("mocha");
const fs = require("fs");
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
    tokens.fill();
    return tokens;
}
exports.trasformText = trasformText;
//Test
describe('tokenize positive tests', () => {
    //Descrizione del risultato del test
    it('Tests if an empty rule is tokenized correctly', () => {
        //Corpo del test
        const input = "";
        const tokens = trasformText(input);
        const result = (0, parsing_1.tokenize)(tokens); //Risultato della funzione da testare
        const expected_result = [
            ['<EOF>', -1, 1]
        ]; //Risultato atteso
        //expect(result).to.equal(expected_result); //Asserzione
        (0, chai_1.expect)(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
    });
    it('Tests if a simple fact is tokenized correctly', () => {
        //Corpo del test
        const input = "node(1).";
        const tokens = trasformText(input);
        const result = (0, parsing_1.tokenize)(tokens); //Risultato della funzione da testare
        const expected_result = [
            ['node', 2, 1],
            ['(', 21, 1],
            ['1', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['<EOF>', -1, 1]
        ]; //Risultato atteso
        //expect(result).to.equal(expected_result); //Asserzione
        (0, chai_1.expect)(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
    });
    it('Tests if multiple facts on the same line are tokenized correctly', () => {
        //Corpo del test
        const input = "node(1).node(2).node(3).";
        const tokens = trasformText(input);
        const result = (0, parsing_1.tokenize)(tokens); //Risultato della funzione da testare
        const expected_result = [
            ['node', 2, 1],
            ['(', 21, 1],
            ['1', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['node', 2, 1],
            ['(', 21, 1],
            ['2', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['node', 2, 1],
            ['(', 21, 1],
            ['3', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['<EOF>', -1, 1]
        ]; //Risultato atteso
        //expect(result).to.equal(expected_result); //Asserzione
        (0, chai_1.expect)(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
    });
    it('Tests if multiple facts on multiple lines are tokenized correctly', () => {
        //Corpo del test
        const input = fs.readFileSync('./test/suite/test.asp', 'utf-8');
        const tokens = trasformText(input);
        const result = (0, parsing_1.tokenize)(tokens); //Risultato della funzione da testare
        const expected_result = [
            ['node', 2, 1],
            ['(', 21, 1],
            ['1', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['node', 2, 1],
            ['(', 21, 1],
            ['2', 5, 1],
            [')', 22, 1],
            ['.', 7, 1],
            ['node', 2, 2],
            ['(', 21, 2],
            ['3', 5, 2],
            [')', 22, 2],
            ['.', 7, 2],
            ['<EOF>', -1, 2]
        ]; //Risultato atteso
        //expect(result).to.equal(expected_result); //Asserzione
        (0, chai_1.expect)(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
    });
    /*it('Tests if a simple rule is tokenized correctly', () => {
      //Corpo del test
        const input = "gatto(X):-animale(X),felino(X).";
        const tokens = trasformText(input);
  
        const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
        console.log(result);
        const expected_result: [string, number, number][] = [ //TODO inserire expected_result corretto.
          [ 'node', 2, 1 ],
          ['(', 21, 1 ],
          ['1', 5, 1],
          [')', 22, 1],
          ['.', 7, 1],
          [ 'node', 2, 1 ] ,
          ['(', 21, 1 ],
          ['2', 5, 1],
          [')', 22, 1],
          ['.', 7, 1],
          [ 'node', 2, 1 ],
          ['(', 21, 1 ],
          ['3', 5, 1],
          [')', 22, 1],
          ['.', 7, 1],
          ['<EOF>', -1, 1]
  
        ]; //Risultato atteso
        //expect(result).to.equal(expected_result); //Asserzione
        expect(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
    }); */
});
//TODO complex program.
//# sourceMappingURL=parserTestA.js.map