//I test si eseguono tramite il comando npm run tests

//import { ... } from '../../src/parsing'; //Funzioni da testare
import { expect } from 'chai';
import 'mocha';
import * as fs from 'fs';

import { CommonTokenStream } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from '../../src/parser/ASPCore2Lexer';
import { tokenize } from '../../src/parsing';
import { type } from 'os';

//Test
describe('Dummy test A',
  () => {
    //Descrizione del risultato del test
    it('should return true', () => {
      //Corpo del test
      const result = dummy(); //Risultato della funzione da testare
      const expected_result = true; //Risultato atteso
      expect(result).to.equal(expected_result); //Asserzione
    });
  });

export function dummy() {
  return true;
}

//Trasforma un input testuale in un CommonTokenStream, utilizzato nei test
export function trasformText(text: string) {
  const input = new ANTLRInputStream(text);
  const aspLexer = new ASPCore2Lexer(input);
  const tokens = new CommonTokenStream(aspLexer);
  tokens.fill();
  return tokens;
}

//Test
describe('tokenize positive tests',
  () => {
  //Descrizione del risultato del test
    it('Tests if an empty rule is tokenized correctly', () => {
    //Corpo del test
      const input = "";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
        [ '<EOF>', -1, 1 ]
      ]; //Risultato atteso
      //expect(result).to.equal(expected_result); //Asserzione
      expect(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
  });
  it('Tests if a simple fact is tokenized correctly', () => {
    //Corpo del test
      const input = "node(1).";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
        [ 'node', 2, 1 ], 
        ['(', 21, 1 ],
        ['1', 5, 1],
        [')', 22, 1],
        ['.', 7, 1],
        ['<EOF>', -1, 1]

      ]; //Risultato atteso
      //expect(result).to.equal(expected_result); //Asserzione
      expect(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
  });
  it('Tests if multiple facts on the same line are tokenized correctly', () => {
    //Corpo del test
      const input = "node(1).node(2).node(3).";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
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
  });
  it('Tests if multiple facts on multiple lines are tokenized correctly', () => {
    //Corpo del test
      const input = fs.readFileSync('./test/suite/test.asp', 'utf-8');
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      console.log(result);
      const expected_result: [string, number, number][] = [
        [ 'node', 2, 1], 
        ['(', 21, 1],
        ['1', 5, 1],
        [')', 22, 1],
        ['.', 7, 1],
        [ 'node', 2, 1] , 
        ['(', 21, 1 ],
        ['2', 5, 1],
        [')', 22, 1],
        ['.', 7, 1],
        [ 'node', 2, 2 ], 
        ['(', 21, 2],
        ['3', 5, 2],
        [')', 22, 2],
        ['.', 7, 2],
        ['<EOF>', -1, 2]

      ]; //Risultato atteso
      //expect(result).to.equal(expected_result); //Asserzione
      expect(result).deep.equal(expected_result); //Asserzione per controllare se due array sono uguali
  });
});

//TODO Testing tokenize : multiple facts on a multiple lines of text(read from file maybe), simple rule, 
//more rules on a simple line of text, complex program.