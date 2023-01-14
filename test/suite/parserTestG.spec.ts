//I test si eseguono tramite il comando npm run tests

//import { ... } from '../../src/parsing'; //Funzioni da testare
import { expect } from 'chai';
import 'mocha';

//Test
describe('Dummy test G', 
  () => { 
	//Descrizione del risultato del test
    it('should return true', () => {
		//Corpo del test
      const result = dummy(); //Risultato della funzione da testare
      const expected_result = true; //Risultato atteso
      expect(result).to.equal(expected_result); //Asserzione
  }); 
});

export function dummy(){
    return true;
}