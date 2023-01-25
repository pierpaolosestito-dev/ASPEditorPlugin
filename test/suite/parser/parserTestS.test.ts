//I test si eseguono tramite il comando npm run tests

import * as assert from 'assert';
import 'mocha';

import * as vscode from 'vscode';
import { check_comment_or_test } from '../../../src/parsing';

//Test
/* suite('Test find line in comment or test',
  () => {
    //Descrizione del risultato del test
    test('should return true if line is in comment or test', () => {
      //Corpo del test
      const result = find_line_in_comment_or_test(); //Risultato della funzione da testare
      const expected_result = {
        'check': true,
        'index_start': 0,
        'index_end': -1,
        'line': 1
      }; //Risultato atteso

      assert.deepEqual(result,expected_result);
    });
  });

export function find_line_in_comment_or_test() {
  vscode.workspace.openTextDocument({
    language: 'text',
    content: '%/ prima riga\n seconda riga\n ultima riga /%'
  })
    .then(doc => {
      return check_comment_or_test(doc, 1);
    });

} */