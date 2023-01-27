//I test si eseguono tramite il comando npm run tests

//import { ... } from '../../src/parsing'; //Funzioni da testare
import 'mocha';
import * as assert from 'assert';
import * as vscode from 'vscode';
import { CommonTokenStream, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from '../../src/parser/ASPCore2Lexer';
import { checkIsRule, checkSafe, check_comment_or_test, countElem, input_text, tokenize, tokenize_head_tail } from '../../src/parsing';
import { ASPCore2Parser } from '../../src/parser/ASPCore2Parser';
import { createDiagnostic, createDiagnosticForAtoms, createDiagnosticForFacts, createDiagnosticForEndCommentsAndTests } from "../../src/diagnostics";
import { Interval } from 'antlr4ts/misc/Interval';


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

			await vscode.workspace.openTextDocument({
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
			})
				.then(doc => {
					value = check_comment_or_test(doc, 6);
					assert.deepEqual(value, expected_result);

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

			await vscode.workspace.openTextDocument({
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
			})
				.then(doc => {
					value = check_comment_or_test(doc, 1);
					assert.deepEqual(value, expected_result);

				});

		});
	});

/*
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

			await vscode.workspace.openTextDocument({
				language: 'asp',
				content:
					'% Given some tables of nc chairs each, generate a sitting\n' +
					'% arrangement for a number of given guests.\n' +
					'at(P,T) | not_at(P,T) :- guest(P), table(T,_).\n' +
					'% Each table must not host more than NC guests.\n' +
					':- table(T,NC), not #count{P : at(P,T)} <= NC.\n' +
					'%Each guest must be assigned one and only one table.\n' +
					':- guest(P), not #count {T : at(P,T) }=1.'
			})
				.then(doc => {
					value = check_comment_or_test(doc, 3);
					assert.deepEqual(value, expected_result);

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

			await vscode.workspace.openTextDocument({
				language: 'asp',
				content: 'object(A,10,10). \n object(B,10,5).\nobject(C,10,7).'
			})
				.then(doc => {
					value = countElem(doc, 'object');
					assert.deepEqual(value, expected_result);

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

			await vscode.workspace.openTextDocument({
				language: 'asp',
				content: 'object(A,10,10). \n% object(B,10,5).\nobject(C,10,7).'
			})
				.then(doc => {
					value = countElem(doc, 'object');
					assert.deepEqual(value, expected_result);

				});

		});
	});

suite('Error for syntax errors',
	() => {
		//Descrizione del risultato del test
		test('should show an error if there are syntax errors', async () => {
			await vscode.workspace.openTextDocument({
				content: 'node(1)\narc(1,). arc(2,1). arc(3,).\narc(1,). arc(2,1). arc(3,). %/ COMMENTO\nMULTILINEA /% node(1)'
			}).then(doc => {
				const startCharacters: number[] = [0, 0, 19, 0, 19, 13];
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const aspParser = new ASPCore2Parser(tokens);
					aspParser.removeErrorListeners();
					aspParser.addErrorListener({
						syntaxError<T>(
							recognizer: Recognizer<T, any>,
							offendingSymbol: T,
							line: number,
							charPositionInLine: number,
							msg: string,
							e: Error | undefined
						): void {
							if ((lineOfText.text.includes("/%") && lineOfText.text.search(new RegExp(`/%\\s*.+`)) != -1)
								|| (lineOfText.text.includes("**%") && lineOfText.text.search(new RegExp(`\\*\\*%\\s*.+`)) != -1)) {
								const diagnostic = createDiagnosticForEndCommentsAndTests(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error);
								diagnostics.push(diagnostic);
								const startCharacter = diagnostic.range.start.character;
								assert.strictEqual(startCharacter, startCharacters[diagnostics.length - 1]);
							}
							else {
								const diagnostic = createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error);
								diagnostics.push(diagnostic);
								const startCharacter = diagnostic.range.start.character;
								assert.strictEqual(startCharacter, startCharacters[diagnostics.length - 1]);
							}
						},
					});
					aspParser.program();
				}
				assert.strictEqual(diagnostics.length, 6);
			});
		});

		//Descrizione del risultato del test
		test('should show an error if there are syntax errors', async () => {
			await vscode.workspace.openTextDocument({
				content: 'reached(X) :- start(X)'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				const lineOfText = doc.lineAt(0);
				const tokens = trasformText(lineOfText.text);
				const aspParser = new ASPCore2Parser(tokens);
				aspParser.removeErrorListeners();
				aspParser.addErrorListener({
					syntaxError<T>(
						recognizer: Recognizer<T, any>,
						offendingSymbol: T,
						line: number,
						charPositionInLine: number,
						msg: string,
						e: Error | undefined
					): void {
						if ((lineOfText.text.includes("/%") && lineOfText.text.search(new RegExp(`/%\\s*.+`)) != -1)
							|| (lineOfText.text.includes("**%") && lineOfText.text.search(new RegExp(`\\*\\*%\\s*.+`)) != -1)) {
							const diagnostic = createDiagnosticForEndCommentsAndTests(doc, lineOfText, 0, msg, vscode.DiagnosticSeverity.Error);
							diagnostics.push(diagnostic);
							const line = diagnostic.range.start.line;
							assert.strictEqual(line, 0);
						}
						else {
							const diagnostic = createDiagnosticForFacts(doc, lineOfText, 0, charPositionInLine, msg, vscode.DiagnosticSeverity.Error);
							diagnostics.push(diagnostic);
							const line = diagnostic.range.start.line;
							assert.strictEqual(line, 0);
						}
					},
				});
				aspParser.program();
				assert.strictEqual(diagnostics.length, 1);
			});
		});

		//Descrizione del risultato del test
		test('should show an error if there are syntax errors', async () => {
			await vscode.workspace.openTextDocument({
				content: 'start(0). arc(3,2,).\ninPath(X,Y) | outPath(X,Y) : arc(X,Y).\nreached(X) :- start(X)'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const aspParser = new ASPCore2Parser(tokens);
					aspParser.removeErrorListeners();
					aspParser.addErrorListener({
						syntaxError<T>(
							recognizer: Recognizer<T, any>,
							offendingSymbol: T,
							line: number,
							charPositionInLine: number,
							msg: string,
							e: Error | undefined
						): void {
							if ((lineOfText.text.includes("/%") && lineOfText.text.search(new RegExp(`/%\\s*.+`)) != -1)
								|| (lineOfText.text.includes("**%") && lineOfText.text.search(new RegExp(`\\*\\*%\\s*.+`)) != -1)) {
								const diagnostic = createDiagnosticForEndCommentsAndTests(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Error);
								diagnostics.push(diagnostic);
								const line = diagnostic.range.start.line;
								assert.strictEqual(line, lineIndex);
							}
							else {
								const diagnostic = createDiagnosticForFacts(doc, lineOfText, lineIndex, charPositionInLine, msg, vscode.DiagnosticSeverity.Error);
								diagnostics.push(diagnostic);
								const line = diagnostic.range.start.line;
								assert.strictEqual(line, lineIndex);
							}
						},
					});
					aspParser.program();
				}
				assert.strictEqual(diagnostics.length, 3);
			});
		});
	});

suite('Warning for rule not safe',
	() => {
		//Descrizione del risultato del test
		test('should show a warning if a rule is not safe', async () => {
			await vscode.workspace.openTextDocument({
				content: 's(X) :- body.'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				const lineOfText = doc.lineAt(0);
				const tokens = trasformText(lineOfText.text);
				const constructs: [string, number, number][] = tokenize(tokens);
				const atoms: string[] = [];
				const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
				const msg = `The rule at line 0 is not safe`;
				if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
					const diagnostic = createDiagnostic(doc, lineOfText, 0, msg, vscode.DiagnosticSeverity.Warning);
					diagnostics.push(diagnostic);
					const line = diagnostic.range.start.line;
					assert.strictEqual(line, 0);
				}
				assert.strictEqual(diagnostics.length, 1); //Asserzione
			});
		});

		test('should show a warning if a rule is not safe', async () => {
			await vscode.workspace.openTextDocument({
				content: 's(Y) :- b(X), not r(X).'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				const lineOfText = doc.lineAt(0);
				const tokens = trasformText(lineOfText.text);
				const constructs: [string, number, number][] = tokenize(tokens);
				const atoms: string[] = [];
				const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
				const msg = `The rule at line 0 is not safe`;
				if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
					const diagnostic = createDiagnostic(doc, lineOfText, 0, msg, vscode.DiagnosticSeverity.Warning);
					diagnostics.push(diagnostic);
					const line = diagnostic.range.start.line;
					assert.strictEqual(line, 0);
				}
				assert.strictEqual(diagnostics.length, 1); //Asserzione
			});
		});

		test('should show a warning if a rule is not safe', async () => {
			await vscode.workspace.openTextDocument({
				content: 's(Y) :- b(X), X<Y.\ns(X) :- not r(X).'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const constructs: [string, number, number][] = tokenize(tokens);
					const atoms: string[] = [];
					const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
					const msg = `The rule at line ${lineIndex + 1} is not safe`;
					if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
						const diagnostic = createDiagnostic(doc, lineOfText, lineIndex, msg, vscode.DiagnosticSeverity.Warning);
						diagnostics.push(diagnostic);
						const line = diagnostic.range.start.line;
						assert.strictEqual(line, lineIndex);
					}
				}
				assert.strictEqual(diagnostics.length, 2); //Asserzione
			});
		});
	});

//Test
suite('Warning for atoms used only once',
	() => {
		//Descrizione del risultato del test
		test('should show a warning if an atom is used only once', async () => {
			await vscode.workspace.openTextDocument({
				content: 'node(1).\nstart(0). arc(1,2).'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const constructs: [string, number, number][] = tokenize(tokens);
					const atoms: string[] = [];
					tokenize_head_tail(constructs, atoms);
					atoms.map(atom => {
						const elem = countElem(doc, atom);
						if (elem.count === 1) {
							if (elem.line !== -1) {
								const msg = `${elem.token} is used only once`;
								const diagnostic = createDiagnosticForAtoms(doc, doc.lineAt(elem.line), elem.line, elem.token, msg, vscode.DiagnosticSeverity.Warning);
								diagnostics.push(diagnostic);
								const startCharacter = diagnostic.range.start.character;
								const endCharacter = diagnostic.range.end.character - 1;
								assert.strictEqual(startCharacter, correctStartCharacter(elem.token));
								assert.strictEqual(endCharacter, correctEndCharacter(elem.token));
							}
						}
					});
				}
				assert.strictEqual(diagnostics.length, 3); //Asserzione
			});
		});

		test('should show a warning if an atom is used only once', async () => {
			await vscode.workspace.openTextDocument({
				content: 'strategic(Y) | strategic(Z) :- produced_by(X, Y, Z).\n' +
					'strategic(W) :- controlled_by(W, X, Y, Z), strategic(X), strategic(Y), strategic(Z).'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const constructs: [string, number, number][] = tokenize(tokens);
					const atoms: string[] = [];
					tokenize_head_tail(constructs, atoms);
					atoms.map(atom => {
						const elem = countElem(doc, atom);
						if (elem.count === 1) {
							if (elem.line !== -1) {
								const msg = `${elem.token} is used only once`;
								const diagnostic = createDiagnosticForAtoms(doc, doc.lineAt(elem.line), elem.line, elem.token, msg, vscode.DiagnosticSeverity.Warning);
								diagnostics.push(diagnostic);
								const startCharacter = diagnostic.range.start.character;
								const endCharacter = diagnostic.range.end.character - 1;
								assert.strictEqual(startCharacter, correctStartCharacter(elem.token));
								assert.strictEqual(endCharacter, correctEndCharacter(elem.token));
							}
						}
					});
				}
				assert.strictEqual(diagnostics.length, 2); //Asserzione
			});
		});

		test('should show a warning if an atom is used only once', async () => {
			await vscode.workspace.openTextDocument({
				content: '%/\nVERTEX COVER\nGiven a graph, select a subset S of the vertices so that all edges are\n' +
					'covered (i.e., every edge has at least one of the two vertices in S)\n/%\n' +
					'node(1). node(2). node(3). edge(1,2). edge(1,3).\ninS(X) | outS(X) :- node(X).\n' +
					':- edge(X,Y), not inS(X), not inS(Y).'
			}).then(doc => {
				const diagnostics: vscode.Diagnostic[] = [];
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const tokens = trasformText(lineOfText.text);
					const constructs: [string, number, number][] = tokenize(tokens);
					const atoms: string[] = [];
					tokenize_head_tail(constructs, atoms);
					atoms.map(atom => {
						const elem = countElem(doc, atom);
						if (elem.count === 1) {
							if (elem.line !== -1) {
								const msg = `${elem.token} is used only once`;
								const diagnostic = createDiagnosticForAtoms(doc, doc.lineAt(elem.line), elem.line, elem.token, msg, vscode.DiagnosticSeverity.Warning);
								diagnostics.push(diagnostic);
								const startCharacter = diagnostic.range.start.character;
								const endCharacter = diagnostic.range.end.character - 1;
								const line = diagnostic.range.start.line;
								assert.strictEqual(startCharacter, correctStartCharacter(elem.token));
								assert.strictEqual(endCharacter, correctEndCharacter(elem.token));
							}
						}
					});
				}
				assert.strictEqual(diagnostics.length, 1); //Asserzione
			});
		});
	});

suite('Input to pass to the parser',
	() => {
		//Descrizione del risultato del test
		test('checks the input if something is written before a start of multiline comment/test', async () => {
			await vscode.workspace.openTextDocument({
				content: 'inTree(X,Y) | outTree(X,Y) :- edge(X,Y,C). %/ Guess the edges that are part of the tree /%'
			}).then(doc => {
				const lineOfText = doc.lineAt(0);
				const [input, runDiagnostic] = input_text(lineOfText);
				const line = input.getText(new Interval(0, input.size - 2));
				assert.strictEqual(line, "inTree(X,Y) | outTree(X,Y) :- edge(X,Y,C).");
				assert.strictEqual(runDiagnostic, true); //Asserzione
			});
		});

		test('checks the input if something is written after the end of a multiline comment/test', async () => {
			await vscode.workspace.openTextDocument({
				content: '%/ A DIRECTED GRAPH REPRESENTED BY NODE(_) AND ARC(_,_),AND A STARTING NODE START(_)\n' +
					'FIND A PATH BEGINNING AT THE STARTING NODE WHICH CONTAINS ALL NODES OF THE PATH. /% node(1). node(2). node(3). node(4).'
			}).then(doc => {
				const lineOfText = doc.lineAt(1);
				const [input, runDiagnostic] = input_text(lineOfText);
				const line = input.getText(new Interval(1, input.size - 1));
				assert.strictEqual(line, "node(1). node(2). node(3). node(4).");
				assert.strictEqual(runDiagnostic, true); //Asserzione
			});
		});

		test('checks if the input taken is correct', async () => {
			await vscode.workspace.openTextDocument({
				content: 'node(1). node(2). node(3). edge(1,2). edge(1,3).\n' +
					'inS(X) | outS(X) :- node(X).\n' +
					':- edge(X,Y), not inS(X), not inS(Y).'
			}).then(doc => {
				for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
					const lineOfText = doc.lineAt(lineIndex);
					const [input, runDiagnostic] = input_text(lineOfText);
					const line = input.getText(new Interval(0, input.size - 1));
					assert.strictEqual(line, lineOfText.text);
					assert.strictEqual(runDiagnostic, false); //Asserzione
				}
			});
		});
	});

suite("positive safety", () => {
	//Descrizione del risultato del test
	test("Tests1 if this safe rule is considered safe", () => {
		//Corpo del test
		const input = POSITIVE_SAFETY_TEST.test1;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests2 if this safe rule is considered safe", () => {
		//Corpo del test
		const input = POSITIVE_SAFETY_TEST.test2;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests3 if this safe rule is considered safe", () => {
		//Corpo del test
		const input = POSITIVE_SAFETY_TEST.test3;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests4 if this safe rule is considered safe", () => {
		//Corpo del test
		const input = POSITIVE_SAFETY_TEST.test4;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
});

suite("negative safety", () => {
	//Descrizione del risultato del test
	test("Tests1 if this unsafe rule is considered unsafe", () => {
		//Corpo del test
		const input = NEGATIVE_SAFETY_TEST.test1;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests2 if this unsafe rule is considered unsafe", () => {
		//Corpo del test
		const input = NEGATIVE_SAFETY_TEST.test2;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests3 if the functions return False if there isn't a rule", () => {
		//Corpo del test
		const input = NEGATIVE_SAFETY_TEST.test3;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests4 if the functions return False if there isn't a rule", () => {
		//Corpo del test
		const input = NEGATIVE_SAFETY_TEST.test4;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests5 if this unsafe rule is considered unsafe", () => {
		//Corpo del test
		const input = NEGATIVE_SAFETY_TEST.test5;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = simulate_check_safety(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
});

suite("positive check rule", () => {
	//Descrizione del risultato del test
	test("Tests1 if there is a rule", () => {
		//Corpo del test
		const input = POSITIVE_RULE_TEST.test1;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests2 if there is a rule", () => {
		//Corpo del test
		const input = POSITIVE_RULE_TEST.test2;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests3 if there is a rule", () => {
		//Corpo del test
		const input = POSITIVE_RULE_TEST.test3;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests4 if there is a rule", () => {
		//Corpo del test
		const input = POSITIVE_RULE_TEST.test4;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
	test("Tests5 if there is a rule", () => {
		//Corpo del test
		const input = POSITIVE_RULE_TEST.test5;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = true;
		assert.deepEqual(result, expected_result);
	});
});

suite("negative check rule", () => {
	//Descrizione del risultato del test
	test("Tests1 if there is a not rule", () => {
		//Corpo del test
		const input = NEGATIVE_RULE_TEST.test1;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests2 if there is not a rule", () => {
		//Corpo del test
		const input = NEGATIVE_RULE_TEST.test2;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests3 if there is not a rule", () => {
		//Corpo del test
		const input = NEGATIVE_RULE_TEST.test3;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});
	test("Tests4 if there is not a rule", () => {
		//Corpo del test
		const input = NEGATIVE_RULE_TEST.test4;
		const tokens = trasformText(input);
		const constructs: [string, number, number][] = tokenize(tokens);
		const result = checkIsRule(constructs);
		const expected_result = false;
		assert.deepEqual(result, expected_result);
	});

});

export function correctStartCharacter(atom: string) {
	switch (atom) {
		case "produced_by": return 31;
		case "controlled_by": return 16;
		case "outS": return 9;
		case "arc": return 10;
		default: return 0;
	}
}

export function correctEndCharacter(atom: string) {
	switch (atom) {
		case "produced_by": return 41;
		case "controlled_by": return 28;
		case "node": return 3;
		case "start": return 4;
		default: return 12;
	}
}

export function simulate_check_safety(
	constructs: [string, number, number][]
): boolean {
	const atoms: string[] = [];
	const tails_heads = tokenize_head_tail(constructs, atoms);
	const result = checkSafe(
		tails_heads[0],
		tails_heads[1],
		tails_heads[2],
		tails_heads[3]
	);
	return result;
}
const POSITIVE_SAFETY_TEST = {
	test1: "triangle(A,Z):- circle(A,Z).",
	test2: "triangle(A,Z,Y) | not triangle(A,Z,Y) :- circle(A,Z,Y).",
	test3: "triangle(A,Z,Y) :- circle(A,Z,Y), Y>30.",
	test4: "triangle(A,Z,Y) :- not figure(Y), square(A,Z,Y) Y>30.",
};

const NEGATIVE_SAFETY_TEST = {
	test1: "triangle(A,Z):- circle(A,Z), not figure(Y).",
	test2: "triangle(A,Z):- circle(A,Y).",
	test3: ":- circle(A,Y).",
	test4: "circle(A,Y).",
	test5: "triangle(A,Z,G):- circle(A,Z,G), not A(H).",
};

const POSITIVE_RULE_TEST = {
	test1: "room(A,Z):- chair(A,Y).",
	test2: "room(A,Z):- chair(A,Y), not desk(A).",
	test3: "room(A,Z) | not room(A,Z):- chair(A,Y), not desk(A).",
	test4: "room(A,Z):- chair(A,Y), A>Y.",
	test5: "room(A,Z):- chair(A,Y), A<>Y.",

};

const NEGATIVE_RULE_TEST = {
	test1: ":- not figure(Y).",
	test2: ":~ out(X),object(X,A,Y). [Y@1,X]",
	test3: ":- circle(A,Y).[Y@1,A]",
	test4: "triangle(A,Z,G).",
}; */