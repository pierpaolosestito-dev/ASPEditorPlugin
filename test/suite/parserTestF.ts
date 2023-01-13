//I test si eseguono tramite il comando npm run tests

import { checkSafe, tokenize_head_tail } from "../../src/parsing"; //Funzioni da testare
import { expect } from "chai";
import "mocha";
import * as assert from "assert";

import { CommonTokenStream } from "antlr4ts";
import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { ASPCore2Lexer } from "../../src/parser/ASPCore2Lexer";
import { tokenize } from "../../src/parsing";
import { type } from "os";

//Test
describe("Dummy test A", () => {
  //Descrizione del risultato del test
  it("should return true", () => {
    //Corpo del test
    const result = dummy();
    const expected_result = true; //Risultato atteso
    expect(result).to.equal(expected_result); //Asserzione
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

describe("positive safety", () => {
  //Descrizione del risultato del test
  it("Tests1 if this safe rule is considered safe", () => {
    //Corpo del test
    const input = POSITIVE_SAFETY_TEST.test1;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = true;
    expect(result).deep.equal(expected_result);
  });
  it("Tests2 if this safe rule is considered safe", () => {
    //Corpo del test
    const input = POSITIVE_SAFETY_TEST.test2;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = true;
    expect(result).deep.equal(expected_result);
  });
  it("Tests3 if this safe rule is considered safe", () => {
    //Corpo del test
    const input = POSITIVE_SAFETY_TEST.test3;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = true;
    expect(result).deep.equal(expected_result);
  });
  it("Tests4 if this safe rule is considered safe", () => {
    //Corpo del test
    const input = POSITIVE_SAFETY_TEST.test4;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = true;
    expect(result).deep.equal(expected_result);
  });
});

describe("negative safety", () => {
  //Descrizione del risultato del test
  it("Tests1 if this unsafe rule is considered unsafe", () => {
    //Corpo del test
    const input = NEGATIVE_SAFETY_TEST.test1;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = false;
    expect(result).deep.equal(expected_result);
  });
  it("Tests2 if this unsafe rule is considered unsafe", () => {
    //Corpo del test
    const input = NEGATIVE_SAFETY_TEST.test2;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = false;
    expect(result).deep.equal(expected_result);
  });
  it("Tests3 if the functions return False if there isn't a rule", () => {
    //Corpo del test
    const input = NEGATIVE_SAFETY_TEST.test3;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = false;
    expect(result).deep.equal(expected_result);
  });
  it("Tests4 if the functions return False if there isn't a rule", () => {
    //Corpo del test
    const input = NEGATIVE_SAFETY_TEST.test4;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = false;
    expect(result).deep.equal(expected_result);
  });
  it("Tests5 if this unsafe rule is considered unsafe", () => {
    //Corpo del test
    const input = NEGATIVE_SAFETY_TEST.test5;
    const tokens = trasformText(input);
    const constructs: [string, number, number][] = tokenize(tokens);
    const result = simulate_check_safety(constructs);
    const expected_result = false;
    expect(result).deep.equal(expected_result);
  });
});
