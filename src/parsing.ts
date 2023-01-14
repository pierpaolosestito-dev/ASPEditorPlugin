import { CommonTokenStream, ANTLRInputStream } from "antlr4ts";
import * as vscode from "vscode";
import { ASPCore2Lexer } from "./parser/ASPCore2Lexer";

/*
	This function checks if the line of text contains comments or tests,
	Returns an object containing:
	- check: a boolean variable that is true if the line of text contains a comment or test,
	- index_start: the line index that signals the start of the comment/test,
	- index_end: the line index that signals the end of the comment/test,
	- line: the line of text that has been checked by the function.
*/
export function check_comment_or_test(doc: vscode.TextDocument, line: number) {
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


	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		let single = false;
		const line2 = line;
		const lineOfText = doc.lineAt(lineIndex);

		if (lineOfText.text.includes(startComment) && !check) {
			index_start = lineOfText.text.indexOf(startComment);
			line_start = lineIndex;
			index_end = -1;
			check = true;
		}
		if (lineOfText.text.includes(endComment)) {
			index_end = lineOfText.text.indexOf(endComment);
			line_end = lineIndex;
			check = false;
		}

		if (lineOfText.text.includes(startTest) && !check) {
			index_end = -1;
			index_start = lineOfText.text.indexOf(startTest);
			line_start = lineIndex;
			check = true;

		}

		if (lineOfText.text.includes(endTest)) {
			index_end = lineOfText.text.indexOf(endTest);
			line_end = lineIndex;

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
			// FATTO PER AVERE LA SAFETY DI UNA REGOLA SCRITTA SULLA STESSA RIGA DI UN INIZIO-FINE COMMENTO O TEST.
			if( (lineOfText.text.includes(startComment) && !lineOfText.text.startsWith(startComment)) || (lineOfText.text.includes(startTest) && !lineOfText.text.startsWith(startTest))
			|| (lineOfText.text.includes(endComment) && !lineOfText.text.endsWith(endComment)) || (lineOfText.text.includes(endTest) && !lineOfText.text.endsWith(endTest))
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

/*
	Input: the document and the token to search inside the document.
	Output:
	- token: the token to search inside the document,
	- count: the number of times the token is contained inside the document,
	- line: the first occurrence of the line of text where the token has been found.
*/
export function countElem(doc: vscode.TextDocument, token: string) {
	let count = 0;
	let found_at_line = -1;
	for (let lineIndex = 0; lineIndex < doc.lineCount; lineIndex++) {
		const lineOfText = doc.lineAt(lineIndex);
		const result = check_comment_or_test(doc, lineIndex);
		const text_line = lineOfText.text;
		const regex_for_token = new RegExp(`\\b${token}\\b`, "g");
		const count_iter = (text_line.match(regex_for_token) || []).length;

		const regex_for_builtins = new RegExp(`\\W*&\\s*${token}\\W+`, "g");
		const skip_match_builtins = (text_line.match(regex_for_builtins) || []).length;

		if (count_iter !== 0 && skip_match_builtins === 0) {
			const index_of_token = text_line.search(regex_for_token);
			
			if ((result?.check === false && !text_line.includes("not") )) {  // Non ci sono commenti e ho trovato il token
				found_at_line = lineIndex;
				count += count_iter;
			}
			else if (result?.check === true || (result.index_end !== -1 || result.index_end !==-1)) { // Ci sono commenti
				if (result.index_end == -1) { // caso del single_comment % o aperture senza chiusura
					

					if (index_of_token < result.index_start && lineIndex <= result.line_start && result.line_start!==-1) {
						
						count += count_iter;
						found_at_line = lineIndex;
					}
				}
				else if ((
					index_of_token < result.index_start && result.line_start >= lineIndex)
					|| (index_of_token > result.index_end && (lineIndex >= result.line_end && result.line_end !==-1))) { // nel caso sia prima o dopo un blocco di commenti/test multiline
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

/*
	Input: the list of constructs inside a single line of text.
	Output: returns true if the line is a rule, false otherwise.
*/
export function checkIsRule(constructs: [string, number, number][]) {
	let head = false;
	for (let i = 0; i < constructs.length; i++) {
		if (constructs[i][1] === ASPCore2Lexer.VARIABLE){
			head = true;
		}
		if (constructs[i][1] === ASPCore2Lexer.CONS && head) { // è presente il :-
			return true;
		}
	}
	return false;
}

/*
	Check the safety of a rule. Returns true if a rule is safe, false otherwise.
*/
export function checkSafe(heads: string[], tails: string[], tails_negative: string[], tails_in_symbols: string[]) {
	let safe = true;

	if (heads.length === 0 || tails.length === 0) {
		return !safe;
	}
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
		if (!tails.includes(el)) 
			safe = false;
	});
	return safe;
}

/*
	Takes a CommonTokenStream and returns a list of tokens. Each token contains:
	- text: the text of the token,
	- type: the numeric id associated at the type of token,
	- index: returns the index of the token inside the document
*/
export function tokenize(tokens: CommonTokenStream) {
	const result: [string, number, number][] = [];
	for (let i = 0; i < tokens.getTokens().length; i++) {
		const text = tokens.get(i).text as string;
		const type = tokens.get(i).type;
		const index = tokens.get(i).line;
		result.push([text, type, index]);
	}
	return result;
}

/*
	Divides the constructs in head, tail, negative tail and symbols inside the tail.
*/
export function tokenize_head_tail(constructs: [string, number, number][], atoms: string[]) {
	// Divisione del costrutto tra testa e coda, simboli e negazioni per controllare la safeness
	const heads = [];
	const tails = [];
	const tails_negative = [];
	const tails_in_symbols = [];

	let head = true;
	let negation = false;
	let skip = false;
	for (let i = 0; i < constructs.length; i++) {
		const s = constructs[i][1];

		if (s == ASPCore2Lexer.AGGR_COUNT || 
			s == ASPCore2Lexer.AGGR_MAX || s == ASPCore2Lexer.AGGR_MIN || s == ASPCore2Lexer.AGGR_SUM){
				skip = true;
			}

		if (s == ASPCore2Lexer.CURLY_CLOSE && skip){
			skip = false;
		}

		if (constructs[i][1] === ASPCore2Lexer.CONS && !skip) { // se trovo un simbolo di constraint capisco che sono passata alla coda
			head = !head;
		}
		else if ((negation && constructs[i][1] === ASPCore2Lexer.PARAM_CLOSE) && !skip) {
			negation = false;
			continue;
		}

		if ((constructs[i][1] === ASPCore2Lexer.NAF || negation)  && !skip ) { // se sono atomi negativi non li inserisco né in coda né in testa
				negation = true;
		}
		if (constructs[i][1] >= 29 && constructs[i][1] <= 34 && !skip) { // Se sono presenti simboli inserisco il valore prima del simbolo
			if (constructs[i - 1][1] === ASPCore2Lexer.VARIABLE) {
				tails_in_symbols.push(constructs[i - 1][0]);
				continue;
			}
			if (constructs[i + 1][1] === ASPCore2Lexer.VARIABLE) {  // ... e quello dopo 
				tails_in_symbols.push(constructs[i - 1][0]);
				continue;
			}
		}

		else if (constructs[i][1] === ASPCore2Lexer.VARIABLE && !skip) {
			if (head)
				heads.push(constructs[i][0]);
			else if (negation && !head && constructs[i][1] == ASPCore2Lexer.VARIABLE) { // mi salvo separatamente le variabili negative
				tails_negative.push(constructs[i][0]);
			} else if (!negation && !(constructs[i - 1][1] > 29 && constructs[i - 1][1] < 34) &&
				!(constructs[i + 1][1] > 29 && constructs[i + 1][1] < 34)) {
				tails.push(constructs[i][0]);
			} else if (negation) {
				tails_negative.push(constructs[i][0]);
			}
		}
		else if (constructs[i][1] === ASPCore2Lexer.SYMBOLIC_CONSTANT && !skip) { // se è una atomo lo salvo
			const result = atoms.find(atom => atom === constructs[i][0]);
			if (!result) {
				atoms.push(constructs[i][0]);
			}
		}
	}
	return [heads, tails, tails_negative, tails_in_symbols] as const;

}
/*
export function inputText(lineOfText: vscode.TextLine) {
	if((lineOfText.text.includes("%/") && !lineOfText.text.startsWith("%/")) || (lineOfText.text.includes("%**") && !lineOfText.text.startsWith("%**"))) {
		let splitText = undefined;
		if(lineOfText.text.includes("%/")) {
			splitText = lineOfText.text.split("%/");
		}
		else {
			splitText = lineOfText.text.split("%**");
		}
		return [new ANTLRInputStream(splitText[0]), true] as const;
	}
	if((lineOfText.text.includes("/%") && !lineOfText.text.endsWith("/%")) || (lineOfText.text.includes("**%") && !lineOfText.text.endsWith("**%"))) {
		let splitText = undefined;
		if(lineOfText.text.includes("/%")) {
			splitText = lineOfText.text.split("/%");
		}
		else {
			splitText = lineOfText.text.split("**%");
		}
		return [new ANTLRInputStream(splitText[1]), true] as const;
	}
	return [new ANTLRInputStream(lineOfText.text), false] as const;
}*/