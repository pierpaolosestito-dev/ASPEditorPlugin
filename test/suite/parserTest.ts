//import { helloTest } from '../src/hello-test'; //Funzione da testare
import { expect } from 'chai';
import 'mocha';

//Test
describe('Dummy test', 
  () => { 
	//Descrizione del risultato del test
    it('should return true', () => {
		//Corpo del test
      const result = dummy();
      expect(result).to.equal(true); 
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