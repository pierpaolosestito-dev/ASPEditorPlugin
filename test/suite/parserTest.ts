//I test si eseguono tramite il comando npm run tests

//import { helloTest } from '../src/hello-test'; //Funzione da testare
import { expect } from 'chai';
import 'mocha';

//Test
describe('Dummy test', 
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

/*Funzioni da testare :
check_comment_or_test
countElem
checkIsRule
checkSafe
funzione che andrà nel for dentro refreshDiagnostics */