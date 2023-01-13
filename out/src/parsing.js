"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize_head_tail = exports.tokenize = exports.checkSafe = exports.checkIsRule = exports.countElem = exports.check_comment_or_test = void 0;
const ASPCore2Lexer_1 = require("./parser/ASPCore2Lexer");
/*
    This function checks if the line of text contains comments or tests,
    Returns an object containing:
    check: a boolean variable that is true if the line of text contains a comment or test,
    index_start: the line index that signals the start of the comment/test,
    index_end: the line index that signals the end of the comment/test,
    line: the line of text that has been checked by the function.
*/
function check_comment_or_test(doc, line) {
    let check = false;
    let index_start = -1;
    let index_end = -1;
    const startComment = '%/';
    const endComment = '/%';
    const startTest = '%**';
    const endTest = '**%';
    const single_comment = '%';
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        let single = false;
        const line2 = line;
        const lineOfText = doc.lineAt(lineIndex);
        if (lineOfText.text.includes(startComment) && !check) {
            index_start = lineOfText.text.indexOf(startComment);
            index_end = -1;
            check = true;
        }
        if (lineOfText.text.includes(endComment)) {
            index_end = lineOfText.text.indexOf(endComment);
            check = false;
        }
        if (lineOfText.text.includes(startTest) && !check) {
            index_end = -1;
            index_start = lineOfText.text.indexOf(startTest);
            check = true;
        }
        if (lineOfText.text.includes(endTest)) {
            index_end = lineOfText.text.indexOf(endTest);
            check = false;
        }
        if (lineOfText.text.includes(single_comment) // %/
            && !check
            && !lineOfText.text.includes(startComment)
            && !lineOfText.text.includes(endComment)
            && !lineOfText.text.includes(startTest)
            && !lineOfText.text.includes(endTest)) {
            index_start = lineOfText.text.indexOf(single_comment);
            single = true;
            index_end = -1;
        }
        if (line == lineIndex) {
            let temp_check = check;
            if (single) {
                temp_check = true;
            }
            return {
                'check': temp_check,
                'index_start': index_start,
                'index_end': index_end,
                'line': line
            };
        }
    }
    return {
        'check': check,
        'line': line,
        'index_start': index_start,
        'index_end': index_end
    };
}
exports.check_comment_or_test = check_comment_or_test;
// Restituisce il token, la linea e la frequenza
function countElem(doc, token) {
    let count = 0;
    let found_at_line = -1;
    for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
        const lineOfText = doc.lineAt(lineIndex);
        const result = check_comment_or_test(doc, lineIndex);
        const text_line = lineOfText.text;
        const count_iter = (text_line.match(new RegExp(token, "g")) || []).length;
        if (text_line.includes(token)) {
            const index_of_token = text_line.indexOf(token);
            if ((result?.check === false && text_line.includes(token) && !text_line.includes("not"))) { // Non ci sono commenti e ho trovato il token
                found_at_line = lineIndex;
                count += count_iter;
            }
            else if (result?.check === true) { // Ci sono commenti
                if (result.index_end == -1) { // caso del single_comment % o aperture senza chiusura
                    if (index_of_token < result.index_start && lineIndex <= result.line) {
                        count += count_iter;
                        found_at_line = lineIndex;
                    }
                }
                else if ((index_of_token < result.index_start && result.line >= lineIndex)
                    || (index_of_token > result.index_end && (lineIndex >= result.line))) { // nel caso sia prima o dopo un blocco di commenti/test multiline
                    count += count_iter;
                    if (found_at_line < lineIndex) {
                        found_at_line = lineIndex;
                    }
                }
            }
        }
    }
    return { 'token': token, 'line': found_at_line, 'count': count };
}
exports.countElem = countElem;
function checkIsRule(constructs) {
    if (constructs[0][1] !== ASPCore2Lexer_1.ASPCore2Lexer.SYMBOLIC_CONSTANT) { // non inizia con un atomo CODE 2
        return false;
    }
    for (let i = 0; i < constructs.length; i++) {
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) { // è presente il :-
            return true;
        }
    }
    return false;
}
exports.checkIsRule = checkIsRule;
function checkSafe(heads, tails, tails_negative, tails_in_symbols) {
    let safe = true;
    if (heads.length === 0 || tails.length === 0)
        return !safe;
    //  variabili negative nel corpo devono apparire in atomi positivi nel corpo
    tails_negative.map((el) => {
        if (!tails.includes(el)) {
            safe = false;
        }
    });
    // tutto ciò che è in testa deve apparire positivamente nel corpo
    heads.map((el) => {
        if (!tails.includes(el)) {
            safe = false;
        }
    });
    //tutto ciò che è in <>!= deve apparire positivamente nel corpo
    tails_in_symbols.map((el) => {
        if (!tails.includes(el)) {
            safe = false;
        }
    });
    return safe;
}
exports.checkSafe = checkSafe;
function tokenize(tokens) {
    const result = [];
    for (let i = 0; i < tokens.getTokens().length; i++) {
        const text = tokens.get(i).text;
        const type = tokens.get(i).type;
        const index = tokens.get(i).line;
        result.push([text, type, index]);
    }
    return result;
}
exports.tokenize = tokenize;
function tokenize_head_tail(constructs, atoms) {
    // Divisione del costrutto tra testa e coda, simboli e negazioni per controllare la safeness
    const heads = [];
    const tails = [];
    const tails_negative = [];
    const tails_in_symbols = [];
    let head = true;
    let negation = false;
    for (let i = 0; i < constructs.length; i++) {
        const s = constructs[i][0];
        if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) { // se trovo un simbolo di constraint capisco che sono passata alla coda
            head = !head;
        }
        else if ((negation && constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.PARAM_CLOSE)) {
            negation = false;
            continue;
        }
        else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.NAF || negation) { // se sono atomi negativi non li inserisco né in coda né in testa
            if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.CONS) {
                negation = false;
            }
            else {
                negation = true;
            }
        }
        else if (constructs[i][1] >= 29 && constructs[i][1] <= 34) { // Se sono presenti simboli inserisco il valore prima del simbolo
            if (constructs[i - 1][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) {
                tails_in_symbols.push(constructs[i - 1][0]);
                continue;
            }
            if (constructs[i + 1][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) { // ... e quello dopo 
                tails_in_symbols.push(constructs[i - 1][0]);
                continue;
            }
        }
        else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) {
            if (head)
                heads.push(constructs[i][0]);
            else if (negation && !head && constructs[i][1] == ASPCore2Lexer_1.ASPCore2Lexer.VARIABLE) { // mi salvo separatamente le variabili negative
                tails_negative.push(constructs[i][0]);
            }
            else if (!negation && !(constructs[i - 1][1] > 29 && constructs[i - 1][1] < 34) &&
                !(constructs[i + 1][1] > 29 && constructs[i + 1][1] < 34)) {
                tails.push(constructs[i][0]);
            }
            else if (negation) {
                tails_negative.push(constructs[i][0]);
            }
        }
        else if (constructs[i][1] === ASPCore2Lexer_1.ASPCore2Lexer.SYMBOLIC_CONSTANT) { // se è una atomo lo salvo
            const result = atoms.find(atom => atom === constructs[i][0]);
            if (!result) {
                atoms.push(constructs[i][0]);
            }
        }
    }
    return [heads, tails, tails_negative, tails_in_symbols];
}
exports.tokenize_head_tail = tokenize_head_tail;
//# sourceMappingURL=parsing.js.map