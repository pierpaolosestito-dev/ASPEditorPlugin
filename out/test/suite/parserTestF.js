"use strict";
//I test si eseguono tramite il comando npm run tests
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulate_check_safety = exports.trasformText = exports.dummy = void 0;
const parsing_1 = require("../../src/parsing"); //Funzioni da testare
const chai_1 = require("chai");
require("mocha");
const antlr4ts_1 = require("antlr4ts");
const ANTLRInputStream_1 = require("antlr4ts/ANTLRInputStream");
const ASPCore2Lexer_1 = require("../../src/parser/ASPCore2Lexer");
const parsing_2 = require("../../src/parsing");
//Test
describe("Dummy test A", () => {
    //Descrizione del risultato del test
    it("should return true", () => {
        //Corpo del test
        const result = dummy();
        const expected_result = true; //Risultato atteso
        (0, chai_1.expect)(result).to.equal(expected_result); //Asserzione
    });
});
function dummy() {
    return true;
}
exports.dummy = dummy;
//Trasforma un input testuale in un CommonTokenStream, utilizzato nei test
function trasformText(text) {
    const input = new ANTLRInputStream_1.ANTLRInputStream(text);
    const aspLexer = new ASPCore2Lexer_1.ASPCore2Lexer(input);
    const tokens = new antlr4ts_1.CommonTokenStream(aspLexer);
    tokens.fill();
    return tokens;
}
exports.trasformText = trasformText;
function simulate_check_safety(constructs) {
    const atoms = [];
    const tails_heads = (0, parsing_1.tokenize_head_tail)(constructs, atoms);
    const result = (0, parsing_1.checkSafe)(tails_heads[0], tails_heads[1], tails_heads[2], tails_heads[3]);
    return result;
}
exports.simulate_check_safety = simulate_check_safety;
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
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = true;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests2 if this safe rule is considered safe", () => {
        //Corpo del test
        const input = POSITIVE_SAFETY_TEST.test2;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = true;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests3 if this safe rule is considered safe", () => {
        //Corpo del test
        const input = POSITIVE_SAFETY_TEST.test3;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = true;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests4 if this safe rule is considered safe", () => {
        //Corpo del test
        const input = POSITIVE_SAFETY_TEST.test4;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = true;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
});
describe("negative safety", () => {
    //Descrizione del risultato del test
    it("Tests1 if this unsafe rule is considered unsafe", () => {
        //Corpo del test
        const input = NEGATIVE_SAFETY_TEST.test1;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = false;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests2 if this unsafe rule is considered unsafe", () => {
        //Corpo del test
        const input = NEGATIVE_SAFETY_TEST.test2;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = false;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests3 if the functions return False if there isn't a rule", () => {
        //Corpo del test
        const input = NEGATIVE_SAFETY_TEST.test3;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = false;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests4 if the functions return False if there isn't a rule", () => {
        //Corpo del test
        const input = NEGATIVE_SAFETY_TEST.test4;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = false;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
    it("Tests5 if this unsafe rule is considered unsafe", () => {
        //Corpo del test
        const input = NEGATIVE_SAFETY_TEST.test5;
        const tokens = trasformText(input);
        const constructs = (0, parsing_2.tokenize)(tokens);
        const result = simulate_check_safety(constructs);
        const expected_result = false;
        (0, chai_1.expect)(result).deep.equal(expected_result);
    });
});
//# sourceMappingURL=parserTestF.js.map