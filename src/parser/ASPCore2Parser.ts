// Generated from ./src/parser/ASPCore2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
// import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ASPCore2Listener } from "./ASPCore2Listener";
import { ASPCore2Visitor } from "./ASPCore2Visitor";


export class ASPCore2Parser extends Parser {
	public static readonly NAF = 1;
	public static readonly SYMBOLIC_CONSTANT = 2;
	public static readonly VARIABLE = 3;
	public static readonly STRING = 4;
	public static readonly NUMBER = 5;
	public static readonly WS = 6;
	public static readonly DOT = 7;
	public static readonly DDOT = 8;
	public static readonly COMMA = 9;
	public static readonly HEAD_SEPARATOR = 10;
	public static readonly SEMICOLON = 11;
	public static readonly COLON = 12;
	public static readonly AT = 13;
	public static readonly CONS = 14;
	public static readonly WCONS = 15;
	public static readonly PLUS = 16;
	public static readonly DASH = 17;
	public static readonly TIMES = 18;
	public static readonly SLASH = 19;
	public static readonly BACK_SLASH = 20;
	public static readonly PARAM_OPEN = 21;
	public static readonly PARAM_CLOSE = 22;
	public static readonly SQUARE_OPEN = 23;
	public static readonly SQUARE_CLOSED = 24;
	public static readonly CURLY_OPEN = 25;
	public static readonly CURLY_CLOSE = 26;
	public static readonly QUERY_MARK = 27;
	public static readonly ANON_VAR = 28;
	public static readonly EQUAL = 29;
	public static readonly UNEQUAL = 30;
	public static readonly LESS = 31;
	public static readonly GREATER = 32;
	public static readonly LESS_OR_EQ = 33;
	public static readonly GREATER_OR_EQ = 34;
	public static readonly AMPERSAND = 35;
	public static readonly EXISTS = 36;
	public static readonly AGGR_COUNT = 37;
	public static readonly AGGR_MAX = 38;
	public static readonly AGGR_MIN = 39;
	public static readonly AGGR_SUM = 40;
	public static readonly ANNOTATION_GLOBAL_WASP_PROPAGATOR = 41;
	public static readonly DIRECTIVE_NAME = 42;
	public static readonly DIRECTIVE_VALUE = 43;
	public static readonly ANNOTATION_RULE_ALIGN_SUBSTITUTIONS = 44;
	public static readonly ANNOTATION_RULE_LOOK_AHEAD = 45;
	public static readonly ANNOTATION_RULE_PROJECTION = 46;
	public static readonly ANNOTATION_RULE_REWRITING_ARITH = 47;
	public static readonly ANNOTATION_RULE_ORDERING = 48;
	public static readonly ANNOTATION_ORDERING_VALUE = 49;
	public static readonly ANNOTATION_RULE_ATOM_INDEXED = 50;
	public static readonly ANNOTATION_ATOM_INDEXED_ATOM = 51;
	public static readonly ANNOTATION_ATOM_INDEXED_ARGUMENTS = 52;
	public static readonly ANNOTATION_RULE_PARTIAL_ORDER = 53;
	public static readonly ANNOTATION_PARTIAL_ORDER_BEFORE = 54;
	public static readonly ANNOTATION_PARTIAL_ORDER_AFTER = 55;
	public static readonly ANNOTATION_EXTATOM_PREDICATE = 56;
	public static readonly ANNOTATION_EXTATOM_TYPE = 57;
	public static readonly ANNOTATION_EXTATOM_TYPE_QCONST = 58;
	public static readonly ANNOTATION_EXTATOM_TYPE_CONST = 59;
	public static readonly ANNOTATION_EXTATOM_TYPE_U_INT = 60;
	public static readonly ANNOTATION_EXTATOM_TYPE_UR_INT = 61;
	public static readonly ANNOTATION_EXTATOM_TYPE_UT_INT = 62;
	public static readonly ANNOTATION_EXTATOM_TYPE_R_INT = 63;
	public static readonly ANNOTATION_EXTATOM_TYPE_T_INT = 64;
	public static readonly ANNOTATION_GLOBAL_ORDERING = 65;
	public static readonly ANNOTATION_GLOBAL_ATOM_INDEXED = 66;
	public static readonly ANNOTATION_GLOBAL_PARTIAL_ORDER = 67;
	public static readonly ANNOTATION_GLOBAL_EXTATOM_CONVERSION = 68;
	public static readonly ANNOTATION_RULE_TO_DECOMPOSE = 69;
	public static readonly ANNOTATION_RULE_TO_NOT_DECOMPOSE = 70;
	public static readonly ANNOTATION_GLOBAL_WASP_HEURISTIC = 71;
	public static readonly ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE = 72;
	public static readonly ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS = 73;
	public static readonly START_TEST = 74;
	public static readonly END_TEST = 75;
	public static readonly START_COMMENT = 76;
	public static readonly END_COMMENT = 77;
	public static readonly COMMENT = 78;
	public static readonly RULE_program = 0;
	public static readonly RULE_rule = 1;
	public static readonly RULE_simple_rule = 2;
	public static readonly RULE_head = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_weight_at_levels = 5;
	public static readonly RULE_levels_and_terms = 6;
	public static readonly RULE_disjunction = 7;
	public static readonly RULE_conjunction = 8;
	public static readonly RULE_choice_atom = 9;
	public static readonly RULE_lower_guard = 10;
	public static readonly RULE_upper_guard = 11;
	public static readonly RULE_choice_elements = 12;
	public static readonly RULE_choice_element = 13;
	public static readonly RULE_choice_element_atom = 14;
	public static readonly RULE_choice_elements_literals = 15;
	public static readonly RULE_naf_literals = 16;
	public static readonly RULE_naf_literal = 17;
	public static readonly RULE_naf_literal_aggregate = 18;
	public static readonly RULE_existential_atom = 19;
	public static readonly RULE_classic_literal = 20;
	public static readonly RULE_atom = 21;
	public static readonly RULE_extAtom = 22;
	public static readonly RULE_extSemicol = 23;
	public static readonly RULE_terms = 24;
	public static readonly RULE_basic_terms = 25;
	public static readonly RULE_builtin_atom = 26;
	public static readonly RULE_compareop = 27;
	public static readonly RULE_binop = 28;
	public static readonly RULE_arithop1 = 29;
	public static readonly RULE_arithop2 = 30;
	public static readonly RULE_term_ = 31;
	public static readonly RULE_term__ = 32;
	public static readonly RULE_term = 33;
	public static readonly RULE_expr = 34;
	public static readonly RULE_factor = 35;
	public static readonly RULE_basic_term = 36;
	public static readonly RULE_ground_term = 37;
	public static readonly RULE_variable_term = 38;
	public static readonly RULE_functional_term = 39;
	public static readonly RULE_vars = 40;
	public static readonly RULE_identifier = 41;
	public static readonly RULE_directive = 42;
	public static readonly RULE_query = 43;
	public static readonly RULE_lower_guard_compare_aggregate = 44;
	public static readonly RULE_upper_guard_compare_aggregate = 45;
	public static readonly RULE_compare_aggregate = 46;
	public static readonly RULE_lower_guard_leftward_left_aggregate = 47;
	public static readonly RULE_leftward_left_aggregate = 48;
	public static readonly RULE_left_aggregate = 49;
	public static readonly RULE_lower_guard_rightward_left_aggregate = 50;
	public static readonly RULE_rightward_left_aggregate = 51;
	public static readonly RULE_upper_guard_leftward_right_aggregate = 52;
	public static readonly RULE_upper_guard_rightward_right_aggregate = 53;
	public static readonly RULE_right_aggregate = 54;
	public static readonly RULE_aggregate_atom = 55;
	public static readonly RULE_leftwardop = 56;
	public static readonly RULE_rightwardop = 57;
	public static readonly RULE_aggregate = 58;
	public static readonly RULE_aggregate_elements = 59;
	public static readonly RULE_aggregate_element = 60;
	public static readonly RULE_aggregate_function = 61;
	public static readonly RULE_annotation_global = 62;
	public static readonly RULE_annotations_rule = 63;
	public static readonly RULE_annotation_rule = 64;
	public static readonly RULE_annotation_rule_to_decompose = 65;
	public static readonly RULE_annotation_rule_to_not_decompose = 66;
	public static readonly RULE_annotation_rule_ordering = 67;
	public static readonly RULE_annotation_global_ordering = 68;
	public static readonly RULE_annotation_global_extatom_conversion = 69;
	public static readonly RULE_annotation_extpredicate = 70;
	public static readonly RULE_extatom_conv_types = 71;
	public static readonly RULE_extatom_conv_type = 72;
	public static readonly RULE_rule_ordering_type = 73;
	public static readonly RULE_global_ordering_type = 74;
	public static readonly RULE_annotation_rule_atom_indexed = 75;
	public static readonly RULE_annotation_global_atom_indexed = 76;
	public static readonly RULE_rule_indexing_arguments = 77;
	public static readonly RULE_rule_naf_literal_annotation = 78;
	public static readonly RULE_global_indexing_arguments = 79;
	public static readonly RULE_global_naf_literal_annotation = 80;
	public static readonly RULE_rule_atom_annotation_before = 81;
	public static readonly RULE_global_atom_annotation_before = 82;
	public static readonly RULE_rule_atom_annotation_after = 83;
	public static readonly RULE_global_atom_annotation_after = 84;
	public static readonly RULE_rule_atoms_annotation_before = 85;
	public static readonly RULE_global_atoms_annotation_before = 86;
	public static readonly RULE_rule_atoms_annotation_after = 87;
	public static readonly RULE_global_atoms_annotation_after = 88;
	public static readonly RULE_annotation_rule_partial_order_begin = 89;
	public static readonly RULE_annotation_global_partial_order_begin = 90;
	public static readonly RULE_annotation_rule_partial_order = 91;
	public static readonly RULE_annotation_global_partial_order = 92;
	public static readonly RULE_annotation_rule_projection = 93;
	public static readonly RULE_annotation_rule_projection_value = 94;
	public static readonly RULE_annotation_rule_rewriting_arith = 95;
	public static readonly RULE_annotation_rule_align_substitutions = 96;
	public static readonly RULE_annotation_rule_look_ahead = 97;
	public static readonly RULE_annotation_global_wasp_propagator = 98;
	public static readonly RULE_annotation_global_wasp_propagator_begin = 99;
	public static readonly RULE_annotation_global_wasp_heuristic = 100;
	public static readonly RULE_annotation_global_wasp_heuristic_begin = 101;
	public static readonly RULE_heuristic_python_file = 102;
	public static readonly RULE_aggregate_element_heuristic = 103;
	public static readonly RULE_aggregate_elements_heuristic = 104;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "rule", "simple_rule", "head", "body", "weight_at_levels", 
		"levels_and_terms", "disjunction", "conjunction", "choice_atom", "lower_guard", 
		"upper_guard", "choice_elements", "choice_element", "choice_element_atom", 
		"choice_elements_literals", "naf_literals", "naf_literal", "naf_literal_aggregate", 
		"existential_atom", "classic_literal", "atom", "extAtom", "extSemicol", 
		"terms", "basic_terms", "builtin_atom", "compareop", "binop", "arithop1", 
		"arithop2", "term_", "term__", "term", "expr", "factor", "basic_term", 
		"ground_term", "variable_term", "functional_term", "vars", "identifier", 
		"directive", "query", "lower_guard_compare_aggregate", "upper_guard_compare_aggregate", 
		"compare_aggregate", "lower_guard_leftward_left_aggregate", "leftward_left_aggregate", 
		"left_aggregate", "lower_guard_rightward_left_aggregate", "rightward_left_aggregate", 
		"upper_guard_leftward_right_aggregate", "upper_guard_rightward_right_aggregate", 
		"right_aggregate", "aggregate_atom", "leftwardop", "rightwardop", "aggregate", 
		"aggregate_elements", "aggregate_element", "aggregate_function", "annotation_global", 
		"annotations_rule", "annotation_rule", "annotation_rule_to_decompose", 
		"annotation_rule_to_not_decompose", "annotation_rule_ordering", "annotation_global_ordering", 
		"annotation_global_extatom_conversion", "annotation_extpredicate", "extatom_conv_types", 
		"extatom_conv_type", "rule_ordering_type", "global_ordering_type", "annotation_rule_atom_indexed", 
		"annotation_global_atom_indexed", "rule_indexing_arguments", "rule_naf_literal_annotation", 
		"global_indexing_arguments", "global_naf_literal_annotation", "rule_atom_annotation_before", 
		"global_atom_annotation_before", "rule_atom_annotation_after", "global_atom_annotation_after", 
		"rule_atoms_annotation_before", "global_atoms_annotation_before", "rule_atoms_annotation_after", 
		"global_atoms_annotation_after", "annotation_rule_partial_order_begin", 
		"annotation_global_partial_order_begin", "annotation_rule_partial_order", 
		"annotation_global_partial_order", "annotation_rule_projection", "annotation_rule_projection_value", 
		"annotation_rule_rewriting_arith", "annotation_rule_align_substitutions", 
		"annotation_rule_look_ahead", "annotation_global_wasp_propagator", "annotation_global_wasp_propagator_begin", 
		"annotation_global_wasp_heuristic", "annotation_global_wasp_heuristic_begin", 
		"heuristic_python_file", "aggregate_element_heuristic", "aggregate_elements_heuristic",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'not'", undefined, undefined, undefined, undefined, undefined, 
		"'.'", "'..'", "','", "'|'", "';'", "':'", "'@'", "':-'", "':~'", "'+'", 
		"'-'", "'*'", "'/'", "'\\'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
		"'?'", "'_'", undefined, undefined, "'<'", "'>'", "'<='", "'>='", "'&'", 
		"'\\'", "'#count'", "'#max'", "'#min'", "'#sum'", "'#propagator'", "'#([A-Za-z_]*)'", 
		"'.*'", "'%@rule_align_substitutions'", "'%@rule_look_ahead'", "'%@rule_projection'", 
		"'%@rule_rewriting_arith'", "'%@rule_ordering'", "'@value'", "'%@rule_atom_indexed'", 
		"'@atom'", "'@arguments'", "'%@rule_partial_order'", "'@before'", "'@after'", 
		"'@predicate'", "'@type'", "'@Q_CONST'", "'@CONST'", "'@U_INT'", "'@UR_INT'", 
		"'@UT_INT'", "'@R_INT'", "'@T_INT'", "'%@global_ordering'", "'%@global_atom_indexed'", 
		"'%@global_partial_order'", "'%@global_external_predicate_conversion'", 
		"'%@rule_to_decompose'", "'%@rule_to_not_decompose'", "'%@global_heuristic'", 
		"'@file'", "'@elements'", "'%**'", "'**%'", "'%/'", "'/%'", "'%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER", 
		"WS", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", "SEMICOLON", "COLON", 
		"AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES", "SLASH", "BACK_SLASH", 
		"PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", "CURLY_OPEN", 
		"CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", "LESS", "GREATER", 
		"LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS", "AGGR_COUNT", "AGGR_MAX", 
		"AGGR_MIN", "AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR", "DIRECTIVE_NAME", 
		"DIRECTIVE_VALUE", "ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", "ANNOTATION_RULE_LOOK_AHEAD", 
		"ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH", "ANNOTATION_RULE_ORDERING", 
		"ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED", "ANNOTATION_ATOM_INDEXED_ATOM", 
		"ANNOTATION_ATOM_INDEXED_ARGUMENTS", "ANNOTATION_RULE_PARTIAL_ORDER", 
		"ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", "ANNOTATION_EXTATOM_PREDICATE", 
		"ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", "ANNOTATION_EXTATOM_TYPE_CONST", 
		"ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", "ANNOTATION_EXTATOM_TYPE_UT_INT", 
		"ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", "ANNOTATION_GLOBAL_ORDERING", 
		"ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", "ANNOTATION_GLOBAL_EXTATOM_CONVERSION", 
		"ANNOTATION_RULE_TO_DECOMPOSE", "ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC", 
		"ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS", 
		"START_TEST", "END_TEST", "START_COMMENT", "END_COMMENT", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ASPCore2Parser._LITERAL_NAMES, ASPCore2Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ASPCore2Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ASPCore2.g4"; }

	// @Override
	public get ruleNames(): string[] { return ASPCore2Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ASPCore2Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ASPCore2Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		const _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ASPCore2Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.SYMBOLIC_CONSTANT) | (1 << ASPCore2Parser.VARIABLE) | (1 << ASPCore2Parser.STRING) | (1 << ASPCore2Parser.NUMBER) | (1 << ASPCore2Parser.CONS) | (1 << ASPCore2Parser.WCONS) | (1 << ASPCore2Parser.DASH) | (1 << ASPCore2Parser.PARAM_OPEN) | (1 << ASPCore2Parser.CURLY_OPEN) | (1 << ASPCore2Parser.ANON_VAR))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ASPCore2Parser.EXISTS - 36)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR - 36)) | (1 << (ASPCore2Parser.DIRECTIVE_NAME - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_PROJECTION - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ORDERING - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED - 36)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER - 36)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING - 36)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED - 36)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION - 68)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE - 68)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE - 68)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC - 68)))) !== 0)) {
				{
				{
				this.state = 210;
				this.rule();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule(): RuleContext {
		const  _localctx: RuleContext = new RuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ASPCore2Parser.RULE_rule);
		try {
			this.state = 222;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
			case ASPCore2Parser.NUMBER:
			case ASPCore2Parser.CONS:
			case ASPCore2Parser.WCONS:
			case ASPCore2Parser.DASH:
			case ASPCore2Parser.PARAM_OPEN:
			case ASPCore2Parser.CURLY_OPEN:
			case ASPCore2Parser.ANON_VAR:
			case ASPCore2Parser.EXISTS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 216;
				this.simple_rule();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS:
			case ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD:
			case ASPCore2Parser.ANNOTATION_RULE_PROJECTION:
			case ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH:
			case ASPCore2Parser.ANNOTATION_RULE_ORDERING:
			case ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED:
			case ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER:
			case ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE:
			case ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 217;
				this.annotations_rule();
				this.state = 218;
				this.simple_rule();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR:
			case ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING:
			case ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED:
			case ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER:
			case ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION:
			case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 220;
				this.annotation_global();
				}
				break;
			case ASPCore2Parser.DIRECTIVE_NAME:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 221;
				this.directive();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public simple_rule(): Simple_ruleContext {
		const  _localctx: Simple_ruleContext = new Simple_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ASPCore2Parser.RULE_simple_rule);
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 224;
				this.head();
				this.state = 225;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 227;
				this.head();
				this.state = 228;
				this.match(ASPCore2Parser.CONS);
				this.state = 229;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 231;
				this.head();
				this.state = 232;
				this.match(ASPCore2Parser.CONS);
				this.state = 233;
				this.body();
				this.state = 234;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 236;
				this.match(ASPCore2Parser.CONS);
				this.state = 237;
				this.body();
				this.state = 238;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 240;
				this.match(ASPCore2Parser.WCONS);
				this.state = 241;
				this.body();
				this.state = 242;
				this.match(ASPCore2Parser.DOT);
				this.state = 243;
				this.weight_at_levels();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 245;
				this.query();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public head(): HeadContext {
		const  _localctx: HeadContext = new HeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ASPCore2Parser.RULE_head);
		try {
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this.disjunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.choice_atom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		const  _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ASPCore2Parser.RULE_body);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.conjunction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weight_at_levels(): Weight_at_levelsContext {
		const  _localctx: Weight_at_levelsContext = new Weight_at_levelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ASPCore2Parser.RULE_weight_at_levels);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.match(ASPCore2Parser.SQUARE_OPEN);
				this.state = 255;
				this.term();
				this.state = 256;
				this.match(ASPCore2Parser.SQUARE_CLOSED);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 258;
				this.match(ASPCore2Parser.SQUARE_OPEN);
				this.state = 259;
				this.term();
				this.state = 260;
				this.levels_and_terms();
				this.state = 261;
				this.match(ASPCore2Parser.SQUARE_CLOSED);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public levels_and_terms(): Levels_and_termsContext {
		const  _localctx: Levels_and_termsContext = new Levels_and_termsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ASPCore2Parser.RULE_levels_and_terms);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.match(ASPCore2Parser.AT);
				this.state = 266;
				this.term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.match(ASPCore2Parser.AT);
				this.state = 268;
				this.term();
				this.state = 269;
				this.match(ASPCore2Parser.COMMA);
				this.state = 270;
				this.terms();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 272;
				this.match(ASPCore2Parser.COMMA);
				this.state = 273;
				this.terms();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public disjunction(): DisjunctionContext {
		const  _localctx: DisjunctionContext = new DisjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ASPCore2Parser.RULE_disjunction);
		try {
			this.state = 286;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 276;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 277;
				this.classic_literal();
				this.state = 278;
				this.match(ASPCore2Parser.HEAD_SEPARATOR);
				this.state = 279;
				this.disjunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 281;
				this.existential_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this.existential_atom();
				this.state = 283;
				this.match(ASPCore2Parser.HEAD_SEPARATOR);
				this.state = 284;
				this.disjunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjunction(): ConjunctionContext {
		const  _localctx: ConjunctionContext = new ConjunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ASPCore2Parser.RULE_conjunction);
		try {
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.naf_literal_aggregate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.naf_literal_aggregate();
				this.state = 290;
				this.match(ASPCore2Parser.COMMA);
				this.state = 291;
				this.conjunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_atom(): Choice_atomContext {
		const  _localctx: Choice_atomContext = new Choice_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ASPCore2Parser.RULE_choice_atom);
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 295;
				this.lower_guard();
				this.state = 296;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 297;
				this.choice_elements();
				this.state = 298;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 299;
				this.upper_guard();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.lower_guard();
				this.state = 302;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 303;
				this.choice_elements();
				this.state = 304;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 306;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 307;
				this.choice_elements();
				this.state = 308;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 310;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 311;
				this.choice_elements();
				this.state = 312;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 313;
				this.upper_guard();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lower_guard(): Lower_guardContext {
		const  _localctx: Lower_guardContext = new Lower_guardContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ASPCore2Parser.RULE_lower_guard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.term();
			this.state = 318;
			this.binop();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upper_guard(): Upper_guardContext {
		const  _localctx: Upper_guardContext = new Upper_guardContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ASPCore2Parser.RULE_upper_guard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.binop();
			this.state = 321;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_elements(): Choice_elementsContext {
		const  _localctx: Choice_elementsContext = new Choice_elementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ASPCore2Parser.RULE_choice_elements);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.choice_element();
				this.state = 324;
				this.match(ASPCore2Parser.SEMICOLON);
				this.state = 325;
				this.choice_elements();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 327;
				this.choice_element();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_element(): Choice_elementContext {
		const  _localctx: Choice_elementContext = new Choice_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ASPCore2Parser.RULE_choice_element);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 330;
				this.choice_element_atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.choice_element_atom();
				this.state = 332;
				this.match(ASPCore2Parser.COLON);
				this.state = 333;
				this.choice_elements_literals();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_element_atom(): Choice_element_atomContext {
		const  _localctx: Choice_element_atomContext = new Choice_element_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ASPCore2Parser.RULE_choice_element_atom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.atom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public choice_elements_literals(): Choice_elements_literalsContext {
		const  _localctx: Choice_elements_literalsContext = new Choice_elements_literalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ASPCore2Parser.RULE_choice_elements_literals);
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 339;
				this.naf_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.naf_literals();
				this.state = 341;
				this.match(ASPCore2Parser.COMMA);
				this.state = 342;
				this.naf_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public naf_literals(): Naf_literalsContext {
		const  _localctx: Naf_literalsContext = new Naf_literalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ASPCore2Parser.RULE_naf_literals);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 346;
				this.naf_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 347;
				this.naf_literal();
				this.state = 348;
				this.match(ASPCore2Parser.COMMA);
				this.state = 349;
				this.naf_literals();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public naf_literal(): Naf_literalContext {
		const  _localctx: Naf_literalContext = new Naf_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ASPCore2Parser.RULE_naf_literal);
		try {
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 353;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 354;
				this.match(ASPCore2Parser.NAF);
				this.state = 355;
				this.classic_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.builtin_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 357;
				this.extAtom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 358;
				this.match(ASPCore2Parser.NAF);
				this.state = 359;
				this.extAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public naf_literal_aggregate(): Naf_literal_aggregateContext {
		const  _localctx: Naf_literal_aggregateContext = new Naf_literal_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ASPCore2Parser.RULE_naf_literal_aggregate);
		try {
			this.state = 366;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.naf_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				this.aggregate_atom();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 364;
				this.match(ASPCore2Parser.NAF);
				this.state = 365;
				this.aggregate_atom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public existential_atom(): Existential_atomContext {
		const  _localctx: Existential_atomContext = new Existential_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ASPCore2Parser.RULE_existential_atom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(ASPCore2Parser.EXISTS);
			this.state = 369;
			this.vars();
			this.state = 370;
			this.atom();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classic_literal(): Classic_literalContext {
		const  _localctx: Classic_literalContext = new Classic_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ASPCore2Parser.RULE_classic_literal);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.atom();
				}
				break;
			case ASPCore2Parser.DASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 373;
				this.match(ASPCore2Parser.DASH);
				this.state = 374;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		const  _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ASPCore2Parser.RULE_atom);
		try {
			this.state = 387;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 377;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 378;
				this.identifier();
				this.state = 379;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 380;
				this.terms();
				this.state = 381;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 383;
				this.identifier();
				this.state = 384;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 385;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extAtom(): ExtAtomContext {
		const  _localctx: ExtAtomContext = new ExtAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ASPCore2Parser.RULE_extAtom);
		try {
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 389;
				this.match(ASPCore2Parser.AMPERSAND);
				this.state = 390;
				this.identifier();
				this.state = 391;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 392;
				this.terms();
				this.state = 393;
				this.extSemicol();
				this.state = 394;
				this.terms();
				this.state = 395;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.match(ASPCore2Parser.AMPERSAND);
				this.state = 398;
				this.identifier();
				this.state = 399;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 400;
				this.extSemicol();
				this.state = 401;
				this.terms();
				this.state = 402;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 404;
				this.match(ASPCore2Parser.AMPERSAND);
				this.state = 405;
				this.identifier();
				this.state = 406;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 407;
				this.terms();
				this.state = 408;
				this.extSemicol();
				this.state = 409;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 411;
				this.match(ASPCore2Parser.AMPERSAND);
				this.state = 412;
				this.identifier();
				this.state = 413;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 414;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extSemicol(): ExtSemicolContext {
		const  _localctx: ExtSemicolContext = new ExtSemicolContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ASPCore2Parser.RULE_extSemicol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(ASPCore2Parser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public terms(): TermsContext {
		const  _localctx: TermsContext = new TermsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ASPCore2Parser.RULE_terms);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.term();
				this.state = 422;
				this.match(ASPCore2Parser.COMMA);
				this.state = 423;
				this.terms();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basic_terms(): Basic_termsContext {
		const  _localctx: Basic_termsContext = new Basic_termsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ASPCore2Parser.RULE_basic_terms);
		try {
			this.state = 432;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.basic_term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.basic_term();
				this.state = 429;
				this.match(ASPCore2Parser.COMMA);
				this.state = 430;
				this.basic_terms();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public builtin_atom(): Builtin_atomContext {
		const  _localctx: Builtin_atomContext = new Builtin_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ASPCore2Parser.RULE_builtin_atom);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.term();
			this.state = 435;
			this.binop();
			this.state = 436;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compareop(): CompareopContext {
		const  _localctx: CompareopContext = new CompareopContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ASPCore2Parser.RULE_compareop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			_la = this._input.LA(1);
			if (!(_la === ASPCore2Parser.EQUAL || _la === ASPCore2Parser.UNEQUAL)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binop(): BinopContext {
		const  _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ASPCore2Parser.RULE_binop);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 440;
				this.compareop();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 441;
				this.compareop();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 442;
				this.leftwardop();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 443;
				this.rightwardop();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithop1(): Arithop1Context {
		const  _localctx: Arithop1Context = new Arithop1Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, ASPCore2Parser.RULE_arithop1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			_la = this._input.LA(1);
			if (!(_la === ASPCore2Parser.PLUS || _la === ASPCore2Parser.DASH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithop2(): Arithop2Context {
		const  _localctx: Arithop2Context = new Arithop2Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, ASPCore2Parser.RULE_arithop2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.TIMES) | (1 << ASPCore2Parser.SLASH) | (1 << ASPCore2Parser.BACK_SLASH))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term_(): Term_Context {
		const  _localctx: Term_Context = new Term_Context(this._ctx, this.state);
		this.enterRule(_localctx, 62, ASPCore2Parser.RULE_term_);
		try {
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.ANON_VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 450;
				this.match(ASPCore2Parser.ANON_VAR);
				}
				break;
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 451;
				this.identifier();
				this.state = 452;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 453;
				this.terms();
				this.state = 454;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;
			case ASPCore2Parser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 456;
				this.match(ASPCore2Parser.NUMBER);
				this.state = 457;
				this.match(ASPCore2Parser.DDOT);
				this.state = 458;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;
			case ASPCore2Parser.DASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 459;
				this.match(ASPCore2Parser.DASH);
				this.state = 460;
				this.term();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term__(): Term__Context {
		const  _localctx: Term__Context = new Term__Context(this._ctx, this.state);
		this.enterRule(_localctx, 64, ASPCore2Parser.RULE_term__);
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 463;
				this.identifier();
				}
				break;
			case ASPCore2Parser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 464;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;
			case ASPCore2Parser.PARAM_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 465;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 466;
				this.term();
				this.state = 467;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		const  _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ASPCore2Parser.RULE_term);
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.term_();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 472;
				this.identifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 473;
				this.expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		const  _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ASPCore2Parser.RULE_expr);
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 476;
				this.factor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 477;
				this.factor();
				this.state = 478;
				this.arithop1();
				this.state = 479;
				this.expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		const  _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ASPCore2Parser.RULE_factor);
		try {
			this.state = 488;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this.term__();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 484;
				this.term__();
				this.state = 485;
				this.arithop2();
				this.state = 486;
				this.factor();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basic_term(): Basic_termContext {
		const  _localctx: Basic_termContext = new Basic_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ASPCore2Parser.RULE_basic_term);
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 490;
				this.ground_term();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 491;
				this.variable_term();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.functional_term();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ground_term(): Ground_termContext {
		const  _localctx: Ground_termContext = new Ground_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ASPCore2Parser.RULE_ground_term);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.match(ASPCore2Parser.SYMBOLIC_CONSTANT);
				}
				break;
			case ASPCore2Parser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.match(ASPCore2Parser.STRING);
				}
				break;
			case ASPCore2Parser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;
			case ASPCore2Parser.DASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 498;
				this.match(ASPCore2Parser.DASH);
				this.state = 499;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable_term(): Variable_termContext {
		const  _localctx: Variable_termContext = new Variable_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ASPCore2Parser.RULE_variable_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			_la = this._input.LA(1);
			if (!(_la === ASPCore2Parser.VARIABLE || _la === ASPCore2Parser.ANON_VAR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functional_term(): Functional_termContext {
		const  _localctx: Functional_termContext = new Functional_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ASPCore2Parser.RULE_functional_term);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.identifier();
			this.state = 505;
			this.match(ASPCore2Parser.PARAM_OPEN);
			this.state = 506;
			this.terms();
			this.state = 507;
			this.match(ASPCore2Parser.PARAM_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vars(): VarsContext {
		const  _localctx: VarsContext = new VarsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ASPCore2Parser.RULE_vars);
		try {
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.match(ASPCore2Parser.VARIABLE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 510;
				this.match(ASPCore2Parser.VARIABLE);
				this.state = 511;
				this.match(ASPCore2Parser.COMMA);
				this.state = 512;
				this.vars();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		const  _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ASPCore2Parser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.SYMBOLIC_CONSTANT) | (1 << ASPCore2Parser.VARIABLE) | (1 << ASPCore2Parser.STRING))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		const  _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ASPCore2Parser.RULE_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(ASPCore2Parser.DIRECTIVE_NAME);
			this.state = 518;
			this.match(ASPCore2Parser.DIRECTIVE_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		const  _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ASPCore2Parser.RULE_query);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.atom();
			this.state = 521;
			this.match(ASPCore2Parser.QUERY_MARK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lower_guard_compare_aggregate(): Lower_guard_compare_aggregateContext {
		const  _localctx: Lower_guard_compare_aggregateContext = new Lower_guard_compare_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ASPCore2Parser.RULE_lower_guard_compare_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.term();
			this.state = 524;
			this.compareop();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upper_guard_compare_aggregate(): Upper_guard_compare_aggregateContext {
		const  _localctx: Upper_guard_compare_aggregateContext = new Upper_guard_compare_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ASPCore2Parser.RULE_upper_guard_compare_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 526;
			this.compareop();
			this.state = 527;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compare_aggregate(): Compare_aggregateContext {
		const  _localctx: Compare_aggregateContext = new Compare_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ASPCore2Parser.RULE_compare_aggregate);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
			case ASPCore2Parser.NUMBER:
			case ASPCore2Parser.DASH:
			case ASPCore2Parser.PARAM_OPEN:
			case ASPCore2Parser.ANON_VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this.lower_guard_compare_aggregate();
				this.state = 530;
				this.aggregate();
				}
				break;
			case ASPCore2Parser.AGGR_COUNT:
			case ASPCore2Parser.AGGR_MAX:
			case ASPCore2Parser.AGGR_MIN:
			case ASPCore2Parser.AGGR_SUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.aggregate();
				this.state = 533;
				this.upper_guard_compare_aggregate();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lower_guard_leftward_left_aggregate(): Lower_guard_leftward_left_aggregateContext {
		const  _localctx: Lower_guard_leftward_left_aggregateContext = new Lower_guard_leftward_left_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ASPCore2Parser.RULE_lower_guard_leftward_left_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.term();
			this.state = 538;
			this.leftwardop();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftward_left_aggregate(): Leftward_left_aggregateContext {
		const  _localctx: Leftward_left_aggregateContext = new Leftward_left_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ASPCore2Parser.RULE_leftward_left_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.lower_guard_leftward_left_aggregate();
			this.state = 541;
			this.aggregate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_aggregate(): Left_aggregateContext {
		const  _localctx: Left_aggregateContext = new Left_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ASPCore2Parser.RULE_left_aggregate);
		try {
			this.state = 545;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.leftward_left_aggregate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.rightward_left_aggregate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lower_guard_rightward_left_aggregate(): Lower_guard_rightward_left_aggregateContext {
		const  _localctx: Lower_guard_rightward_left_aggregateContext = new Lower_guard_rightward_left_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ASPCore2Parser.RULE_lower_guard_rightward_left_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.term();
			this.state = 548;
			this.rightwardop();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rightward_left_aggregate(): Rightward_left_aggregateContext {
		const  _localctx: Rightward_left_aggregateContext = new Rightward_left_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ASPCore2Parser.RULE_rightward_left_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.lower_guard_rightward_left_aggregate();
			this.state = 551;
			this.aggregate();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upper_guard_leftward_right_aggregate(): Upper_guard_leftward_right_aggregateContext {
		const  _localctx: Upper_guard_leftward_right_aggregateContext = new Upper_guard_leftward_right_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ASPCore2Parser.RULE_upper_guard_leftward_right_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 553;
			this.leftwardop();
			this.state = 554;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upper_guard_rightward_right_aggregate(): Upper_guard_rightward_right_aggregateContext {
		const  _localctx: Upper_guard_rightward_right_aggregateContext = new Upper_guard_rightward_right_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ASPCore2Parser.RULE_upper_guard_rightward_right_aggregate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			this.rightwardop();
			this.state = 557;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_aggregate(): Right_aggregateContext {
		const  _localctx: Right_aggregateContext = new Right_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ASPCore2Parser.RULE_right_aggregate);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 559;
				this.aggregate();
				this.state = 560;
				this.upper_guard_leftward_right_aggregate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.aggregate();
				this.state = 563;
				this.upper_guard_rightward_right_aggregate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_atom(): Aggregate_atomContext {
		const  _localctx: Aggregate_atomContext = new Aggregate_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ASPCore2Parser.RULE_aggregate_atom);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 567;
				this.left_aggregate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 568;
				this.right_aggregate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 569;
				this.compare_aggregate();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 570;
				this.leftward_left_aggregate();
				this.state = 571;
				this.upper_guard_leftward_right_aggregate();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 573;
				this.rightward_left_aggregate();
				this.state = 574;
				this.upper_guard_rightward_right_aggregate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftwardop(): LeftwardopContext {
		const  _localctx: LeftwardopContext = new LeftwardopContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ASPCore2Parser.RULE_leftwardop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			_la = this._input.LA(1);
			if (!(_la === ASPCore2Parser.LESS || _la === ASPCore2Parser.LESS_OR_EQ)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rightwardop(): RightwardopContext {
		const  _localctx: RightwardopContext = new RightwardopContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ASPCore2Parser.RULE_rightwardop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			_la = this._input.LA(1);
			if (!(_la === ASPCore2Parser.GREATER || _la === ASPCore2Parser.GREATER_OR_EQ)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate(): AggregateContext {
		const  _localctx: AggregateContext = new AggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ASPCore2Parser.RULE_aggregate);
		try {
			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 582;
				this.aggregate_function();
				this.state = 583;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 584;
				this.aggregate_elements();
				this.state = 585;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 587;
				this.aggregate_function();
				this.state = 588;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 589;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_elements(): Aggregate_elementsContext {
		const  _localctx: Aggregate_elementsContext = new Aggregate_elementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ASPCore2Parser.RULE_aggregate_elements);
		try {
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 593;
				this.aggregate_element();
				this.state = 594;
				this.match(ASPCore2Parser.SEMICOLON);
				this.state = 595;
				this.aggregate_elements();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 597;
				this.aggregate_element();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_element(): Aggregate_elementContext {
		const  _localctx: Aggregate_elementContext = new Aggregate_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ASPCore2Parser.RULE_aggregate_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.basic_terms();
			this.state = 601;
			this.match(ASPCore2Parser.COLON);
			this.state = 602;
			this.naf_literals();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_function(): Aggregate_functionContext {
		const  _localctx: Aggregate_functionContext = new Aggregate_functionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ASPCore2Parser.RULE_aggregate_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (ASPCore2Parser.AGGR_COUNT - 37)) | (1 << (ASPCore2Parser.AGGR_MAX - 37)) | (1 << (ASPCore2Parser.AGGR_MIN - 37)) | (1 << (ASPCore2Parser.AGGR_SUM - 37)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global(): Annotation_globalContext {
		const  _localctx: Annotation_globalContext = new Annotation_globalContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ASPCore2Parser.RULE_annotation_global);
		try {
			this.state = 612;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.annotation_global_ordering();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.annotation_global_atom_indexed();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 608;
				this.annotation_global_partial_order();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 609;
				this.annotation_global_extatom_conversion();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 610;
				this.annotation_global_wasp_heuristic();
				}
				break;
			case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 611;
				this.annotation_global_wasp_propagator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotations_rule(): Annotations_ruleContext {
		const  _localctx: Annotations_ruleContext = new Annotations_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ASPCore2Parser.RULE_annotations_rule);
		try {
			this.state = 618;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 614;
				this.annotation_rule();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 615;
				this.annotation_rule();
				this.state = 616;
				this.annotations_rule();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule(): Annotation_ruleContext {
		const  _localctx: Annotation_ruleContext = new Annotation_ruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ASPCore2Parser.RULE_annotation_rule);
		try {
			this.state = 629;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.ANNOTATION_RULE_ORDERING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 620;
				this.annotation_rule_ordering();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 621;
				this.annotation_rule_atom_indexed();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 622;
				this.annotation_rule_partial_order();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_PROJECTION:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 623;
				this.annotation_rule_projection();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 624;
				this.annotation_rule_rewriting_arith();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 625;
				this.annotation_rule_align_substitutions();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 626;
				this.annotation_rule_look_ahead();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 627;
				this.annotation_rule_to_decompose();
				}
				break;
			case ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 628;
				this.annotation_rule_to_not_decompose();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_to_decompose(): Annotation_rule_to_decomposeContext {
		const  _localctx: Annotation_rule_to_decomposeContext = new Annotation_rule_to_decomposeContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ASPCore2Parser.RULE_annotation_rule_to_decompose);
		try {
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 631;
				this.match(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE);
				this.state = 632;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 633;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 634;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.match(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE);
				this.state = 636;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_to_not_decompose(): Annotation_rule_to_not_decomposeContext {
		const  _localctx: Annotation_rule_to_not_decomposeContext = new Annotation_rule_to_not_decomposeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ASPCore2Parser.RULE_annotation_rule_to_not_decompose);
		try {
			this.state = 645;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 639;
				this.match(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE);
				this.state = 640;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 641;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 642;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 643;
				this.match(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE);
				this.state = 644;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_ordering(): Annotation_rule_orderingContext {
		const  _localctx: Annotation_rule_orderingContext = new Annotation_rule_orderingContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ASPCore2Parser.RULE_annotation_rule_ordering);
		try {
			this.state = 661;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 647;
				this.match(ASPCore2Parser.ANNOTATION_RULE_ORDERING);
				this.state = 648;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 649;
				this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
				this.state = 650;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 651;
				this.rule_ordering_type();
				this.state = 652;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 653;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 655;
				this.match(ASPCore2Parser.ANNOTATION_RULE_ORDERING);
				this.state = 656;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 657;
				this.rule_ordering_type();
				this.state = 658;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 659;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_ordering(): Annotation_global_orderingContext {
		const  _localctx: Annotation_global_orderingContext = new Annotation_global_orderingContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ASPCore2Parser.RULE_annotation_global_ordering);
		try {
			this.state = 677;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 663;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING);
				this.state = 664;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 665;
				this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
				this.state = 666;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 667;
				this.global_ordering_type();
				this.state = 668;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 669;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 671;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING);
				this.state = 672;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 673;
				this.global_ordering_type();
				this.state = 674;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 675;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_extatom_conversion(): Annotation_global_extatom_conversionContext {
		const  _localctx: Annotation_global_extatom_conversionContext = new Annotation_global_extatom_conversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ASPCore2Parser.RULE_annotation_global_extatom_conversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			this.match(ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION);
			this.state = 680;
			this.match(ASPCore2Parser.PARAM_OPEN);
			this.state = 681;
			this.match(ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE);
			this.state = 682;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 683;
			this.annotation_extpredicate();
			this.state = 684;
			this.match(ASPCore2Parser.COMMA);
			this.state = 685;
			this.match(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE);
			this.state = 686;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 687;
			this.extatom_conv_types();
			this.state = 688;
			this.match(ASPCore2Parser.PARAM_CLOSE);
			this.state = 689;
			this.match(ASPCore2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_extpredicate(): Annotation_extpredicateContext {
		const  _localctx: Annotation_extpredicateContext = new Annotation_extpredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ASPCore2Parser.RULE_annotation_extpredicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 691;
			this.match(ASPCore2Parser.AMPERSAND);
			this.state = 692;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extatom_conv_types(): Extatom_conv_typesContext {
		const  _localctx: Extatom_conv_typesContext = new Extatom_conv_typesContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ASPCore2Parser.RULE_extatom_conv_types);
		try {
			this.state = 699;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.extatom_conv_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 695;
				this.extatom_conv_type();
				this.state = 696;
				this.match(ASPCore2Parser.COMMA);
				this.state = 697;
				this.extatom_conv_types();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extatom_conv_type(): Extatom_conv_typeContext {
		const  _localctx: Extatom_conv_typeContext = new Extatom_conv_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ASPCore2Parser.RULE_extatom_conv_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			_la = this._input.LA(1);
			if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT - 58)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT - 58)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_ordering_type(): Rule_ordering_typeContext {
		const  _localctx: Rule_ordering_typeContext = new Rule_ordering_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ASPCore2Parser.RULE_rule_ordering_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 703;
			this.match(ASPCore2Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_ordering_type(): Global_ordering_typeContext {
		const  _localctx: Global_ordering_typeContext = new Global_ordering_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ASPCore2Parser.RULE_global_ordering_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 705;
			this.match(ASPCore2Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_atom_indexed(): Annotation_rule_atom_indexedContext {
		const  _localctx: Annotation_rule_atom_indexedContext = new Annotation_rule_atom_indexedContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ASPCore2Parser.RULE_annotation_rule_atom_indexed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 707;
			this.match(ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED);
			this.state = 708;
			this.match(ASPCore2Parser.PARAM_OPEN);
			this.state = 709;
			this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM);
			this.state = 710;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 711;
			this.rule_naf_literal_annotation();
			this.state = 712;
			this.match(ASPCore2Parser.COMMA);
			this.state = 713;
			this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS);
			this.state = 714;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 715;
			this.match(ASPCore2Parser.CURLY_OPEN);
			this.state = 716;
			this.rule_indexing_arguments();
			this.state = 717;
			this.match(ASPCore2Parser.CURLY_CLOSE);
			this.state = 718;
			this.match(ASPCore2Parser.PARAM_CLOSE);
			this.state = 719;
			this.match(ASPCore2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_atom_indexed(): Annotation_global_atom_indexedContext {
		const  _localctx: Annotation_global_atom_indexedContext = new Annotation_global_atom_indexedContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ASPCore2Parser.RULE_annotation_global_atom_indexed);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED);
			this.state = 722;
			this.match(ASPCore2Parser.PARAM_OPEN);
			this.state = 723;
			this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM);
			this.state = 724;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 725;
			this.global_naf_literal_annotation();
			this.state = 726;
			this.match(ASPCore2Parser.COMMA);
			this.state = 727;
			this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS);
			this.state = 728;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 729;
			this.match(ASPCore2Parser.CURLY_OPEN);
			this.state = 730;
			this.global_indexing_arguments();
			this.state = 731;
			this.match(ASPCore2Parser.CURLY_CLOSE);
			this.state = 732;
			this.match(ASPCore2Parser.PARAM_CLOSE);
			this.state = 733;
			this.match(ASPCore2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_indexing_arguments(): Rule_indexing_argumentsContext {
		const  _localctx: Rule_indexing_argumentsContext = new Rule_indexing_argumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ASPCore2Parser.RULE_rule_indexing_arguments);
		try {
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 735;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 736;
				this.match(ASPCore2Parser.NUMBER);
				this.state = 737;
				this.match(ASPCore2Parser.COMMA);
				this.state = 738;
				this.rule_indexing_arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_naf_literal_annotation(): Rule_naf_literal_annotationContext {
		const  _localctx: Rule_naf_literal_annotationContext = new Rule_naf_literal_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ASPCore2Parser.RULE_rule_naf_literal_annotation);
		try {
			this.state = 744;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
			case ASPCore2Parser.DASH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 741;
				this.classic_literal();
				}
				break;
			case ASPCore2Parser.NAF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 742;
				this.match(ASPCore2Parser.NAF);
				this.state = 743;
				this.classic_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_indexing_arguments(): Global_indexing_argumentsContext {
		const  _localctx: Global_indexing_argumentsContext = new Global_indexing_argumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ASPCore2Parser.RULE_global_indexing_arguments);
		try {
			this.state = 750;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 746;
				this.match(ASPCore2Parser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 747;
				this.match(ASPCore2Parser.NUMBER);
				this.state = 748;
				this.match(ASPCore2Parser.COMMA);
				this.state = 749;
				this.global_indexing_arguments();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_naf_literal_annotation(): Global_naf_literal_annotationContext {
		const  _localctx: Global_naf_literal_annotationContext = new Global_naf_literal_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ASPCore2Parser.RULE_global_naf_literal_annotation);
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASPCore2Parser.SYMBOLIC_CONSTANT:
			case ASPCore2Parser.VARIABLE:
			case ASPCore2Parser.STRING:
			case ASPCore2Parser.DASH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 752;
				this.classic_literal();
				}
				break;
			case ASPCore2Parser.NAF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 753;
				this.match(ASPCore2Parser.NAF);
				this.state = 754;
				this.classic_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_atom_annotation_before(): Rule_atom_annotation_beforeContext {
		const  _localctx: Rule_atom_annotation_beforeContext = new Rule_atom_annotation_beforeContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ASPCore2Parser.RULE_rule_atom_annotation_before);
		try {
			this.state = 767;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 757;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 758;
				this.match(ASPCore2Parser.NAF);
				this.state = 759;
				this.classic_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 760;
				this.builtin_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 761;
				this.aggregate_atom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 762;
				this.match(ASPCore2Parser.NAF);
				this.state = 763;
				this.aggregate_atom();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 764;
				this.extAtom();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 765;
				this.match(ASPCore2Parser.NAF);
				this.state = 766;
				this.extAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_atom_annotation_before(): Global_atom_annotation_beforeContext {
		const  _localctx: Global_atom_annotation_beforeContext = new Global_atom_annotation_beforeContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ASPCore2Parser.RULE_global_atom_annotation_before);
		try {
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 769;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 770;
				this.match(ASPCore2Parser.NAF);
				this.state = 771;
				this.classic_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 772;
				this.builtin_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 773;
				this.aggregate_atom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 774;
				this.match(ASPCore2Parser.NAF);
				this.state = 775;
				this.aggregate_atom();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 776;
				this.extAtom();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 777;
				this.match(ASPCore2Parser.NAF);
				this.state = 778;
				this.extAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_atom_annotation_after(): Rule_atom_annotation_afterContext {
		const  _localctx: Rule_atom_annotation_afterContext = new Rule_atom_annotation_afterContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ASPCore2Parser.RULE_rule_atom_annotation_after);
		try {
			this.state = 791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 781;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 782;
				this.match(ASPCore2Parser.NAF);
				this.state = 783;
				this.classic_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 784;
				this.builtin_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 785;
				this.aggregate_atom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 786;
				this.match(ASPCore2Parser.NAF);
				this.state = 787;
				this.aggregate_atom();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 788;
				this.extAtom();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 789;
				this.match(ASPCore2Parser.NAF);
				this.state = 790;
				this.extAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_atom_annotation_after(): Global_atom_annotation_afterContext {
		const  _localctx: Global_atom_annotation_afterContext = new Global_atom_annotation_afterContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ASPCore2Parser.RULE_global_atom_annotation_after);
		try {
			this.state = 803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 793;
				this.classic_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 794;
				this.match(ASPCore2Parser.NAF);
				this.state = 795;
				this.classic_literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 796;
				this.builtin_atom();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 797;
				this.aggregate_atom();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 798;
				this.match(ASPCore2Parser.NAF);
				this.state = 799;
				this.aggregate_atom();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 800;
				this.extAtom();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 801;
				this.match(ASPCore2Parser.NAF);
				this.state = 802;
				this.extAtom();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_atoms_annotation_before(): Rule_atoms_annotation_beforeContext {
		const  _localctx: Rule_atoms_annotation_beforeContext = new Rule_atoms_annotation_beforeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ASPCore2Parser.RULE_rule_atoms_annotation_before);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 805;
				this.rule_atom_annotation_before();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 806;
				this.rule_atom_annotation_before();
				this.state = 807;
				this.match(ASPCore2Parser.COMMA);
				this.state = 808;
				this.rule_atoms_annotation_before();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_atoms_annotation_before(): Global_atoms_annotation_beforeContext {
		const  _localctx: Global_atoms_annotation_beforeContext = new Global_atoms_annotation_beforeContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ASPCore2Parser.RULE_global_atoms_annotation_before);
		try {
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 812;
				this.global_atom_annotation_before();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 813;
				this.global_atom_annotation_before();
				this.state = 814;
				this.match(ASPCore2Parser.COMMA);
				this.state = 815;
				this.global_atoms_annotation_before();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rule_atoms_annotation_after(): Rule_atoms_annotation_afterContext {
		const  _localctx: Rule_atoms_annotation_afterContext = new Rule_atoms_annotation_afterContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ASPCore2Parser.RULE_rule_atoms_annotation_after);
		try {
			this.state = 824;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 819;
				this.rule_atom_annotation_after();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 820;
				this.rule_atom_annotation_after();
				this.state = 821;
				this.match(ASPCore2Parser.COMMA);
				this.state = 822;
				this.rule_atoms_annotation_after();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public global_atoms_annotation_after(): Global_atoms_annotation_afterContext {
		const  _localctx: Global_atoms_annotation_afterContext = new Global_atoms_annotation_afterContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ASPCore2Parser.RULE_global_atoms_annotation_after);
		try {
			this.state = 832;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 826;
				this.global_atom_annotation_after();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 827;
				this.global_atom_annotation_after();
				this.state = 828;
				this.match(ASPCore2Parser.COMMA);
				this.state = 829;
				this.global_atoms_annotation_after();
				this.state = 830;
				this.global_atoms_annotation_after();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_partial_order_begin(): Annotation_rule_partial_order_beginContext {
		const  _localctx: Annotation_rule_partial_order_beginContext = new Annotation_rule_partial_order_beginContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ASPCore2Parser.RULE_annotation_rule_partial_order_begin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 834;
			this.match(ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_partial_order_begin(): Annotation_global_partial_order_beginContext {
		const  _localctx: Annotation_global_partial_order_beginContext = new Annotation_global_partial_order_beginContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ASPCore2Parser.RULE_annotation_global_partial_order_begin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.match(ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_partial_order(): Annotation_rule_partial_orderContext {
		const  _localctx: Annotation_rule_partial_orderContext = new Annotation_rule_partial_orderContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ASPCore2Parser.RULE_annotation_rule_partial_order);
		try {
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 838;
				this.annotation_rule_partial_order_begin();
				this.state = 839;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 840;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
				this.state = 841;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 842;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 843;
				this.rule_atoms_annotation_before();
				this.state = 844;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 845;
				this.match(ASPCore2Parser.COMMA);
				this.state = 846;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
				this.state = 847;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 848;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 849;
				this.rule_atoms_annotation_after();
				this.state = 850;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 851;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 852;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 854;
				this.annotation_rule_partial_order_begin();
				this.state = 855;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 856;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
				this.state = 857;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 858;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 859;
				this.rule_atoms_annotation_after();
				this.state = 860;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 861;
				this.match(ASPCore2Parser.COMMA);
				this.state = 862;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
				this.state = 863;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 864;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 865;
				this.rule_atoms_annotation_before();
				this.state = 866;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 867;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 868;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_partial_order(): Annotation_global_partial_orderContext {
		const  _localctx: Annotation_global_partial_orderContext = new Annotation_global_partial_orderContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ASPCore2Parser.RULE_annotation_global_partial_order);
		try {
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				this.annotation_global_partial_order_begin();
				this.state = 873;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 874;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
				this.state = 875;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 876;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 877;
				this.global_atoms_annotation_before();
				this.state = 878;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 879;
				this.match(ASPCore2Parser.COMMA);
				this.state = 880;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
				this.state = 881;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 882;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 883;
				this.global_atoms_annotation_after();
				this.state = 884;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 885;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 886;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 888;
				this.annotation_global_partial_order_begin();
				this.state = 889;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 890;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
				this.state = 891;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 892;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 893;
				this.global_atoms_annotation_after();
				this.state = 894;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 895;
				this.match(ASPCore2Parser.COMMA);
				this.state = 896;
				this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
				this.state = 897;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 898;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 899;
				this.global_atoms_annotation_before();
				this.state = 900;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 901;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 902;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_projection(): Annotation_rule_projectionContext {
		const  _localctx: Annotation_rule_projectionContext = new Annotation_rule_projectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ASPCore2Parser.RULE_annotation_rule_projection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 906;
			this.match(ASPCore2Parser.ANNOTATION_RULE_PROJECTION);
			this.state = 907;
			this.match(ASPCore2Parser.PARAM_OPEN);
			this.state = 908;
			this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
			this.state = 909;
			this.match(ASPCore2Parser.EQUAL);
			this.state = 910;
			this.annotation_rule_projection_value();
			this.state = 911;
			this.match(ASPCore2Parser.PARAM_CLOSE);
			this.state = 912;
			this.match(ASPCore2Parser.DOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_projection_value(): Annotation_rule_projection_valueContext {
		const  _localctx: Annotation_rule_projection_valueContext = new Annotation_rule_projection_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ASPCore2Parser.RULE_annotation_rule_projection_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(ASPCore2Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_rewriting_arith(): Annotation_rule_rewriting_arithContext {
		const  _localctx: Annotation_rule_rewriting_arithContext = new Annotation_rule_rewriting_arithContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ASPCore2Parser.RULE_annotation_rule_rewriting_arith);
		try {
			this.state = 922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.match(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH);
				this.state = 917;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 918;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 919;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 920;
				this.match(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH);
				this.state = 921;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_align_substitutions(): Annotation_rule_align_substitutionsContext {
		const  _localctx: Annotation_rule_align_substitutionsContext = new Annotation_rule_align_substitutionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ASPCore2Parser.RULE_annotation_rule_align_substitutions);
		try {
			this.state = 930;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 924;
				this.match(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
				this.state = 925;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 926;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 927;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 928;
				this.match(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
				this.state = 929;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_rule_look_ahead(): Annotation_rule_look_aheadContext {
		const  _localctx: Annotation_rule_look_aheadContext = new Annotation_rule_look_aheadContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ASPCore2Parser.RULE_annotation_rule_look_ahead);
		try {
			this.state = 938;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 932;
				this.match(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD);
				this.state = 933;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 934;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 935;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 936;
				this.match(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD);
				this.state = 937;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_wasp_propagator(): Annotation_global_wasp_propagatorContext {
		const  _localctx: Annotation_global_wasp_propagatorContext = new Annotation_global_wasp_propagatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ASPCore2Parser.RULE_annotation_global_wasp_propagator);
		try {
			this.state = 968;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 940;
				this.annotation_global_wasp_propagator_begin();
				this.state = 941;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 942;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				this.state = 943;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 944;
				this.heuristic_python_file();
				this.state = 945;
				this.match(ASPCore2Parser.COMMA);
				this.state = 946;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				this.state = 947;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 948;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 949;
				this.aggregate_elements_heuristic();
				this.state = 950;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 951;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 952;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 954;
				this.annotation_global_wasp_propagator_begin();
				this.state = 955;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 956;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				this.state = 957;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 958;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 959;
				this.aggregate_elements_heuristic();
				this.state = 960;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 961;
				this.match(ASPCore2Parser.COMMA);
				this.state = 962;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				this.state = 963;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 964;
				this.heuristic_python_file();
				this.state = 965;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 966;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_wasp_propagator_begin(): Annotation_global_wasp_propagator_beginContext {
		const  _localctx: Annotation_global_wasp_propagator_beginContext = new Annotation_global_wasp_propagator_beginContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ASPCore2Parser.RULE_annotation_global_wasp_propagator_begin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 970;
			this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_wasp_heuristic(): Annotation_global_wasp_heuristicContext {
		const  _localctx: Annotation_global_wasp_heuristicContext = new Annotation_global_wasp_heuristicContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ASPCore2Parser.RULE_annotation_global_wasp_heuristic);
		try {
			this.state = 1000;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 972;
				this.annotation_global_wasp_heuristic_begin();
				this.state = 973;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 974;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				this.state = 975;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 976;
				this.heuristic_python_file();
				this.state = 977;
				this.match(ASPCore2Parser.COMMA);
				this.state = 978;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				this.state = 979;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 980;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 981;
				this.aggregate_elements_heuristic();
				this.state = 982;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 983;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 984;
				this.match(ASPCore2Parser.DOT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 986;
				this.annotation_global_wasp_heuristic_begin();
				this.state = 987;
				this.match(ASPCore2Parser.PARAM_OPEN);
				this.state = 988;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
				this.state = 989;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 990;
				this.match(ASPCore2Parser.CURLY_OPEN);
				this.state = 991;
				this.aggregate_elements_heuristic();
				this.state = 992;
				this.match(ASPCore2Parser.CURLY_CLOSE);
				this.state = 993;
				this.match(ASPCore2Parser.COMMA);
				this.state = 994;
				this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
				this.state = 995;
				this.match(ASPCore2Parser.EQUAL);
				this.state = 996;
				this.heuristic_python_file();
				this.state = 997;
				this.match(ASPCore2Parser.PARAM_CLOSE);
				this.state = 998;
				this.match(ASPCore2Parser.DOT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation_global_wasp_heuristic_begin(): Annotation_global_wasp_heuristic_beginContext {
		const  _localctx: Annotation_global_wasp_heuristic_beginContext = new Annotation_global_wasp_heuristic_beginContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ASPCore2Parser.RULE_annotation_global_wasp_heuristic_begin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1002;
			this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public heuristic_python_file(): Heuristic_python_fileContext {
		const  _localctx: Heuristic_python_fileContext = new Heuristic_python_fileContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ASPCore2Parser.RULE_heuristic_python_file);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(ASPCore2Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_element_heuristic(): Aggregate_element_heuristicContext {
		const  _localctx: Aggregate_element_heuristicContext = new Aggregate_element_heuristicContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ASPCore2Parser.RULE_aggregate_element_heuristic);
		try {
			this.state = 1008;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1006;
				this.aggregate_element();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1007;
				this.classic_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_elements_heuristic(): Aggregate_elements_heuristicContext {
		const  _localctx: Aggregate_elements_heuristicContext = new Aggregate_elements_heuristicContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ASPCore2Parser.RULE_aggregate_elements_heuristic);
		try {
			this.state = 1015;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1010;
				this.aggregate_element_heuristic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1011;
				this.aggregate_element_heuristic();
				this.state = 1012;
				this.match(ASPCore2Parser.SEMICOLON);
				this.state = 1013;
				this.aggregate_elements_heuristic();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u03FC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x03\x02\x07\x02\xD6\n\x02\f\x02\x0E\x02\xD9\v\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xE1\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\xF9\n\x04\x03\x05\x03\x05\x05\x05\xFD\n\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u010A\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\b\u0115\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0121\n\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0128\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\v\u013E\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u014B\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u0152\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x05\x11\u015B\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u0162\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x05\x13\u016B\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0171\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\u017A" +
		"\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0186\n\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A3\n\x18\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01AC\n\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01B3\n\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01BF" +
		"\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03!\x03!\x03!\x05!\u01D0\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05" +
		"\"\u01D8\n\"\x03#\x03#\x03#\x05#\u01DD\n#\x03$\x03$\x03$\x03$\x03$\x05" +
		"$\u01E4\n$\x03%\x03%\x03%\x03%\x03%\x05%\u01EB\n%\x03&\x03&\x03&\x05&" +
		"\u01F0\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01F7\n\'\x03(\x03(\x03" +
		")\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x05*\u0204\n*\x03+\x03+\x03" +
		",\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x03" +
		"0\x030\x030\x030\x050\u021A\n0\x031\x031\x031\x032\x032\x032\x033\x03" +
		"3\x053\u0224\n3\x034\x034\x034\x035\x035\x035\x036\x036\x036\x037\x03" +
		"7\x037\x038\x038\x038\x038\x038\x038\x058\u0238\n8\x039\x039\x039\x03" +
		"9\x039\x039\x039\x039\x039\x059\u0243\n9\x03:\x03:\x03;\x03;\x03<\x03" +
		"<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x05<\u0252\n<\x03=\x03=\x03=\x03" +
		"=\x03=\x05=\u0259\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x05@\u0267\n@\x03A\x03A\x03A\x03A\x05A\u026D\nA\x03B\x03B" +
		"\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0278\nB\x03C\x03C\x03C\x03C" +
		"\x03C\x03C\x05C\u0280\nC\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0288\nD\x03" +
		"E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x03E\x05" +
		"E\u0298\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03" +
		"F\x03F\x03F\x05F\u02A8\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x03" +
		"G\x03G\x03G\x03G\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x05I\u02BE\n" +
		"I\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x05O\u02E6\nO\x03" +
		"P\x03P\x03P\x05P\u02EB\nP\x03Q\x03Q\x03Q\x03Q\x05Q\u02F1\nQ\x03R\x03R" +
		"\x03R\x05R\u02F6\nR\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S" +
		"\x05S\u0302\nS\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x05T" +
		"\u030E\nT\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u031A" +
		"\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0326\nV\x03" +
		"W\x03W\x03W\x03W\x03W\x05W\u032D\nW\x03X\x03X\x03X\x03X\x03X\x05X\u0334" +
		"\nX\x03Y\x03Y\x03Y\x03Y\x03Y\x05Y\u033B\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x05Z\u0343\nZ\x03[\x03[\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03" +
		"]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x05]\u0369\n" +
		"]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
		"^\x03^\x03^\x03^\x03^\x05^\u038B\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
		"_\x03_\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03a\x05a\u039D\na\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x05b\u03A5\nb\x03c\x03c\x03c\x03c\x03c\x03c\x05" +
		"c\u03AD\nc\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03d\x03" +
		"d\x03d\x03d\x05d\u03CB\nd\x03e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x03" +
		"f\x03f\x03f\x03f\x03f\x03f\x03f\x03f\x05f\u03EB\nf\x03g\x03g\x03h\x03" +
		"h\x03i\x03i\x05i\u03F3\ni\x03j\x03j\x03j\x03j\x03j\x05j\u03FA\nj\x03j" +
		"\x02\x02\x02k\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\x02\v" +
		"\x03\x02\x1F \x03\x02\x12\x13\x03\x02\x14\x16\x04\x02\x05\x05\x1E\x1E" +
		"\x03\x02\x04\x06\x04\x02!!##\x04\x02\"\"$$\x03\x02\'*\x03\x02<B\x02\u040F" +
		"\x02\xD7\x03\x02\x02\x02\x04\xE0\x03\x02\x02\x02\x06\xF8\x03\x02\x02\x02" +
		"\b\xFC\x03\x02\x02\x02\n\xFE\x03\x02\x02\x02\f\u0109\x03\x02\x02\x02\x0E" +
		"\u0114\x03\x02\x02\x02\x10\u0120\x03\x02\x02\x02\x12\u0127\x03\x02\x02" +
		"\x02\x14\u013D\x03\x02\x02\x02\x16\u013F\x03\x02\x02\x02\x18\u0142\x03" +
		"\x02\x02\x02\x1A\u014A\x03\x02\x02\x02\x1C\u0151\x03\x02\x02\x02\x1E\u0153" +
		"\x03\x02\x02\x02 \u015A\x03\x02\x02\x02\"\u0161\x03\x02\x02\x02$\u016A" +
		"\x03\x02\x02\x02&\u0170\x03\x02\x02\x02(\u0172\x03\x02\x02\x02*\u0179" +
		"\x03\x02\x02\x02,\u0185\x03\x02\x02\x02.\u01A2\x03\x02\x02\x020\u01A4" +
		"\x03\x02\x02\x022\u01AB\x03\x02\x02\x024\u01B2\x03\x02\x02\x026\u01B4" +
		"\x03\x02\x02\x028\u01B8\x03\x02\x02\x02:\u01BE\x03\x02\x02\x02<\u01C0" +
		"\x03\x02\x02\x02>\u01C2\x03\x02\x02\x02@\u01CF\x03\x02\x02\x02B\u01D7" +
		"\x03\x02\x02\x02D\u01DC\x03\x02\x02\x02F\u01E3\x03\x02\x02\x02H\u01EA" +
		"\x03\x02\x02\x02J\u01EF\x03\x02\x02\x02L\u01F6\x03\x02\x02\x02N\u01F8" +
		"\x03\x02\x02\x02P\u01FA\x03\x02\x02\x02R\u0203\x03\x02\x02\x02T\u0205" +
		"\x03\x02\x02\x02V\u0207\x03\x02\x02\x02X\u020A\x03\x02\x02\x02Z\u020D" +
		"\x03\x02\x02\x02\\\u0210\x03\x02\x02\x02^\u0219\x03\x02\x02\x02`\u021B" +
		"\x03\x02\x02\x02b\u021E\x03\x02\x02\x02d\u0223\x03\x02\x02\x02f\u0225" +
		"\x03\x02\x02\x02h\u0228\x03\x02\x02\x02j\u022B\x03\x02\x02\x02l\u022E" +
		"\x03\x02\x02\x02n\u0237\x03\x02\x02\x02p\u0242\x03\x02\x02\x02r\u0244" +
		"\x03\x02\x02\x02t\u0246\x03\x02\x02\x02v\u0251\x03\x02\x02\x02x\u0258" +
		"\x03\x02\x02\x02z\u025A\x03\x02\x02\x02|\u025E\x03\x02\x02\x02~\u0266" +
		"\x03\x02\x02\x02\x80\u026C\x03\x02\x02\x02\x82\u0277\x03\x02\x02\x02\x84" +
		"\u027F\x03\x02\x02\x02\x86\u0287\x03\x02\x02\x02\x88\u0297\x03\x02\x02" +
		"\x02\x8A\u02A7\x03\x02\x02\x02\x8C\u02A9\x03\x02\x02\x02\x8E\u02B5\x03" +
		"\x02\x02\x02\x90\u02BD\x03\x02\x02\x02\x92\u02BF\x03\x02\x02\x02\x94\u02C1" +
		"\x03\x02\x02\x02\x96\u02C3\x03\x02\x02\x02\x98\u02C5\x03\x02\x02\x02\x9A" +
		"\u02D3\x03\x02\x02\x02\x9C\u02E5\x03\x02\x02\x02\x9E\u02EA\x03\x02\x02" +
		"\x02\xA0\u02F0\x03\x02\x02\x02\xA2\u02F5\x03\x02\x02\x02\xA4\u0301\x03" +
		"\x02\x02\x02\xA6\u030D\x03\x02\x02\x02\xA8\u0319\x03\x02\x02\x02\xAA\u0325" +
		"\x03\x02\x02\x02\xAC\u032C\x03\x02\x02\x02\xAE\u0333\x03\x02\x02\x02\xB0" +
		"\u033A\x03\x02\x02\x02\xB2\u0342\x03\x02\x02\x02\xB4\u0344\x03\x02\x02" +
		"\x02\xB6\u0346\x03\x02\x02\x02\xB8\u0368\x03\x02\x02\x02\xBA\u038A\x03" +
		"\x02\x02\x02\xBC\u038C\x03\x02\x02\x02\xBE\u0394\x03\x02\x02\x02\xC0\u039C" +
		"\x03\x02\x02\x02\xC2\u03A4\x03\x02\x02\x02\xC4\u03AC\x03\x02\x02\x02\xC6" +
		"\u03CA\x03\x02\x02\x02\xC8\u03CC\x03\x02\x02\x02\xCA\u03EA\x03\x02\x02" +
		"\x02\xCC\u03EC\x03\x02\x02\x02\xCE\u03EE\x03\x02\x02\x02\xD0\u03F2\x03" +
		"\x02\x02\x02\xD2\u03F9\x03\x02\x02\x02\xD4\xD6\x05\x04\x03\x02\xD5\xD4" +
		"\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\x03\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xE1" +
		"\x05\x06\x04\x02\xDB\xDC\x05\x80A\x02\xDC\xDD\x05\x06\x04\x02\xDD\xE1" +
		"\x03\x02\x02\x02\xDE\xE1\x05~@\x02\xDF\xE1\x05V,\x02\xE0\xDA\x03\x02\x02" +
		"\x02\xE0\xDB\x03\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02" +
		"\x02\xE1\x05\x03\x02\x02\x02\xE2\xE3\x05\b\x05\x02\xE3\xE4\x07\t\x02\x02" +
		"\xE4\xF9\x03\x02\x02\x02\xE5\xE6\x05\b\x05\x02\xE6\xE7\x07\x10\x02\x02" +
		"\xE7\xE8\x07\t\x02\x02\xE8\xF9\x03\x02\x02\x02\xE9\xEA\x05\b\x05\x02\xEA" +
		"\xEB\x07\x10\x02\x02\xEB\xEC\x05\n\x06\x02\xEC\xED\x07\t\x02\x02\xED\xF9" +
		"\x03\x02\x02\x02\xEE\xEF\x07\x10\x02\x02\xEF\xF0\x05\n\x06\x02\xF0\xF1" +
		"\x07\t\x02\x02\xF1\xF9\x03\x02\x02\x02\xF2\xF3\x07\x11\x02\x02\xF3\xF4" +
		"\x05\n\x06\x02\xF4\xF5\x07\t\x02\x02\xF5\xF6\x05\f\x07\x02\xF6\xF9\x03" +
		"\x02\x02\x02\xF7\xF9\x05X-\x02\xF8\xE2\x03\x02\x02\x02\xF8\xE5\x03\x02" +
		"\x02\x02\xF8\xE9\x03\x02\x02\x02\xF8\xEE\x03\x02\x02\x02\xF8\xF2\x03\x02" +
		"\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9\x07\x03\x02\x02\x02\xFA\xFD\x05\x10" +
		"\t\x02\xFB\xFD\x05\x14\v\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFB\x03\x02\x02" +
		"\x02\xFD\t\x03\x02\x02\x02\xFE\xFF\x05\x12\n\x02\xFF\v\x03\x02\x02\x02" +
		"\u0100\u0101\x07\x19\x02\x02\u0101\u0102\x05D#\x02\u0102\u0103\x07\x1A" +
		"\x02\x02\u0103\u010A\x03\x02\x02\x02\u0104\u0105\x07\x19\x02\x02\u0105" +
		"\u0106\x05D#\x02\u0106\u0107\x05\x0E\b\x02\u0107\u0108\x07\x1A\x02\x02" +
		"\u0108\u010A\x03\x02\x02\x02\u0109\u0100\x03\x02\x02\x02\u0109\u0104\x03" +
		"\x02\x02\x02\u010A\r\x03\x02\x02\x02\u010B\u010C\x07\x0F\x02\x02\u010C" +
		"\u0115\x05D#\x02\u010D\u010E\x07\x0F\x02\x02\u010E\u010F\x05D#\x02\u010F" +
		"\u0110\x07\v\x02\x02\u0110\u0111\x052\x1A\x02\u0111\u0115\x03\x02\x02" +
		"\x02\u0112\u0113\x07\v\x02\x02\u0113\u0115\x052\x1A\x02\u0114\u010B\x03" +
		"\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02\u0115" +
		"\x0F\x03\x02\x02\x02\u0116\u0121\x05*\x16\x02\u0117\u0118\x05*\x16\x02" +
		"\u0118\u0119\x07\f\x02\x02\u0119\u011A\x05\x10\t\x02\u011A\u0121\x03\x02" +
		"\x02\x02\u011B\u0121\x05(\x15\x02\u011C\u011D\x05(\x15\x02\u011D\u011E" +
		"\x07\f\x02\x02\u011E\u011F\x05\x10\t\x02\u011F\u0121\x03\x02\x02\x02\u0120" +
		"\u0116\x03\x02\x02\x02\u0120\u0117\x03\x02\x02\x02\u0120\u011B\x03\x02" +
		"\x02\x02\u0120\u011C\x03\x02\x02\x02\u0121\x11\x03\x02\x02\x02\u0122\u0128" +
		"\x05&\x14\x02\u0123\u0124\x05&\x14\x02\u0124\u0125\x07\v\x02\x02\u0125" +
		"\u0126\x05\x12\n\x02\u0126\u0128\x03\x02\x02\x02\u0127\u0122\x03\x02\x02" +
		"\x02\u0127\u0123\x03\x02\x02\x02\u0128\x13\x03\x02\x02\x02\u0129\u012A" +
		"\x05\x16\f\x02\u012A\u012B\x07\x1B\x02\x02\u012B\u012C\x05\x1A\x0E\x02" +
		"\u012C\u012D\x07\x1C\x02\x02\u012D\u012E\x05\x18\r\x02\u012E\u013E\x03" +
		"\x02\x02\x02\u012F\u0130\x05\x16\f\x02\u0130\u0131\x07\x1B\x02\x02\u0131" +
		"\u0132\x05\x1A\x0E\x02\u0132\u0133\x07\x1C\x02\x02\u0133\u013E\x03\x02" +
		"\x02\x02\u0134\u0135\x07\x1B\x02\x02\u0135\u0136\x05\x1A\x0E\x02\u0136" +
		"\u0137\x07\x1C\x02\x02\u0137\u013E\x03\x02\x02\x02\u0138\u0139\x07\x1B" +
		"\x02\x02\u0139\u013A\x05\x1A\x0E\x02\u013A\u013B\x07\x1C\x02\x02\u013B" +
		"\u013C\x05\x18\r\x02\u013C\u013E\x03\x02\x02\x02\u013D\u0129\x03\x02\x02" +
		"\x02\u013D\u012F\x03\x02\x02\x02\u013D\u0134\x03\x02\x02\x02\u013D\u0138" +
		"\x03\x02\x02\x02\u013E\x15\x03\x02\x02\x02\u013F\u0140\x05D#\x02\u0140" +
		"\u0141\x05:\x1E\x02\u0141\x17\x03\x02\x02\x02\u0142\u0143\x05:\x1E\x02" +
		"\u0143\u0144\x05D#\x02\u0144\x19\x03\x02\x02\x02\u0145\u0146\x05\x1C\x0F" +
		"\x02\u0146\u0147\x07\r\x02\x02\u0147\u0148\x05\x1A\x0E\x02\u0148\u014B" +
		"\x03\x02\x02\x02\u0149\u014B\x05\x1C\x0F\x02\u014A\u0145\x03\x02\x02\x02" +
		"\u014A\u0149\x03\x02\x02\x02\u014B\x1B\x03\x02\x02\x02\u014C\u0152\x05" +
		"\x1E\x10\x02\u014D\u014E\x05\x1E\x10\x02\u014E\u014F\x07\x0E\x02\x02\u014F" +
		"\u0150\x05 \x11\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014C\x03\x02\x02" +
		"\x02\u0151\u014D\x03\x02\x02\x02\u0152\x1D\x03\x02\x02\x02\u0153\u0154" +
		"\x05,\x17\x02\u0154\x1F\x03\x02\x02\x02\u0155\u015B\x05$\x13\x02\u0156" +
		"\u0157\x05\"\x12\x02\u0157\u0158\x07\v\x02\x02\u0158\u0159\x05$\x13\x02" +
		"\u0159\u015B\x03\x02\x02\x02\u015A\u0155\x03\x02\x02\x02\u015A\u0156\x03" +
		"\x02\x02\x02\u015B!\x03\x02\x02\x02\u015C\u0162\x05$\x13\x02\u015D\u015E" +
		"\x05$\x13\x02\u015E\u015F\x07\v\x02\x02\u015F\u0160\x05\"\x12\x02\u0160" +
		"\u0162\x03\x02\x02\x02\u0161\u015C\x03\x02\x02\x02\u0161\u015D\x03\x02" +
		"\x02\x02\u0162#\x03\x02\x02\x02\u0163\u016B\x05*\x16\x02\u0164\u0165\x07" +
		"\x03\x02\x02\u0165\u016B\x05*\x16\x02\u0166\u016B\x056\x1C\x02\u0167\u016B" +
		"\x05.\x18\x02\u0168\u0169\x07\x03\x02\x02\u0169\u016B\x05.\x18\x02\u016A" +
		"\u0163\x03\x02\x02\x02\u016A\u0164\x03\x02\x02\x02\u016A\u0166\x03\x02" +
		"\x02\x02\u016A\u0167\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
		"%\x03\x02\x02\x02\u016C\u0171\x05$\x13\x02\u016D\u0171\x05p9\x02\u016E" +
		"\u016F\x07\x03\x02\x02\u016F\u0171\x05p9\x02\u0170\u016C\x03\x02\x02\x02" +
		"\u0170\u016D\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\'\x03\x02" +
		"\x02\x02\u0172\u0173\x07&\x02\x02\u0173\u0174\x05R*\x02\u0174\u0175\x05" +
		",\x17\x02\u0175)\x03\x02\x02\x02\u0176\u017A\x05,\x17\x02\u0177\u0178" +
		"\x07\x13\x02\x02\u0178\u017A\x05,\x17\x02\u0179\u0176\x03\x02\x02\x02" +
		"\u0179\u0177\x03\x02\x02\x02\u017A+\x03\x02\x02\x02\u017B\u0186\x05T+" +
		"\x02\u017C\u017D\x05T+\x02\u017D\u017E\x07\x17\x02\x02\u017E\u017F\x05" +
		"2\x1A\x02\u017F\u0180\x07\x18\x02\x02\u0180\u0186\x03\x02\x02\x02\u0181" +
		"\u0182\x05T+\x02\u0182\u0183\x07\x17\x02\x02\u0183\u0184\x07\x18\x02\x02" +
		"\u0184\u0186\x03\x02\x02\x02\u0185\u017B\x03\x02\x02\x02\u0185\u017C\x03" +
		"\x02\x02\x02\u0185\u0181\x03\x02\x02\x02\u0186-\x03\x02\x02\x02\u0187" +
		"\u0188\x07%\x02\x02\u0188\u0189\x05T+\x02\u0189\u018A\x07\x17\x02\x02" +
		"\u018A\u018B\x052\x1A\x02\u018B\u018C\x050\x19\x02\u018C\u018D\x052\x1A" +
		"\x02\u018D\u018E\x07\x18\x02\x02\u018E\u01A3\x03\x02\x02\x02\u018F\u0190" +
		"\x07%\x02\x02\u0190\u0191\x05T+\x02\u0191\u0192\x07\x17\x02\x02\u0192" +
		"\u0193\x050\x19\x02\u0193\u0194\x052\x1A\x02\u0194\u0195\x07\x18\x02\x02" +
		"\u0195\u01A3\x03\x02\x02\x02\u0196\u0197\x07%\x02\x02\u0197\u0198\x05" +
		"T+\x02\u0198\u0199\x07\x17\x02\x02\u0199\u019A\x052\x1A\x02\u019A\u019B" +
		"\x050\x19\x02\u019B\u019C\x07\x18\x02\x02\u019C\u01A3\x03\x02\x02\x02" +
		"\u019D\u019E\x07%\x02\x02\u019E\u019F\x05T+\x02\u019F\u01A0\x07\x17\x02" +
		"\x02\u01A0\u01A1\x07\x18\x02\x02\u01A1\u01A3\x03\x02\x02\x02\u01A2\u0187" +
		"\x03\x02\x02\x02\u01A2\u018F\x03\x02\x02\x02\u01A2\u0196\x03\x02\x02\x02" +
		"\u01A2\u019D\x03\x02\x02\x02\u01A3/\x03\x02\x02\x02\u01A4\u01A5\x07\r" +
		"\x02\x02\u01A51\x03\x02\x02\x02\u01A6\u01AC\x05D#\x02\u01A7\u01A8\x05" +
		"D#\x02\u01A8\u01A9\x07\v\x02\x02\u01A9\u01AA\x052\x1A\x02\u01AA\u01AC" +
		"\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02\x02\x02" +
		"\u01AC3\x03\x02\x02\x02\u01AD\u01B3\x05J&\x02\u01AE\u01AF\x05J&\x02\u01AF" +
		"\u01B0\x07\v\x02\x02\u01B0\u01B1\x054\x1B\x02\u01B1\u01B3\x03\x02\x02" +
		"\x02\u01B2\u01AD\x03\x02\x02\x02\u01B2\u01AE\x03\x02\x02\x02\u01B35\x03" +
		"\x02\x02\x02\u01B4\u01B5\x05D#\x02\u01B5\u01B6\x05:\x1E\x02\u01B6\u01B7" +
		"\x05D#\x02\u01B77\x03\x02\x02\x02\u01B8\u01B9\t\x02\x02\x02\u01B99\x03" +
		"\x02\x02\x02\u01BA\u01BF\x058\x1D\x02\u01BB\u01BF\x058\x1D\x02\u01BC\u01BF" +
		"\x05r:\x02\u01BD\u01BF\x05t;\x02\u01BE\u01BA\x03\x02\x02\x02\u01BE\u01BB" +
		"\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BD\x03\x02\x02\x02" +
		"\u01BF;\x03\x02\x02\x02\u01C0\u01C1\t\x03\x02\x02\u01C1=\x03\x02\x02\x02" +
		"\u01C2\u01C3\t\x04\x02\x02\u01C3?\x03\x02\x02\x02\u01C4\u01D0\x07\x1E" +
		"\x02\x02\u01C5\u01C6\x05T+\x02\u01C6\u01C7\x07\x17\x02\x02\u01C7\u01C8" +
		"\x052\x1A\x02\u01C8\u01C9\x07\x18\x02\x02\u01C9\u01D0\x03\x02\x02\x02" +
		"\u01CA\u01CB\x07\x07\x02\x02\u01CB\u01CC\x07\n\x02\x02\u01CC\u01D0\x07" +
		"\x07\x02\x02\u01CD\u01CE\x07\x13\x02\x02\u01CE\u01D0\x05D#\x02\u01CF\u01C4" +
		"\x03\x02\x02\x02\u01CF\u01C5\x03\x02\x02\x02\u01CF\u01CA\x03\x02\x02\x02" +
		"\u01CF\u01CD\x03\x02\x02\x02\u01D0A\x03\x02\x02\x02\u01D1\u01D8\x05T+" +
		"\x02\u01D2\u01D8\x07\x07\x02\x02\u01D3\u01D4\x07\x17\x02\x02\u01D4\u01D5" +
		"\x05D#\x02\u01D5\u01D6\x07\x18\x02\x02\u01D6\u01D8\x03\x02\x02\x02\u01D7" +
		"\u01D1\x03\x02\x02\x02\u01D7\u01D2\x03\x02\x02\x02\u01D7\u01D3\x03\x02" +
		"\x02\x02\u01D8C\x03\x02\x02\x02\u01D9\u01DD\x05@!\x02\u01DA\u01DD\x05" +
		"T+\x02\u01DB\u01DD\x05F$\x02\u01DC\u01D9\x03\x02\x02\x02\u01DC\u01DA\x03" +
		"\x02\x02\x02\u01DC\u01DB\x03\x02\x02\x02\u01DDE\x03\x02\x02\x02\u01DE" +
		"\u01E4\x05H%\x02\u01DF\u01E0\x05H%\x02\u01E0\u01E1\x05<\x1F\x02\u01E1" +
		"\u01E2\x05F$\x02\u01E2\u01E4\x03\x02\x02\x02\u01E3\u01DE\x03\x02\x02\x02" +
		"\u01E3\u01DF\x03\x02\x02\x02\u01E4G\x03\x02\x02\x02\u01E5\u01EB\x05B\"" +
		"\x02\u01E6\u01E7\x05B\"\x02\u01E7\u01E8\x05> \x02\u01E8\u01E9\x05H%\x02" +
		"\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E5\x03\x02\x02\x02\u01EA\u01E6\x03" +
		"\x02\x02\x02\u01EBI\x03\x02\x02\x02\u01EC\u01F0\x05L\'\x02\u01ED\u01F0" +
		"\x05N(\x02\u01EE\u01F0\x05P)";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01EF\u01EC\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01EE" +
		"\x03\x02\x02\x02\u01F0K\x03\x02\x02\x02\u01F1\u01F7\x07\x04\x02\x02\u01F2" +
		"\u01F7\x07\x06\x02\x02\u01F3\u01F7\x07\x07\x02\x02\u01F4\u01F5\x07\x13" +
		"\x02\x02\u01F5\u01F7\x07\x07\x02\x02\u01F6\u01F1\x03\x02\x02\x02\u01F6" +
		"\u01F2\x03\x02\x02\x02\u01F6\u01F3\x03\x02\x02\x02\u01F6\u01F4\x03\x02" +
		"\x02\x02\u01F7M\x03\x02\x02\x02\u01F8\u01F9\t\x05\x02\x02\u01F9O\x03\x02" +
		"\x02\x02\u01FA\u01FB\x05T+\x02\u01FB\u01FC\x07\x17\x02\x02\u01FC\u01FD" +
		"\x052\x1A\x02\u01FD\u01FE\x07\x18\x02\x02\u01FEQ\x03\x02\x02\x02\u01FF" +
		"\u0204\x07\x05\x02\x02\u0200\u0201\x07\x05\x02\x02\u0201\u0202\x07\v\x02" +
		"\x02\u0202\u0204\x05R*\x02\u0203\u01FF\x03\x02\x02\x02\u0203\u0200\x03" +
		"\x02\x02\x02\u0204S\x03\x02\x02\x02\u0205\u0206\t\x06\x02\x02\u0206U\x03" +
		"\x02\x02\x02\u0207\u0208\x07,\x02\x02\u0208\u0209\x07-\x02\x02\u0209W" +
		"\x03\x02\x02\x02\u020A\u020B\x05,\x17\x02\u020B\u020C\x07\x1D\x02\x02" +
		"\u020CY\x03\x02\x02\x02\u020D\u020E\x05D#\x02\u020E\u020F\x058\x1D\x02" +
		"\u020F[\x03\x02\x02\x02\u0210\u0211\x058\x1D\x02\u0211\u0212\x05D#\x02" +
		"\u0212]\x03\x02\x02\x02\u0213\u0214\x05Z.\x02\u0214\u0215\x05v<\x02\u0215" +
		"\u021A\x03\x02\x02\x02\u0216\u0217\x05v<\x02\u0217\u0218\x05\\/\x02\u0218" +
		"\u021A\x03\x02\x02\x02\u0219\u0213\x03\x02\x02\x02\u0219\u0216\x03\x02" +
		"\x02\x02\u021A_\x03\x02\x02\x02\u021B\u021C\x05D#\x02\u021C\u021D\x05" +
		"r:\x02\u021Da\x03\x02\x02\x02\u021E\u021F\x05`1\x02\u021F\u0220\x05v<" +
		"\x02\u0220c\x03\x02\x02\x02\u0221\u0224\x05b2\x02\u0222\u0224\x05h5\x02" +
		"\u0223\u0221\x03\x02\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224e\x03\x02" +
		"\x02\x02\u0225\u0226\x05D#\x02\u0226\u0227\x05t;\x02\u0227g\x03\x02\x02" +
		"\x02\u0228\u0229\x05f4\x02\u0229\u022A\x05v<\x02\u022Ai\x03\x02\x02\x02" +
		"\u022B\u022C\x05r:\x02\u022C\u022D\x05D#\x02\u022Dk\x03\x02\x02\x02\u022E" +
		"\u022F\x05t;\x02\u022F\u0230\x05D#\x02\u0230m\x03\x02\x02\x02\u0231\u0232" +
		"\x05v<\x02\u0232\u0233\x05j6\x02\u0233\u0238\x03\x02\x02\x02\u0234\u0235" +
		"\x05v<\x02\u0235\u0236\x05l7\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0231" +
		"\x03\x02\x02\x02\u0237\u0234\x03\x02\x02\x02\u0238o\x03\x02\x02\x02\u0239" +
		"\u0243\x05d3\x02\u023A\u0243\x05n8\x02\u023B\u0243\x05^0\x02\u023C\u023D" +
		"\x05b2\x02\u023D\u023E\x05j6\x02\u023E\u0243\x03\x02\x02\x02\u023F\u0240" +
		"\x05h5\x02\u0240\u0241\x05l7\x02\u0241\u0243\x03\x02\x02\x02\u0242\u0239" +
		"\x03\x02\x02\x02\u0242\u023A\x03\x02\x02\x02\u0242\u023B\x03\x02\x02\x02" +
		"\u0242\u023C\x03\x02\x02\x02\u0242\u023F\x03\x02\x02\x02\u0243q\x03\x02" +
		"\x02\x02\u0244\u0245\t\x07\x02\x02\u0245s\x03\x02\x02\x02\u0246\u0247" +
		"\t\b\x02\x02\u0247u\x03\x02\x02\x02\u0248\u0249\x05|?\x02\u0249\u024A" +
		"\x07\x1B\x02\x02\u024A\u024B\x05x=\x02\u024B\u024C\x07\x1C\x02\x02\u024C" +
		"\u0252\x03\x02\x02\x02\u024D\u024E\x05|?\x02\u024E\u024F\x07\x1B\x02\x02" +
		"\u024F\u0250\x07\x1C\x02\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0248\x03" +
		"\x02\x02\x02\u0251\u024D\x03\x02\x02\x02\u0252w\x03\x02\x02\x02\u0253" +
		"\u0254\x05z>\x02\u0254\u0255\x07\r\x02\x02\u0255\u0256\x05x=\x02\u0256" +
		"\u0259\x03\x02\x02\x02\u0257\u0259\x05z>\x02\u0258\u0253\x03\x02\x02\x02" +
		"\u0258\u0257\x03\x02\x02\x02\u0259y\x03\x02\x02\x02\u025A\u025B\x054\x1B" +
		"\x02\u025B\u025C\x07\x0E\x02\x02\u025C\u025D\x05\"\x12\x02\u025D{\x03" +
		"\x02\x02\x02\u025E\u025F\t\t\x02\x02\u025F}\x03\x02\x02\x02\u0260\u0267" +
		"\x05\x8AF\x02\u0261\u0267\x05\x9AN\x02\u0262\u0267\x05\xBA^\x02\u0263" +
		"\u0267\x05\x8CG\x02\u0264\u0267\x05\xCAf\x02\u0265\u0267\x05\xC6d\x02" +
		"\u0266\u0260\x03\x02\x02\x02\u0266\u0261\x03\x02\x02\x02\u0266\u0262\x03" +
		"\x02\x02\x02\u0266\u0263\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0266" +
		"\u0265\x03\x02\x02\x02\u0267\x7F\x03\x02\x02\x02\u0268\u026D\x05\x82B" +
		"\x02\u0269\u026A\x05\x82B\x02\u026A\u026B\x05\x80A\x02\u026B\u026D\x03" +
		"\x02\x02\x02\u026C\u0268\x03\x02\x02\x02\u026C\u0269\x03\x02\x02\x02\u026D" +
		"\x81\x03\x02\x02\x02\u026E\u0278\x05\x88E\x02\u026F\u0278\x05\x98M\x02" +
		"\u0270\u0278\x05\xB8]\x02\u0271\u0278\x05\xBC_\x02\u0272\u0278\x05\xC0" +
		"a\x02\u0273\u0278\x05\xC2b\x02\u0274\u0278\x05\xC4c\x02\u0275\u0278\x05" +
		"\x84C\x02\u0276\u0278\x05\x86D\x02\u0277\u026E\x03\x02\x02\x02\u0277\u026F" +
		"\x03\x02\x02\x02\u0277\u0270\x03\x02\x02\x02\u0277\u0271\x03\x02\x02\x02" +
		"\u0277\u0272\x03\x02\x02\x02\u0277\u0273\x03\x02\x02\x02\u0277\u0274\x03" +
		"\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0277\u0276\x03\x02\x02\x02\u0278" +
		"\x83\x03\x02\x02\x02\u0279\u027A\x07G\x02\x02\u027A\u027B\x07\x17\x02" +
		"\x02\u027B\u027C\x07\x18\x02\x02\u027C\u0280\x07\t\x02\x02\u027D\u027E" +
		"\x07G\x02\x02\u027E\u0280\x07\t\x02\x02\u027F\u0279\x03\x02\x02\x02\u027F" +
		"\u027D\x03\x02\x02\x02\u0280\x85\x03\x02\x02\x02\u0281\u0282\x07H\x02" +
		"\x02\u0282\u0283\x07\x17\x02\x02\u0283\u0284\x07\x18\x02\x02\u0284\u0288" +
		"\x07\t\x02\x02\u0285\u0286\x07H\x02\x02\u0286\u0288\x07\t\x02\x02\u0287" +
		"\u0281\x03\x02\x02\x02\u0287\u0285\x03\x02\x02\x02\u0288\x87\x03\x02\x02" +
		"\x02\u0289\u028A\x072\x02\x02\u028A\u028B\x07\x17\x02\x02\u028B\u028C" +
		"\x073\x02\x02\u028C\u028D\x07\x1F\x02\x02\u028D\u028E\x05\x94K\x02\u028E" +
		"\u028F\x07\x18\x02\x02\u028F\u0290\x07\t\x02\x02\u0290\u0298\x03\x02\x02" +
		"\x02\u0291\u0292\x072\x02\x02\u0292\u0293\x07\x17\x02\x02\u0293\u0294" +
		"\x05\x94K\x02\u0294\u0295\x07\x18\x02\x02\u0295\u0296\x07\t\x02\x02\u0296" +
		"\u0298\x03\x02\x02\x02\u0297\u0289\x03\x02\x02\x02\u0297\u0291\x03\x02" +
		"\x02\x02\u0298\x89\x03\x02\x02\x02\u0299\u029A\x07C\x02\x02\u029A\u029B" +
		"\x07\x17\x02\x02\u029B\u029C\x073\x02\x02\u029C\u029D\x07\x1F\x02\x02" +
		"\u029D\u029E\x05\x96L\x02\u029E\u029F\x07\x18\x02\x02\u029F\u02A0\x07" +
		"\t\x02\x02\u02A0\u02A8\x03\x02\x02\x02\u02A1\u02A2\x07C\x02\x02\u02A2" +
		"\u02A3\x07\x17\x02\x02\u02A3\u02A4\x05\x96L\x02\u02A4\u02A5\x07\x18\x02" +
		"\x02\u02A5\u02A6\x07\t\x02\x02\u02A6\u02A8\x03\x02\x02\x02\u02A7\u0299" +
		"\x03\x02\x02\x02\u02A7\u02A1\x03\x02\x02\x02\u02A8\x8B\x03\x02\x02\x02" +
		"\u02A9\u02AA\x07F\x02\x02\u02AA\u02AB\x07\x17\x02\x02\u02AB\u02AC\x07" +
		":\x02\x02\u02AC\u02AD\x07\x1F\x02\x02\u02AD\u02AE\x05\x8EH\x02\u02AE\u02AF" +
		"\x07\v\x02\x02\u02AF\u02B0\x07;\x02\x02\u02B0\u02B1\x07\x1F\x02\x02\u02B1" +
		"\u02B2\x05\x90I\x02\u02B2\u02B3\x07\x18\x02\x02\u02B3\u02B4\x07\t\x02" +
		"\x02\u02B4\x8D\x03\x02\x02\x02\u02B5\u02B6\x07%\x02\x02\u02B6\u02B7\x05" +
		"T+\x02\u02B7\x8F\x03\x02\x02\x02\u02B8\u02BE\x05\x92J\x02\u02B9\u02BA" +
		"\x05\x92J\x02\u02BA\u02BB\x07\v\x02\x02\u02BB\u02BC\x05\x90I\x02\u02BC" +
		"\u02BE\x03\x02\x02\x02\u02BD\u02B8\x03\x02\x02\x02\u02BD\u02B9\x03\x02" +
		"\x02\x02\u02BE\x91\x03\x02\x02\x02\u02BF\u02C0\t\n\x02\x02\u02C0\x93\x03" +
		"\x02\x02\x02\u02C1\u02C2\x07\x07\x02\x02\u02C2\x95\x03\x02\x02\x02\u02C3" +
		"\u02C4\x07\x07\x02\x02\u02C4\x97\x03\x02\x02\x02\u02C5\u02C6\x074\x02" +
		"\x02\u02C6\u02C7\x07\x17\x02\x02\u02C7\u02C8\x075\x02\x02\u02C8\u02C9" +
		"\x07\x1F\x02\x02\u02C9\u02CA\x05\x9EP\x02\u02CA\u02CB\x07\v\x02\x02\u02CB" +
		"\u02CC\x076\x02\x02\u02CC\u02CD\x07\x1F\x02\x02\u02CD\u02CE\x07\x1B\x02" +
		"\x02\u02CE\u02CF\x05\x9CO\x02\u02CF\u02D0\x07\x1C\x02\x02\u02D0\u02D1" +
		"\x07\x18\x02\x02\u02D1\u02D2\x07\t\x02\x02\u02D2\x99\x03\x02\x02\x02\u02D3" +
		"\u02D4\x07D\x02\x02\u02D4\u02D5\x07\x17\x02\x02\u02D5\u02D6\x075\x02\x02" +
		"\u02D6\u02D7\x07\x1F\x02\x02\u02D7\u02D8\x05\xA2R\x02\u02D8\u02D9\x07" +
		"\v\x02\x02\u02D9\u02DA\x076\x02\x02\u02DA\u02DB\x07\x1F\x02\x02\u02DB" +
		"\u02DC\x07\x1B\x02\x02\u02DC\u02DD\x05\xA0Q\x02\u02DD\u02DE\x07\x1C\x02" +
		"\x02\u02DE\u02DF\x07\x18\x02\x02\u02DF\u02E0\x07\t\x02\x02\u02E0\x9B\x03" +
		"\x02\x02\x02\u02E1\u02E6\x07\x07\x02\x02\u02E2\u02E3\x07\x07\x02\x02\u02E3" +
		"\u02E4\x07\v\x02\x02\u02E4\u02E6\x05\x9CO\x02\u02E5\u02E1\x03\x02\x02" +
		"\x02\u02E5\u02E2\x03\x02\x02\x02\u02E6\x9D\x03\x02\x02\x02\u02E7\u02EB" +
		"\x05*\x16\x02\u02E8\u02E9\x07\x03\x02\x02\u02E9\u02EB\x05*\x16\x02\u02EA" +
		"\u02E7\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\x9F\x03\x02\x02" +
		"\x02\u02EC\u02F1\x07\x07\x02\x02\u02ED\u02EE\x07\x07\x02\x02\u02EE\u02EF" +
		"\x07\v\x02\x02\u02EF\u02F1\x05\xA0Q\x02\u02F0\u02EC\x03\x02\x02\x02\u02F0" +
		"\u02ED\x03\x02\x02\x02\u02F1\xA1\x03\x02\x02\x02\u02F2\u02F6\x05*\x16" +
		"\x02\u02F3\u02F4\x07\x03\x02\x02\u02F4\u02F6\x05*\x16\x02\u02F5\u02F2" +
		"\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02\x02\u02F6\xA3\x03\x02\x02\x02" +
		"\u02F7\u0302\x05*\x16\x02\u02F8\u02F9\x07\x03\x02\x02\u02F9\u0302\x05" +
		"*\x16\x02\u02FA\u0302\x056\x1C\x02\u02FB\u0302\x05p9\x02\u02FC\u02FD\x07" +
		"\x03\x02\x02\u02FD\u0302\x05p9\x02\u02FE\u0302\x05.\x18\x02\u02FF\u0300" +
		"\x07\x03\x02\x02\u0300\u0302\x05.\x18\x02\u0301\u02F7\x03\x02\x02\x02" +
		"\u0301\u02F8\x03\x02\x02\x02\u0301\u02FA\x03\x02\x02\x02\u0301\u02FB\x03" +
		"\x02\x02\x02\u0301\u02FC\x03\x02\x02\x02\u0301\u02FE\x03\x02\x02\x02\u0301" +
		"\u02FF\x03\x02\x02\x02\u0302\xA5\x03\x02\x02\x02\u0303\u030E\x05*\x16" +
		"\x02\u0304\u0305\x07\x03\x02\x02\u0305\u030E\x05*\x16\x02\u0306\u030E" +
		"\x056\x1C\x02\u0307\u030E\x05p9\x02\u0308\u0309\x07\x03\x02\x02\u0309" +
		"\u030E\x05p9\x02\u030A\u030E\x05.\x18\x02\u030B\u030C\x07\x03\x02\x02" +
		"\u030C\u030E\x05.\x18\x02\u030D\u0303\x03\x02\x02\x02\u030D\u0304\x03" +
		"\x02\x02\x02\u030D\u0306\x03\x02\x02\x02\u030D\u0307\x03\x02\x02\x02\u030D" +
		"\u0308\x03\x02\x02\x02\u030D\u030A\x03\x02\x02\x02\u030D\u030B\x03\x02" +
		"\x02\x02\u030E\xA7\x03\x02\x02\x02\u030F\u031A\x05*\x16\x02\u0310\u0311" +
		"\x07\x03\x02\x02\u0311\u031A\x05*\x16\x02\u0312\u031A\x056\x1C\x02\u0313" +
		"\u031A\x05p9\x02\u0314\u0315\x07\x03\x02\x02\u0315\u031A\x05p9\x02\u0316" +
		"\u031A\x05.\x18\x02\u0317\u0318\x07\x03\x02\x02\u0318\u031A\x05.\x18\x02" +
		"\u0319\u030F\x03\x02\x02\x02\u0319\u0310\x03\x02\x02\x02\u0319\u0312\x03" +
		"\x02\x02\x02\u0319\u0313\x03\x02\x02\x02\u0319\u0314\x03\x02\x02\x02\u0319" +
		"\u0316\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u031A\xA9\x03\x02\x02" +
		"\x02\u031B\u0326\x05*\x16\x02\u031C\u031D\x07\x03\x02\x02\u031D\u0326" +
		"\x05*\x16\x02\u031E\u0326\x056\x1C\x02\u031F\u0326\x05p9\x02\u0320\u0321" +
		"\x07\x03\x02\x02\u0321\u0326\x05p9\x02\u0322\u0326\x05.\x18\x02\u0323" +
		"\u0324\x07\x03\x02\x02\u0324\u0326\x05.\x18\x02\u0325\u031B\x03\x02\x02" +
		"\x02\u0325\u031C\x03\x02\x02\x02\u0325\u031E\x03\x02\x02\x02\u0325\u031F" +
		"\x03\x02\x02\x02\u0325\u0320\x03\x02\x02\x02\u0325\u0322\x03\x02\x02\x02" +
		"\u0325\u0323\x03\x02\x02\x02\u0326\xAB\x03\x02\x02\x02\u0327\u032D\x05" +
		"\xA4S\x02\u0328\u0329\x05\xA4S\x02\u0329\u032A\x07\v\x02\x02\u032A\u032B" +
		"\x05\xACW\x02\u032B\u032D\x03\x02\x02\x02\u032C\u0327\x03\x02\x02\x02" +
		"\u032C\u0328\x03\x02\x02\x02\u032D\xAD\x03\x02\x02\x02\u032E\u0334\x05" +
		"\xA6T\x02\u032F\u0330\x05\xA6T\x02\u0330\u0331\x07\v\x02\x02\u0331\u0332" +
		"\x05\xAEX\x02\u0332\u0334\x03\x02\x02\x02\u0333\u032E\x03\x02\x02\x02" +
		"\u0333\u032F\x03\x02\x02\x02\u0334\xAF\x03\x02\x02\x02\u0335\u033B\x05" +
		"\xA8U\x02\u0336\u0337\x05\xA8U\x02\u0337\u0338\x07\v\x02\x02\u0338\u0339" +
		"\x05\xB0Y\x02\u0339\u033B\x03\x02\x02\x02\u033A\u0335\x03\x02\x02\x02" +
		"\u033A\u0336\x03\x02\x02\x02\u033B\xB1\x03\x02\x02\x02\u033C\u0343\x05" +
		"\xAAV\x02\u033D\u033E\x05\xAAV\x02\u033E\u033F\x07\v\x02\x02\u033F\u0340" +
		"\x05\xB2Z\x02\u0340\u0341\x05\xB2Z\x02\u0341\u0343\x03\x02\x02\x02\u0342" +
		"\u033C\x03\x02\x02\x02\u0342\u033D\x03\x02\x02\x02\u0343\xB3\x03\x02\x02" +
		"\x02\u0344\u0345\x077\x02\x02\u0345\xB5\x03\x02\x02\x02\u0346\u0347\x07" +
		"E\x02\x02\u0347\xB7\x03\x02\x02\x02\u0348\u0349\x05\xB4[\x02\u0349\u034A" +
		"\x07\x17\x02\x02\u034A\u034B\x078\x02\x02\u034B\u034C\x07\x1F\x02\x02" +
		"\u034C\u034D\x07\x1B\x02\x02\u034D\u034E\x05\xACW\x02\u034E\u034F\x07" +
		"\x1C\x02\x02\u034F\u0350\x07\v\x02\x02\u0350\u0351\x079\x02\x02\u0351" +
		"\u0352\x07\x1F\x02\x02\u0352\u0353\x07\x1B\x02\x02\u0353\u0354\x05\xB0" +
		"Y\x02\u0354\u0355\x07\x1C\x02\x02\u0355\u0356\x07\x18\x02\x02\u0356\u0357" +
		"\x07\t\x02\x02\u0357\u0369\x03\x02\x02\x02\u0358\u0359\x05\xB4[\x02\u0359" +
		"\u035A\x07\x17\x02\x02\u035A\u035B\x079\x02\x02\u035B\u035C\x07\x1F\x02" +
		"\x02\u035C\u035D\x07\x1B\x02\x02\u035D\u035E\x05\xB0Y\x02\u035E\u035F" +
		"\x07\x1C\x02\x02\u035F\u0360\x07\v\x02\x02\u0360\u0361\x078\x02\x02\u0361" +
		"\u0362\x07\x1F\x02\x02\u0362\u0363\x07\x1B\x02\x02\u0363\u0364\x05\xAC" +
		"W\x02\u0364\u0365\x07\x1C\x02\x02\u0365\u0366\x07\x18\x02\x02\u0366\u0367" +
		"\x07\t\x02\x02\u0367\u0369\x03\x02\x02\x02\u0368\u0348\x03\x02\x02\x02" +
		"\u0368\u0358\x03\x02\x02\x02\u0369\xB9\x03\x02\x02\x02\u036A\u036B\x05" +
		"\xB6\\\x02\u036B\u036C\x07\x17\x02\x02\u036C\u036D\x078\x02\x02\u036D" +
		"\u036E\x07\x1F\x02\x02\u036E\u036F\x07\x1B\x02\x02\u036F\u0370\x05\xAE" +
		"X\x02\u0370\u0371\x07\x1C\x02\x02\u0371\u0372\x07\v\x02\x02\u0372\u0373" +
		"\x079\x02\x02\u0373\u0374\x07\x1F\x02\x02\u0374\u0375\x07\x1B\x02\x02" +
		"\u0375\u0376\x05\xB2Z\x02\u0376\u0377\x07\x1C\x02\x02\u0377\u0378\x07" +
		"\x18\x02\x02\u0378\u0379\x07\t\x02\x02\u0379\u038B\x03\x02\x02\x02\u037A" +
		"\u037B\x05\xB6\\\x02\u037B\u037C\x07\x17\x02\x02\u037C\u037D\x079\x02" +
		"\x02\u037D\u037E\x07\x1F\x02\x02\u037E\u037F\x07\x1B\x02\x02\u037F\u0380" +
		"\x05\xB2Z\x02\u0380\u0381\x07\x1C\x02\x02\u0381\u0382\x07\v\x02\x02\u0382" +
		"\u0383\x078\x02\x02\u0383\u0384\x07\x1F\x02\x02\u0384\u0385\x07\x1B\x02" +
		"\x02\u0385\u0386\x05\xAEX\x02\u0386\u0387\x07\x1C\x02\x02\u0387\u0388" +
		"\x07\x18\x02\x02\u0388\u0389\x07\t\x02\x02\u0389\u038B\x03\x02\x02\x02" +
		"\u038A\u036A\x03\x02\x02\x02\u038A\u037A\x03\x02\x02\x02\u038B\xBB\x03" +
		"\x02\x02\x02\u038C\u038D\x070\x02\x02\u038D\u038E\x07\x17\x02\x02\u038E" +
		"\u038F\x073\x02\x02\u038F\u0390\x07\x1F\x02\x02\u0390\u0391\x05\xBE`\x02" +
		"\u0391\u0392\x07\x18\x02\x02\u0392\u0393\x07\t\x02\x02\u0393\xBD\x03\x02" +
		"\x02\x02\u0394\u0395\x07\x07\x02\x02\u0395\xBF\x03\x02\x02\x02\u0396\u0397" +
		"\x071\x02\x02\u0397\u0398\x07\x17\x02\x02\u0398\u0399\x07\x18\x02\x02" +
		"\u0399\u039D\x07\t\x02\x02\u039A\u039B\x071\x02\x02\u039B\u039D\x07\t" +
		"\x02\x02\u039C\u0396\x03\x02\x02\x02\u039C\u039A\x03\x02\x02\x02\u039D" +
		"\xC1\x03\x02\x02\x02\u039E\u039F\x07.\x02\x02\u039F\u03A0\x07\x17\x02" +
		"\x02\u03A0\u03A1\x07\x18\x02\x02\u03A1\u03A5\x07\t\x02\x02\u03A2\u03A3" +
		"\x07.\x02\x02\u03A3\u03A5\x07\t\x02\x02\u03A4\u039E\x03\x02\x02\x02\u03A4" +
		"\u03A2\x03\x02\x02\x02\u03A5\xC3\x03\x02\x02\x02\u03A6\u03A7\x07/\x02" +
		"\x02\u03A7\u03A8\x07\x17\x02\x02\u03A8\u03A9\x07\x18\x02\x02\u03A9\u03AD" +
		"\x07\t\x02\x02\u03AA\u03AB\x07/\x02\x02\u03AB\u03AD\x07\t\x02\x02\u03AC" +
		"\u03A6\x03\x02\x02\x02\u03AC\u03AA\x03\x02\x02\x02\u03AD\xC5\x03\x02\x02" +
		"\x02\u03AE\u03AF\x05\xC8e\x02\u03AF\u03B0\x07\x17\x02\x02\u03B0\u03B1" +
		"\x07J\x02\x02\u03B1\u03B2\x07\x1F\x02\x02\u03B2\u03B3\x05\xCEh\x02\u03B3" +
		"\u03B4\x07\v\x02\x02\u03B4\u03B5\x07K\x02\x02\u03B5\u03B6\x07\x1F\x02" +
		"\x02\u03B6\u03B7\x07\x1B\x02\x02\u03B7\u03B8\x05\xD2j\x02\u03B8\u03B9" +
		"\x07\x1C\x02\x02\u03B9\u03BA\x07\x18\x02\x02\u03BA\u03BB\x07\t\x02\x02" +
		"\u03BB\u03CB\x03\x02\x02\x02\u03BC\u03BD\x05\xC8e\x02\u03BD\u03BE\x07" +
		"\x17\x02\x02\u03BE\u03BF\x07K\x02\x02\u03BF\u03C0\x07\x1F\x02\x02\u03C0" +
		"\u03C1\x07\x1B\x02\x02\u03C1\u03C2\x05\xD2j\x02\u03C2\u03C3\x07\x1C\x02" +
		"\x02\u03C3\u03C4\x07\v\x02\x02\u03C4\u03C5\x07J\x02\x02\u03C5\u03C6\x07" +
		"\x1F\x02\x02\u03C6\u03C7\x05\xCEh\x02\u03C7\u03C8\x07\x18\x02\x02\u03C8" +
		"\u03C9\x07\t\x02\x02\u03C9\u03CB\x03\x02\x02\x02\u03CA\u03AE\x03\x02\x02" +
		"\x02\u03CA\u03BC\x03\x02\x02\x02\u03CB\xC7\x03\x02\x02\x02\u03CC\u03CD" +
		"\x07+\x02\x02\u03CD\xC9\x03\x02\x02\x02\u03CE\u03CF\x05\xCCg\x02\u03CF" +
		"\u03D0\x07\x17\x02\x02\u03D0\u03D1\x07J\x02\x02\u03D1\u03D2\x07\x1F\x02" +
		"\x02\u03D2\u03D3\x05\xCEh\x02\u03D3\u03D4\x07\v\x02\x02\u03D4\u03D5\x07" +
		"K\x02\x02\u03D5\u03D6\x07\x1F\x02\x02\u03D6\u03D7\x07\x1B\x02\x02\u03D7" +
		"\u03D8\x05\xD2j\x02\u03D8\u03D9\x07\x1C\x02\x02\u03D9\u03DA\x07\x18\x02" +
		"\x02\u03DA\u03DB\x07\t\x02\x02\u03DB\u03EB\x03\x02\x02\x02\u03DC\u03DD" +
		"\x05\xCCg\x02\u03DD\u03DE\x07\x17\x02\x02\u03DE\u03DF\x07K\x02\x02\u03DF" +
		"\u03E0\x07\x1F\x02\x02\u03E0\u03E1\x07\x1B\x02\x02\u03E1\u03E2\x05\xD2" +
		"j\x02\u03E2\u03E3\x07\x1C\x02\x02\u03E3\u03E4\x07\v\x02\x02\u03E4\u03E5" +
		"\x07J\x02\x02\u03E5\u03E6\x07\x1F\x02\x02\u03E6\u03E7\x05\xCEh\x02\u03E7" +
		"\u03E8\x07\x18\x02\x02\u03E8\u03E9\x07\t\x02\x02\u03E9\u03EB\x03\x02\x02" +
		"\x02\u03EA\u03CE\x03\x02\x02\x02\u03EA\u03DC\x03\x02\x02\x02\u03EB\xCB" +
		"\x03\x02\x02\x02\u03EC\u03ED\x07I\x02\x02\u03ED\xCD\x03\x02\x02\x02\u03EE" +
		"\u03EF\x07\x06\x02\x02\u03EF\xCF\x03\x02\x02\x02\u03F0\u03F3\x05z>\x02" +
		"\u03F1\u03F3\x05*\x16\x02\u03F2\u03F0\x03\x02\x02\x02\u03F2\u03F1\x03" +
		"\x02\x02\x02\u03F3\xD1\x03\x02\x02\x02\u03F4\u03FA\x05\xD0i\x02\u03F5" +
		"\u03F6\x05\xD0i\x02\u03F6\u03F7\x07\r\x02\x02\u03F7\u03F8\x05\xD2j\x02" +
		"\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03F4\x03\x02\x02\x02\u03F9\u03F5\x03" +
		"\x02\x02\x02\u03FA\xD3\x03\x02\x02\x02B\xD7\xE0\xF8\xFC\u0109\u0114\u0120" +
		"\u0127\u013D\u014A\u0151\u015A\u0161\u016A\u0170\u0179\u0185\u01A2\u01AB" +
		"\u01B2\u01BE\u01CF\u01D7\u01DC\u01E3\u01EA\u01EF\u01F6\u0203\u0219\u0223" +
		"\u0237\u0242\u0251\u0258\u0266\u026C\u0277\u027F\u0287\u0297\u02A7\u02BD" +
		"\u02E5\u02EA\u02F0\u02F5\u0301\u030D\u0319\u0325\u032C\u0333\u033A\u0342" +
		"\u0368\u038A\u039C\u03A4\u03AC\u03CA\u03EA\u03F2\u03F9";
	public static readonly _serializedATN: string = Utils.join(
		[
			ASPCore2Parser._serializedATNSegment0,
			ASPCore2Parser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ASPCore2Parser.__ATN) {
			ASPCore2Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ASPCore2Parser._serializedATN));
		}

		return ASPCore2Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public rule(): RuleContext[];
	public rule(i: number): RuleContext;
	public rule(i?: number): RuleContext | RuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleContext);
		} else {
			return this.getRuleContext(i, RuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_program; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleContext extends ParserRuleContext {
	public simple_rule(): Simple_ruleContext | undefined {
		return this.tryGetRuleContext(0, Simple_ruleContext);
	}
	public annotations_rule(): Annotations_ruleContext | undefined {
		return this.tryGetRuleContext(0, Annotations_ruleContext);
	}
	public annotation_global(): Annotation_globalContext | undefined {
		return this.tryGetRuleContext(0, Annotation_globalContext);
	}
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule) {
			listener.enterRule(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule) {
			listener.exitRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule) {
			return visitor.visitRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_ruleContext extends ParserRuleContext {
	public head(): HeadContext | undefined {
		return this.tryGetRuleContext(0, HeadContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DOT, 0); }
	public CONS(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.CONS, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public WCONS(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.WCONS, 0); }
	public weight_at_levels(): Weight_at_levelsContext | undefined {
		return this.tryGetRuleContext(0, Weight_at_levelsContext);
	}
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_simple_rule; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterSimple_rule) {
			listener.enterSimple_rule(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitSimple_rule) {
			listener.exitSimple_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitSimple_rule) {
			return visitor.visitSimple_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeadContext extends ParserRuleContext {
	public disjunction(): DisjunctionContext | undefined {
		return this.tryGetRuleContext(0, DisjunctionContext);
	}
	public choice_atom(): Choice_atomContext | undefined {
		return this.tryGetRuleContext(0, Choice_atomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_head; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterHead) {
			listener.enterHead(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitHead) {
			listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public conjunction(): ConjunctionContext {
		return this.getRuleContext(0, ConjunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_body; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Weight_at_levelsContext extends ParserRuleContext {
	public SQUARE_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.SQUARE_OPEN, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public SQUARE_CLOSED(): TerminalNode { return this.getToken(ASPCore2Parser.SQUARE_CLOSED, 0); }
	public levels_and_terms(): Levels_and_termsContext | undefined {
		return this.tryGetRuleContext(0, Levels_and_termsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_weight_at_levels; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterWeight_at_levels) {
			listener.enterWeight_at_levels(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitWeight_at_levels) {
			listener.exitWeight_at_levels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitWeight_at_levels) {
			return visitor.visitWeight_at_levels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Levels_and_termsContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.AT, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public terms(): TermsContext | undefined {
		return this.tryGetRuleContext(0, TermsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_levels_and_terms; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLevels_and_terms) {
			listener.enterLevels_and_terms(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLevels_and_terms) {
			listener.exitLevels_and_terms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLevels_and_terms) {
			return visitor.visitLevels_and_terms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisjunctionContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public HEAD_SEPARATOR(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.HEAD_SEPARATOR, 0); }
	public disjunction(): DisjunctionContext | undefined {
		return this.tryGetRuleContext(0, DisjunctionContext);
	}
	public existential_atom(): Existential_atomContext | undefined {
		return this.tryGetRuleContext(0, Existential_atomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_disjunction; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterDisjunction) {
			listener.enterDisjunction(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitDisjunction) {
			listener.exitDisjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitDisjunction) {
			return visitor.visitDisjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjunctionContext extends ParserRuleContext {
	public naf_literal_aggregate(): Naf_literal_aggregateContext {
		return this.getRuleContext(0, Naf_literal_aggregateContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public conjunction(): ConjunctionContext | undefined {
		return this.tryGetRuleContext(0, ConjunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_conjunction; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterConjunction) {
			listener.enterConjunction(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitConjunction) {
			listener.exitConjunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitConjunction) {
			return visitor.visitConjunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Choice_atomContext extends ParserRuleContext {
	public lower_guard(): Lower_guardContext | undefined {
		return this.tryGetRuleContext(0, Lower_guardContext);
	}
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public choice_elements(): Choice_elementsContext {
		return this.getRuleContext(0, Choice_elementsContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	public upper_guard(): Upper_guardContext | undefined {
		return this.tryGetRuleContext(0, Upper_guardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_choice_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterChoice_atom) {
			listener.enterChoice_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitChoice_atom) {
			listener.exitChoice_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitChoice_atom) {
			return visitor.visitChoice_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lower_guardContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public binop(): BinopContext {
		return this.getRuleContext(0, BinopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_lower_guard; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLower_guard) {
			listener.enterLower_guard(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLower_guard) {
			listener.exitLower_guard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLower_guard) {
			return visitor.visitLower_guard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upper_guardContext extends ParserRuleContext {
	public binop(): BinopContext {
		return this.getRuleContext(0, BinopContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_upper_guard; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterUpper_guard) {
			listener.enterUpper_guard(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitUpper_guard) {
			listener.exitUpper_guard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitUpper_guard) {
			return visitor.visitUpper_guard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Choice_elementsContext extends ParserRuleContext {
	public choice_element(): Choice_elementContext {
		return this.getRuleContext(0, Choice_elementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
	public choice_elements(): Choice_elementsContext | undefined {
		return this.tryGetRuleContext(0, Choice_elementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_choice_elements; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterChoice_elements) {
			listener.enterChoice_elements(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitChoice_elements) {
			listener.exitChoice_elements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitChoice_elements) {
			return visitor.visitChoice_elements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Choice_elementContext extends ParserRuleContext {
	public choice_element_atom(): Choice_element_atomContext {
		return this.getRuleContext(0, Choice_element_atomContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COLON, 0); }
	public choice_elements_literals(): Choice_elements_literalsContext | undefined {
		return this.tryGetRuleContext(0, Choice_elements_literalsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_choice_element; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterChoice_element) {
			listener.enterChoice_element(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitChoice_element) {
			listener.exitChoice_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitChoice_element) {
			return visitor.visitChoice_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Choice_element_atomContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_choice_element_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterChoice_element_atom) {
			listener.enterChoice_element_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitChoice_element_atom) {
			listener.exitChoice_element_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitChoice_element_atom) {
			return visitor.visitChoice_element_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Choice_elements_literalsContext extends ParserRuleContext {
	public naf_literal(): Naf_literalContext {
		return this.getRuleContext(0, Naf_literalContext);
	}
	public naf_literals(): Naf_literalsContext | undefined {
		return this.tryGetRuleContext(0, Naf_literalsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_choice_elements_literals; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterChoice_elements_literals) {
			listener.enterChoice_elements_literals(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitChoice_elements_literals) {
			listener.exitChoice_elements_literals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitChoice_elements_literals) {
			return visitor.visitChoice_elements_literals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Naf_literalsContext extends ParserRuleContext {
	public naf_literal(): Naf_literalContext {
		return this.getRuleContext(0, Naf_literalContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public naf_literals(): Naf_literalsContext | undefined {
		return this.tryGetRuleContext(0, Naf_literalsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_naf_literals; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterNaf_literals) {
			listener.enterNaf_literals(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitNaf_literals) {
			listener.exitNaf_literals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitNaf_literals) {
			return visitor.visitNaf_literals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Naf_literalContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	public builtin_atom(): Builtin_atomContext | undefined {
		return this.tryGetRuleContext(0, Builtin_atomContext);
	}
	public extAtom(): ExtAtomContext | undefined {
		return this.tryGetRuleContext(0, ExtAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_naf_literal; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterNaf_literal) {
			listener.enterNaf_literal(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitNaf_literal) {
			listener.exitNaf_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitNaf_literal) {
			return visitor.visitNaf_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Naf_literal_aggregateContext extends ParserRuleContext {
	public naf_literal(): Naf_literalContext | undefined {
		return this.tryGetRuleContext(0, Naf_literalContext);
	}
	public aggregate_atom(): Aggregate_atomContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_atomContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_naf_literal_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterNaf_literal_aggregate) {
			listener.enterNaf_literal_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitNaf_literal_aggregate) {
			listener.exitNaf_literal_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitNaf_literal_aggregate) {
			return visitor.visitNaf_literal_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Existential_atomContext extends ParserRuleContext {
	public EXISTS(): TerminalNode { return this.getToken(ASPCore2Parser.EXISTS, 0); }
	public vars(): VarsContext {
		return this.getRuleContext(0, VarsContext);
	}
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_existential_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExistential_atom) {
			listener.enterExistential_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExistential_atom) {
			listener.exitExistential_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExistential_atom) {
			return visitor.visitExistential_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Classic_literalContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public DASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_classic_literal; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterClassic_literal) {
			listener.enterClassic_literal(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitClassic_literal) {
			listener.exitClassic_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitClassic_literal) {
			return visitor.visitClassic_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public terms(): TermsContext | undefined {
		return this.tryGetRuleContext(0, TermsContext);
	}
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtAtomContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASPCore2Parser.AMPERSAND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public terms(): TermsContext[];
	public terms(i: number): TermsContext;
	public terms(i?: number): TermsContext | TermsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermsContext);
		} else {
			return this.getRuleContext(i, TermsContext);
		}
	}
	public extSemicol(): ExtSemicolContext | undefined {
		return this.tryGetRuleContext(0, ExtSemicolContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_extAtom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExtAtom) {
			listener.enterExtAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExtAtom) {
			listener.exitExtAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExtAtom) {
			return visitor.visitExtAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtSemicolContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(ASPCore2Parser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_extSemicol; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExtSemicol) {
			listener.enterExtSemicol(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExtSemicol) {
			listener.exitExtSemicol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExtSemicol) {
			return visitor.visitExtSemicol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermsContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public terms(): TermsContext | undefined {
		return this.tryGetRuleContext(0, TermsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_terms; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterTerms) {
			listener.enterTerms(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitTerms) {
			listener.exitTerms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitTerms) {
			return visitor.visitTerms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_termsContext extends ParserRuleContext {
	public basic_term(): Basic_termContext {
		return this.getRuleContext(0, Basic_termContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public basic_terms(): Basic_termsContext | undefined {
		return this.tryGetRuleContext(0, Basic_termsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_basic_terms; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterBasic_terms) {
			listener.enterBasic_terms(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitBasic_terms) {
			listener.exitBasic_terms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitBasic_terms) {
			return visitor.visitBasic_terms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Builtin_atomContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public binop(): BinopContext {
		return this.getRuleContext(0, BinopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_builtin_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterBuiltin_atom) {
			listener.enterBuiltin_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitBuiltin_atom) {
			listener.exitBuiltin_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitBuiltin_atom) {
			return visitor.visitBuiltin_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompareopContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
	public UNEQUAL(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.UNEQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_compareop; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterCompareop) {
			listener.enterCompareop(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitCompareop) {
			listener.exitCompareop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitCompareop) {
			return visitor.visitCompareop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinopContext extends ParserRuleContext {
	public compareop(): CompareopContext | undefined {
		return this.tryGetRuleContext(0, CompareopContext);
	}
	public leftwardop(): LeftwardopContext | undefined {
		return this.tryGetRuleContext(0, LeftwardopContext);
	}
	public rightwardop(): RightwardopContext | undefined {
		return this.tryGetRuleContext(0, RightwardopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_binop; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterBinop) {
			listener.enterBinop(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitBinop) {
			listener.exitBinop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitBinop) {
			return visitor.visitBinop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithop1Context extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PLUS, 0); }
	public DASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_arithop1; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterArithop1) {
			listener.enterArithop1(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitArithop1) {
			listener.exitArithop1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitArithop1) {
			return visitor.visitArithop1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithop2Context extends ParserRuleContext {
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.TIMES, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SLASH, 0); }
	public BACK_SLASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.BACK_SLASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_arithop2; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterArithop2) {
			listener.enterArithop2(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitArithop2) {
			listener.exitArithop2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitArithop2) {
			return visitor.visitArithop2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term_Context extends ParserRuleContext {
	public ANON_VAR(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANON_VAR, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public terms(): TermsContext | undefined {
		return this.tryGetRuleContext(0, TermsContext);
	}
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.NUMBER);
		} else {
			return this.getToken(ASPCore2Parser.NUMBER, i);
		}
	}
	public DDOT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DDOT, 0); }
	public DASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_term_; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterTerm_) {
			listener.enterTerm_(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitTerm_) {
			listener.exitTerm_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitTerm_) {
			return visitor.visitTerm_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Term__Context extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NUMBER, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_term__; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterTerm__) {
			listener.enterTerm__(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitTerm__) {
			listener.exitTerm__(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitTerm__) {
			return visitor.visitTerm__(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public term_(): Term_Context | undefined {
		return this.tryGetRuleContext(0, Term_Context);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_term; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	public arithop1(): Arithop1Context | undefined {
		return this.tryGetRuleContext(0, Arithop1Context);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_expr; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public term__(): Term__Context {
		return this.getRuleContext(0, Term__Context);
	}
	public arithop2(): Arithop2Context | undefined {
		return this.tryGetRuleContext(0, Arithop2Context);
	}
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_factor; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Basic_termContext extends ParserRuleContext {
	public ground_term(): Ground_termContext | undefined {
		return this.tryGetRuleContext(0, Ground_termContext);
	}
	public variable_term(): Variable_termContext | undefined {
		return this.tryGetRuleContext(0, Variable_termContext);
	}
	public functional_term(): Functional_termContext | undefined {
		return this.tryGetRuleContext(0, Functional_termContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_basic_term; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterBasic_term) {
			listener.enterBasic_term(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitBasic_term) {
			listener.exitBasic_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitBasic_term) {
			return visitor.visitBasic_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ground_termContext extends ParserRuleContext {
	public SYMBOLIC_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NUMBER, 0); }
	public DASH(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_ground_term; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGround_term) {
			listener.enterGround_term(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGround_term) {
			listener.exitGround_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGround_term) {
			return visitor.visitGround_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_termContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.VARIABLE, 0); }
	public ANON_VAR(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANON_VAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_variable_term; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterVariable_term) {
			listener.enterVariable_term(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitVariable_term) {
			listener.exitVariable_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitVariable_term) {
			return visitor.visitVariable_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Functional_termContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public terms(): TermsContext {
		return this.getRuleContext(0, TermsContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_functional_term; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterFunctional_term) {
			listener.enterFunctional_term(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitFunctional_term) {
			listener.exitFunctional_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitFunctional_term) {
			return visitor.visitFunctional_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarsContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(ASPCore2Parser.VARIABLE, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public vars(): VarsContext | undefined {
		return this.tryGetRuleContext(0, VarsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_vars; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterVars) {
			listener.enterVars(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitVars) {
			listener.exitVars(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitVars) {
			return visitor.visitVars(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public SYMBOLIC_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.STRING, 0); }
	public VARIABLE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_identifier; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public DIRECTIVE_NAME(): TerminalNode { return this.getToken(ASPCore2Parser.DIRECTIVE_NAME, 0); }
	public DIRECTIVE_VALUE(): TerminalNode { return this.getToken(ASPCore2Parser.DIRECTIVE_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_directive; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public QUERY_MARK(): TerminalNode { return this.getToken(ASPCore2Parser.QUERY_MARK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_query; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lower_guard_compare_aggregateContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public compareop(): CompareopContext {
		return this.getRuleContext(0, CompareopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_lower_guard_compare_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLower_guard_compare_aggregate) {
			listener.enterLower_guard_compare_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLower_guard_compare_aggregate) {
			listener.exitLower_guard_compare_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLower_guard_compare_aggregate) {
			return visitor.visitLower_guard_compare_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upper_guard_compare_aggregateContext extends ParserRuleContext {
	public compareop(): CompareopContext {
		return this.getRuleContext(0, CompareopContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_upper_guard_compare_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterUpper_guard_compare_aggregate) {
			listener.enterUpper_guard_compare_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitUpper_guard_compare_aggregate) {
			listener.exitUpper_guard_compare_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitUpper_guard_compare_aggregate) {
			return visitor.visitUpper_guard_compare_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Compare_aggregateContext extends ParserRuleContext {
	public lower_guard_compare_aggregate(): Lower_guard_compare_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Lower_guard_compare_aggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public upper_guard_compare_aggregate(): Upper_guard_compare_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Upper_guard_compare_aggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_compare_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterCompare_aggregate) {
			listener.enterCompare_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitCompare_aggregate) {
			listener.exitCompare_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitCompare_aggregate) {
			return visitor.visitCompare_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lower_guard_leftward_left_aggregateContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public leftwardop(): LeftwardopContext {
		return this.getRuleContext(0, LeftwardopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_lower_guard_leftward_left_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLower_guard_leftward_left_aggregate) {
			listener.enterLower_guard_leftward_left_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLower_guard_leftward_left_aggregate) {
			listener.exitLower_guard_leftward_left_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLower_guard_leftward_left_aggregate) {
			return visitor.visitLower_guard_leftward_left_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Leftward_left_aggregateContext extends ParserRuleContext {
	public lower_guard_leftward_left_aggregate(): Lower_guard_leftward_left_aggregateContext {
		return this.getRuleContext(0, Lower_guard_leftward_left_aggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_leftward_left_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLeftward_left_aggregate) {
			listener.enterLeftward_left_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLeftward_left_aggregate) {
			listener.exitLeftward_left_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLeftward_left_aggregate) {
			return visitor.visitLeftward_left_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_aggregateContext extends ParserRuleContext {
	public leftward_left_aggregate(): Leftward_left_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Leftward_left_aggregateContext);
	}
	public rightward_left_aggregate(): Rightward_left_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Rightward_left_aggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_left_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLeft_aggregate) {
			listener.enterLeft_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLeft_aggregate) {
			listener.exitLeft_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLeft_aggregate) {
			return visitor.visitLeft_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lower_guard_rightward_left_aggregateContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public rightwardop(): RightwardopContext {
		return this.getRuleContext(0, RightwardopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_lower_guard_rightward_left_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLower_guard_rightward_left_aggregate) {
			listener.enterLower_guard_rightward_left_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLower_guard_rightward_left_aggregate) {
			listener.exitLower_guard_rightward_left_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLower_guard_rightward_left_aggregate) {
			return visitor.visitLower_guard_rightward_left_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rightward_left_aggregateContext extends ParserRuleContext {
	public lower_guard_rightward_left_aggregate(): Lower_guard_rightward_left_aggregateContext {
		return this.getRuleContext(0, Lower_guard_rightward_left_aggregateContext);
	}
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rightward_left_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRightward_left_aggregate) {
			listener.enterRightward_left_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRightward_left_aggregate) {
			listener.exitRightward_left_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRightward_left_aggregate) {
			return visitor.visitRightward_left_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upper_guard_leftward_right_aggregateContext extends ParserRuleContext {
	public leftwardop(): LeftwardopContext {
		return this.getRuleContext(0, LeftwardopContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_upper_guard_leftward_right_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterUpper_guard_leftward_right_aggregate) {
			listener.enterUpper_guard_leftward_right_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitUpper_guard_leftward_right_aggregate) {
			listener.exitUpper_guard_leftward_right_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitUpper_guard_leftward_right_aggregate) {
			return visitor.visitUpper_guard_leftward_right_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Upper_guard_rightward_right_aggregateContext extends ParserRuleContext {
	public rightwardop(): RightwardopContext {
		return this.getRuleContext(0, RightwardopContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_upper_guard_rightward_right_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterUpper_guard_rightward_right_aggregate) {
			listener.enterUpper_guard_rightward_right_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitUpper_guard_rightward_right_aggregate) {
			listener.exitUpper_guard_rightward_right_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitUpper_guard_rightward_right_aggregate) {
			return visitor.visitUpper_guard_rightward_right_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_aggregateContext extends ParserRuleContext {
	public aggregate(): AggregateContext {
		return this.getRuleContext(0, AggregateContext);
	}
	public upper_guard_leftward_right_aggregate(): Upper_guard_leftward_right_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Upper_guard_leftward_right_aggregateContext);
	}
	public upper_guard_rightward_right_aggregate(): Upper_guard_rightward_right_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Upper_guard_rightward_right_aggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_right_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRight_aggregate) {
			listener.enterRight_aggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRight_aggregate) {
			listener.exitRight_aggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRight_aggregate) {
			return visitor.visitRight_aggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_atomContext extends ParserRuleContext {
	public left_aggregate(): Left_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Left_aggregateContext);
	}
	public right_aggregate(): Right_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Right_aggregateContext);
	}
	public compare_aggregate(): Compare_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Compare_aggregateContext);
	}
	public leftward_left_aggregate(): Leftward_left_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Leftward_left_aggregateContext);
	}
	public upper_guard_leftward_right_aggregate(): Upper_guard_leftward_right_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Upper_guard_leftward_right_aggregateContext);
	}
	public rightward_left_aggregate(): Rightward_left_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Rightward_left_aggregateContext);
	}
	public upper_guard_rightward_right_aggregate(): Upper_guard_rightward_right_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Upper_guard_rightward_right_aggregateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_atom; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_atom) {
			listener.enterAggregate_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_atom) {
			listener.exitAggregate_atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_atom) {
			return visitor.visitAggregate_atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LeftwardopContext extends ParserRuleContext {
	public LESS(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.LESS, 0); }
	public LESS_OR_EQ(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.LESS_OR_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_leftwardop; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterLeftwardop) {
			listener.enterLeftwardop(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitLeftwardop) {
			listener.exitLeftwardop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitLeftwardop) {
			return visitor.visitLeftwardop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RightwardopContext extends ParserRuleContext {
	public GREATER(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.GREATER, 0); }
	public GREATER_OR_EQ(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.GREATER_OR_EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rightwardop; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRightwardop) {
			listener.enterRightwardop(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRightwardop) {
			listener.exitRightwardop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRightwardop) {
			return visitor.visitRightwardop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateContext extends ParserRuleContext {
	public aggregate_function(): Aggregate_functionContext {
		return this.getRuleContext(0, Aggregate_functionContext);
	}
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public aggregate_elements(): Aggregate_elementsContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_elementsContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate) {
			listener.enterAggregate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate) {
			listener.exitAggregate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate) {
			return visitor.visitAggregate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_elementsContext extends ParserRuleContext {
	public aggregate_element(): Aggregate_elementContext {
		return this.getRuleContext(0, Aggregate_elementContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
	public aggregate_elements(): Aggregate_elementsContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_elementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_elements; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_elements) {
			listener.enterAggregate_elements(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_elements) {
			listener.exitAggregate_elements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_elements) {
			return visitor.visitAggregate_elements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_elementContext extends ParserRuleContext {
	public basic_terms(): Basic_termsContext {
		return this.getRuleContext(0, Basic_termsContext);
	}
	public COLON(): TerminalNode { return this.getToken(ASPCore2Parser.COLON, 0); }
	public naf_literals(): Naf_literalsContext {
		return this.getRuleContext(0, Naf_literalsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_element; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_element) {
			listener.enterAggregate_element(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_element) {
			listener.exitAggregate_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_element) {
			return visitor.visitAggregate_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_functionContext extends ParserRuleContext {
	public AGGR_COUNT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.AGGR_COUNT, 0); }
	public AGGR_MAX(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.AGGR_MAX, 0); }
	public AGGR_MIN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.AGGR_MIN, 0); }
	public AGGR_SUM(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.AGGR_SUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_function; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_function) {
			listener.enterAggregate_function(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_function) {
			listener.exitAggregate_function(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_function) {
			return visitor.visitAggregate_function(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_globalContext extends ParserRuleContext {
	public annotation_global_ordering(): Annotation_global_orderingContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_orderingContext);
	}
	public annotation_global_atom_indexed(): Annotation_global_atom_indexedContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_atom_indexedContext);
	}
	public annotation_global_partial_order(): Annotation_global_partial_orderContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_partial_orderContext);
	}
	public annotation_global_extatom_conversion(): Annotation_global_extatom_conversionContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_extatom_conversionContext);
	}
	public annotation_global_wasp_heuristic(): Annotation_global_wasp_heuristicContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_wasp_heuristicContext);
	}
	public annotation_global_wasp_propagator(): Annotation_global_wasp_propagatorContext | undefined {
		return this.tryGetRuleContext(0, Annotation_global_wasp_propagatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global) {
			listener.enterAnnotation_global(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global) {
			listener.exitAnnotation_global(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global) {
			return visitor.visitAnnotation_global(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotations_ruleContext extends ParserRuleContext {
	public annotation_rule(): Annotation_ruleContext {
		return this.getRuleContext(0, Annotation_ruleContext);
	}
	public annotations_rule(): Annotations_ruleContext | undefined {
		return this.tryGetRuleContext(0, Annotations_ruleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotations_rule; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotations_rule) {
			listener.enterAnnotations_rule(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotations_rule) {
			listener.exitAnnotations_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotations_rule) {
			return visitor.visitAnnotations_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_ruleContext extends ParserRuleContext {
	public annotation_rule_ordering(): Annotation_rule_orderingContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_orderingContext);
	}
	public annotation_rule_atom_indexed(): Annotation_rule_atom_indexedContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_atom_indexedContext);
	}
	public annotation_rule_partial_order(): Annotation_rule_partial_orderContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_partial_orderContext);
	}
	public annotation_rule_projection(): Annotation_rule_projectionContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_projectionContext);
	}
	public annotation_rule_rewriting_arith(): Annotation_rule_rewriting_arithContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_rewriting_arithContext);
	}
	public annotation_rule_align_substitutions(): Annotation_rule_align_substitutionsContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_align_substitutionsContext);
	}
	public annotation_rule_look_ahead(): Annotation_rule_look_aheadContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_look_aheadContext);
	}
	public annotation_rule_to_decompose(): Annotation_rule_to_decomposeContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_to_decomposeContext);
	}
	public annotation_rule_to_not_decompose(): Annotation_rule_to_not_decomposeContext | undefined {
		return this.tryGetRuleContext(0, Annotation_rule_to_not_decomposeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule) {
			listener.enterAnnotation_rule(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule) {
			listener.exitAnnotation_rule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule) {
			return visitor.visitAnnotation_rule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_to_decomposeContext extends ParserRuleContext {
	public ANNOTATION_RULE_TO_DECOMPOSE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_to_decompose; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_to_decompose) {
			listener.enterAnnotation_rule_to_decompose(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_to_decompose) {
			listener.exitAnnotation_rule_to_decompose(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_to_decompose) {
			return visitor.visitAnnotation_rule_to_decompose(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_to_not_decomposeContext extends ParserRuleContext {
	public ANNOTATION_RULE_TO_NOT_DECOMPOSE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_to_not_decompose; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_to_not_decompose) {
			listener.enterAnnotation_rule_to_not_decompose(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_to_not_decompose) {
			listener.exitAnnotation_rule_to_not_decompose(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_to_not_decompose) {
			return visitor.visitAnnotation_rule_to_not_decompose(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_orderingContext extends ParserRuleContext {
	public ANNOTATION_RULE_ORDERING(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ORDERING, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_ORDERING_VALUE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
	public rule_ordering_type(): Rule_ordering_typeContext {
		return this.getRuleContext(0, Rule_ordering_typeContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_ordering; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_ordering) {
			listener.enterAnnotation_rule_ordering(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_ordering) {
			listener.exitAnnotation_rule_ordering(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_ordering) {
			return visitor.visitAnnotation_rule_ordering(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_orderingContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_ORDERING(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_ORDERING_VALUE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
	public global_ordering_type(): Global_ordering_typeContext {
		return this.getRuleContext(0, Global_ordering_typeContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_ordering; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_ordering) {
			listener.enterAnnotation_global_ordering(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_ordering) {
			listener.exitAnnotation_global_ordering(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_ordering) {
			return visitor.visitAnnotation_global_ordering(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_extatom_conversionContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_EXTATOM_CONVERSION(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_EXTATOM_PREDICATE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public annotation_extpredicate(): Annotation_extpredicateContext {
		return this.getRuleContext(0, Annotation_extpredicateContext);
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_EXTATOM_TYPE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE, 0); }
	public extatom_conv_types(): Extatom_conv_typesContext {
		return this.getRuleContext(0, Extatom_conv_typesContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_extatom_conversion; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_extatom_conversion) {
			listener.enterAnnotation_global_extatom_conversion(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_extatom_conversion) {
			listener.exitAnnotation_global_extatom_conversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_extatom_conversion) {
			return visitor.visitAnnotation_global_extatom_conversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_extpredicateContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASPCore2Parser.AMPERSAND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_extpredicate; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_extpredicate) {
			listener.enterAnnotation_extpredicate(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_extpredicate) {
			listener.exitAnnotation_extpredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_extpredicate) {
			return visitor.visitAnnotation_extpredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extatom_conv_typesContext extends ParserRuleContext {
	public extatom_conv_type(): Extatom_conv_typeContext {
		return this.getRuleContext(0, Extatom_conv_typeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public extatom_conv_types(): Extatom_conv_typesContext | undefined {
		return this.tryGetRuleContext(0, Extatom_conv_typesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_extatom_conv_types; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExtatom_conv_types) {
			listener.enterExtatom_conv_types(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExtatom_conv_types) {
			listener.exitExtatom_conv_types(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExtatom_conv_types) {
			return visitor.visitExtatom_conv_types(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extatom_conv_typeContext extends ParserRuleContext {
	public ANNOTATION_EXTATOM_TYPE_QCONST(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST, 0); }
	public ANNOTATION_EXTATOM_TYPE_CONST(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST, 0); }
	public ANNOTATION_EXTATOM_TYPE_U_INT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT, 0); }
	public ANNOTATION_EXTATOM_TYPE_UT_INT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT, 0); }
	public ANNOTATION_EXTATOM_TYPE_UR_INT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT, 0); }
	public ANNOTATION_EXTATOM_TYPE_T_INT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT, 0); }
	public ANNOTATION_EXTATOM_TYPE_R_INT(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_extatom_conv_type; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterExtatom_conv_type) {
			listener.enterExtatom_conv_type(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitExtatom_conv_type) {
			listener.exitExtatom_conv_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitExtatom_conv_type) {
			return visitor.visitExtatom_conv_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_ordering_typeContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASPCore2Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_ordering_type; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_ordering_type) {
			listener.enterRule_ordering_type(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_ordering_type) {
			listener.exitRule_ordering_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_ordering_type) {
			return visitor.visitRule_ordering_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_ordering_typeContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASPCore2Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_ordering_type; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_ordering_type) {
			listener.enterGlobal_ordering_type(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_ordering_type) {
			listener.exitGlobal_ordering_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_ordering_type) {
			return visitor.visitGlobal_ordering_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_atom_indexedContext extends ParserRuleContext {
	public ANNOTATION_RULE_ATOM_INDEXED(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_ATOM_INDEXED_ATOM(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public rule_naf_literal_annotation(): Rule_naf_literal_annotationContext {
		return this.getRuleContext(0, Rule_naf_literal_annotationContext);
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_ATOM_INDEXED_ARGUMENTS(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public rule_indexing_arguments(): Rule_indexing_argumentsContext {
		return this.getRuleContext(0, Rule_indexing_argumentsContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_atom_indexed; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_atom_indexed) {
			listener.enterAnnotation_rule_atom_indexed(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_atom_indexed) {
			listener.exitAnnotation_rule_atom_indexed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_atom_indexed) {
			return visitor.visitAnnotation_rule_atom_indexed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_atom_indexedContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_ATOM_INDEXED(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_ATOM_INDEXED_ATOM(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public global_naf_literal_annotation(): Global_naf_literal_annotationContext {
		return this.getRuleContext(0, Global_naf_literal_annotationContext);
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_ATOM_INDEXED_ARGUMENTS(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public global_indexing_arguments(): Global_indexing_argumentsContext {
		return this.getRuleContext(0, Global_indexing_argumentsContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_atom_indexed; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_atom_indexed) {
			listener.enterAnnotation_global_atom_indexed(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_atom_indexed) {
			listener.exitAnnotation_global_atom_indexed(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_atom_indexed) {
			return visitor.visitAnnotation_global_atom_indexed(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_indexing_argumentsContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASPCore2Parser.NUMBER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public rule_indexing_arguments(): Rule_indexing_argumentsContext | undefined {
		return this.tryGetRuleContext(0, Rule_indexing_argumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_indexing_arguments; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_indexing_arguments) {
			listener.enterRule_indexing_arguments(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_indexing_arguments) {
			listener.exitRule_indexing_arguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_indexing_arguments) {
			return visitor.visitRule_indexing_arguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_naf_literal_annotationContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext {
		return this.getRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_naf_literal_annotation; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_naf_literal_annotation) {
			listener.enterRule_naf_literal_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_naf_literal_annotation) {
			listener.exitRule_naf_literal_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_naf_literal_annotation) {
			return visitor.visitRule_naf_literal_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_indexing_argumentsContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASPCore2Parser.NUMBER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public global_indexing_arguments(): Global_indexing_argumentsContext | undefined {
		return this.tryGetRuleContext(0, Global_indexing_argumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_indexing_arguments; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_indexing_arguments) {
			listener.enterGlobal_indexing_arguments(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_indexing_arguments) {
			listener.exitGlobal_indexing_arguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_indexing_arguments) {
			return visitor.visitGlobal_indexing_arguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_naf_literal_annotationContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext {
		return this.getRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_naf_literal_annotation; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_naf_literal_annotation) {
			listener.enterGlobal_naf_literal_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_naf_literal_annotation) {
			listener.exitGlobal_naf_literal_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_naf_literal_annotation) {
			return visitor.visitGlobal_naf_literal_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_atom_annotation_beforeContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	public builtin_atom(): Builtin_atomContext | undefined {
		return this.tryGetRuleContext(0, Builtin_atomContext);
	}
	public aggregate_atom(): Aggregate_atomContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_atomContext);
	}
	public extAtom(): ExtAtomContext | undefined {
		return this.tryGetRuleContext(0, ExtAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_atom_annotation_before; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_atom_annotation_before) {
			listener.enterRule_atom_annotation_before(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_atom_annotation_before) {
			listener.exitRule_atom_annotation_before(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_atom_annotation_before) {
			return visitor.visitRule_atom_annotation_before(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_atom_annotation_beforeContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	public builtin_atom(): Builtin_atomContext | undefined {
		return this.tryGetRuleContext(0, Builtin_atomContext);
	}
	public aggregate_atom(): Aggregate_atomContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_atomContext);
	}
	public extAtom(): ExtAtomContext | undefined {
		return this.tryGetRuleContext(0, ExtAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_atom_annotation_before; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_atom_annotation_before) {
			listener.enterGlobal_atom_annotation_before(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_atom_annotation_before) {
			listener.exitGlobal_atom_annotation_before(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_atom_annotation_before) {
			return visitor.visitGlobal_atom_annotation_before(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_atom_annotation_afterContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	public builtin_atom(): Builtin_atomContext | undefined {
		return this.tryGetRuleContext(0, Builtin_atomContext);
	}
	public aggregate_atom(): Aggregate_atomContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_atomContext);
	}
	public extAtom(): ExtAtomContext | undefined {
		return this.tryGetRuleContext(0, ExtAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_atom_annotation_after; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_atom_annotation_after) {
			listener.enterRule_atom_annotation_after(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_atom_annotation_after) {
			listener.exitRule_atom_annotation_after(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_atom_annotation_after) {
			return visitor.visitRule_atom_annotation_after(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_atom_annotation_afterContext extends ParserRuleContext {
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	public NAF(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
	public builtin_atom(): Builtin_atomContext | undefined {
		return this.tryGetRuleContext(0, Builtin_atomContext);
	}
	public aggregate_atom(): Aggregate_atomContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_atomContext);
	}
	public extAtom(): ExtAtomContext | undefined {
		return this.tryGetRuleContext(0, ExtAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_atom_annotation_after; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_atom_annotation_after) {
			listener.enterGlobal_atom_annotation_after(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_atom_annotation_after) {
			listener.exitGlobal_atom_annotation_after(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_atom_annotation_after) {
			return visitor.visitGlobal_atom_annotation_after(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_atoms_annotation_beforeContext extends ParserRuleContext {
	public rule_atom_annotation_before(): Rule_atom_annotation_beforeContext {
		return this.getRuleContext(0, Rule_atom_annotation_beforeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public rule_atoms_annotation_before(): Rule_atoms_annotation_beforeContext | undefined {
		return this.tryGetRuleContext(0, Rule_atoms_annotation_beforeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_atoms_annotation_before; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_atoms_annotation_before) {
			listener.enterRule_atoms_annotation_before(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_atoms_annotation_before) {
			listener.exitRule_atoms_annotation_before(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_atoms_annotation_before) {
			return visitor.visitRule_atoms_annotation_before(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_atoms_annotation_beforeContext extends ParserRuleContext {
	public global_atom_annotation_before(): Global_atom_annotation_beforeContext {
		return this.getRuleContext(0, Global_atom_annotation_beforeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public global_atoms_annotation_before(): Global_atoms_annotation_beforeContext | undefined {
		return this.tryGetRuleContext(0, Global_atoms_annotation_beforeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_atoms_annotation_before; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_atoms_annotation_before) {
			listener.enterGlobal_atoms_annotation_before(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_atoms_annotation_before) {
			listener.exitGlobal_atoms_annotation_before(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_atoms_annotation_before) {
			return visitor.visitGlobal_atoms_annotation_before(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rule_atoms_annotation_afterContext extends ParserRuleContext {
	public rule_atom_annotation_after(): Rule_atom_annotation_afterContext {
		return this.getRuleContext(0, Rule_atom_annotation_afterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public rule_atoms_annotation_after(): Rule_atoms_annotation_afterContext | undefined {
		return this.tryGetRuleContext(0, Rule_atoms_annotation_afterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_rule_atoms_annotation_after; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterRule_atoms_annotation_after) {
			listener.enterRule_atoms_annotation_after(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitRule_atoms_annotation_after) {
			listener.exitRule_atoms_annotation_after(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitRule_atoms_annotation_after) {
			return visitor.visitRule_atoms_annotation_after(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_atoms_annotation_afterContext extends ParserRuleContext {
	public global_atom_annotation_after(): Global_atom_annotation_afterContext {
		return this.getRuleContext(0, Global_atom_annotation_afterContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
	public global_atoms_annotation_after(): Global_atoms_annotation_afterContext[];
	public global_atoms_annotation_after(i: number): Global_atoms_annotation_afterContext;
	public global_atoms_annotation_after(i?: number): Global_atoms_annotation_afterContext | Global_atoms_annotation_afterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Global_atoms_annotation_afterContext);
		} else {
			return this.getRuleContext(i, Global_atoms_annotation_afterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_global_atoms_annotation_after; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterGlobal_atoms_annotation_after) {
			listener.enterGlobal_atoms_annotation_after(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitGlobal_atoms_annotation_after) {
			listener.exitGlobal_atoms_annotation_after(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitGlobal_atoms_annotation_after) {
			return visitor.visitGlobal_atoms_annotation_after(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_partial_order_beginContext extends ParserRuleContext {
	public ANNOTATION_RULE_PARTIAL_ORDER(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_partial_order_begin; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_partial_order_begin) {
			listener.enterAnnotation_rule_partial_order_begin(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_partial_order_begin) {
			listener.exitAnnotation_rule_partial_order_begin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_partial_order_begin) {
			return visitor.visitAnnotation_rule_partial_order_begin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_partial_order_beginContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_PARTIAL_ORDER(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_partial_order_begin; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_partial_order_begin) {
			listener.enterAnnotation_global_partial_order_begin(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_partial_order_begin) {
			listener.exitAnnotation_global_partial_order_begin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_partial_order_begin) {
			return visitor.visitAnnotation_global_partial_order_begin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_partial_orderContext extends ParserRuleContext {
	public annotation_rule_partial_order_begin(): Annotation_rule_partial_order_beginContext {
		return this.getRuleContext(0, Annotation_rule_partial_order_beginContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_PARTIAL_ORDER_BEFORE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public CURLY_OPEN(): TerminalNode[];
	public CURLY_OPEN(i: number): TerminalNode;
	public CURLY_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.CURLY_OPEN);
		} else {
			return this.getToken(ASPCore2Parser.CURLY_OPEN, i);
		}
	}
	public rule_atoms_annotation_before(): Rule_atoms_annotation_beforeContext {
		return this.getRuleContext(0, Rule_atoms_annotation_beforeContext);
	}
	public CURLY_CLOSE(): TerminalNode[];
	public CURLY_CLOSE(i: number): TerminalNode;
	public CURLY_CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.CURLY_CLOSE);
		} else {
			return this.getToken(ASPCore2Parser.CURLY_CLOSE, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_PARTIAL_ORDER_AFTER(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
	public rule_atoms_annotation_after(): Rule_atoms_annotation_afterContext {
		return this.getRuleContext(0, Rule_atoms_annotation_afterContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_partial_order; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_partial_order) {
			listener.enterAnnotation_rule_partial_order(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_partial_order) {
			listener.exitAnnotation_rule_partial_order(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_partial_order) {
			return visitor.visitAnnotation_rule_partial_order(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_partial_orderContext extends ParserRuleContext {
	public annotation_global_partial_order_begin(): Annotation_global_partial_order_beginContext {
		return this.getRuleContext(0, Annotation_global_partial_order_beginContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_PARTIAL_ORDER_BEFORE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public CURLY_OPEN(): TerminalNode[];
	public CURLY_OPEN(i: number): TerminalNode;
	public CURLY_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.CURLY_OPEN);
		} else {
			return this.getToken(ASPCore2Parser.CURLY_OPEN, i);
		}
	}
	public global_atoms_annotation_before(): Global_atoms_annotation_beforeContext {
		return this.getRuleContext(0, Global_atoms_annotation_beforeContext);
	}
	public CURLY_CLOSE(): TerminalNode[];
	public CURLY_CLOSE(i: number): TerminalNode;
	public CURLY_CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.CURLY_CLOSE);
		} else {
			return this.getToken(ASPCore2Parser.CURLY_CLOSE, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_PARTIAL_ORDER_AFTER(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
	public global_atoms_annotation_after(): Global_atoms_annotation_afterContext {
		return this.getRuleContext(0, Global_atoms_annotation_afterContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_partial_order; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_partial_order) {
			listener.enterAnnotation_global_partial_order(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_partial_order) {
			listener.exitAnnotation_global_partial_order(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_partial_order) {
			return visitor.visitAnnotation_global_partial_order(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_projectionContext extends ParserRuleContext {
	public ANNOTATION_RULE_PROJECTION(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_PROJECTION, 0); }
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_ORDERING_VALUE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(ASPCore2Parser.EQUAL, 0); }
	public annotation_rule_projection_value(): Annotation_rule_projection_valueContext {
		return this.getRuleContext(0, Annotation_rule_projection_valueContext);
	}
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_projection; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_projection) {
			listener.enterAnnotation_rule_projection(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_projection) {
			listener.exitAnnotation_rule_projection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_projection) {
			return visitor.visitAnnotation_rule_projection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_projection_valueContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASPCore2Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_projection_value; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_projection_value) {
			listener.enterAnnotation_rule_projection_value(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_projection_value) {
			listener.exitAnnotation_rule_projection_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_projection_value) {
			return visitor.visitAnnotation_rule_projection_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_rewriting_arithContext extends ParserRuleContext {
	public ANNOTATION_RULE_REWRITING_ARITH(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_rewriting_arith; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_rewriting_arith) {
			listener.enterAnnotation_rule_rewriting_arith(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_rewriting_arith) {
			listener.exitAnnotation_rule_rewriting_arith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_rewriting_arith) {
			return visitor.visitAnnotation_rule_rewriting_arith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_align_substitutionsContext extends ParserRuleContext {
	public ANNOTATION_RULE_ALIGN_SUBSTITUTIONS(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_align_substitutions; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_align_substitutions) {
			listener.enterAnnotation_rule_align_substitutions(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_align_substitutions) {
			listener.exitAnnotation_rule_align_substitutions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_align_substitutions) {
			return visitor.visitAnnotation_rule_align_substitutions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_rule_look_aheadContext extends ParserRuleContext {
	public ANNOTATION_RULE_LOOK_AHEAD(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD, 0); }
	public PARAM_OPEN(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public PARAM_CLOSE(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_rule_look_ahead; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_rule_look_ahead) {
			listener.enterAnnotation_rule_look_ahead(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_rule_look_ahead) {
			listener.exitAnnotation_rule_look_ahead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_rule_look_ahead) {
			return visitor.visitAnnotation_rule_look_ahead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_wasp_propagatorContext extends ParserRuleContext {
	public annotation_global_wasp_propagator_begin(): Annotation_global_wasp_propagator_beginContext {
		return this.getRuleContext(0, Annotation_global_wasp_propagator_beginContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public heuristic_python_file(): Heuristic_python_fileContext {
		return this.getRuleContext(0, Heuristic_python_fileContext);
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public aggregate_elements_heuristic(): Aggregate_elements_heuristicContext {
		return this.getRuleContext(0, Aggregate_elements_heuristicContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_wasp_propagator; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_wasp_propagator) {
			listener.enterAnnotation_global_wasp_propagator(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_wasp_propagator) {
			listener.exitAnnotation_global_wasp_propagator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_wasp_propagator) {
			return visitor.visitAnnotation_global_wasp_propagator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_wasp_propagator_beginContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_WASP_PROPAGATOR(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_wasp_propagator_begin; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_wasp_propagator_begin) {
			listener.enterAnnotation_global_wasp_propagator_begin(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_wasp_propagator_begin) {
			listener.exitAnnotation_global_wasp_propagator_begin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_wasp_propagator_begin) {
			return visitor.visitAnnotation_global_wasp_propagator_begin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_wasp_heuristicContext extends ParserRuleContext {
	public annotation_global_wasp_heuristic_begin(): Annotation_global_wasp_heuristic_beginContext {
		return this.getRuleContext(0, Annotation_global_wasp_heuristic_beginContext);
	}
	public PARAM_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
	public ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASPCore2Parser.EQUAL);
		} else {
			return this.getToken(ASPCore2Parser.EQUAL, i);
		}
	}
	public heuristic_python_file(): Heuristic_python_fileContext {
		return this.getRuleContext(0, Heuristic_python_fileContext);
	}
	public COMMA(): TerminalNode { return this.getToken(ASPCore2Parser.COMMA, 0); }
	public ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
	public aggregate_elements_heuristic(): Aggregate_elements_heuristicContext {
		return this.getRuleContext(0, Aggregate_elements_heuristicContext);
	}
	public CURLY_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
	public PARAM_CLOSE(): TerminalNode { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
	public DOT(): TerminalNode { return this.getToken(ASPCore2Parser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_wasp_heuristic; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_wasp_heuristic) {
			listener.enterAnnotation_global_wasp_heuristic(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_wasp_heuristic) {
			listener.exitAnnotation_global_wasp_heuristic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_wasp_heuristic) {
			return visitor.visitAnnotation_global_wasp_heuristic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Annotation_global_wasp_heuristic_beginContext extends ParserRuleContext {
	public ANNOTATION_GLOBAL_WASP_HEURISTIC(): TerminalNode { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_annotation_global_wasp_heuristic_begin; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAnnotation_global_wasp_heuristic_begin) {
			listener.enterAnnotation_global_wasp_heuristic_begin(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAnnotation_global_wasp_heuristic_begin) {
			listener.exitAnnotation_global_wasp_heuristic_begin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAnnotation_global_wasp_heuristic_begin) {
			return visitor.visitAnnotation_global_wasp_heuristic_begin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Heuristic_python_fileContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ASPCore2Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_heuristic_python_file; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterHeuristic_python_file) {
			listener.enterHeuristic_python_file(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitHeuristic_python_file) {
			listener.exitHeuristic_python_file(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitHeuristic_python_file) {
			return visitor.visitHeuristic_python_file(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_element_heuristicContext extends ParserRuleContext {
	public aggregate_element(): Aggregate_elementContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_elementContext);
	}
	public classic_literal(): Classic_literalContext | undefined {
		return this.tryGetRuleContext(0, Classic_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_element_heuristic; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_element_heuristic) {
			listener.enterAggregate_element_heuristic(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_element_heuristic) {
			listener.exitAggregate_element_heuristic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_element_heuristic) {
			return visitor.visitAggregate_element_heuristic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_elements_heuristicContext extends ParserRuleContext {
	public aggregate_element_heuristic(): Aggregate_element_heuristicContext {
		return this.getRuleContext(0, Aggregate_element_heuristicContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
	public aggregate_elements_heuristic(): Aggregate_elements_heuristicContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_elements_heuristicContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASPCore2Parser.RULE_aggregate_elements_heuristic; }
	// @Override
	public enterRule(listener: ASPCore2Listener): void {
		if (listener.enterAggregate_elements_heuristic) {
			listener.enterAggregate_elements_heuristic(this);
		}
	}
	// @Override
	public exitRule(listener: ASPCore2Listener): void {
		if (listener.exitAggregate_elements_heuristic) {
			listener.exitAggregate_elements_heuristic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ASPCore2Visitor<Result>): Result {
		if (visitor.visitAggregate_elements_heuristic) {
			return visitor.visitAggregate_elements_heuristic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


