//I test si eseguono tramite il comando npm run tests

//import { ... } from '../../src/parsing'; //Funzioni da testare
import { expect } from 'chai';
import 'mocha';

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
  return tokens;
}

//Test
describe('tokenize positive test 1',
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

      expect(result).to.equal(expected_result); //Asserzione
  });
});


//Testing tokenize and tokenize_head_tail.