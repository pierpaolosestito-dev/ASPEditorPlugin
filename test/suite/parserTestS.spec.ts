//I test si eseguono tramite il comando npm run tests

//import { ... } from '../../src/parsing'; //Funzioni da testare
import { expect } from 'chai';
import 'mocha';

//Test
describe('Dummy test S',
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

/*

//Test
describe('Test find line in comment or test', 
 () => { 
 //Descrizione del risultato del test
 it('should return true if line is in comment or test', () => {
 //Corpo del test
 const result = find_line_in_comment_or_test(); //Risultato della funzione da testare
 const expected_result = {
 'check': true,
 'index_start': 0,
 'index_end': -1,
 'line': 1
 }; //Risultato atteso
 expect(result).deep.equal(expected_result);
 }); 
});
 
export function find_line_in_comment_or_test(){
 vscode.workspace.openTextDocument( {
 language: 'text',
 content: '%/ prima riga\n seconda riga\n ultima riga /%'
 } )
 .then( doc => {
 return check_comment_or_test(doc, 1);
 });
 
 */ /*return {
 'check': true,
 'index_start': 0, 
 'index_end': 2,
 'line': 1
 };
 }
 */
