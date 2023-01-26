import * as assert from 'assert';
import 'mocha';

import * as vscode from 'vscode';
import { check_comment_or_test, countElem } from '../../src/parsing';

suite('Test find line in comment',
  () => {
    //Descrizione del risultato del test
    test('should return true if the line is in comment', async () => {

      const expected_result = {
        'check': true,
        'index_start': 0,
        'index_end': -1,
        'line_end': -1,
        'line_start': 4
      }; //Risultato atteso

		let value;
  
	await vscode.workspace.openTextDocument( {
    language: 'asp',
		content: 
    'in(X)|out(X) :- object(X,_,_).\n' +
    ':- capacity(C), not #sum{Y,X : object(X,Y,_), in(X)} <= C.\n' +
    ':~ out(X),object(X,_,Y). [Y@1,X]\n' +
    '\n' +
    '%/ SEATING\n' +
    '----------------------------------------------------------------------------------------------\n' +
    'A gala dinner has to be organized and table composition must satisfy a number of requirements:\n' +
    '\n' +
    '- Each table T has a given number of chairs.\n' +
    '- Each guest must be assigned one and only one table.\n' +
    '- People liking each other should sit at the same table.\n' +
    '- People disliking each other should not sit at the same table./%\n' +
    '\n' +
    'table(T,NC).'
	} )
	.then( doc => {
		value = check_comment_or_test(doc, 6);
		assert.deepEqual(value,expected_result);
	
  });

    });
  });


  suite('Test find line in test',
  () => {
    //Descrizione del risultato del test
    test('should return true if line is in test', async () => {

      const expected_result = {
        'check': true,
        'index_start': 0,
        'index_end': -1,
        'line_end': -1,
        'line_start': 0
      }; //Risultato atteso

		let value;
  
	await vscode.workspace.openTextDocument( {
    language: 'asp',
		content: 
    '%** prova\n' +
    '@test(name = "test_01",\n' +
    'scope = {"block01"},\n' +
    'input = "b(1). c(1). b(2). c(3).",\n' +
    'assert = {\n' +
    '@isAnswerSet (set = "b(1). c(1). b(2). c(3). a(1). a(3).")\n' +
    '}\n' +
    'prova ciao**%'
	} )
	.then( doc => {
		value = check_comment_or_test(doc, 1);
		assert.deepEqual(value,expected_result);
	
  });

    });
  });


  suite('Test find line in single comment',
  () => {
    //Descrizione del risultato del test
    test('should return true if line is in single comment', async () => {

      const expected_result = {
        'check': true,
        'index_start': 0,
        'index_end': -1,
        'line_end': -1,
        'line_start': -1
      }; //Risultato atteso

		let value;
  
	await vscode.workspace.openTextDocument( {
    language: 'asp',
		content: 
    '% Given some tables of nc chairs each, generate a sitting\n' +
    '% arrangement for a number of given guests.\n' +
    'at(P,T) | not_at(P,T) :- guest(P), table(T,_).\n' +
    '% Each table must not host more than NC guests.\n' +
    ':- table(T,NC), not #count{P : at(P,T)} <= NC.\n' +
    '%Each guest must be assigned one and only one table.\n' +
    ':- guest(P), not #count {T : at(P,T) }=1.'
	} )
	.then( doc => {
		value = check_comment_or_test(doc, 3);
		assert.deepEqual(value,expected_result);
	
  });

    });
  });


  suite('Test count token in document',
  () => {
    //Descrizione del risultato del test
    test('should return the occurences of a token in token', async () => {

      const expected_result = {
        'token': 'object', 
        'line': 2, 
        'count': 3
      }; //Risultato atteso

		let value;
  
	await vscode.workspace.openTextDocument( {
    language: 'asp',
		content: 'object(A,10,10). \n object(B,10,5).\nobject(C,10,7).'
	} )
	.then( doc => {
		value = countElem(doc, 'object');
		assert.deepEqual(value,expected_result);
	
  });

    });
  });


  suite('Test count token in document with comment',
  () => {
    //Descrizione del risultato del test
    test('should return the occurences of a token in document with comment', async () => {

      const expected_result = {
        'token': 'object', 
        'line': 2, 
        'count': 2
      }; //Risultato atteso

		let value;
  
	await vscode.workspace.openTextDocument( {
    language: 'asp',
		content: 'object(A,10,10). \n% object(B,10,5).\nobject(C,10,7).'
	} )
	.then( doc => {
		value = countElem(doc, 'object');
		assert.deepEqual(value,expected_result);
	
  });

    });
  });