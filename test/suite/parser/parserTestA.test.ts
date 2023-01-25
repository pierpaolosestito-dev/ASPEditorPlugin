import 'mocha';
import * as assert from 'assert';

import { CommonTokenStream } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from "../../../src/parser/ASPCore2Lexer";
import { tokenize } from "../../../src/parsing";

//Test
suite('Dummy test',
  () => {
    //Descrizione del risultato del test
    test('should return true', () => {
      //Corpo del test
      const result = dummy(); //Risultato della funzione da testare
      const expected_result = true; //Risultato atteso
      assert.equal(result, expected_result); //Asserzione
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
suite('tokenize positive tests',
  () => {
    //Descrizione del risultato del test
    test('Tests if an empty rule is tokenized correctly', () => {
      //Corpo del test
      const input = "";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
        ['<EOF>', -1, 1]
      ]; //Risultato atteso
      //expect(result).to.equal(expected_result); //Asserzione
      //Asserzione per controllare se due array sono uguali
      assert.deepEqual(result, expected_result);
    });
    test('Tests if a simple fact is tokenized correctly', () => {
      //Corpo del test
      const input = "node(1).";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
        ['node', 2, 1],
        ['(', 21, 1],
        ['1', 5, 1],
        [')', 22, 1],
        ['.', 7, 1],
        ['<EOF>', -1, 1]

      ]; //Risultato atteso
      //expect(result).to.equal(expected_result); //Asserzione
      assert.deepEqual(result, expected_result); //Asserzione per controllare se due array sono uguali
    });
    test('Tests if multiple facts on the same line are tokenized correctly', () => {
      //Corpo del test
      const input = "node(1).node(2).node(3).";
      const tokens = trasformText(input);

      const result: [string, number, number][] = tokenize(tokens); //Risultato della funzione da testare
      const expected_result: [string, number, number][] = [
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
      assert.deepEqual(result, expected_result); //Asserzione per controllare se due array sono uguali
    });
  });