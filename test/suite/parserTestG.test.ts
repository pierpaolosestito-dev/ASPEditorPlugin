
import { checkIsRule, tokenize, tokenize_head_tail, checkSafe, input_text, countElem } from "../../src/parsing";
import { createDiagnostic, createDiagnosticForAtoms, createDiagnosticForFacts, createDiagnosticForEndCommentsAndTests } from "../../src/diagnostics";
import { CommonTokenStream, InputMismatchException, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from "../../src/parser/ASPCore2Lexer";
import { ASPCore2Parser } from "../../src/parser/ASPCore2Parser";
import { Interval } from "antlr4ts/misc/Interval";
import * as assert from 'assert';
import * as path from 'path';
import * as vscode from "vscode";
import 'mocha';


suite('Error for syntax errors',
  () => {
    const path_file = "../../../test/suite/testSyntaxErrors.asp";
    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const startCharacters: number[] = [0, 0, 19, 0, 19, 13];
        const diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 0; lineIndex < 4; lineIndex++) {
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
        assert.strictEqual(diagnostics.length, 6); //Asserzione
      });
    });

    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        const lineOfText = doc.lineAt(5);
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
              const diagnostic = createDiagnosticForEndCommentsAndTests(doc, lineOfText, 5, msg, vscode.DiagnosticSeverity.Error);
              diagnostics.push(diagnostic);
              const line = diagnostic.range.start.line;
              assert.strictEqual(line, 5);
            }
            else {
              const diagnostic = createDiagnosticForFacts(doc, lineOfText, 5, charPositionInLine, msg, vscode.DiagnosticSeverity.Error);
              diagnostics.push(diagnostic);
              const line = diagnostic.range.start.line;
              assert.strictEqual(line, 5);
            }
          },
        });
        aspParser.program();
        assert.strictEqual(diagnostics.length, 1); //Asserzione
      });
    });

    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 7; lineIndex < doc.lineCount; lineIndex++) {
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
        assert.strictEqual(diagnostics.length, 3); //Asserzione
      });
    });
  });

suite('Warning for rule not safe',
  () => {
    const path_file = "../../../test/suite/testRuleNotSafe.asp";
    //Descrizione del risultato del test
    test('should show a warning if a rule is not safe', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
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
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        const lineOfText = doc.lineAt(2);
        const tokens = trasformText(lineOfText.text);
        const constructs: [string, number, number][] = tokenize(tokens);
        const atoms: string[] = [];
        const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
        const msg = `The rule at line 3 is not safe`;
        if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
          const diagnostic = createDiagnostic(doc, lineOfText, 2, msg, vscode.DiagnosticSeverity.Warning);
          diagnostics.push(diagnostic);
          const line = diagnostic.range.start.line;
          assert.strictEqual(line, 2);
        }
        assert.strictEqual(diagnostics.length, 1); //Asserzione
      });
    });

    test('should show a warning if a rule is not safe', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        const lineOfText = doc.lineAt(4);
        const tokens = trasformText(lineOfText.text);
        const constructs: [string, number, number][] = tokenize(tokens);
        const atoms: string[] = [];
        const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
        const msg = `The rule at line 5 is not safe`;
        if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
          const diagnostic = createDiagnostic(doc, lineOfText, 4, msg, vscode.DiagnosticSeverity.Warning);
          diagnostics.push(diagnostic);
          const line = diagnostic.range.start.line;
          assert.strictEqual(line, 4);
        }
        assert.strictEqual(diagnostics.length, 1); //Asserzione
      });
    });
  });

//Test
suite('Warning for atoms used only once',
  () => {
    const path_file = "../../../test/suite/testAtoms.asp";
    //Descrizione del risultato del test
    test('should show a warning if an atom is used only once', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 0; lineIndex < 2; lineIndex++) {
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
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        //let warning = 0;
        const diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 3; lineIndex < 5; lineIndex++) {
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
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const diagnostics: vscode.Diagnostic[] = [];
        for (let lineIndex = 6; lineIndex < doc.lineCount; lineIndex++) {
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
    const path_file = "../../../test/suite/testInputText.asp";
    //Descrizione del risultato del test
    test('checks the input if something is written before a start of multiline comment/test', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const lineOfText = doc.lineAt(0);
        const [input, runDiagnostic] = input_text(lineOfText);
        const line = input.getText(new Interval(0, input.size - 2));
        assert.strictEqual(line, "inTree(X,Y) | outTree(X,Y) :- edge(X,Y,C).");
        assert.strictEqual(runDiagnostic, true); //Asserzione
      });
    });

    test('checks the input if something is written after the end of a multiline comment/test', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        const lineOfText = doc.lineAt(3);
        const [input, runDiagnostic] = input_text(lineOfText);
        const line = input.getText(new Interval(1, input.size - 1));
        assert.strictEqual(line, "node(1). node(2). node(3). node(4).");
        assert.strictEqual(runDiagnostic, true); //Asserzione
      });
    });

    test('checks if the input taken is correct', async () => {
      await vscode.workspace.openTextDocument(path.resolve(__dirname, path_file)).then(doc => {
        for (let lineIndex = 5; lineIndex < doc.lineCount; lineIndex++) {
          const lineOfText = doc.lineAt(lineIndex);
          const [input, runDiagnostic] = input_text(lineOfText);
          const line = input.getText(new Interval(0, input.size - 1));
          assert.strictEqual(line, lineOfText.text);
          assert.strictEqual(runDiagnostic, false); //Asserzione
        }
      });
    });

  });

//Trasforma un input testuale in un CommonTokenStream, utilizzato nei test
export function trasformText(text: string) {
  const input = new ANTLRInputStream(text);
  const aspLexer = new ASPCore2Lexer(input);
  const tokens = new CommonTokenStream(aspLexer);
  tokens.fill();
  return tokens;
}

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
    case "node1": return 4;
    case "start": return 4;
    default: return 12;
  }
}