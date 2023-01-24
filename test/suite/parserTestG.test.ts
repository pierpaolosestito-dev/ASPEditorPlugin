//I test si eseguono tramite il comando npm run tests

//import { cre } from '../../src/diagnostics'; //Funzioni da testare
import { checkIsRule, tokenize, tokenize_head_tail, checkSafe } from "../../src/parsing";
import { CommonTokenStream, InputMismatchException, Recognizer } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from "../../src/parser/ASPCore2Lexer";
import { ASPCore2Parser } from "../../src/parser/ASPCore2Parser";
import { Interval } from "antlr4ts/misc/Interval";
import * as assert from 'assert';
import 'mocha';


suite('Error for syntax errors',
  () => {
    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', () => {
      const input = "node(1)\narc(1,). arc(2,1). arc(3,).";
      let diagnostic = 0;
      const startCharacters: number[] = [0, 0, 19];
      input.split(/\r?\n/).forEach((lineOfText) => {
        const tokens = trasformText(lineOfText);
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
            if (msg.includes("no viable alternative at input")) {
              const error = msg.split("'");
              const startCharacter = lineOfText.indexOf(error[1]);
              assert.strictEqual(startCharacter, startCharacters[diagnostic - 1]);
            }
          },
        });
        aspParser.program();
      });
      assert.strictEqual(diagnostic, 3); //Asserzione
    });

    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', () => {
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
      assert.strictEqual(diagnostic, 1); //Asserzione
    });

    //Descrizione del risultato del test
    test('should show an error if there are syntax errors', () => {
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
      assert.strictEqual(diagnostic, 3); //Asserzione
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
      assert.strictEqual(warning, true); //Asserzione
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
      assert.strictEqual(warning, true); //Asserzione
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
      assert.strictEqual(warning, true); //Asserzione
    });
  });

//Test
suite('Warning for atoms used only once',
  () => {
    //Descrizione del risultato del test
    test('should show a warning if an atom is used only once', () => {
      const input = "node(1).\nstart(0). arc(1,2).";
      let warning = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
        const constructs: [string, number, number][] = tokenize(tokens);
        const atoms: string[] = [];
        tokenize_head_tail(constructs, atoms);
        atoms.map(atom => {
          const elem = countElem(input, atom);
          if (elem.count === 1) {
            if (elem.line !== -1) {
              warning += 1;
              const regex_for_atom = new RegExp(`${atom}\\b`, "g");
              const startCharacter = line.search(regex_for_atom);
              const endCharacter = startCharacter + (atom.length - 1);
              //console.log("ATOM: ", atom, "startCharacter: ", startCharacter, "endCharacter: ", endCharacter);
              assert.strictEqual(startCharacter, correctStartCharacter(atom));
              assert.strictEqual(endCharacter, correctEndCharacter(atom));
            }
          }
        });
      });
      assert.strictEqual(warning, 3); //Asserzione
    });

    test('should show a warning if an atom is used only once', () => {
      const input = `strategic(Y) | strategic(Z) :- produced_by(X, Y, Z).
strategic(W) :- controlled_by(W, X, Y, Z), strategic(X), strategic(Y), strategic(Z).`;
      let warning = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
        const constructs: [string, number, number][] = tokenize(tokens);
        const atoms: string[] = [];
        tokenize_head_tail(constructs, atoms);
        atoms.map(atom => {
          const elem = countElem(input, atom);
          if (elem.count === 1) {
            if (elem.line !== -1) {
              warning += 1;
              const regex_for_atom = new RegExp(`${atom}\\b`, "g");
              const startCharacter = line.search(regex_for_atom);
              const endCharacter = startCharacter + (atom.length - 1);
              //console.log("ATOM: ", atom, "startCharacter: ", startCharacter, "endCharacter: ", endCharacter);
              assert.strictEqual(startCharacter, correctStartCharacter(atom));
              assert.strictEqual(endCharacter, correctEndCharacter(atom));
            }
          }
        });
      });
      assert.strictEqual(warning, 2); //Asserzione
    });

    test('should show a warning if an atom is used only once', () => {
      const input = "%/\n" +
        "VERTEX COVER\n" +
        "-------------------------------------------------------------------------------\n" +
        "Given a graph, select a subset S of the vertices so that all edges are\n" +
        "covered (i.e., every edge has at least one of the two vertices in S)\n" +
        "/%\n" +
        "node(1). node(2). node(3). edge(1,2). edge(1,3).\n" +
        "inS(X) | outS(X) :- node(X).\n" +
        ":- edge(X,Y), not inS(X), not inS(Y).";
      let warning = 0;
      input.split(/\r?\n/).forEach((line) => {
        const tokens = trasformText(line);
        const constructs: [string, number, number][] = tokenize(tokens);
        const atoms: string[] = [];
        tokenize_head_tail(constructs, atoms);
        atoms.map(atom => {
          const elem = countElem(input, atom);
          if (elem.count === 1) {
            if (elem.line !== -1) {
              warning += 1;
              const regex_for_atom = new RegExp(`${atom}\\b`, "g");
              const startCharacter = line.search(regex_for_atom);
              const endCharacter = startCharacter + (atom.length - 1);
              //console.log("ATOM: ", atom, "startCharacter: ", startCharacter, "endCharacter: ", endCharacter);
              assert.strictEqual(startCharacter, correctStartCharacter(atom));
              assert.strictEqual(endCharacter, correctEndCharacter(atom));
            }
          }
        });
      });
      assert.strictEqual(warning, 1); //Asserzione
    });
  });

suite('Input to pass to the parser',
  () => {
    //Descrizione del risultato del test
    test('checks the input if something is written before a start of multiline comment/test', () => {
      const text = "at(P,T) | not_at(P,T) :- guest(P), table(T,_). %/ arrangement for a number of given guests. /%";
      const [input, runDiagnostic] = input_text(text);
      const line = input.getText(new Interval(0, input.size - 2));
      assert.strictEqual(line, "at(P,T) | not_at(P,T) :- guest(P), table(T,_).");
      assert.strictEqual(runDiagnostic, true); //Asserzione
    });

    test('checks the input if something is written after the end of a multiline comment/test', () => {
      const text = "%/ A directed graph represented by node(_) and arc(_,_),and a starting node start(_).\n" +
        "Find a path beginning at the starting node which contains all nodes of the graph. /% node(1). node(2). node(3). node(4).";
      const [input, runDiagnostic] = input_text(text);
      const line = input.getText(new Interval(1, input.size - 1));
      assert.strictEqual(line, "node(1). node(2). node(3). node(4).");
      assert.strictEqual(runDiagnostic, true); //Asserzione
    });

    test('checks if the input taken is correct', () => {
      const text = "node(1). node(2). node(3). edge(1,2). edge(1,3).\n" +
        "inS(X) | outS(X) :- node(X).\n" +
        ":- edge(X,Y), not inS(X), not inS(Y).";
      text.split(/\r?\n/).forEach((lineOfText) => {
        const [input, runDiagnostic] = input_text(lineOfText);
        const line = input.getText(new Interval(0, input.size - 1));
        assert.strictEqual(line, lineOfText.replace("\n", ""));
        assert.strictEqual(runDiagnostic, false); //Asserzione
      });
    });
  });

export function input_text(lineOfText: string) {
  if ((lineOfText.includes("%/") && !lineOfText.startsWith("%/")) || (lineOfText.includes("%**") && !lineOfText.startsWith("%**"))) {
    let splitText = undefined;
    if (lineOfText.includes("%/")) {
      splitText = lineOfText.split("%/");
    }
    else {
      splitText = lineOfText.split("%**");
    }
    return [new ANTLRInputStream(splitText[0]), true] as const;
  }
  if ((lineOfText.includes("/%") && !lineOfText.endsWith("/%")) || (lineOfText.includes("**%") && !lineOfText.endsWith("**%"))) {
    let splitText = undefined;
    if (lineOfText.includes("/%")) {
      splitText = lineOfText.split("/%");
    }
    else {
      splitText = lineOfText.split("**%");
    }
    return [new ANTLRInputStream(splitText[1]), true] as const;
  }
  return [new ANTLRInputStream(lineOfText), false] as const;
}
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
      if ((result?.check === false && !text_line.includes("not"))) {
        found_at_line = lineIndex;
        count += count_iter;
      }
      else if (result?.check === true || (result.index_end !== -1 || result.index_end !== -1)) {
        if (result.index_end == -1) {

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
  const doc: string[] = [];
  input.split(/\r?\n/).forEach((lineOfText) => {
    doc.push(lineOfText);
  });
  for (let lineIndex = 0; lineIndex < doc.length; lineIndex++) {
    const lineOfText = doc[lineIndex];
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

    if (lineOfText.includes(single_comment)
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
  }
  return {
    'check': check,
    'line': line,
    'index_start': index_start,
    'index_end': index_end,
    'line_start': line_start,
    'line_end': line_end
  };
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
    case "start": return 4;
    default: return 12;
  }
}

//Trasforma un input testuale in un CommonTokenStream, utilizzato nei test
export function trasformText(text: string) {
  const input = new ANTLRInputStream(text);
  const aspLexer = new ASPCore2Lexer(input);
  const tokens = new CommonTokenStream(aspLexer);
  tokens.fill();
  return tokens;
}