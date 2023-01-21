//I test si eseguono tramite il comando npm run tests

//import { cre } from '../../src/diagnostics'; //Funzioni da testare
import { checkIsRule, tokenize, tokenize_head_tail, checkSafe } from "../../src/parsing";
import { CommonTokenStream, InputMismatchException, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from "../../src/parser/ASPCore2Lexer";
import { ASPCore2Parser } from "../../src/parser/ASPCore2Parser";
import * as fs from 'fs';
import * as assert from 'assert';
import 'mocha';

suite('Errors to show to the user',
  () => {
    //Descrizione del risultato del test
    test('should show the errors on the document', () => {
      const input = "arc(1,).\narc(2)";
      let diagnostic = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
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
            diagnostic += 1;
          },
        });
        aspParser.program();
      });
      assert.strictEqual(diagnostic,2); //Asserzione
    });

    //Descrizione del risultato del test
    test('should show the errors on the document', () => {
      const input = "reached(X) :- start(X)";
      let diagnostic = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
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
            diagnostic += 1;
          },
        });
        aspParser.program();
      });
      assert.strictEqual(diagnostic,1); //Asserzione
    });

    //Descrizione del risultato del test
    test('should show the errors on the document', () => {
      const input = "start(0). arc(3,2,).\ninPath(X,Y) | outPath(X,Y) : arc(X,Y).\nreached(X) :- start(X)";
      let diagnostic = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
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
            diagnostic += 1;
          },
        });
        aspParser.program();
      });
      assert.strictEqual(diagnostic,3); //Asserzione
    });
  });

suite('Warning for rule not safe',
  () => {
    //Descrizione del risultato del test
    test('should show a warning if a rule is not safe', () => {
      let warning = false;
      const input = "s(X) :- body";
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
        warning = true;
      }
      assert.strictEqual(warning,true); //Asserzione
    });

    test('should show a warning if a rule is not safe', () => {
      let warning = false;
      const input = "s(Y) :- b(X), not r(X).";
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
        warning = true;
      }
      assert.strictEqual(warning,true); //Asserzione
    });

    test('should show a warning if a rule is not safe', () => {
      let warning = false;
      const input = "s(Y) :- b(X), X<Y.";
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      if (!checkSafe(heads, tails, tails_negative, tails_in_symbols) && checkIsRule(constructs)) {
        warning = true;
      }
      assert.strictEqual(warning,true); //Asserzione
    });
  });

//Test
suite('Warning for atoms used only once',
  () => {
    //Descrizione del risultato del test
    test('should show a warning if an atom is used only once', () => {
      const input = "node(1).\nprova(1). ciao(2).";
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      let warning = 0;
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      atoms.map(atom => {
        const elem = countElem(input, atom);
        if (elem.count === 1) {
          if (elem.line !== -1) {
            warning += 1;
          }
        }
      });
      assert.strictEqual(warning,3); //Asserzione
    });

    test('should show a warning if an atom is used only once', () => {
      const input = `strategic(Y) | strategic(Z) :- produced_by(X, Y, Z).
strategic(W) :- controlled_by(W, X, Y, Z), strategic(X), strategic(Y), strategic(Z).`;
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      let warning = 0;
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      atoms.map(atom => {
        const elem = countElem(input, atom);
        if (elem.count === 1) {
          if (elem.line !== -1) {
            warning += 1;
          }
        }
      });
      assert.strictEqual(warning,2); //Asserzione
    });

    test('should show a warning if an atom is used only once', () => {
      const input = fs.readFileSync("./test/suite/testAtoms.asp", "utf-8");
      const tokens = trasformText(input);
      const constructs: [string, number, number][] = tokenize(tokens);
      const atoms: string[] = [];
      let warning = 0;
      const [heads, tails, tails_negative, tails_in_symbols] = tokenize_head_tail(constructs, atoms);
      atoms.map(atom => {
        const elem = countElem(input, atom);
        if (elem.count === 1) {
          if (elem.line !== -1) {
            warning += 1;
          }
        }
      });
      assert.strictEqual(warning,2); //Asserzione
    });
  });

export function countElem(input: string, token: string) {
  let count = 0;
  let lineIndex = 0;
  let found_at_line = -1;
  input.split(/\r?\n/).forEach((text_line) => {
    const result = check_comment_or_test(input, lineIndex);
    const regex_for_token = new RegExp(`\\b${token}\\b`, "g");
    const count_iter = (text_line.match(regex_for_token) || []).length;

    const regex_for_builtins = new RegExp(`\\W*&\\s*${token}\\W+`, "g");
    const skip_match_builtins = (text_line.match(regex_for_builtins) || []).length;

    if (count_iter !== 0 && skip_match_builtins === 0) {
      const index_of_token = text_line.search(regex_for_token);
      if ((result?.check === false && !text_line.includes("not"))) {  // Non ci sono commenti e ho trovato il token
        found_at_line = lineIndex;
        count += count_iter;
      }
      else if (result?.check === true || (result.index_end !== -1 || result.index_end !== -1)) { // Ci sono commenti
        if (result.index_end == -1) { // caso del single_comment % o aperture senza chiusura

          if (index_of_token < result.index_start && lineIndex <= result.line_start && result.line_start !== -1) {
            count += count_iter;
            found_at_line = lineIndex;
          }
        }
        else if ((
          index_of_token < result.index_start && result.line_start >= lineIndex)
          || (index_of_token > result.index_end && (lineIndex >= result.line_end && result.line_end !== -1))) { // nel caso sia prima o dopo un blocco di commenti/test multiline
          count += count_iter;
          if (found_at_line < lineIndex) {
            found_at_line = lineIndex;
          }
        }
      }
    }
    lineIndex += 1;
  });
  return { 'token': token, 'line': found_at_line, 'count': count };
}

export function check_comment_or_test(input: string, line: number) {
  let check = false;
  let index_start = -1;
  let index_end = -1;
  const startComment = '%/';
  const endComment = '/%';
  const startTest = '%**';
  const endTest = '**%';
  const single_comment = '%';
  let line_start = -1;
  let line_end = -1;
  let lineIndex = 0;

  input.split(/\r?\n/).forEach((lineOfText) => {
    let single = false;
    const line2 = line;

    if (lineOfText.includes(startComment) && !check) {
      index_start = lineOfText.indexOf(startComment);
      line_start = lineIndex;
      index_end = -1;
      check = true;
    }
    if (lineOfText.includes(endComment)) {
      index_end = lineOfText.indexOf(endComment);
      line_end = lineIndex;
      check = false;
    }

    if (lineOfText.includes(startTest) && !check) {
      index_end = -1;
      index_start = lineOfText.indexOf(startTest);
      line_start = lineIndex;
      check = true;

    }

    if (lineOfText.includes(endTest)) {
      index_end = lineOfText.indexOf(endTest);
      line_end = lineIndex;

      check = false;

    }

    if (lineOfText.includes(single_comment) // %/
      && !check
      && !lineOfText.includes(startComment)
      && !lineOfText.includes(endComment)
      && !lineOfText.includes(startTest)
      && !lineOfText.includes(endTest)) {
      index_start = lineOfText.indexOf(single_comment);
      single = true;
      index_end = -1;
    }

    if (line == lineIndex) {
      let temp_check = check;
      if (single) {
        temp_check = true;
      }
      // FATTO PER AVERE LA SAFETY DI UNA REGOLA SCRITTA SULLA STESSA RIGA DI UN INIZIO-FINE COMMENTO O TEST.
      if ((lineOfText.includes(startComment) && !lineOfText.startsWith(startComment)) || (lineOfText.includes(startTest) && !lineOfText.startsWith(startTest))
        || (lineOfText.includes(endComment) && !lineOfText.endsWith(endComment)) || (lineOfText.includes(endTest) && !lineOfText.endsWith(endTest))
      ) {
        temp_check = false;
      }

      return {
        'check': temp_check,
        'index_start': index_start,
        'index_end': index_end,
        'line_start': line_start,
        'line_end': line_end
      };
    }
    lineIndex += 1;
  });
  return {
    'check': check,
    'line': line,
    'index_start': index_start,
    'index_end': index_end,
    'line_start': line_start,
    'line_end': line_end
  };

}

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