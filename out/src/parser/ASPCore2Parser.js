"use strict";
// Generated from ./src/parser/ASPCore2.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lower_guard_leftward_left_aggregateContext = exports.Compare_aggregateContext = exports.Upper_guard_compare_aggregateContext = exports.Lower_guard_compare_aggregateContext = exports.TestsContext = exports.QueryContext = exports.DirectiveContext = exports.IdentifierContext = exports.VarsContext = exports.Functional_termContext = exports.Variable_termContext = exports.Ground_termContext = exports.Basic_termContext = exports.FactorContext = exports.ExprContext = exports.TermContext = exports.Term__Context = exports.Term_Context = exports.Arithop2Context = exports.Arithop1Context = exports.BinopContext = exports.CompareopContext = exports.Builtin_atomContext = exports.Basic_termsContext = exports.TermsContext = exports.ExtSemicolContext = exports.ExtAtomContext = exports.AtomContext = exports.Classic_literalContext = exports.Existential_atomContext = exports.Naf_literal_aggregateContext = exports.Naf_literalContext = exports.Naf_literalsContext = exports.Choice_elements_literalsContext = exports.Choice_element_atomContext = exports.Choice_elementContext = exports.Choice_elementsContext = exports.Upper_guardContext = exports.Lower_guardContext = exports.Choice_atomContext = exports.ConjunctionContext = exports.DisjunctionContext = exports.Levels_and_termsContext = exports.Weight_at_levelsContext = exports.BodyContext = exports.HeadContext = exports.Simple_ruleContext = exports.RuleContext = exports.ProgramContext = exports.ASPCore2Parser = void 0;
exports.Annotation_rule_look_aheadContext = exports.Annotation_rule_align_substitutionsContext = exports.Annotation_rule_rewriting_arithContext = exports.Annotation_rule_projection_valueContext = exports.Annotation_rule_projectionContext = exports.Annotation_global_partial_orderContext = exports.Annotation_rule_partial_orderContext = exports.Annotation_global_partial_order_beginContext = exports.Annotation_rule_partial_order_beginContext = exports.Global_atoms_annotation_afterContext = exports.Rule_atoms_annotation_afterContext = exports.Global_atoms_annotation_beforeContext = exports.Rule_atoms_annotation_beforeContext = exports.Global_atom_annotation_afterContext = exports.Rule_atom_annotation_afterContext = exports.Global_atom_annotation_beforeContext = exports.Rule_atom_annotation_beforeContext = exports.Global_naf_literal_annotationContext = exports.Global_indexing_argumentsContext = exports.Rule_naf_literal_annotationContext = exports.Rule_indexing_argumentsContext = exports.Annotation_global_atom_indexedContext = exports.Annotation_rule_atom_indexedContext = exports.Global_ordering_typeContext = exports.Rule_ordering_typeContext = exports.Extatom_conv_typeContext = exports.Extatom_conv_typesContext = exports.Annotation_extpredicateContext = exports.Annotation_global_extatom_conversionContext = exports.Annotation_global_orderingContext = exports.Annotation_rule_orderingContext = exports.Annotation_rule_to_not_decomposeContext = exports.Annotation_rule_to_decomposeContext = exports.Annotation_ruleContext = exports.Annotations_ruleContext = exports.Annotation_globalContext = exports.Aggregate_functionContext = exports.Aggregate_elementContext = exports.Aggregate_elementsContext = exports.AggregateContext = exports.RightwardopContext = exports.LeftwardopContext = exports.Aggregate_atomContext = exports.Right_aggregateContext = exports.Upper_guard_rightward_right_aggregateContext = exports.Upper_guard_leftward_right_aggregateContext = exports.Rightward_left_aggregateContext = exports.Lower_guard_rightward_left_aggregateContext = exports.Left_aggregateContext = exports.Leftward_left_aggregateContext = void 0;
exports.Aggregate_elements_heuristicContext = exports.Aggregate_element_heuristicContext = exports.Heuristic_python_fileContext = exports.Annotation_global_wasp_heuristic_beginContext = exports.Annotation_global_wasp_heuristicContext = exports.Annotation_global_wasp_propagator_beginContext = exports.Annotation_global_wasp_propagatorContext = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class ASPCore2Parser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return ASPCore2Parser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "ASPCore2.g4"; }
    // @Override
    get ruleNames() { return ASPCore2Parser.ruleNames; }
    // @Override
    get serializedATN() { return ASPCore2Parser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(ASPCore2Parser._ATN, this);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ASPCore2Parser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 215;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.SYMBOLIC_CONSTANT) | (1 << ASPCore2Parser.VARIABLE) | (1 << ASPCore2Parser.STRING) | (1 << ASPCore2Parser.NUMBER) | (1 << ASPCore2Parser.CONS) | (1 << ASPCore2Parser.WCONS) | (1 << ASPCore2Parser.DASH) | (1 << ASPCore2Parser.PARAM_OPEN) | (1 << ASPCore2Parser.CURLY_OPEN) | (1 << ASPCore2Parser.ANON_VAR))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (ASPCore2Parser.EXISTS - 37)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR - 37)) | (1 << (ASPCore2Parser.DIRECTIVE_NAME - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_PROJECTION - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ORDERING - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED - 37)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER - 37)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED - 69)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER - 69)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION - 69)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE - 69)) | (1 << (ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE - 69)) | (1 << (ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC - 69)))) !== 0)) {
                    {
                        {
                            this.state = 212;
                            this.rule();
                        }
                    }
                    this.state = 217;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule() {
        let _localctx = new RuleContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ASPCore2Parser.RULE_rule);
        try {
            this.state = 224;
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
                        this.state = 218;
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
                        this.state = 219;
                        this.annotations_rule();
                        this.state = 220;
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
                        this.state = 222;
                        this.annotation_global();
                    }
                    break;
                case ASPCore2Parser.DIRECTIVE_NAME:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 223;
                        this.directive();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simple_rule() {
        let _localctx = new Simple_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, ASPCore2Parser.RULE_simple_rule);
        try {
            this.state = 248;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 226;
                        this.head();
                        this.state = 227;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 229;
                        this.head();
                        this.state = 230;
                        this.match(ASPCore2Parser.CONS);
                        this.state = 231;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 233;
                        this.head();
                        this.state = 234;
                        this.match(ASPCore2Parser.CONS);
                        this.state = 235;
                        this.body();
                        this.state = 236;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 238;
                        this.match(ASPCore2Parser.CONS);
                        this.state = 239;
                        this.body();
                        this.state = 240;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 242;
                        this.match(ASPCore2Parser.WCONS);
                        this.state = 243;
                        this.body();
                        this.state = 244;
                        this.match(ASPCore2Parser.DOT);
                        this.state = 245;
                        this.weight_at_levels();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 247;
                        this.query();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    head() {
        let _localctx = new HeadContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ASPCore2Parser.RULE_head);
        try {
            this.state = 252;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 250;
                        this.disjunction();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 251;
                        this.choice_atom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    body() {
        let _localctx = new BodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ASPCore2Parser.RULE_body);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                this.conjunction();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    weight_at_levels() {
        let _localctx = new Weight_at_levelsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, ASPCore2Parser.RULE_weight_at_levels);
        try {
            this.state = 265;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 256;
                        this.match(ASPCore2Parser.SQUARE_OPEN);
                        this.state = 257;
                        this.term();
                        this.state = 258;
                        this.match(ASPCore2Parser.SQUARE_CLOSED);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 260;
                        this.match(ASPCore2Parser.SQUARE_OPEN);
                        this.state = 261;
                        this.term();
                        this.state = 262;
                        this.levels_and_terms();
                        this.state = 263;
                        this.match(ASPCore2Parser.SQUARE_CLOSED);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    levels_and_terms() {
        let _localctx = new Levels_and_termsContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, ASPCore2Parser.RULE_levels_and_terms);
        try {
            this.state = 276;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 267;
                        this.match(ASPCore2Parser.AT);
                        this.state = 268;
                        this.term();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 269;
                        this.match(ASPCore2Parser.AT);
                        this.state = 270;
                        this.term();
                        this.state = 271;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 272;
                        this.terms();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 274;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 275;
                        this.terms();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    disjunction() {
        let _localctx = new DisjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, ASPCore2Parser.RULE_disjunction);
        try {
            this.state = 288;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 278;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 279;
                        this.classic_literal();
                        this.state = 280;
                        this.match(ASPCore2Parser.HEAD_SEPARATOR);
                        this.state = 281;
                        this.disjunction();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 283;
                        this.existential_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 284;
                        this.existential_atom();
                        this.state = 285;
                        this.match(ASPCore2Parser.HEAD_SEPARATOR);
                        this.state = 286;
                        this.disjunction();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conjunction() {
        let _localctx = new ConjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, ASPCore2Parser.RULE_conjunction);
        try {
            this.state = 295;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 7, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 290;
                        this.naf_literal_aggregate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 291;
                        this.naf_literal_aggregate();
                        this.state = 292;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 293;
                        this.conjunction();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_atom() {
        let _localctx = new Choice_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, ASPCore2Parser.RULE_choice_atom);
        try {
            this.state = 317;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 297;
                        this.lower_guard();
                        this.state = 298;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 299;
                        this.choice_elements();
                        this.state = 300;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 301;
                        this.upper_guard();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 303;
                        this.lower_guard();
                        this.state = 304;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 305;
                        this.choice_elements();
                        this.state = 306;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 308;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 309;
                        this.choice_elements();
                        this.state = 310;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 312;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 313;
                        this.choice_elements();
                        this.state = 314;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 315;
                        this.upper_guard();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lower_guard() {
        let _localctx = new Lower_guardContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, ASPCore2Parser.RULE_lower_guard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 319;
                this.term();
                this.state = 320;
                this.binop();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    upper_guard() {
        let _localctx = new Upper_guardContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, ASPCore2Parser.RULE_upper_guard);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.binop();
                this.state = 323;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_elements() {
        let _localctx = new Choice_elementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, ASPCore2Parser.RULE_choice_elements);
        try {
            this.state = 330;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 325;
                        this.choice_element();
                        this.state = 326;
                        this.match(ASPCore2Parser.SEMICOLON);
                        this.state = 327;
                        this.choice_elements();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 329;
                        this.choice_element();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_element() {
        let _localctx = new Choice_elementContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, ASPCore2Parser.RULE_choice_element);
        try {
            this.state = 337;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 332;
                        this.choice_element_atom();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 333;
                        this.choice_element_atom();
                        this.state = 334;
                        this.match(ASPCore2Parser.COLON);
                        this.state = 335;
                        this.choice_elements_literals();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_element_atom() {
        let _localctx = new Choice_element_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, ASPCore2Parser.RULE_choice_element_atom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 339;
                this.atom();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    choice_elements_literals() {
        let _localctx = new Choice_elements_literalsContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, ASPCore2Parser.RULE_choice_elements_literals);
        try {
            this.state = 346;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 341;
                        this.naf_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 342;
                        this.naf_literals();
                        this.state = 343;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 344;
                        this.naf_literal();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    naf_literals() {
        let _localctx = new Naf_literalsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, ASPCore2Parser.RULE_naf_literals);
        try {
            this.state = 353;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 348;
                        this.naf_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 349;
                        this.naf_literal();
                        this.state = 350;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 351;
                        this.naf_literals();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    naf_literal() {
        let _localctx = new Naf_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, ASPCore2Parser.RULE_naf_literal);
        try {
            this.state = 362;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 355;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 356;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 357;
                        this.classic_literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 358;
                        this.builtin_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 359;
                        this.extAtom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 360;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 361;
                        this.extAtom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    naf_literal_aggregate() {
        let _localctx = new Naf_literal_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, ASPCore2Parser.RULE_naf_literal_aggregate);
        try {
            this.state = 368;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 364;
                        this.naf_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 365;
                        this.aggregate_atom();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 366;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 367;
                        this.aggregate_atom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    existential_atom() {
        let _localctx = new Existential_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, ASPCore2Parser.RULE_existential_atom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 370;
                this.match(ASPCore2Parser.EXISTS);
                this.state = 371;
                this.vars();
                this.state = 372;
                this.atom();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classic_literal() {
        let _localctx = new Classic_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, ASPCore2Parser.RULE_classic_literal);
        try {
            this.state = 377;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                case ASPCore2Parser.VARIABLE:
                case ASPCore2Parser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 374;
                        this.atom();
                    }
                    break;
                case ASPCore2Parser.DASH:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 375;
                        this.match(ASPCore2Parser.DASH);
                        this.state = 376;
                        this.atom();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, ASPCore2Parser.RULE_atom);
        try {
            this.state = 389;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 379;
                        this.identifier();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 380;
                        this.identifier();
                        this.state = 381;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 382;
                        this.terms();
                        this.state = 383;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 385;
                        this.identifier();
                        this.state = 386;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 387;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extAtom() {
        let _localctx = new ExtAtomContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, ASPCore2Parser.RULE_extAtom);
        try {
            this.state = 418;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 391;
                        this.match(ASPCore2Parser.AMPERSAND);
                        this.state = 392;
                        this.identifier();
                        this.state = 393;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 394;
                        this.terms();
                        this.state = 395;
                        this.extSemicol();
                        this.state = 396;
                        this.terms();
                        this.state = 397;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 399;
                        this.match(ASPCore2Parser.AMPERSAND);
                        this.state = 400;
                        this.identifier();
                        this.state = 401;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 402;
                        this.extSemicol();
                        this.state = 403;
                        this.terms();
                        this.state = 404;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 406;
                        this.match(ASPCore2Parser.AMPERSAND);
                        this.state = 407;
                        this.identifier();
                        this.state = 408;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 409;
                        this.terms();
                        this.state = 410;
                        this.extSemicol();
                        this.state = 411;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 413;
                        this.match(ASPCore2Parser.AMPERSAND);
                        this.state = 414;
                        this.identifier();
                        this.state = 415;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 416;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extSemicol() {
        let _localctx = new ExtSemicolContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, ASPCore2Parser.RULE_extSemicol);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this.match(ASPCore2Parser.SEMICOLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    terms() {
        let _localctx = new TermsContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, ASPCore2Parser.RULE_terms);
        try {
            this.state = 427;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 422;
                        this.term();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 423;
                        this.term();
                        this.state = 424;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 425;
                        this.terms();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    basic_terms() {
        let _localctx = new Basic_termsContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, ASPCore2Parser.RULE_basic_terms);
        try {
            this.state = 434;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 429;
                        this.basic_term();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 430;
                        this.basic_term();
                        this.state = 431;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 432;
                        this.basic_terms();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    builtin_atom() {
        let _localctx = new Builtin_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, ASPCore2Parser.RULE_builtin_atom);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 436;
                this.term();
                this.state = 437;
                this.binop();
                this.state = 438;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compareop() {
        let _localctx = new CompareopContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, ASPCore2Parser.RULE_compareop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 440;
                _la = this._input.LA(1);
                if (!(_la === ASPCore2Parser.EQUAL || _la === ASPCore2Parser.UNEQUAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    binop() {
        let _localctx = new BinopContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, ASPCore2Parser.RULE_binop);
        try {
            this.state = 446;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 442;
                        this.compareop();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 443;
                        this.compareop();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 444;
                        this.leftwardop();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 445;
                        this.rightwardop();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arithop1() {
        let _localctx = new Arithop1Context(this._ctx, this.state);
        this.enterRule(_localctx, 58, ASPCore2Parser.RULE_arithop1);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 448;
                _la = this._input.LA(1);
                if (!(_la === ASPCore2Parser.PLUS || _la === ASPCore2Parser.DASH)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    arithop2() {
        let _localctx = new Arithop2Context(this._ctx, this.state);
        this.enterRule(_localctx, 60, ASPCore2Parser.RULE_arithop2);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 450;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.TIMES) | (1 << ASPCore2Parser.SLASH) | (1 << ASPCore2Parser.BACK_SLASH))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term_() {
        let _localctx = new Term_Context(this._ctx, this.state);
        this.enterRule(_localctx, 62, ASPCore2Parser.RULE_term_);
        try {
            this.state = 463;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.ANON_VAR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 452;
                        this.match(ASPCore2Parser.ANON_VAR);
                    }
                    break;
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                case ASPCore2Parser.VARIABLE:
                case ASPCore2Parser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 453;
                        this.identifier();
                        this.state = 454;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 455;
                        this.terms();
                        this.state = 456;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                case ASPCore2Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 458;
                        this.match(ASPCore2Parser.NUMBER);
                        this.state = 459;
                        this.match(ASPCore2Parser.DDOT);
                        this.state = 460;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                case ASPCore2Parser.DASH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 461;
                        this.match(ASPCore2Parser.DASH);
                        this.state = 462;
                        this.term();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term__() {
        let _localctx = new Term__Context(this._ctx, this.state);
        this.enterRule(_localctx, 64, ASPCore2Parser.RULE_term__);
        try {
            this.state = 471;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                case ASPCore2Parser.VARIABLE:
                case ASPCore2Parser.STRING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 465;
                        this.identifier();
                    }
                    break;
                case ASPCore2Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 466;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                case ASPCore2Parser.PARAM_OPEN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 467;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 468;
                        this.term();
                        this.state = 469;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, ASPCore2Parser.RULE_term);
        try {
            this.state = 476;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 473;
                        this.term_();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 474;
                        this.identifier();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 475;
                        this.expr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expr() {
        let _localctx = new ExprContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, ASPCore2Parser.RULE_expr);
        try {
            this.state = 483;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 478;
                        this.factor();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 479;
                        this.factor();
                        this.state = 480;
                        this.arithop1();
                        this.state = 481;
                        this.expr();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    factor() {
        let _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, ASPCore2Parser.RULE_factor);
        try {
            this.state = 490;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 485;
                        this.term__();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 486;
                        this.term__();
                        this.state = 487;
                        this.arithop2();
                        this.state = 488;
                        this.factor();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    basic_term() {
        let _localctx = new Basic_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, ASPCore2Parser.RULE_basic_term);
        try {
            this.state = 495;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 492;
                        this.ground_term();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 493;
                        this.variable_term();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 494;
                        this.functional_term();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ground_term() {
        let _localctx = new Ground_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, ASPCore2Parser.RULE_ground_term);
        try {
            this.state = 502;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 497;
                        this.match(ASPCore2Parser.SYMBOLIC_CONSTANT);
                    }
                    break;
                case ASPCore2Parser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 498;
                        this.match(ASPCore2Parser.STRING);
                    }
                    break;
                case ASPCore2Parser.NUMBER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 499;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                case ASPCore2Parser.DASH:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 500;
                        this.match(ASPCore2Parser.DASH);
                        this.state = 501;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variable_term() {
        let _localctx = new Variable_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, ASPCore2Parser.RULE_variable_term);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 504;
                _la = this._input.LA(1);
                if (!(_la === ASPCore2Parser.VARIABLE || _la === ASPCore2Parser.ANON_VAR)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functional_term() {
        let _localctx = new Functional_termContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, ASPCore2Parser.RULE_functional_term);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 506;
                this.identifier();
                this.state = 507;
                this.match(ASPCore2Parser.PARAM_OPEN);
                this.state = 508;
                this.terms();
                this.state = 509;
                this.match(ASPCore2Parser.PARAM_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    vars() {
        let _localctx = new VarsContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, ASPCore2Parser.RULE_vars);
        try {
            this.state = 515;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 511;
                        this.match(ASPCore2Parser.VARIABLE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 512;
                        this.match(ASPCore2Parser.VARIABLE);
                        this.state = 513;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 514;
                        this.vars();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, ASPCore2Parser.RULE_identifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 517;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASPCore2Parser.SYMBOLIC_CONSTANT) | (1 << ASPCore2Parser.VARIABLE) | (1 << ASPCore2Parser.STRING))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    directive() {
        let _localctx = new DirectiveContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, ASPCore2Parser.RULE_directive);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 519;
                this.match(ASPCore2Parser.DIRECTIVE_NAME);
                this.state = 520;
                this.match(ASPCore2Parser.DIRECTIVE_VALUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    query() {
        let _localctx = new QueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, ASPCore2Parser.RULE_query);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 522;
                this.atom();
                this.state = 523;
                this.match(ASPCore2Parser.QUERY_MARK);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tests() {
        let _localctx = new TestsContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, ASPCore2Parser.RULE_tests);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this.match(ASPCore2Parser.TESTS_OPEN);
                this.state = 526;
                this.match(ASPCore2Parser.T__0);
                this.state = 527;
                this.match(ASPCore2Parser.TESTS_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lower_guard_compare_aggregate() {
        let _localctx = new Lower_guard_compare_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, ASPCore2Parser.RULE_lower_guard_compare_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.term();
                this.state = 530;
                this.compareop();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    upper_guard_compare_aggregate() {
        let _localctx = new Upper_guard_compare_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, ASPCore2Parser.RULE_upper_guard_compare_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 532;
                this.compareop();
                this.state = 533;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    compare_aggregate() {
        let _localctx = new Compare_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, ASPCore2Parser.RULE_compare_aggregate);
        try {
            this.state = 541;
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
                        this.state = 535;
                        this.lower_guard_compare_aggregate();
                        this.state = 536;
                        this.aggregate();
                    }
                    break;
                case ASPCore2Parser.AGGR_COUNT:
                case ASPCore2Parser.AGGR_MAX:
                case ASPCore2Parser.AGGR_MIN:
                case ASPCore2Parser.AGGR_SUM:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 538;
                        this.aggregate();
                        this.state = 539;
                        this.upper_guard_compare_aggregate();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lower_guard_leftward_left_aggregate() {
        let _localctx = new Lower_guard_leftward_left_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, ASPCore2Parser.RULE_lower_guard_leftward_left_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 543;
                this.term();
                this.state = 544;
                this.leftwardop();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    leftward_left_aggregate() {
        let _localctx = new Leftward_left_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, ASPCore2Parser.RULE_leftward_left_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 546;
                this.lower_guard_leftward_left_aggregate();
                this.state = 547;
                this.aggregate();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    left_aggregate() {
        let _localctx = new Left_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, ASPCore2Parser.RULE_left_aggregate);
        try {
            this.state = 551;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 549;
                        this.leftward_left_aggregate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 550;
                        this.rightward_left_aggregate();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lower_guard_rightward_left_aggregate() {
        let _localctx = new Lower_guard_rightward_left_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, ASPCore2Parser.RULE_lower_guard_rightward_left_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 553;
                this.term();
                this.state = 554;
                this.rightwardop();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rightward_left_aggregate() {
        let _localctx = new Rightward_left_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, ASPCore2Parser.RULE_rightward_left_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 556;
                this.lower_guard_rightward_left_aggregate();
                this.state = 557;
                this.aggregate();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    upper_guard_leftward_right_aggregate() {
        let _localctx = new Upper_guard_leftward_right_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, ASPCore2Parser.RULE_upper_guard_leftward_right_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 559;
                this.leftwardop();
                this.state = 560;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    upper_guard_rightward_right_aggregate() {
        let _localctx = new Upper_guard_rightward_right_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, ASPCore2Parser.RULE_upper_guard_rightward_right_aggregate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 562;
                this.rightwardop();
                this.state = 563;
                this.term();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    right_aggregate() {
        let _localctx = new Right_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, ASPCore2Parser.RULE_right_aggregate);
        try {
            this.state = 571;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 565;
                        this.aggregate();
                        this.state = 566;
                        this.upper_guard_leftward_right_aggregate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 568;
                        this.aggregate();
                        this.state = 569;
                        this.upper_guard_rightward_right_aggregate();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_atom() {
        let _localctx = new Aggregate_atomContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, ASPCore2Parser.RULE_aggregate_atom);
        try {
            this.state = 582;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 573;
                        this.left_aggregate();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 574;
                        this.right_aggregate();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 575;
                        this.compare_aggregate();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 576;
                        this.leftward_left_aggregate();
                        this.state = 577;
                        this.upper_guard_leftward_right_aggregate();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 579;
                        this.rightward_left_aggregate();
                        this.state = 580;
                        this.upper_guard_rightward_right_aggregate();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    leftwardop() {
        let _localctx = new LeftwardopContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, ASPCore2Parser.RULE_leftwardop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 584;
                _la = this._input.LA(1);
                if (!(_la === ASPCore2Parser.LESS || _la === ASPCore2Parser.LESS_OR_EQ)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rightwardop() {
        let _localctx = new RightwardopContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, ASPCore2Parser.RULE_rightwardop);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 586;
                _la = this._input.LA(1);
                if (!(_la === ASPCore2Parser.GREATER || _la === ASPCore2Parser.GREATER_OR_EQ)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate() {
        let _localctx = new AggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, ASPCore2Parser.RULE_aggregate);
        try {
            this.state = 597;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 588;
                        this.aggregate_function();
                        this.state = 589;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 590;
                        this.aggregate_elements();
                        this.state = 591;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 593;
                        this.aggregate_function();
                        this.state = 594;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 595;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_elements() {
        let _localctx = new Aggregate_elementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, ASPCore2Parser.RULE_aggregate_elements);
        try {
            this.state = 604;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 599;
                        this.aggregate_element();
                        this.state = 600;
                        this.match(ASPCore2Parser.SEMICOLON);
                        this.state = 601;
                        this.aggregate_elements();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 603;
                        this.aggregate_element();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_element() {
        let _localctx = new Aggregate_elementContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, ASPCore2Parser.RULE_aggregate_element);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                this.basic_terms();
                this.state = 607;
                this.match(ASPCore2Parser.COLON);
                this.state = 608;
                this.naf_literals();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_function() {
        let _localctx = new Aggregate_functionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, ASPCore2Parser.RULE_aggregate_function);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 610;
                _la = this._input.LA(1);
                if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (ASPCore2Parser.AGGR_COUNT - 40)) | (1 << (ASPCore2Parser.AGGR_MAX - 40)) | (1 << (ASPCore2Parser.AGGR_MIN - 40)) | (1 << (ASPCore2Parser.AGGR_SUM - 40)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global() {
        let _localctx = new Annotation_globalContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, ASPCore2Parser.RULE_annotation_global);
        try {
            this.state = 618;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 612;
                        this.annotation_global_ordering();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 613;
                        this.annotation_global_atom_indexed();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 614;
                        this.annotation_global_partial_order();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 615;
                        this.annotation_global_extatom_conversion();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 616;
                        this.annotation_global_wasp_heuristic();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 617;
                        this.annotation_global_wasp_propagator();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotations_rule() {
        let _localctx = new Annotations_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, ASPCore2Parser.RULE_annotations_rule);
        try {
            this.state = 624;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 620;
                        this.annotation_rule();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 621;
                        this.annotation_rule();
                        this.state = 622;
                        this.annotations_rule();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule() {
        let _localctx = new Annotation_ruleContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, ASPCore2Parser.RULE_annotation_rule);
        try {
            this.state = 635;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.ANNOTATION_RULE_ORDERING:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 626;
                        this.annotation_rule_ordering();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 627;
                        this.annotation_rule_atom_indexed();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 628;
                        this.annotation_rule_partial_order();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_PROJECTION:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 629;
                        this.annotation_rule_projection();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 630;
                        this.annotation_rule_rewriting_arith();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 631;
                        this.annotation_rule_align_substitutions();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 632;
                        this.annotation_rule_look_ahead();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 633;
                        this.annotation_rule_to_decompose();
                    }
                    break;
                case ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 634;
                        this.annotation_rule_to_not_decompose();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_to_decompose() {
        let _localctx = new Annotation_rule_to_decomposeContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, ASPCore2Parser.RULE_annotation_rule_to_decompose);
        try {
            this.state = 643;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 637;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE);
                        this.state = 638;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 639;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 640;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 641;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE);
                        this.state = 642;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_to_not_decompose() {
        let _localctx = new Annotation_rule_to_not_decomposeContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, ASPCore2Parser.RULE_annotation_rule_to_not_decompose);
        try {
            this.state = 651;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 39, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 645;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE);
                        this.state = 646;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 647;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 648;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 649;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE);
                        this.state = 650;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_ordering() {
        let _localctx = new Annotation_rule_orderingContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, ASPCore2Parser.RULE_annotation_rule_ordering);
        try {
            this.state = 667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 653;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_ORDERING);
                        this.state = 654;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 655;
                        this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
                        this.state = 656;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 657;
                        this.rule_ordering_type();
                        this.state = 658;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 659;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 661;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_ORDERING);
                        this.state = 662;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 663;
                        this.rule_ordering_type();
                        this.state = 664;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 665;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_ordering() {
        let _localctx = new Annotation_global_orderingContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, ASPCore2Parser.RULE_annotation_global_ordering);
        try {
            this.state = 683;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 41, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 669;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING);
                        this.state = 670;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 671;
                        this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
                        this.state = 672;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 673;
                        this.global_ordering_type();
                        this.state = 674;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 675;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 677;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING);
                        this.state = 678;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 679;
                        this.global_ordering_type();
                        this.state = 680;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 681;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_extatom_conversion() {
        let _localctx = new Annotation_global_extatom_conversionContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, ASPCore2Parser.RULE_annotation_global_extatom_conversion);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 685;
                this.match(ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION);
                this.state = 686;
                this.match(ASPCore2Parser.PARAM_OPEN);
                this.state = 687;
                this.match(ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE);
                this.state = 688;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 689;
                this.annotation_extpredicate();
                this.state = 690;
                this.match(ASPCore2Parser.COMMA);
                this.state = 691;
                this.match(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE);
                this.state = 692;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 693;
                this.extatom_conv_types();
                this.state = 694;
                this.match(ASPCore2Parser.PARAM_CLOSE);
                this.state = 695;
                this.match(ASPCore2Parser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_extpredicate() {
        let _localctx = new Annotation_extpredicateContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, ASPCore2Parser.RULE_annotation_extpredicate);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 697;
                this.match(ASPCore2Parser.AMPERSAND);
                this.state = 698;
                this.identifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extatom_conv_types() {
        let _localctx = new Extatom_conv_typesContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, ASPCore2Parser.RULE_extatom_conv_types);
        try {
            this.state = 705;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 700;
                        this.extatom_conv_type();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 701;
                        this.extatom_conv_type();
                        this.state = 702;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 703;
                        this.extatom_conv_types();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    extatom_conv_type() {
        let _localctx = new Extatom_conv_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, ASPCore2Parser.RULE_extatom_conv_type);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 707;
                _la = this._input.LA(1);
                if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT - 61)) | (1 << (ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT - 61)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_ordering_type() {
        let _localctx = new Rule_ordering_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, ASPCore2Parser.RULE_rule_ordering_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this.match(ASPCore2Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_ordering_type() {
        let _localctx = new Global_ordering_typeContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, ASPCore2Parser.RULE_global_ordering_type);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 711;
                this.match(ASPCore2Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_atom_indexed() {
        let _localctx = new Annotation_rule_atom_indexedContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, ASPCore2Parser.RULE_annotation_rule_atom_indexed);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 713;
                this.match(ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED);
                this.state = 714;
                this.match(ASPCore2Parser.PARAM_OPEN);
                this.state = 715;
                this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM);
                this.state = 716;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 717;
                this.rule_naf_literal_annotation();
                this.state = 718;
                this.match(ASPCore2Parser.COMMA);
                this.state = 719;
                this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS);
                this.state = 720;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 721;
                this.match(ASPCore2Parser.CURLY_OPEN);
                this.state = 722;
                this.rule_indexing_arguments();
                this.state = 723;
                this.match(ASPCore2Parser.CURLY_CLOSE);
                this.state = 724;
                this.match(ASPCore2Parser.PARAM_CLOSE);
                this.state = 725;
                this.match(ASPCore2Parser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_atom_indexed() {
        let _localctx = new Annotation_global_atom_indexedContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, ASPCore2Parser.RULE_annotation_global_atom_indexed);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 727;
                this.match(ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED);
                this.state = 728;
                this.match(ASPCore2Parser.PARAM_OPEN);
                this.state = 729;
                this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM);
                this.state = 730;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 731;
                this.global_naf_literal_annotation();
                this.state = 732;
                this.match(ASPCore2Parser.COMMA);
                this.state = 733;
                this.match(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS);
                this.state = 734;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 735;
                this.match(ASPCore2Parser.CURLY_OPEN);
                this.state = 736;
                this.global_indexing_arguments();
                this.state = 737;
                this.match(ASPCore2Parser.CURLY_CLOSE);
                this.state = 738;
                this.match(ASPCore2Parser.PARAM_CLOSE);
                this.state = 739;
                this.match(ASPCore2Parser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_indexing_arguments() {
        let _localctx = new Rule_indexing_argumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, ASPCore2Parser.RULE_rule_indexing_arguments);
        try {
            this.state = 745;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 741;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 742;
                        this.match(ASPCore2Parser.NUMBER);
                        this.state = 743;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 744;
                        this.rule_indexing_arguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_naf_literal_annotation() {
        let _localctx = new Rule_naf_literal_annotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, ASPCore2Parser.RULE_rule_naf_literal_annotation);
        try {
            this.state = 750;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                case ASPCore2Parser.VARIABLE:
                case ASPCore2Parser.STRING:
                case ASPCore2Parser.DASH:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 747;
                        this.classic_literal();
                    }
                    break;
                case ASPCore2Parser.NAF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 748;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 749;
                        this.classic_literal();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_indexing_arguments() {
        let _localctx = new Global_indexing_argumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, ASPCore2Parser.RULE_global_indexing_arguments);
        try {
            this.state = 756;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 752;
                        this.match(ASPCore2Parser.NUMBER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 753;
                        this.match(ASPCore2Parser.NUMBER);
                        this.state = 754;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 755;
                        this.global_indexing_arguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_naf_literal_annotation() {
        let _localctx = new Global_naf_literal_annotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, ASPCore2Parser.RULE_global_naf_literal_annotation);
        try {
            this.state = 761;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ASPCore2Parser.SYMBOLIC_CONSTANT:
                case ASPCore2Parser.VARIABLE:
                case ASPCore2Parser.STRING:
                case ASPCore2Parser.DASH:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 758;
                        this.classic_literal();
                    }
                    break;
                case ASPCore2Parser.NAF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 759;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 760;
                        this.classic_literal();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_atom_annotation_before() {
        let _localctx = new Rule_atom_annotation_beforeContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, ASPCore2Parser.RULE_rule_atom_annotation_before);
        try {
            this.state = 773;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 47, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 763;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 764;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 765;
                        this.classic_literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 766;
                        this.builtin_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 767;
                        this.aggregate_atom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 768;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 769;
                        this.aggregate_atom();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 770;
                        this.extAtom();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 771;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 772;
                        this.extAtom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_atom_annotation_before() {
        let _localctx = new Global_atom_annotation_beforeContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, ASPCore2Parser.RULE_global_atom_annotation_before);
        try {
            this.state = 785;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 775;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 776;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 777;
                        this.classic_literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 778;
                        this.builtin_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 779;
                        this.aggregate_atom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 780;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 781;
                        this.aggregate_atom();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 782;
                        this.extAtom();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 783;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 784;
                        this.extAtom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_atom_annotation_after() {
        let _localctx = new Rule_atom_annotation_afterContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, ASPCore2Parser.RULE_rule_atom_annotation_after);
        try {
            this.state = 797;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 787;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 788;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 789;
                        this.classic_literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 790;
                        this.builtin_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 791;
                        this.aggregate_atom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 792;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 793;
                        this.aggregate_atom();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 794;
                        this.extAtom();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 795;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 796;
                        this.extAtom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_atom_annotation_after() {
        let _localctx = new Global_atom_annotation_afterContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, ASPCore2Parser.RULE_global_atom_annotation_after);
        try {
            this.state = 809;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 799;
                        this.classic_literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 800;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 801;
                        this.classic_literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 802;
                        this.builtin_atom();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 803;
                        this.aggregate_atom();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 804;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 805;
                        this.aggregate_atom();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 806;
                        this.extAtom();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 807;
                        this.match(ASPCore2Parser.NAF);
                        this.state = 808;
                        this.extAtom();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_atoms_annotation_before() {
        let _localctx = new Rule_atoms_annotation_beforeContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, ASPCore2Parser.RULE_rule_atoms_annotation_before);
        try {
            this.state = 816;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 811;
                        this.rule_atom_annotation_before();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 812;
                        this.rule_atom_annotation_before();
                        this.state = 813;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 814;
                        this.rule_atoms_annotation_before();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_atoms_annotation_before() {
        let _localctx = new Global_atoms_annotation_beforeContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, ASPCore2Parser.RULE_global_atoms_annotation_before);
        try {
            this.state = 823;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 818;
                        this.global_atom_annotation_before();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 819;
                        this.global_atom_annotation_before();
                        this.state = 820;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 821;
                        this.global_atoms_annotation_before();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rule_atoms_annotation_after() {
        let _localctx = new Rule_atoms_annotation_afterContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, ASPCore2Parser.RULE_rule_atoms_annotation_after);
        try {
            this.state = 830;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 53, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 825;
                        this.rule_atom_annotation_after();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 826;
                        this.rule_atom_annotation_after();
                        this.state = 827;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 828;
                        this.rule_atoms_annotation_after();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    global_atoms_annotation_after() {
        let _localctx = new Global_atoms_annotation_afterContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, ASPCore2Parser.RULE_global_atoms_annotation_after);
        try {
            this.state = 838;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 832;
                        this.global_atom_annotation_after();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 833;
                        this.global_atom_annotation_after();
                        this.state = 834;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 835;
                        this.global_atoms_annotation_after();
                        this.state = 836;
                        this.global_atoms_annotation_after();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_partial_order_begin() {
        let _localctx = new Annotation_rule_partial_order_beginContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, ASPCore2Parser.RULE_annotation_rule_partial_order_begin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 840;
                this.match(ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_partial_order_begin() {
        let _localctx = new Annotation_global_partial_order_beginContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, ASPCore2Parser.RULE_annotation_global_partial_order_begin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 842;
                this.match(ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_partial_order() {
        let _localctx = new Annotation_rule_partial_orderContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, ASPCore2Parser.RULE_annotation_rule_partial_order);
        try {
            this.state = 876;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 844;
                        this.annotation_rule_partial_order_begin();
                        this.state = 845;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 846;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
                        this.state = 847;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 848;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 849;
                        this.rule_atoms_annotation_before();
                        this.state = 850;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 851;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 852;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
                        this.state = 853;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 854;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 855;
                        this.rule_atoms_annotation_after();
                        this.state = 856;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 857;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 858;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 860;
                        this.annotation_rule_partial_order_begin();
                        this.state = 861;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 862;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
                        this.state = 863;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 864;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 865;
                        this.rule_atoms_annotation_after();
                        this.state = 866;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 867;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 868;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
                        this.state = 869;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 870;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 871;
                        this.rule_atoms_annotation_before();
                        this.state = 872;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 873;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 874;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_partial_order() {
        let _localctx = new Annotation_global_partial_orderContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, ASPCore2Parser.RULE_annotation_global_partial_order);
        try {
            this.state = 910;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 878;
                        this.annotation_global_partial_order_begin();
                        this.state = 879;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 880;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
                        this.state = 881;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 882;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 883;
                        this.global_atoms_annotation_before();
                        this.state = 884;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 885;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 886;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
                        this.state = 887;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 888;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 889;
                        this.global_atoms_annotation_after();
                        this.state = 890;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 891;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 892;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 894;
                        this.annotation_global_partial_order_begin();
                        this.state = 895;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 896;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER);
                        this.state = 897;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 898;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 899;
                        this.global_atoms_annotation_after();
                        this.state = 900;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 901;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 902;
                        this.match(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE);
                        this.state = 903;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 904;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 905;
                        this.global_atoms_annotation_before();
                        this.state = 906;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 907;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 908;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_projection() {
        let _localctx = new Annotation_rule_projectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, ASPCore2Parser.RULE_annotation_rule_projection);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 912;
                this.match(ASPCore2Parser.ANNOTATION_RULE_PROJECTION);
                this.state = 913;
                this.match(ASPCore2Parser.PARAM_OPEN);
                this.state = 914;
                this.match(ASPCore2Parser.ANNOTATION_ORDERING_VALUE);
                this.state = 915;
                this.match(ASPCore2Parser.EQUAL);
                this.state = 916;
                this.annotation_rule_projection_value();
                this.state = 917;
                this.match(ASPCore2Parser.PARAM_CLOSE);
                this.state = 918;
                this.match(ASPCore2Parser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_projection_value() {
        let _localctx = new Annotation_rule_projection_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, ASPCore2Parser.RULE_annotation_rule_projection_value);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 920;
                this.match(ASPCore2Parser.NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_rewriting_arith() {
        let _localctx = new Annotation_rule_rewriting_arithContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, ASPCore2Parser.RULE_annotation_rule_rewriting_arith);
        try {
            this.state = 928;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 922;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH);
                        this.state = 923;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 924;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 925;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 926;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH);
                        this.state = 927;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_align_substitutions() {
        let _localctx = new Annotation_rule_align_substitutionsContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, ASPCore2Parser.RULE_annotation_rule_align_substitutions);
        try {
            this.state = 936;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 930;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
                        this.state = 931;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 932;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 933;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 934;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS);
                        this.state = 935;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_rule_look_ahead() {
        let _localctx = new Annotation_rule_look_aheadContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, ASPCore2Parser.RULE_annotation_rule_look_ahead);
        try {
            this.state = 944;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 938;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD);
                        this.state = 939;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 940;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 941;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 942;
                        this.match(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD);
                        this.state = 943;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_wasp_propagator() {
        let _localctx = new Annotation_global_wasp_propagatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, ASPCore2Parser.RULE_annotation_global_wasp_propagator);
        try {
            this.state = 974;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 946;
                        this.annotation_global_wasp_propagator_begin();
                        this.state = 947;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 948;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
                        this.state = 949;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 950;
                        this.heuristic_python_file();
                        this.state = 951;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 952;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
                        this.state = 953;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 954;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 955;
                        this.aggregate_elements_heuristic();
                        this.state = 956;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 957;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 958;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 960;
                        this.annotation_global_wasp_propagator_begin();
                        this.state = 961;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 962;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
                        this.state = 963;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 964;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 965;
                        this.aggregate_elements_heuristic();
                        this.state = 966;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 967;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 968;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
                        this.state = 969;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 970;
                        this.heuristic_python_file();
                        this.state = 971;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 972;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_wasp_propagator_begin() {
        let _localctx = new Annotation_global_wasp_propagator_beginContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, ASPCore2Parser.RULE_annotation_global_wasp_propagator_begin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 976;
                this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_wasp_heuristic() {
        let _localctx = new Annotation_global_wasp_heuristicContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, ASPCore2Parser.RULE_annotation_global_wasp_heuristic);
        try {
            this.state = 1006;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 978;
                        this.annotation_global_wasp_heuristic_begin();
                        this.state = 979;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 980;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
                        this.state = 981;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 982;
                        this.heuristic_python_file();
                        this.state = 983;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 984;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
                        this.state = 985;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 986;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 987;
                        this.aggregate_elements_heuristic();
                        this.state = 988;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 989;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 990;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 992;
                        this.annotation_global_wasp_heuristic_begin();
                        this.state = 993;
                        this.match(ASPCore2Parser.PARAM_OPEN);
                        this.state = 994;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS);
                        this.state = 995;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 996;
                        this.match(ASPCore2Parser.CURLY_OPEN);
                        this.state = 997;
                        this.aggregate_elements_heuristic();
                        this.state = 998;
                        this.match(ASPCore2Parser.CURLY_CLOSE);
                        this.state = 999;
                        this.match(ASPCore2Parser.COMMA);
                        this.state = 1000;
                        this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE);
                        this.state = 1001;
                        this.match(ASPCore2Parser.EQUAL);
                        this.state = 1002;
                        this.heuristic_python_file();
                        this.state = 1003;
                        this.match(ASPCore2Parser.PARAM_CLOSE);
                        this.state = 1004;
                        this.match(ASPCore2Parser.DOT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation_global_wasp_heuristic_begin() {
        let _localctx = new Annotation_global_wasp_heuristic_beginContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, ASPCore2Parser.RULE_annotation_global_wasp_heuristic_begin);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1008;
                this.match(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    heuristic_python_file() {
        let _localctx = new Heuristic_python_fileContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, ASPCore2Parser.RULE_heuristic_python_file);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1010;
                this.match(ASPCore2Parser.STRING);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_element_heuristic() {
        let _localctx = new Aggregate_element_heuristicContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, ASPCore2Parser.RULE_aggregate_element_heuristic);
        try {
            this.state = 1014;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 62, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1012;
                        this.aggregate_element();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1013;
                        this.classic_literal();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    aggregate_elements_heuristic() {
        let _localctx = new Aggregate_elements_heuristicContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, ASPCore2Parser.RULE_aggregate_elements_heuristic);
        try {
            this.state = 1021;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1016;
                        this.aggregate_element_heuristic();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1017;
                        this.aggregate_element_heuristic();
                        this.state = 1018;
                        this.match(ASPCore2Parser.SEMICOLON);
                        this.state = 1019;
                        this.aggregate_elements_heuristic();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!ASPCore2Parser.__ATN) {
            ASPCore2Parser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ASPCore2Parser._serializedATN));
        }
        return ASPCore2Parser.__ATN;
    }
}
exports.ASPCore2Parser = ASPCore2Parser;
ASPCore2Parser.T__0 = 1;
ASPCore2Parser.NAF = 2;
ASPCore2Parser.SYMBOLIC_CONSTANT = 3;
ASPCore2Parser.VARIABLE = 4;
ASPCore2Parser.STRING = 5;
ASPCore2Parser.NUMBER = 6;
ASPCore2Parser.WS = 7;
ASPCore2Parser.DOT = 8;
ASPCore2Parser.DDOT = 9;
ASPCore2Parser.COMMA = 10;
ASPCore2Parser.HEAD_SEPARATOR = 11;
ASPCore2Parser.SEMICOLON = 12;
ASPCore2Parser.COLON = 13;
ASPCore2Parser.AT = 14;
ASPCore2Parser.CONS = 15;
ASPCore2Parser.WCONS = 16;
ASPCore2Parser.PLUS = 17;
ASPCore2Parser.DASH = 18;
ASPCore2Parser.TIMES = 19;
ASPCore2Parser.SLASH = 20;
ASPCore2Parser.BACK_SLASH = 21;
ASPCore2Parser.PARAM_OPEN = 22;
ASPCore2Parser.PARAM_CLOSE = 23;
ASPCore2Parser.SQUARE_OPEN = 24;
ASPCore2Parser.SQUARE_CLOSED = 25;
ASPCore2Parser.CURLY_OPEN = 26;
ASPCore2Parser.CURLY_CLOSE = 27;
ASPCore2Parser.QUERY_MARK = 28;
ASPCore2Parser.ANON_VAR = 29;
ASPCore2Parser.EQUAL = 30;
ASPCore2Parser.UNEQUAL = 31;
ASPCore2Parser.LESS = 32;
ASPCore2Parser.GREATER = 33;
ASPCore2Parser.LESS_OR_EQ = 34;
ASPCore2Parser.GREATER_OR_EQ = 35;
ASPCore2Parser.AMPERSAND = 36;
ASPCore2Parser.EXISTS = 37;
ASPCore2Parser.TESTS_OPEN = 38;
ASPCore2Parser.TESTS_CLOSE = 39;
ASPCore2Parser.AGGR_COUNT = 40;
ASPCore2Parser.AGGR_MAX = 41;
ASPCore2Parser.AGGR_MIN = 42;
ASPCore2Parser.AGGR_SUM = 43;
ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR = 44;
ASPCore2Parser.DIRECTIVE_NAME = 45;
ASPCore2Parser.DIRECTIVE_VALUE = 46;
ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS = 47;
ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD = 48;
ASPCore2Parser.ANNOTATION_RULE_PROJECTION = 49;
ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH = 50;
ASPCore2Parser.ANNOTATION_RULE_ORDERING = 51;
ASPCore2Parser.ANNOTATION_ORDERING_VALUE = 52;
ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED = 53;
ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM = 54;
ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS = 55;
ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER = 56;
ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE = 57;
ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER = 58;
ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE = 59;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE = 60;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST = 61;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST = 62;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT = 63;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT = 64;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT = 65;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT = 66;
ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT = 67;
ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING = 68;
ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED = 69;
ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER = 70;
ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION = 71;
ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE = 72;
ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE = 73;
ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC = 74;
ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE = 75;
ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS = 76;
ASPCore2Parser.TESTS = 77;
ASPCore2Parser.RULE_program = 0;
ASPCore2Parser.RULE_rule = 1;
ASPCore2Parser.RULE_simple_rule = 2;
ASPCore2Parser.RULE_head = 3;
ASPCore2Parser.RULE_body = 4;
ASPCore2Parser.RULE_weight_at_levels = 5;
ASPCore2Parser.RULE_levels_and_terms = 6;
ASPCore2Parser.RULE_disjunction = 7;
ASPCore2Parser.RULE_conjunction = 8;
ASPCore2Parser.RULE_choice_atom = 9;
ASPCore2Parser.RULE_lower_guard = 10;
ASPCore2Parser.RULE_upper_guard = 11;
ASPCore2Parser.RULE_choice_elements = 12;
ASPCore2Parser.RULE_choice_element = 13;
ASPCore2Parser.RULE_choice_element_atom = 14;
ASPCore2Parser.RULE_choice_elements_literals = 15;
ASPCore2Parser.RULE_naf_literals = 16;
ASPCore2Parser.RULE_naf_literal = 17;
ASPCore2Parser.RULE_naf_literal_aggregate = 18;
ASPCore2Parser.RULE_existential_atom = 19;
ASPCore2Parser.RULE_classic_literal = 20;
ASPCore2Parser.RULE_atom = 21;
ASPCore2Parser.RULE_extAtom = 22;
ASPCore2Parser.RULE_extSemicol = 23;
ASPCore2Parser.RULE_terms = 24;
ASPCore2Parser.RULE_basic_terms = 25;
ASPCore2Parser.RULE_builtin_atom = 26;
ASPCore2Parser.RULE_compareop = 27;
ASPCore2Parser.RULE_binop = 28;
ASPCore2Parser.RULE_arithop1 = 29;
ASPCore2Parser.RULE_arithop2 = 30;
ASPCore2Parser.RULE_term_ = 31;
ASPCore2Parser.RULE_term__ = 32;
ASPCore2Parser.RULE_term = 33;
ASPCore2Parser.RULE_expr = 34;
ASPCore2Parser.RULE_factor = 35;
ASPCore2Parser.RULE_basic_term = 36;
ASPCore2Parser.RULE_ground_term = 37;
ASPCore2Parser.RULE_variable_term = 38;
ASPCore2Parser.RULE_functional_term = 39;
ASPCore2Parser.RULE_vars = 40;
ASPCore2Parser.RULE_identifier = 41;
ASPCore2Parser.RULE_directive = 42;
ASPCore2Parser.RULE_query = 43;
ASPCore2Parser.RULE_tests = 44;
ASPCore2Parser.RULE_lower_guard_compare_aggregate = 45;
ASPCore2Parser.RULE_upper_guard_compare_aggregate = 46;
ASPCore2Parser.RULE_compare_aggregate = 47;
ASPCore2Parser.RULE_lower_guard_leftward_left_aggregate = 48;
ASPCore2Parser.RULE_leftward_left_aggregate = 49;
ASPCore2Parser.RULE_left_aggregate = 50;
ASPCore2Parser.RULE_lower_guard_rightward_left_aggregate = 51;
ASPCore2Parser.RULE_rightward_left_aggregate = 52;
ASPCore2Parser.RULE_upper_guard_leftward_right_aggregate = 53;
ASPCore2Parser.RULE_upper_guard_rightward_right_aggregate = 54;
ASPCore2Parser.RULE_right_aggregate = 55;
ASPCore2Parser.RULE_aggregate_atom = 56;
ASPCore2Parser.RULE_leftwardop = 57;
ASPCore2Parser.RULE_rightwardop = 58;
ASPCore2Parser.RULE_aggregate = 59;
ASPCore2Parser.RULE_aggregate_elements = 60;
ASPCore2Parser.RULE_aggregate_element = 61;
ASPCore2Parser.RULE_aggregate_function = 62;
ASPCore2Parser.RULE_annotation_global = 63;
ASPCore2Parser.RULE_annotations_rule = 64;
ASPCore2Parser.RULE_annotation_rule = 65;
ASPCore2Parser.RULE_annotation_rule_to_decompose = 66;
ASPCore2Parser.RULE_annotation_rule_to_not_decompose = 67;
ASPCore2Parser.RULE_annotation_rule_ordering = 68;
ASPCore2Parser.RULE_annotation_global_ordering = 69;
ASPCore2Parser.RULE_annotation_global_extatom_conversion = 70;
ASPCore2Parser.RULE_annotation_extpredicate = 71;
ASPCore2Parser.RULE_extatom_conv_types = 72;
ASPCore2Parser.RULE_extatom_conv_type = 73;
ASPCore2Parser.RULE_rule_ordering_type = 74;
ASPCore2Parser.RULE_global_ordering_type = 75;
ASPCore2Parser.RULE_annotation_rule_atom_indexed = 76;
ASPCore2Parser.RULE_annotation_global_atom_indexed = 77;
ASPCore2Parser.RULE_rule_indexing_arguments = 78;
ASPCore2Parser.RULE_rule_naf_literal_annotation = 79;
ASPCore2Parser.RULE_global_indexing_arguments = 80;
ASPCore2Parser.RULE_global_naf_literal_annotation = 81;
ASPCore2Parser.RULE_rule_atom_annotation_before = 82;
ASPCore2Parser.RULE_global_atom_annotation_before = 83;
ASPCore2Parser.RULE_rule_atom_annotation_after = 84;
ASPCore2Parser.RULE_global_atom_annotation_after = 85;
ASPCore2Parser.RULE_rule_atoms_annotation_before = 86;
ASPCore2Parser.RULE_global_atoms_annotation_before = 87;
ASPCore2Parser.RULE_rule_atoms_annotation_after = 88;
ASPCore2Parser.RULE_global_atoms_annotation_after = 89;
ASPCore2Parser.RULE_annotation_rule_partial_order_begin = 90;
ASPCore2Parser.RULE_annotation_global_partial_order_begin = 91;
ASPCore2Parser.RULE_annotation_rule_partial_order = 92;
ASPCore2Parser.RULE_annotation_global_partial_order = 93;
ASPCore2Parser.RULE_annotation_rule_projection = 94;
ASPCore2Parser.RULE_annotation_rule_projection_value = 95;
ASPCore2Parser.RULE_annotation_rule_rewriting_arith = 96;
ASPCore2Parser.RULE_annotation_rule_align_substitutions = 97;
ASPCore2Parser.RULE_annotation_rule_look_ahead = 98;
ASPCore2Parser.RULE_annotation_global_wasp_propagator = 99;
ASPCore2Parser.RULE_annotation_global_wasp_propagator_begin = 100;
ASPCore2Parser.RULE_annotation_global_wasp_heuristic = 101;
ASPCore2Parser.RULE_annotation_global_wasp_heuristic_begin = 102;
ASPCore2Parser.RULE_heuristic_python_file = 103;
ASPCore2Parser.RULE_aggregate_element_heuristic = 104;
ASPCore2Parser.RULE_aggregate_elements_heuristic = 105;
// tslint:disable:no-trailing-whitespace
ASPCore2Parser.ruleNames = [
    "program", "rule", "simple_rule", "head", "body", "weight_at_levels",
    "levels_and_terms", "disjunction", "conjunction", "choice_atom", "lower_guard",
    "upper_guard", "choice_elements", "choice_element", "choice_element_atom",
    "choice_elements_literals", "naf_literals", "naf_literal", "naf_literal_aggregate",
    "existential_atom", "classic_literal", "atom", "extAtom", "extSemicol",
    "terms", "basic_terms", "builtin_atom", "compareop", "binop", "arithop1",
    "arithop2", "term_", "term__", "term", "expr", "factor", "basic_term",
    "ground_term", "variable_term", "functional_term", "vars", "identifier",
    "directive", "query", "tests", "lower_guard_compare_aggregate", "upper_guard_compare_aggregate",
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
ASPCore2Parser._LITERAL_NAMES = [
    undefined, "'\\?'", "'not'", undefined, undefined, undefined, undefined,
    undefined, "'.'", "'..'", "','", "'|'", "';'", "':'", "'@'", "':-'", "':~'",
    "'+'", "'-'", "'*'", "'/'", "'\\'", "'('", "')'", "'['", "']'", "'{'",
    "'}'", "'?'", "'_'", undefined, undefined, "'<'", "'>'", "'<='", "'>='",
    "'&'", "'\\'", "'%**'", "'**%'", "'#count'", "'#max'", "'#min'", "'#sum'",
    "'#propagator'", "'#([A-Za-z_]*)'", "'.*'", "'%@rule_align_substitutions'",
    "'%@rule_look_ahead'", "'%@rule_projection'", "'%@rule_rewriting_arith'",
    "'%@rule_ordering'", "'@value'", "'%@rule_atom_indexed'", "'@atom'", "'@arguments'",
    "'%@rule_partial_order'", "'@before'", "'@after'", "'@predicate'", "'@type'",
    "'@Q_CONST'", "'@CONST'", "'@U_INT'", "'@UR_INT'", "'@UT_INT'", "'@R_INT'",
    "'@T_INT'", "'%@global_ordering'", "'%@global_atom_indexed'", "'%@global_partial_order'",
    "'%@global_external_predicate_conversion'", "'%@rule_to_decompose'", "'%@rule_to_not_decompose'",
    "'%@global_heuristic'", "'@file'", "'@elements'",
];
ASPCore2Parser._SYMBOLIC_NAMES = [
    undefined, undefined, "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING",
    "NUMBER", "WS", "DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", "SEMICOLON",
    "COLON", "AT", "CONS", "WCONS", "PLUS", "DASH", "TIMES", "SLASH", "BACK_SLASH",
    "PARAM_OPEN", "PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", "CURLY_OPEN",
    "CURLY_CLOSE", "QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", "LESS", "GREATER",
    "LESS_OR_EQ", "GREATER_OR_EQ", "AMPERSAND", "EXISTS", "TESTS_OPEN", "TESTS_CLOSE",
    "AGGR_COUNT", "AGGR_MAX", "AGGR_MIN", "AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR",
    "DIRECTIVE_NAME", "DIRECTIVE_VALUE", "ANNOTATION_RULE_ALIGN_SUBSTITUTIONS",
    "ANNOTATION_RULE_LOOK_AHEAD", "ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH",
    "ANNOTATION_RULE_ORDERING", "ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED",
    "ANNOTATION_ATOM_INDEXED_ATOM", "ANNOTATION_ATOM_INDEXED_ARGUMENTS", "ANNOTATION_RULE_PARTIAL_ORDER",
    "ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", "ANNOTATION_EXTATOM_PREDICATE",
    "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", "ANNOTATION_EXTATOM_TYPE_CONST",
    "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", "ANNOTATION_EXTATOM_TYPE_UT_INT",
    "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", "ANNOTATION_GLOBAL_ORDERING",
    "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", "ANNOTATION_GLOBAL_EXTATOM_CONVERSION",
    "ANNOTATION_RULE_TO_DECOMPOSE", "ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC",
    "ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS",
    "TESTS",
];
ASPCore2Parser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ASPCore2Parser._LITERAL_NAMES, ASPCore2Parser._SYMBOLIC_NAMES, []);
ASPCore2Parser._serializedATNSegments = 2;
ASPCore2Parser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03O\u0402\x04\x02" +
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
    "i\ti\x04j\tj\x04k\tk\x03\x02\x07\x02\xD8\n\x02\f\x02\x0E\x02\xDB\v\x02" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xE3\n\x03\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x05\x04\xFB\n\x04\x03\x05\x03\x05\x05\x05" +
    "\xFF\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
    "\x07\x03\x07\x03\x07\x03\x07\x05\x07\u010C\n\x07\x03\b\x03\b\x03\b\x03" +
    "\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u0117\n\b\x03\t\x03\t\x03\t\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0123\n\t\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x05\n\u012A\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x05\v\u0140\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u014D\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x0F\x03\x0F\x05\x0F\u0154\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x05\x11\u015D\n\x11\x03\x12\x03\x12\x03\x12\x03\x12" +
    "\x03\x12\x05\x12\u0164\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
    "\x13\x03\x13\x05\x13\u016D\n\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
    "\u0173\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05" +
    "\x16\u017C\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
    "\x03\x17\x03\x17\x03\x17\x05\x17\u0188\n\x17\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
    "\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A5\n\x18\x03\x19" +
    "\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01AE\n\x1A\x03" +
    "\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u01B5\n\x1B\x03\x1C\x03\x1C" +
    "\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
    "\u01C1\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03" +
    "!\x03!\x03!\x03!\x03!\x05!\u01D2\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
    "\"\x05\"\u01DA\n\"\x03#\x03#\x03#\x05#\u01DF\n#\x03$\x03$\x03$\x03$\x03" +
    "$\x05$\u01E6\n$\x03%\x03%\x03%\x03%\x03%\x05%\u01ED\n%\x03&\x03&\x03&" +
    "\x05&\u01F2\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u01F9\n\'\x03(\x03" +
    "(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x05*\u0206\n*\x03+\x03" +
    "+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
    "0\x030\x030\x031\x031\x031\x031\x031\x031\x051\u0220\n1\x032\x032\x03" +
    "2\x033\x033\x033\x034\x034\x054\u022A\n4\x035\x035\x035\x036\x036\x03" +
    "6\x037\x037\x037\x038\x038\x038\x039\x039\x039\x039\x039\x039\x059\u023E" +
    "\n9\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u0249\n:\x03;\x03" +
    ";\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u0258\n" +
    "=\x03>\x03>\x03>\x03>\x03>\x05>\u025F\n>\x03?\x03?\x03?\x03?\x03@\x03" +
    "@\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u026D\nA\x03B\x03B\x03B\x03B\x05" +
    "B\u0273\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x05C\u027E\nC" +
    "\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0286\nD\x03E\x03E\x03E\x03E\x03E" +
    "\x03E\x05E\u028E\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F\x03F" +
    "\x03F\x03F\x03F\x03F\x05F\u029E\nF\x03G\x03G\x03G\x03G\x03G\x03G\x03G" +
    "\x03G\x03G\x03G\x03G\x03G\x03G\x03G\x05G\u02AE\nG\x03H\x03H\x03H\x03H" +
    "\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x03J\x03J\x03" +
    "J\x03J\x03J\x05J\u02C4\nJ\x03K\x03K\x03L\x03L\x03M\x03M\x03N\x03N\x03" +
    "N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03" +
    "O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03" +
    "P\x03P\x05P\u02EC\nP\x03Q\x03Q\x03Q\x05Q\u02F1\nQ\x03R\x03R\x03R\x03R" +
    "\x05R\u02F7\nR\x03S\x03S\x03S\x05S\u02FC\nS\x03T\x03T\x03T\x03T\x03T\x03" +
    "T\x03T\x03T\x03T\x03T\x05T\u0308\nT\x03U\x03U\x03U\x03U\x03U\x03U\x03" +
    "U\x03U\x03U\x03U\x05U\u0314\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
    "V\x03V\x03V\x05V\u0320\nV\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03" +
    "W\x03W\x05W\u032C\nW\x03X\x03X\x03X\x03X\x03X\x05X\u0333\nX\x03Y\x03Y" +
    "\x03Y\x03Y\x03Y\x05Y\u033A\nY\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0341\nZ\x03" +
    "[\x03[\x03[\x03[\x03[\x03[\x05[\u0349\n[\x03\\\x03\\\x03]\x03]\x03^\x03" +
    "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
    "^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03" +
    "^\x03^\x03^\x05^\u036F\n^\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
    "_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03" +
    "_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05_\u0391\n_\x03`\x03" +
    "`\x03`\x03`\x03`\x03`\x03`\x03`\x03a\x03a\x03b\x03b\x03b\x03b\x03b\x03" +
    "b\x05b\u03A3\nb\x03c\x03c\x03c\x03c\x03c\x03c\x05c\u03AB\nc\x03d\x03d" +
    "\x03d\x03d\x03d\x03d\x05d\u03B3\nd\x03e\x03e\x03e\x03e\x03e\x03e\x03e" +
    "\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x03" +
    "e\x03e\x03e\x03e\x03e\x03e\x03e\x03e\x05e\u03D1\ne\x03f\x03f\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03" +
    "g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u03F1" +
    "\ng\x03h\x03h\x03i\x03i\x03j\x03j\x05j\u03F9\nj\x03k\x03k\x03k\x03k\x03" +
    "k\x05k\u0400\nk\x03k\x02\x02\x02l\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
    "\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
    "\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
    "8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
    "T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
    "p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
    "\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
    "\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
    "\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
    "\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
    "\xD0\x02\xD2\x02\xD4\x02\x02\v\x03\x02 !\x03\x02\x13\x14\x03\x02\x15\x17" +
    "\x04\x02\x06\x06\x1F\x1F\x03\x02\x05\x07\x04\x02\"\"$$\x04\x02##%%\x03" +
    "\x02*-\x03\x02?E\x02\u0414\x02\xD9\x03\x02\x02\x02\x04\xE2\x03\x02\x02" +
    "\x02\x06\xFA\x03\x02\x02\x02\b\xFE\x03\x02\x02\x02\n\u0100\x03\x02\x02" +
    "\x02\f\u010B\x03\x02\x02\x02\x0E\u0116\x03\x02\x02\x02\x10\u0122\x03\x02" +
    "\x02\x02\x12\u0129\x03\x02\x02\x02\x14\u013F\x03\x02\x02\x02\x16\u0141" +
    "\x03\x02\x02\x02\x18\u0144\x03\x02\x02\x02\x1A\u014C\x03\x02\x02\x02\x1C" +
    "\u0153\x03\x02\x02\x02\x1E\u0155\x03\x02\x02\x02 \u015C\x03\x02\x02\x02" +
    "\"\u0163\x03\x02\x02\x02$\u016C\x03\x02\x02\x02&\u0172\x03\x02\x02\x02" +
    "(\u0174\x03\x02\x02\x02*\u017B\x03\x02\x02\x02,\u0187\x03\x02\x02\x02" +
    ".\u01A4\x03\x02\x02\x020\u01A6\x03\x02\x02\x022\u01AD\x03\x02\x02\x02" +
    "4\u01B4\x03\x02\x02\x026\u01B6\x03\x02\x02\x028\u01BA\x03\x02\x02\x02" +
    ":\u01C0\x03\x02\x02\x02<\u01C2\x03\x02\x02\x02>\u01C4\x03\x02\x02\x02" +
    "@\u01D1\x03\x02\x02\x02B\u01D9\x03\x02\x02\x02D\u01DE\x03\x02\x02\x02" +
    "F\u01E5\x03\x02\x02\x02H\u01EC\x03\x02\x02\x02J\u01F1\x03\x02\x02\x02" +
    "L\u01F8\x03\x02\x02\x02N\u01FA\x03\x02\x02\x02P\u01FC\x03\x02\x02\x02" +
    "R\u0205\x03\x02\x02\x02T\u0207\x03\x02\x02\x02V\u0209\x03\x02\x02\x02" +
    "X\u020C\x03\x02\x02\x02Z\u020F\x03\x02\x02\x02\\\u0213\x03\x02\x02\x02" +
    "^\u0216\x03\x02\x02\x02`\u021F\x03\x02\x02\x02b\u0221\x03\x02\x02\x02" +
    "d\u0224\x03\x02\x02\x02f\u0229\x03\x02\x02\x02h\u022B\x03\x02\x02\x02" +
    "j\u022E\x03\x02\x02\x02l\u0231\x03\x02\x02\x02n\u0234\x03\x02\x02\x02" +
    "p\u023D\x03\x02\x02\x02r\u0248\x03\x02\x02\x02t\u024A\x03\x02\x02\x02" +
    "v\u024C\x03\x02\x02\x02x\u0257\x03\x02\x02\x02z\u025E\x03\x02\x02\x02" +
    "|\u0260\x03\x02\x02\x02~\u0264\x03\x02\x02\x02\x80\u026C\x03\x02\x02\x02" +
    "\x82\u0272\x03\x02\x02\x02\x84\u027D\x03\x02\x02\x02\x86\u0285\x03\x02" +
    "\x02\x02\x88\u028D\x03\x02\x02\x02\x8A\u029D\x03\x02\x02\x02\x8C\u02AD" +
    "\x03\x02\x02\x02\x8E\u02AF\x03\x02\x02\x02\x90\u02BB\x03\x02\x02\x02\x92" +
    "\u02C3\x03\x02\x02\x02\x94\u02C5\x03\x02\x02\x02\x96\u02C7\x03\x02\x02" +
    "\x02\x98\u02C9\x03\x02\x02\x02\x9A\u02CB\x03\x02\x02\x02\x9C\u02D9\x03" +
    "\x02\x02\x02\x9E\u02EB\x03\x02\x02\x02\xA0\u02F0\x03\x02\x02\x02\xA2\u02F6" +
    "\x03\x02\x02\x02\xA4\u02FB\x03\x02\x02\x02\xA6\u0307\x03\x02\x02\x02\xA8" +
    "\u0313\x03\x02\x02\x02\xAA\u031F\x03\x02\x02\x02\xAC\u032B\x03\x02\x02" +
    "\x02\xAE\u0332\x03\x02\x02\x02\xB0\u0339\x03\x02\x02\x02\xB2\u0340\x03" +
    "\x02\x02\x02\xB4\u0348\x03\x02\x02\x02\xB6\u034A\x03\x02\x02\x02\xB8\u034C" +
    "\x03\x02\x02\x02\xBA\u036E\x03\x02\x02\x02\xBC\u0390\x03\x02\x02\x02\xBE" +
    "\u0392\x03\x02\x02\x02\xC0\u039A\x03\x02\x02\x02\xC2\u03A2\x03\x02\x02" +
    "\x02\xC4\u03AA\x03\x02\x02\x02\xC6\u03B2\x03\x02\x02\x02\xC8\u03D0\x03" +
    "\x02\x02\x02\xCA\u03D2\x03\x02\x02\x02\xCC\u03F0\x03\x02\x02\x02\xCE\u03F2" +
    "\x03\x02\x02\x02\xD0\u03F4\x03\x02\x02\x02\xD2\u03F8\x03\x02\x02\x02\xD4" +
    "\u03FF\x03\x02\x02\x02\xD6\xD8\x05\x04\x03\x02\xD7\xD6\x03\x02\x02\x02" +
    "\xD8\xDB\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
    "\xDA\x03\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDC\xE3\x05\x06\x04\x02" +
    "\xDD\xDE\x05\x82B\x02\xDE\xDF\x05\x06\x04\x02\xDF\xE3\x03\x02\x02\x02" +
    "\xE0\xE3\x05\x80A\x02\xE1\xE3\x05V,\x02\xE2\xDC\x03\x02\x02\x02\xE2\xDD" +
    "\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE1\x03\x02\x02\x02\xE3\x05" +
    "\x03\x02\x02\x02\xE4\xE5\x05\b\x05\x02\xE5\xE6\x07\n\x02\x02\xE6\xFB\x03" +
    "\x02\x02\x02\xE7\xE8\x05\b\x05\x02\xE8\xE9\x07\x11\x02\x02\xE9\xEA\x07" +
    "\n\x02\x02\xEA\xFB\x03\x02\x02\x02\xEB\xEC\x05\b\x05\x02\xEC\xED\x07\x11" +
    "\x02\x02\xED\xEE\x05\n\x06\x02\xEE\xEF\x07\n\x02\x02\xEF\xFB\x03\x02\x02" +
    "\x02\xF0\xF1\x07\x11\x02\x02\xF1\xF2\x05\n\x06\x02\xF2\xF3\x07\n\x02\x02" +
    "\xF3\xFB\x03\x02\x02\x02\xF4\xF5\x07\x12\x02\x02\xF5\xF6\x05\n\x06\x02" +
    "\xF6\xF7\x07\n\x02\x02\xF7\xF8\x05\f\x07\x02\xF8\xFB\x03\x02\x02\x02\xF9" +
    "\xFB\x05X-\x02\xFA\xE4\x03\x02\x02\x02\xFA\xE7\x03\x02\x02\x02\xFA\xEB" +
    "\x03\x02\x02\x02\xFA\xF0\x03\x02\x02\x02\xFA\xF4\x03\x02\x02\x02\xFA\xF9" +
    "\x03\x02\x02\x02\xFB\x07\x03\x02\x02\x02\xFC\xFF\x05\x10\t\x02\xFD\xFF" +
    "\x05\x14\v\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\t\x03" +
    "\x02\x02\x02\u0100\u0101\x05\x12\n\x02\u0101\v\x03\x02\x02\x02\u0102\u0103" +
    "\x07\x1A\x02\x02\u0103\u0104\x05D#\x02\u0104\u0105\x07\x1B\x02\x02\u0105" +
    "\u010C\x03\x02\x02\x02\u0106\u0107\x07\x1A\x02\x02\u0107\u0108\x05D#\x02" +
    "\u0108\u0109\x05\x0E\b\x02\u0109\u010A\x07\x1B\x02\x02\u010A\u010C\x03" +
    "\x02\x02\x02\u010B\u0102\x03\x02\x02\x02\u010B\u0106\x03\x02\x02\x02\u010C" +
    "\r\x03\x02\x02\x02\u010D\u010E\x07\x10\x02\x02\u010E\u0117\x05D#\x02\u010F" +
    "\u0110\x07\x10\x02\x02\u0110\u0111\x05D#\x02\u0111\u0112\x07\f\x02\x02" +
    "\u0112\u0113\x052\x1A\x02\u0113\u0117\x03\x02\x02\x02\u0114\u0115\x07" +
    "\f\x02\x02\u0115\u0117\x052\x1A\x02\u0116\u010D\x03\x02\x02\x02\u0116" +
    "\u010F\x03\x02\x02\x02\u0116\u0114\x03\x02\x02\x02\u0117\x0F\x03\x02\x02" +
    "\x02\u0118\u0123\x05*\x16\x02\u0119\u011A\x05*\x16\x02\u011A\u011B\x07" +
    "\r\x02\x02\u011B\u011C\x05\x10\t\x02\u011C\u0123\x03\x02\x02\x02\u011D" +
    "\u0123\x05(\x15\x02\u011E\u011F\x05(\x15\x02\u011F\u0120\x07\r\x02\x02" +
    "\u0120\u0121\x05\x10\t\x02\u0121\u0123\x03\x02\x02\x02\u0122\u0118\x03" +
    "\x02\x02\x02\u0122\u0119\x03\x02\x02\x02\u0122\u011D\x03\x02\x02\x02\u0122" +
    "\u011E\x03\x02\x02\x02\u0123\x11\x03\x02\x02\x02\u0124\u012A\x05&\x14" +
    "\x02\u0125\u0126\x05&\x14\x02\u0126\u0127\x07\f\x02\x02\u0127\u0128\x05" +
    "\x12\n\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0124\x03\x02\x02\x02\u0129" +
    "\u0125\x03\x02\x02\x02\u012A\x13\x03\x02\x02\x02\u012B\u012C\x05\x16\f" +
    "\x02\u012C\u012D\x07\x1C\x02\x02\u012D\u012E\x05\x1A\x0E\x02\u012E\u012F" +
    "\x07\x1D\x02\x02\u012F\u0130\x05\x18\r\x02\u0130\u0140\x03\x02\x02\x02" +
    "\u0131\u0132\x05\x16\f\x02\u0132\u0133\x07\x1C\x02\x02\u0133\u0134\x05" +
    "\x1A\x0E\x02\u0134\u0135\x07\x1D\x02\x02\u0135\u0140\x03\x02\x02\x02\u0136" +
    "\u0137\x07\x1C\x02\x02\u0137\u0138\x05\x1A\x0E\x02\u0138\u0139\x07\x1D" +
    "\x02\x02\u0139\u0140\x03\x02\x02\x02\u013A\u013B\x07\x1C\x02\x02\u013B" +
    "\u013C\x05\x1A\x0E\x02\u013C\u013D\x07\x1D\x02\x02\u013D\u013E\x05\x18" +
    "\r\x02\u013E\u0140\x03\x02\x02\x02\u013F\u012B\x03\x02\x02\x02\u013F\u0131" +
    "\x03\x02\x02\x02\u013F\u0136\x03\x02\x02\x02\u013F\u013A\x03\x02\x02\x02" +
    "\u0140\x15\x03\x02\x02\x02\u0141\u0142\x05D#\x02\u0142\u0143\x05:\x1E" +
    "\x02\u0143\x17\x03\x02\x02\x02\u0144\u0145\x05:\x1E\x02\u0145\u0146\x05" +
    "D#\x02\u0146\x19\x03\x02\x02\x02\u0147\u0148\x05\x1C\x0F\x02\u0148\u0149" +
    "\x07\x0E\x02\x02\u0149\u014A\x05\x1A\x0E\x02\u014A\u014D\x03\x02\x02\x02" +
    "\u014B\u014D\x05\x1C\x0F\x02\u014C\u0147\x03\x02\x02\x02\u014C\u014B\x03" +
    "\x02\x02\x02\u014D\x1B\x03\x02\x02\x02\u014E\u0154\x05\x1E\x10\x02\u014F" +
    "\u0150\x05\x1E\x10\x02\u0150\u0151\x07\x0F\x02\x02\u0151\u0152\x05 \x11" +
    "\x02\u0152\u0154\x03\x02\x02\x02\u0153\u014E\x03\x02\x02\x02\u0153\u014F" +
    "\x03\x02\x02\x02\u0154\x1D\x03\x02\x02\x02\u0155\u0156\x05,\x17\x02\u0156" +
    "\x1F\x03\x02\x02\x02\u0157\u015D\x05$\x13\x02\u0158\u0159\x05\"\x12\x02" +
    "\u0159\u015A\x07\f\x02\x02\u015A\u015B\x05$\x13\x02\u015B\u015D\x03\x02" +
    "\x02\x02\u015C\u0157\x03\x02\x02\x02\u015C\u0158\x03\x02\x02\x02\u015D" +
    "!\x03\x02\x02\x02\u015E\u0164\x05$\x13\x02\u015F\u0160\x05$\x13\x02\u0160" +
    "\u0161\x07\f\x02\x02\u0161\u0162\x05\"\x12\x02\u0162\u0164\x03\x02\x02" +
    "\x02\u0163\u015E\x03\x02\x02\x02\u0163\u015F\x03\x02\x02\x02\u0164#\x03" +
    "\x02\x02\x02\u0165\u016D\x05*\x16\x02\u0166\u0167\x07\x04\x02\x02\u0167" +
    "\u016D\x05*\x16\x02\u0168\u016D\x056\x1C\x02\u0169\u016D\x05.\x18\x02" +
    "\u016A\u016B\x07\x04\x02\x02\u016B\u016D\x05.\x18\x02\u016C\u0165\x03" +
    "\x02\x02\x02\u016C\u0166\x03\x02\x02\x02\u016C\u0168\x03\x02\x02\x02\u016C" +
    "\u0169\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016D%\x03\x02\x02" +
    "\x02\u016E\u0173\x05$\x13\x02\u016F\u0173\x05r:\x02\u0170\u0171\x07\x04" +
    "\x02\x02\u0171\u0173\x05r:\x02\u0172\u016E\x03\x02\x02\x02\u0172\u016F" +
    "\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02\u0173\'\x03\x02\x02\x02\u0174" +
    "\u0175\x07\'\x02\x02\u0175\u0176\x05R*\x02\u0176\u0177\x05,\x17\x02\u0177" +
    ")\x03\x02\x02\x02\u0178\u017C\x05,\x17\x02\u0179\u017A\x07\x14\x02\x02" +
    "\u017A\u017C\x05,\x17\x02\u017B\u0178\x03\x02\x02\x02\u017B\u0179\x03" +
    "\x02\x02\x02\u017C+\x03\x02\x02\x02\u017D\u0188\x05T+\x02\u017E\u017F" +
    "\x05T+\x02\u017F\u0180\x07\x18\x02\x02\u0180\u0181\x052\x1A\x02\u0181" +
    "\u0182\x07\x19\x02\x02\u0182\u0188\x03\x02\x02\x02\u0183\u0184\x05T+\x02" +
    "\u0184\u0185\x07\x18\x02\x02\u0185\u0186\x07\x19\x02\x02\u0186\u0188\x03" +
    "\x02\x02\x02\u0187\u017D\x03\x02\x02\x02\u0187\u017E\x03\x02\x02\x02\u0187" +
    "\u0183\x03\x02\x02\x02\u0188-\x03\x02\x02\x02\u0189\u018A\x07&\x02\x02" +
    "\u018A\u018B\x05T+\x02\u018B\u018C\x07\x18\x02\x02\u018C\u018D\x052\x1A" +
    "\x02\u018D\u018E\x050\x19\x02\u018E\u018F\x052\x1A\x02\u018F\u0190\x07" +
    "\x19\x02\x02\u0190\u01A5\x03\x02\x02\x02\u0191\u0192\x07&\x02\x02\u0192" +
    "\u0193\x05T+\x02\u0193\u0194\x07\x18\x02\x02\u0194\u0195\x050\x19\x02" +
    "\u0195\u0196\x052\x1A\x02\u0196\u0197\x07\x19\x02\x02\u0197\u01A5\x03" +
    "\x02\x02\x02\u0198\u0199\x07&\x02\x02\u0199\u019A\x05T+\x02\u019A\u019B" +
    "\x07\x18\x02\x02\u019B\u019C\x052\x1A\x02\u019C\u019D\x050\x19\x02\u019D" +
    "\u019E\x07\x19\x02\x02\u019E\u01A5\x03\x02\x02\x02\u019F\u01A0\x07&\x02" +
    "\x02\u01A0\u01A1\x05T+\x02\u01A1\u01A2\x07\x18\x02\x02\u01A2\u01A3\x07" +
    "\x19\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u0189\x03\x02\x02\x02\u01A4" +
    "\u0191\x03\x02\x02\x02\u01A4\u0198\x03\x02\x02\x02\u01A4\u019F\x03\x02" +
    "\x02\x02\u01A5/\x03\x02\x02\x02\u01A6\u01A7\x07\x0E\x02\x02\u01A71\x03" +
    "\x02\x02\x02\u01A8\u01AE\x05D#\x02\u01A9\u01AA\x05D#\x02\u01AA\u01AB\x07" +
    "\f\x02\x02\u01AB\u01AC\x052\x1A\x02\u01AC\u01AE\x03\x02\x02\x02\u01AD" +
    "\u01A8\x03\x02\x02\x02\u01AD\u01A9\x03\x02\x02\x02\u01AE3\x03\x02\x02" +
    "\x02\u01AF\u01B5\x05J&\x02\u01B0\u01B1\x05J&\x02\u01B1\u01B2\x07\f\x02" +
    "\x02\u01B2\u01B3\x054\x1B\x02\u01B3\u01B5\x03\x02\x02\x02\u01B4\u01AF" +
    "\x03\x02\x02\x02\u01B4\u01B0\x03\x02\x02\x02\u01B55\x03\x02\x02\x02\u01B6" +
    "\u01B7\x05D#\x02\u01B7\u01B8\x05:\x1E\x02\u01B8\u01B9\x05D#\x02\u01B9" +
    "7\x03\x02\x02\x02\u01BA\u01BB\t\x02\x02\x02\u01BB9\x03\x02\x02\x02\u01BC" +
    "\u01C1\x058\x1D\x02\u01BD\u01C1\x058\x1D\x02\u01BE\u01C1\x05t;\x02\u01BF" +
    "\u01C1\x05v<\x02\u01C0\u01BC\x03\x02\x02\x02\u01C0\u01BD\x03\x02\x02\x02" +
    "\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1;\x03\x02" +
    "\x02\x02\u01C2\u01C3\t\x03\x02\x02\u01C3=\x03\x02\x02\x02\u01C4\u01C5" +
    "\t\x04\x02\x02\u01C5?\x03\x02\x02\x02\u01C6\u01D2\x07\x1F\x02\x02\u01C7" +
    "\u01C8\x05T+\x02\u01C8\u01C9\x07\x18\x02\x02\u01C9\u01CA\x052\x1A\x02" +
    "\u01CA\u01CB\x07\x19\x02\x02\u01CB\u01D2\x03\x02\x02\x02\u01CC\u01CD\x07" +
    "\b\x02\x02\u01CD\u01CE\x07\v\x02\x02\u01CE\u01D2\x07\b\x02\x02\u01CF\u01D0" +
    "\x07\x14\x02\x02\u01D0\u01D2\x05D#\x02\u01D1\u01C6\x03\x02\x02\x02\u01D1" +
    "\u01C7\x03\x02\x02\x02\u01D1\u01CC\x03\x02\x02\x02\u01D1\u01CF\x03\x02" +
    "\x02\x02\u01D2A\x03\x02\x02\x02\u01D3\u01DA\x05T+\x02\u01D4\u01DA\x07" +
    "\b\x02\x02\u01D5\u01D6\x07\x18\x02\x02\u01D6\u01D7\x05D#\x02\u01D7\u01D8" +
    "\x07\x19\x02\x02\u01D8\u01DA\x03\x02\x02\x02\u01D9\u01D3\x03\x02\x02\x02" +
    "\u01D9\u01D4\x03\x02\x02\x02\u01D9\u01D5\x03\x02\x02\x02\u01DAC\x03\x02" +
    "\x02\x02\u01DB\u01DF\x05@!\x02\u01DC\u01DF\x05T+\x02\u01DD\u01DF\x05F" +
    "$\x02\u01DE\u01DB\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DD" +
    "\x03\x02\x02\x02\u01DFE\x03\x02\x02\x02\u01E0\u01E6\x05H%\x02\u01E1\u01E2" +
    "\x05H%\x02\u01E2\u01E3\x05<\x1F\x02\u01E3\u01E4\x05F$\x02\u01E4\u01E6" +
    "\x03\x02\x02\x02\u01E5\u01E0\x03\x02\x02\x02\u01E5\u01E1\x03\x02\x02\x02" +
    "\u01E6G\x03\x02\x02\x02\u01E7\u01ED\x05B\"\x02\u01E8\u01E9\x05B\"\x02" +
    "\u01E9\u01EA\x05> \x02\u01EA\u01EB\x05H%\x02\u01EB\u01ED\x03\x02\x02\x02" +
    "\u01EC\u01E7\x03\x02\x02\x02\u01EC\u01E8\x03\x02\x02\x02\u01EDI\x03";
ASPCore2Parser._serializedATNSegment1 = "\x02\x02\x02\u01EE\u01F2\x05L\'\x02\u01EF\u01F2\x05N(\x02\u01F0\u01F2" +
    "\x05P)\x02\u01F1\u01EE\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1" +
    "\u01F0\x03\x02\x02\x02\u01F2K\x03\x02\x02\x02\u01F3\u01F9\x07\x05\x02" +
    "\x02\u01F4\u01F9\x07\x07\x02\x02\u01F5\u01F9\x07\b\x02\x02\u01F6\u01F7" +
    "\x07\x14\x02\x02\u01F7\u01F9\x07\b\x02\x02\u01F8\u01F3\x03\x02\x02\x02" +
    "\u01F8\u01F4\x03\x02\x02\x02\u01F8\u01F5\x03\x02\x02\x02\u01F8\u01F6\x03" +
    "\x02\x02\x02\u01F9M\x03\x02\x02\x02\u01FA\u01FB\t\x05\x02\x02\u01FBO\x03" +
    "\x02\x02\x02\u01FC\u01FD\x05T+\x02\u01FD\u01FE\x07\x18\x02\x02\u01FE\u01FF" +
    "\x052\x1A\x02\u01FF\u0200\x07\x19\x02\x02\u0200Q\x03\x02\x02\x02\u0201" +
    "\u0206\x07\x06\x02\x02\u0202\u0203\x07\x06\x02\x02\u0203\u0204\x07\f\x02" +
    "\x02\u0204\u0206\x05R*\x02\u0205\u0201\x03\x02\x02\x02\u0205\u0202\x03" +
    "\x02\x02\x02\u0206S\x03\x02\x02\x02\u0207\u0208\t\x06\x02\x02\u0208U\x03" +
    "\x02\x02\x02\u0209\u020A\x07/\x02\x02\u020A\u020B\x070\x02\x02\u020BW" +
    "\x03\x02\x02\x02\u020C\u020D\x05,\x17\x02\u020D\u020E\x07\x1E\x02\x02" +
    "\u020EY\x03\x02\x02\x02\u020F\u0210\x07(\x02\x02\u0210\u0211\x07\x03\x02" +
    "\x02\u0211\u0212\x07)\x02\x02\u0212[\x03\x02\x02\x02\u0213\u0214\x05D" +
    "#\x02\u0214\u0215\x058\x1D\x02\u0215]\x03\x02\x02\x02\u0216\u0217\x05" +
    "8\x1D\x02\u0217\u0218\x05D#\x02\u0218_\x03\x02\x02\x02\u0219\u021A\x05" +
    "\\/\x02\u021A\u021B\x05x=\x02\u021B\u0220\x03\x02\x02\x02\u021C\u021D" +
    "\x05x=\x02\u021D\u021E\x05^0\x02\u021E\u0220\x03\x02\x02\x02\u021F\u0219" +
    "\x03\x02\x02\x02\u021F\u021C\x03\x02\x02\x02\u0220a\x03\x02\x02\x02\u0221" +
    "\u0222\x05D#\x02\u0222\u0223\x05t;\x02\u0223c\x03\x02\x02\x02\u0224\u0225" +
    "\x05b2\x02\u0225\u0226\x05x=\x02\u0226e\x03\x02\x02\x02\u0227\u022A\x05" +
    "d3\x02\u0228\u022A\x05j6\x02\u0229\u0227\x03\x02\x02\x02\u0229\u0228\x03" +
    "\x02\x02\x02\u022Ag\x03\x02\x02\x02\u022B\u022C\x05D#\x02\u022C\u022D" +
    "\x05v<\x02\u022Di\x03\x02\x02\x02\u022E\u022F\x05h5\x02\u022F\u0230\x05" +
    "x=\x02\u0230k\x03\x02\x02\x02\u0231\u0232\x05t;\x02\u0232\u0233\x05D#" +
    "\x02\u0233m\x03\x02\x02\x02\u0234\u0235\x05v<\x02\u0235\u0236\x05D#\x02" +
    "\u0236o\x03\x02\x02\x02\u0237\u0238\x05x=\x02\u0238\u0239\x05l7\x02\u0239" +
    "\u023E\x03\x02\x02\x02\u023A\u023B\x05x=\x02\u023B\u023C\x05n8\x02\u023C" +
    "\u023E\x03\x02\x02\x02\u023D\u0237\x03\x02\x02\x02\u023D\u023A\x03\x02" +
    "\x02\x02\u023Eq\x03\x02\x02\x02\u023F\u0249\x05f4\x02\u0240\u0249\x05" +
    "p9\x02\u0241\u0249\x05`1\x02\u0242\u0243\x05d3\x02\u0243\u0244\x05l7\x02" +
    "\u0244\u0249\x03\x02\x02\x02\u0245\u0246\x05j6\x02\u0246\u0247\x05n8\x02" +
    "\u0247\u0249\x03\x02\x02\x02\u0248\u023F\x03\x02\x02\x02\u0248\u0240\x03" +
    "\x02\x02\x02\u0248\u0241\x03\x02\x02\x02\u0248\u0242\x03\x02\x02\x02\u0248" +
    "\u0245\x03\x02\x02\x02\u0249s\x03\x02\x02\x02\u024A\u024B\t\x07\x02\x02" +
    "\u024Bu\x03\x02\x02\x02\u024C\u024D\t\b\x02\x02\u024Dw\x03\x02\x02\x02" +
    "\u024E\u024F\x05~@\x02\u024F\u0250\x07\x1C\x02\x02\u0250\u0251\x05z>\x02" +
    "\u0251\u0252\x07\x1D\x02\x02\u0252\u0258\x03\x02\x02\x02\u0253\u0254\x05" +
    "~@\x02\u0254\u0255\x07\x1C\x02\x02\u0255\u0256\x07\x1D\x02\x02\u0256\u0258" +
    "\x03\x02\x02\x02\u0257\u024E\x03\x02\x02\x02\u0257\u0253\x03\x02\x02\x02" +
    "\u0258y\x03\x02\x02\x02\u0259\u025A\x05|?\x02\u025A\u025B\x07\x0E\x02" +
    "\x02\u025B\u025C\x05z>\x02\u025C\u025F\x03\x02\x02\x02\u025D\u025F\x05" +
    "|?\x02\u025E\u0259\x03\x02\x02\x02\u025E\u025D\x03\x02\x02\x02\u025F{" +
    "\x03\x02\x02\x02\u0260\u0261\x054\x1B\x02\u0261\u0262\x07\x0F\x02\x02" +
    "\u0262\u0263\x05\"\x12\x02\u0263}\x03\x02\x02\x02\u0264\u0265\t\t\x02" +
    "\x02\u0265\x7F\x03\x02\x02\x02\u0266\u026D\x05\x8CG\x02\u0267\u026D\x05" +
    "\x9CO\x02\u0268\u026D\x05\xBC_\x02\u0269\u026D\x05\x8EH\x02\u026A\u026D" +
    "\x05\xCCg\x02\u026B\u026D\x05\xC8e\x02\u026C\u0266\x03\x02\x02\x02\u026C" +
    "\u0267\x03\x02\x02\x02\u026C\u0268\x03\x02\x02\x02\u026C\u0269\x03\x02" +
    "\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C\u026B\x03\x02\x02\x02\u026D" +
    "\x81\x03\x02\x02\x02\u026E\u0273\x05\x84C\x02\u026F\u0270\x05\x84C\x02" +
    "\u0270\u0271\x05\x82B\x02\u0271\u0273\x03\x02\x02\x02\u0272\u026E\x03" +
    "\x02\x02\x02\u0272\u026F\x03\x02\x02\x02\u0273\x83\x03\x02\x02\x02\u0274" +
    "\u027E\x05\x8AF\x02\u0275\u027E\x05\x9AN\x02\u0276\u027E\x05\xBA^\x02" +
    "\u0277\u027E\x05\xBE`\x02\u0278\u027E\x05\xC2b\x02\u0279\u027E\x05\xC4" +
    "c\x02\u027A\u027E\x05\xC6d\x02\u027B\u027E\x05\x86D\x02\u027C\u027E\x05" +
    "\x88E\x02\u027D\u0274\x03\x02\x02\x02\u027D\u0275\x03\x02\x02\x02\u027D" +
    "\u0276\x03\x02\x02\x02\u027D\u0277\x03\x02\x02\x02\u027D\u0278\x03\x02" +
    "\x02\x02\u027D\u0279\x03\x02\x02\x02\u027D\u027A\x03\x02\x02\x02\u027D" +
    "\u027B\x03\x02\x02\x02\u027D\u027C\x03\x02\x02\x02\u027E\x85\x03\x02\x02" +
    "\x02\u027F\u0280\x07J\x02\x02\u0280\u0281\x07\x18\x02\x02\u0281\u0282" +
    "\x07\x19\x02\x02\u0282\u0286\x07\n\x02\x02\u0283\u0284\x07J\x02\x02\u0284" +
    "\u0286\x07\n\x02\x02\u0285\u027F\x03\x02\x02\x02\u0285\u0283\x03\x02\x02" +
    "\x02\u0286\x87\x03\x02\x02\x02\u0287\u0288\x07K\x02\x02\u0288\u0289\x07" +
    "\x18\x02\x02\u0289\u028A\x07\x19\x02\x02\u028A\u028E\x07\n\x02\x02\u028B" +
    "\u028C\x07K\x02\x02\u028C\u028E\x07\n\x02\x02\u028D\u0287\x03\x02\x02" +
    "\x02\u028D\u028B\x03\x02\x02\x02\u028E\x89\x03\x02\x02\x02\u028F\u0290" +
    "\x075\x02\x02\u0290\u0291\x07\x18\x02\x02\u0291\u0292\x076\x02\x02\u0292" +
    "\u0293\x07 \x02\x02\u0293\u0294\x05\x96L\x02\u0294\u0295\x07\x19\x02\x02" +
    "\u0295\u0296\x07\n\x02\x02\u0296\u029E\x03\x02\x02\x02\u0297\u0298\x07" +
    "5\x02\x02\u0298\u0299\x07\x18\x02\x02\u0299\u029A\x05\x96L\x02\u029A\u029B" +
    "\x07\x19\x02\x02\u029B\u029C\x07\n\x02\x02\u029C\u029E\x03\x02\x02\x02" +
    "\u029D\u028F\x03\x02\x02\x02\u029D\u0297\x03\x02\x02\x02\u029E\x8B\x03" +
    "\x02\x02\x02\u029F\u02A0\x07F\x02\x02\u02A0\u02A1\x07\x18\x02\x02\u02A1" +
    "\u02A2\x076\x02\x02\u02A2\u02A3\x07 \x02\x02\u02A3\u02A4\x05\x98M\x02" +
    "\u02A4\u02A5\x07\x19\x02\x02\u02A5\u02A6\x07\n\x02\x02\u02A6\u02AE\x03" +
    "\x02\x02\x02\u02A7\u02A8\x07F\x02\x02\u02A8\u02A9\x07\x18\x02\x02\u02A9" +
    "\u02AA\x05\x98M\x02\u02AA\u02AB\x07\x19\x02\x02\u02AB\u02AC\x07\n\x02" +
    "\x02\u02AC\u02AE\x03\x02\x02\x02\u02AD\u029F\x03\x02\x02\x02\u02AD\u02A7" +
    "\x03\x02\x02\x02\u02AE\x8D\x03\x02\x02\x02\u02AF\u02B0\x07I\x02\x02\u02B0" +
    "\u02B1\x07\x18\x02\x02\u02B1\u02B2\x07=\x02\x02\u02B2\u02B3\x07 \x02\x02" +
    "\u02B3\u02B4\x05\x90I\x02\u02B4\u02B5\x07\f\x02\x02\u02B5\u02B6\x07>\x02" +
    "\x02\u02B6\u02B7\x07 \x02\x02\u02B7\u02B8\x05\x92J\x02\u02B8\u02B9\x07" +
    "\x19\x02\x02\u02B9\u02BA\x07\n\x02\x02\u02BA\x8F\x03\x02\x02\x02\u02BB" +
    "\u02BC\x07&\x02\x02\u02BC\u02BD\x05T+\x02\u02BD\x91\x03\x02\x02\x02\u02BE" +
    "\u02C4\x05\x94K\x02\u02BF\u02C0\x05\x94K\x02\u02C0\u02C1\x07\f\x02\x02" +
    "\u02C1\u02C2\x05\x92J\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02BE\x03" +
    "\x02\x02\x02\u02C3\u02BF\x03\x02\x02\x02\u02C4\x93\x03\x02\x02\x02\u02C5" +
    "\u02C6\t\n\x02\x02\u02C6\x95\x03\x02\x02\x02\u02C7\u02C8\x07\b\x02\x02" +
    "\u02C8\x97\x03\x02\x02\x02\u02C9\u02CA\x07\b\x02\x02\u02CA\x99\x03\x02" +
    "\x02\x02\u02CB\u02CC\x077\x02\x02\u02CC\u02CD\x07\x18\x02\x02\u02CD\u02CE" +
    "\x078\x02\x02\u02CE\u02CF\x07 \x02\x02\u02CF\u02D0\x05\xA0Q\x02\u02D0" +
    "\u02D1\x07\f\x02\x02\u02D1\u02D2\x079\x02\x02\u02D2\u02D3\x07 \x02\x02" +
    "\u02D3\u02D4\x07\x1C\x02\x02\u02D4\u02D5\x05\x9EP\x02\u02D5\u02D6\x07" +
    "\x1D\x02\x02\u02D6\u02D7\x07\x19\x02\x02\u02D7\u02D8\x07\n\x02\x02\u02D8" +
    "\x9B\x03\x02\x02\x02\u02D9\u02DA\x07G\x02\x02\u02DA\u02DB\x07\x18\x02" +
    "\x02\u02DB\u02DC\x078\x02\x02\u02DC\u02DD\x07 \x02\x02\u02DD\u02DE\x05" +
    "\xA4S\x02\u02DE\u02DF\x07\f\x02\x02\u02DF\u02E0\x079\x02\x02\u02E0\u02E1" +
    "\x07 \x02\x02\u02E1\u02E2\x07\x1C\x02\x02\u02E2\u02E3\x05\xA2R\x02\u02E3" +
    "\u02E4\x07\x1D\x02\x02\u02E4\u02E5\x07\x19\x02\x02\u02E5\u02E6\x07\n\x02" +
    "\x02\u02E6\x9D\x03\x02\x02\x02\u02E7\u02EC\x07\b\x02\x02\u02E8\u02E9\x07" +
    "\b\x02\x02\u02E9\u02EA\x07\f\x02\x02\u02EA\u02EC\x05\x9EP\x02\u02EB\u02E7" +
    "\x03\x02\x02\x02\u02EB\u02E8\x03\x02\x02\x02\u02EC\x9F\x03\x02\x02\x02" +
    "\u02ED\u02F1\x05*\x16\x02\u02EE\u02EF\x07\x04\x02\x02\u02EF\u02F1\x05" +
    "*\x16\x02\u02F0\u02ED\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1" +
    "\xA1\x03\x02\x02\x02\u02F2\u02F7\x07\b\x02\x02\u02F3\u02F4\x07\b\x02\x02" +
    "\u02F4\u02F5\x07\f\x02\x02\u02F5\u02F7\x05\xA2R\x02\u02F6\u02F2\x03\x02" +
    "\x02\x02\u02F6\u02F3\x03\x02\x02\x02\u02F7\xA3\x03\x02\x02\x02\u02F8\u02FC" +
    "\x05*\x16\x02\u02F9\u02FA\x07\x04\x02\x02\u02FA\u02FC\x05*\x16\x02\u02FB" +
    "\u02F8\x03\x02\x02\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC\xA5\x03\x02\x02" +
    "\x02\u02FD\u0308\x05*\x16\x02\u02FE\u02FF\x07\x04\x02\x02\u02FF\u0308" +
    "\x05*\x16\x02\u0300\u0308\x056\x1C\x02\u0301\u0308\x05r:\x02\u0302\u0303" +
    "\x07\x04\x02\x02\u0303\u0308\x05r:\x02\u0304\u0308\x05.\x18\x02\u0305" +
    "\u0306\x07\x04\x02\x02\u0306\u0308\x05.\x18\x02\u0307\u02FD\x03\x02\x02" +
    "\x02\u0307\u02FE\x03\x02\x02\x02\u0307\u0300\x03\x02\x02\x02\u0307\u0301" +
    "\x03\x02\x02\x02\u0307\u0302\x03\x02\x02\x02\u0307\u0304\x03\x02\x02\x02" +
    "\u0307\u0305\x03\x02\x02\x02\u0308\xA7\x03\x02\x02\x02\u0309\u0314\x05" +
    "*\x16\x02\u030A\u030B\x07\x04\x02\x02\u030B\u0314\x05*\x16\x02\u030C\u0314" +
    "\x056\x1C\x02\u030D\u0314\x05r:\x02\u030E\u030F\x07\x04\x02\x02\u030F" +
    "\u0314\x05r:\x02\u0310\u0314\x05.\x18\x02\u0311\u0312\x07\x04\x02\x02" +
    "\u0312\u0314\x05.\x18\x02\u0313\u0309\x03\x02\x02\x02\u0313\u030A\x03" +
    "\x02\x02\x02\u0313\u030C\x03\x02\x02\x02\u0313\u030D\x03\x02\x02\x02\u0313" +
    "\u030E\x03\x02\x02\x02\u0313\u0310\x03\x02\x02\x02\u0313\u0311\x03\x02" +
    "\x02\x02\u0314\xA9\x03\x02\x02\x02\u0315\u0320\x05*\x16\x02\u0316\u0317" +
    "\x07\x04\x02\x02\u0317\u0320\x05*\x16\x02\u0318\u0320\x056\x1C\x02\u0319" +
    "\u0320\x05r:\x02\u031A\u031B\x07\x04\x02\x02\u031B\u0320\x05r:\x02\u031C" +
    "\u0320\x05.\x18\x02\u031D\u031E\x07\x04\x02\x02\u031E\u0320\x05.\x18\x02" +
    "\u031F\u0315\x03\x02\x02\x02\u031F\u0316\x03\x02\x02\x02\u031F\u0318\x03" +
    "\x02\x02\x02\u031F\u0319\x03\x02\x02\x02\u031F\u031A\x03\x02\x02\x02\u031F" +
    "\u031C\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02\u0320\xAB\x03\x02\x02" +
    "\x02\u0321\u032C\x05*\x16\x02\u0322\u0323\x07\x04\x02\x02\u0323\u032C" +
    "\x05*\x16\x02\u0324\u032C\x056\x1C\x02\u0325\u032C\x05r:\x02\u0326\u0327" +
    "\x07\x04\x02\x02\u0327\u032C\x05r:\x02\u0328\u032C\x05.\x18\x02\u0329" +
    "\u032A\x07\x04\x02\x02\u032A\u032C\x05.\x18\x02\u032B\u0321\x03\x02\x02" +
    "\x02\u032B\u0322\x03\x02\x02\x02\u032B\u0324\x03\x02\x02\x02\u032B\u0325" +
    "\x03\x02\x02\x02\u032B\u0326\x03\x02\x02\x02\u032B\u0328\x03\x02\x02\x02" +
    "\u032B\u0329\x03\x02\x02\x02\u032C\xAD\x03\x02\x02\x02\u032D\u0333\x05" +
    "\xA6T\x02\u032E\u032F\x05\xA6T\x02\u032F\u0330\x07\f\x02\x02\u0330\u0331" +
    "\x05\xAEX\x02\u0331\u0333\x03\x02\x02\x02\u0332\u032D\x03\x02\x02\x02" +
    "\u0332\u032E\x03\x02\x02\x02\u0333\xAF\x03\x02\x02\x02\u0334\u033A\x05" +
    "\xA8U\x02\u0335\u0336\x05\xA8U\x02\u0336\u0337\x07\f\x02\x02\u0337\u0338" +
    "\x05\xB0Y\x02\u0338\u033A\x03\x02\x02\x02\u0339\u0334\x03\x02\x02\x02" +
    "\u0339\u0335\x03\x02\x02\x02\u033A\xB1\x03\x02\x02\x02\u033B\u0341\x05" +
    "\xAAV\x02\u033C\u033D\x05\xAAV\x02\u033D\u033E\x07\f\x02\x02\u033E\u033F" +
    "\x05\xB2Z\x02\u033F\u0341\x03\x02\x02\x02\u0340\u033B\x03\x02\x02\x02" +
    "\u0340\u033C\x03\x02\x02\x02\u0341\xB3\x03\x02\x02\x02\u0342\u0349\x05" +
    "\xACW\x02\u0343\u0344\x05\xACW\x02\u0344\u0345\x07\f\x02\x02\u0345\u0346" +
    "\x05\xB4[\x02\u0346\u0347\x05\xB4[\x02\u0347\u0349\x03\x02\x02\x02\u0348" +
    "\u0342\x03\x02\x02\x02\u0348\u0343\x03\x02\x02\x02\u0349\xB5\x03\x02\x02" +
    "\x02\u034A\u034B\x07:\x02\x02\u034B\xB7\x03\x02\x02\x02\u034C\u034D\x07" +
    "H\x02\x02\u034D\xB9\x03\x02\x02\x02\u034E\u034F\x05\xB6\\\x02\u034F\u0350" +
    "\x07\x18\x02\x02\u0350\u0351\x07;\x02\x02\u0351\u0352\x07 \x02\x02\u0352" +
    "\u0353\x07\x1C\x02\x02\u0353\u0354\x05\xAEX\x02\u0354\u0355\x07\x1D\x02" +
    "\x02\u0355\u0356\x07\f\x02\x02\u0356\u0357\x07<\x02\x02\u0357\u0358\x07" +
    " \x02\x02\u0358\u0359\x07\x1C\x02\x02\u0359\u035A\x05\xB2Z\x02\u035A\u035B" +
    "\x07\x1D\x02\x02\u035B\u035C\x07\x19\x02\x02\u035C\u035D\x07\n\x02\x02" +
    "\u035D\u036F\x03\x02\x02\x02\u035E\u035F\x05\xB6\\\x02\u035F\u0360\x07" +
    "\x18\x02\x02\u0360\u0361\x07<\x02\x02\u0361\u0362\x07 \x02\x02\u0362\u0363" +
    "\x07\x1C\x02\x02\u0363\u0364\x05\xB2Z\x02\u0364\u0365\x07\x1D\x02\x02" +
    "\u0365\u0366\x07\f\x02\x02\u0366\u0367\x07;\x02\x02\u0367\u0368\x07 \x02" +
    "\x02\u0368\u0369\x07\x1C\x02\x02\u0369\u036A\x05\xAEX\x02\u036A\u036B" +
    "\x07\x1D\x02\x02\u036B\u036C\x07\x19\x02\x02\u036C\u036D\x07\n\x02\x02" +
    "\u036D\u036F\x03\x02\x02\x02\u036E\u034E\x03\x02\x02\x02\u036E\u035E\x03" +
    "\x02\x02\x02\u036F\xBB\x03\x02\x02\x02\u0370\u0371\x05\xB8]\x02\u0371" +
    "\u0372\x07\x18\x02\x02\u0372\u0373\x07;\x02\x02\u0373\u0374\x07 \x02\x02" +
    "\u0374\u0375\x07\x1C\x02\x02\u0375\u0376\x05\xB0Y\x02\u0376\u0377\x07" +
    "\x1D\x02\x02\u0377\u0378\x07\f\x02\x02\u0378\u0379\x07<\x02\x02\u0379" +
    "\u037A\x07 \x02\x02\u037A\u037B\x07\x1C\x02\x02\u037B\u037C\x05\xB4[\x02" +
    "\u037C\u037D\x07\x1D\x02\x02\u037D\u037E\x07\x19\x02\x02\u037E\u037F\x07" +
    "\n\x02\x02\u037F\u0391\x03\x02\x02\x02\u0380\u0381\x05\xB8]\x02\u0381" +
    "\u0382\x07\x18\x02\x02\u0382\u0383\x07<\x02\x02\u0383\u0384\x07 \x02\x02" +
    "\u0384\u0385\x07\x1C\x02\x02\u0385\u0386\x05\xB4[\x02\u0386\u0387\x07" +
    "\x1D\x02\x02\u0387\u0388\x07\f\x02\x02\u0388\u0389\x07;\x02\x02\u0389" +
    "\u038A\x07 \x02\x02\u038A\u038B\x07\x1C\x02\x02\u038B\u038C\x05\xB0Y\x02" +
    "\u038C\u038D\x07\x1D\x02\x02\u038D\u038E\x07\x19\x02\x02\u038E\u038F\x07" +
    "\n\x02\x02\u038F\u0391\x03\x02\x02\x02\u0390\u0370\x03\x02\x02\x02\u0390" +
    "\u0380\x03\x02\x02\x02\u0391\xBD\x03\x02\x02\x02\u0392\u0393\x073\x02" +
    "\x02\u0393\u0394\x07\x18\x02\x02\u0394\u0395\x076\x02\x02\u0395\u0396" +
    "\x07 \x02\x02\u0396\u0397\x05\xC0a\x02\u0397\u0398\x07\x19\x02\x02\u0398" +
    "\u0399\x07\n\x02\x02\u0399\xBF\x03\x02\x02\x02\u039A\u039B\x07\b\x02\x02" +
    "\u039B\xC1\x03\x02\x02\x02\u039C\u039D\x074\x02\x02\u039D\u039E\x07\x18" +
    "\x02\x02\u039E\u039F\x07\x19\x02\x02\u039F\u03A3\x07\n\x02\x02\u03A0\u03A1" +
    "\x074\x02\x02\u03A1\u03A3\x07\n\x02\x02\u03A2\u039C\x03\x02\x02\x02\u03A2" +
    "\u03A0\x03\x02\x02\x02\u03A3\xC3\x03\x02\x02\x02\u03A4\u03A5\x071\x02" +
    "\x02\u03A5\u03A6\x07\x18\x02\x02\u03A6\u03A7\x07\x19\x02\x02\u03A7\u03AB" +
    "\x07\n\x02\x02\u03A8\u03A9\x071\x02\x02\u03A9\u03AB\x07\n\x02\x02\u03AA" +
    "\u03A4\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB\xC5\x03\x02\x02" +
    "\x02\u03AC\u03AD\x072\x02\x02\u03AD\u03AE\x07\x18\x02\x02\u03AE\u03AF" +
    "\x07\x19\x02\x02\u03AF\u03B3\x07\n\x02\x02\u03B0\u03B1\x072\x02\x02\u03B1" +
    "\u03B3\x07\n\x02\x02\u03B2\u03AC\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02" +
    "\x02\u03B3\xC7\x03\x02\x02\x02\u03B4\u03B5\x05\xCAf\x02\u03B5\u03B6\x07" +
    "\x18\x02\x02\u03B6\u03B7\x07M\x02\x02\u03B7\u03B8\x07 \x02\x02\u03B8\u03B9" +
    "\x05\xD0i\x02\u03B9\u03BA\x07\f\x02\x02\u03BA\u03BB\x07N\x02\x02\u03BB" +
    "\u03BC\x07 \x02\x02\u03BC\u03BD\x07\x1C\x02\x02\u03BD\u03BE\x05\xD4k\x02" +
    "\u03BE\u03BF\x07\x1D\x02\x02\u03BF\u03C0\x07\x19\x02\x02\u03C0\u03C1\x07" +
    "\n\x02\x02\u03C1\u03D1\x03\x02\x02\x02\u03C2\u03C3\x05\xCAf\x02\u03C3" +
    "\u03C4\x07\x18\x02\x02\u03C4\u03C5\x07N\x02\x02\u03C5\u03C6\x07 \x02\x02" +
    "\u03C6\u03C7\x07\x1C\x02\x02\u03C7\u03C8\x05\xD4k\x02\u03C8\u03C9\x07" +
    "\x1D\x02\x02\u03C9\u03CA\x07\f\x02\x02\u03CA\u03CB\x07M\x02\x02\u03CB" +
    "\u03CC\x07 \x02\x02\u03CC\u03CD\x05\xD0i\x02\u03CD\u03CE\x07\x19\x02\x02" +
    "\u03CE\u03CF\x07\n\x02\x02\u03CF\u03D1\x03\x02\x02\x02\u03D0\u03B4\x03" +
    "\x02\x02\x02\u03D0\u03C2\x03\x02\x02\x02\u03D1\xC9\x03\x02\x02\x02\u03D2" +
    "\u03D3\x07.\x02\x02\u03D3\xCB\x03\x02\x02\x02\u03D4\u03D5\x05\xCEh\x02" +
    "\u03D5\u03D6\x07\x18\x02\x02\u03D6\u03D7\x07M\x02\x02\u03D7\u03D8\x07" +
    " \x02\x02\u03D8\u03D9\x05\xD0i\x02\u03D9\u03DA\x07\f\x02\x02\u03DA\u03DB" +
    "\x07N\x02\x02\u03DB\u03DC\x07 \x02\x02\u03DC\u03DD\x07\x1C\x02\x02\u03DD" +
    "\u03DE\x05\xD4k\x02\u03DE\u03DF\x07\x1D\x02\x02\u03DF\u03E0\x07\x19\x02" +
    "\x02\u03E0\u03E1\x07\n\x02\x02\u03E1\u03F1\x03\x02\x02\x02\u03E2\u03E3" +
    "\x05\xCEh\x02\u03E3\u03E4\x07\x18\x02\x02\u03E4\u03E5\x07N\x02\x02\u03E5" +
    "\u03E6\x07 \x02\x02\u03E6\u03E7\x07\x1C\x02\x02\u03E7\u03E8\x05\xD4k\x02" +
    "\u03E8\u03E9\x07\x1D\x02\x02\u03E9\u03EA\x07\f\x02\x02\u03EA\u03EB\x07" +
    "M\x02\x02\u03EB\u03EC\x07 \x02\x02\u03EC\u03ED\x05\xD0i\x02\u03ED\u03EE" +
    "\x07\x19\x02\x02\u03EE\u03EF\x07\n\x02\x02\u03EF\u03F1\x03\x02\x02\x02" +
    "\u03F0\u03D4\x03\x02\x02\x02\u03F0\u03E2\x03\x02\x02\x02\u03F1\xCD\x03" +
    "\x02\x02\x02\u03F2\u03F3\x07L\x02\x02\u03F3\xCF\x03\x02\x02\x02\u03F4" +
    "\u03F5\x07\x07\x02\x02\u03F5\xD1\x03\x02\x02\x02\u03F6\u03F9\x05|?\x02" +
    "\u03F7\u03F9\x05*\x16\x02\u03F8\u03F6\x03\x02\x02\x02\u03F8\u03F7\x03" +
    "\x02\x02\x02\u03F9\xD3\x03\x02\x02\x02\u03FA\u0400\x05\xD2j\x02\u03FB" +
    "\u03FC\x05\xD2j\x02\u03FC\u03FD\x07\x0E\x02\x02\u03FD\u03FE\x05\xD4k\x02" +
    "\u03FE\u0400\x03\x02\x02\x02\u03FF\u03FA\x03\x02\x02\x02\u03FF\u03FB\x03" +
    "\x02\x02\x02\u0400\xD5\x03\x02\x02\x02B\xD9\xE2\xFA\xFE\u010B\u0116\u0122" +
    "\u0129\u013F\u014C\u0153\u015C\u0163\u016C\u0172\u017B\u0187\u01A4\u01AD" +
    "\u01B4\u01C0\u01D1\u01D9\u01DE\u01E5\u01EC\u01F1\u01F8\u0205\u021F\u0229" +
    "\u023D\u0248\u0257\u025E\u026C\u0272\u027D\u0285\u028D\u029D\u02AD\u02C3" +
    "\u02EB\u02F0\u02F6\u02FB\u0307\u0313\u031F\u032B\u0332\u0339\u0340\u0348" +
    "\u036E\u0390\u03A2\u03AA\u03B2\u03D0\u03F0\u03F8\u03FF";
ASPCore2Parser._serializedATN = Utils.join([
    ASPCore2Parser._serializedATNSegment0,
    ASPCore2Parser._serializedATNSegment1,
], "");
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    rule(i) {
        if (i === undefined) {
            return this.getRuleContexts(RuleContext);
        }
        else {
            return this.getRuleContext(i, RuleContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class RuleContext extends ParserRuleContext_1.ParserRuleContext {
    simple_rule() {
        return this.tryGetRuleContext(0, Simple_ruleContext);
    }
    annotations_rule() {
        return this.tryGetRuleContext(0, Annotations_ruleContext);
    }
    annotation_global() {
        return this.tryGetRuleContext(0, Annotation_globalContext);
    }
    directive() {
        return this.tryGetRuleContext(0, DirectiveContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule) {
            listener.enterRule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule) {
            listener.exitRule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule) {
            return visitor.visitRule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RuleContext = RuleContext;
class Simple_ruleContext extends ParserRuleContext_1.ParserRuleContext {
    head() {
        return this.tryGetRuleContext(0, HeadContext);
    }
    DOT() { return this.tryGetToken(ASPCore2Parser.DOT, 0); }
    CONS() { return this.tryGetToken(ASPCore2Parser.CONS, 0); }
    body() {
        return this.tryGetRuleContext(0, BodyContext);
    }
    WCONS() { return this.tryGetToken(ASPCore2Parser.WCONS, 0); }
    weight_at_levels() {
        return this.tryGetRuleContext(0, Weight_at_levelsContext);
    }
    query() {
        return this.tryGetRuleContext(0, QueryContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_simple_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimple_rule) {
            listener.enterSimple_rule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimple_rule) {
            listener.exitSimple_rule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimple_rule) {
            return visitor.visitSimple_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Simple_ruleContext = Simple_ruleContext;
class HeadContext extends ParserRuleContext_1.ParserRuleContext {
    disjunction() {
        return this.tryGetRuleContext(0, DisjunctionContext);
    }
    choice_atom() {
        return this.tryGetRuleContext(0, Choice_atomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_head; }
    // @Override
    enterRule(listener) {
        if (listener.enterHead) {
            listener.enterHead(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHead) {
            listener.exitHead(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHead) {
            return visitor.visitHead(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.HeadContext = HeadContext;
class BodyContext extends ParserRuleContext_1.ParserRuleContext {
    conjunction() {
        return this.getRuleContext(0, ConjunctionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_body; }
    // @Override
    enterRule(listener) {
        if (listener.enterBody) {
            listener.enterBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBody) {
            listener.exitBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBody) {
            return visitor.visitBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BodyContext = BodyContext;
class Weight_at_levelsContext extends ParserRuleContext_1.ParserRuleContext {
    SQUARE_OPEN() { return this.getToken(ASPCore2Parser.SQUARE_OPEN, 0); }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    SQUARE_CLOSED() { return this.getToken(ASPCore2Parser.SQUARE_CLOSED, 0); }
    levels_and_terms() {
        return this.tryGetRuleContext(0, Levels_and_termsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_weight_at_levels; }
    // @Override
    enterRule(listener) {
        if (listener.enterWeight_at_levels) {
            listener.enterWeight_at_levels(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWeight_at_levels) {
            listener.exitWeight_at_levels(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWeight_at_levels) {
            return visitor.visitWeight_at_levels(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Weight_at_levelsContext = Weight_at_levelsContext;
class Levels_and_termsContext extends ParserRuleContext_1.ParserRuleContext {
    AT() { return this.tryGetToken(ASPCore2Parser.AT, 0); }
    term() {
        return this.tryGetRuleContext(0, TermContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    terms() {
        return this.tryGetRuleContext(0, TermsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_levels_and_terms; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevels_and_terms) {
            listener.enterLevels_and_terms(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevels_and_terms) {
            listener.exitLevels_and_terms(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevels_and_terms) {
            return visitor.visitLevels_and_terms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Levels_and_termsContext = Levels_and_termsContext;
class DisjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    HEAD_SEPARATOR() { return this.tryGetToken(ASPCore2Parser.HEAD_SEPARATOR, 0); }
    disjunction() {
        return this.tryGetRuleContext(0, DisjunctionContext);
    }
    existential_atom() {
        return this.tryGetRuleContext(0, Existential_atomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_disjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterDisjunction) {
            listener.enterDisjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDisjunction) {
            listener.exitDisjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDisjunction) {
            return visitor.visitDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DisjunctionContext = DisjunctionContext;
class ConjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    naf_literal_aggregate() {
        return this.getRuleContext(0, Naf_literal_aggregateContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    conjunction() {
        return this.tryGetRuleContext(0, ConjunctionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_conjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterConjunction) {
            listener.enterConjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConjunction) {
            listener.exitConjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConjunction) {
            return visitor.visitConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConjunctionContext = ConjunctionContext;
class Choice_atomContext extends ParserRuleContext_1.ParserRuleContext {
    lower_guard() {
        return this.tryGetRuleContext(0, Lower_guardContext);
    }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    choice_elements() {
        return this.getRuleContext(0, Choice_elementsContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    upper_guard() {
        return this.tryGetRuleContext(0, Upper_guardContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_choice_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_atom) {
            listener.enterChoice_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_atom) {
            listener.exitChoice_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoice_atom) {
            return visitor.visitChoice_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Choice_atomContext = Choice_atomContext;
class Lower_guardContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    binop() {
        return this.getRuleContext(0, BinopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_lower_guard; }
    // @Override
    enterRule(listener) {
        if (listener.enterLower_guard) {
            listener.enterLower_guard(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLower_guard) {
            listener.exitLower_guard(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLower_guard) {
            return visitor.visitLower_guard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Lower_guardContext = Lower_guardContext;
class Upper_guardContext extends ParserRuleContext_1.ParserRuleContext {
    binop() {
        return this.getRuleContext(0, BinopContext);
    }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_upper_guard; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpper_guard) {
            listener.enterUpper_guard(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpper_guard) {
            listener.exitUpper_guard(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpper_guard) {
            return visitor.visitUpper_guard(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Upper_guardContext = Upper_guardContext;
class Choice_elementsContext extends ParserRuleContext_1.ParserRuleContext {
    choice_element() {
        return this.getRuleContext(0, Choice_elementContext);
    }
    SEMICOLON() { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
    choice_elements() {
        return this.tryGetRuleContext(0, Choice_elementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_choice_elements; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_elements) {
            listener.enterChoice_elements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_elements) {
            listener.exitChoice_elements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoice_elements) {
            return visitor.visitChoice_elements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Choice_elementsContext = Choice_elementsContext;
class Choice_elementContext extends ParserRuleContext_1.ParserRuleContext {
    choice_element_atom() {
        return this.getRuleContext(0, Choice_element_atomContext);
    }
    COLON() { return this.tryGetToken(ASPCore2Parser.COLON, 0); }
    choice_elements_literals() {
        return this.tryGetRuleContext(0, Choice_elements_literalsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_choice_element; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_element) {
            listener.enterChoice_element(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_element) {
            listener.exitChoice_element(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoice_element) {
            return visitor.visitChoice_element(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Choice_elementContext = Choice_elementContext;
class Choice_element_atomContext extends ParserRuleContext_1.ParserRuleContext {
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_choice_element_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_element_atom) {
            listener.enterChoice_element_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_element_atom) {
            listener.exitChoice_element_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoice_element_atom) {
            return visitor.visitChoice_element_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Choice_element_atomContext = Choice_element_atomContext;
class Choice_elements_literalsContext extends ParserRuleContext_1.ParserRuleContext {
    naf_literal() {
        return this.getRuleContext(0, Naf_literalContext);
    }
    naf_literals() {
        return this.tryGetRuleContext(0, Naf_literalsContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_choice_elements_literals; }
    // @Override
    enterRule(listener) {
        if (listener.enterChoice_elements_literals) {
            listener.enterChoice_elements_literals(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitChoice_elements_literals) {
            listener.exitChoice_elements_literals(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitChoice_elements_literals) {
            return visitor.visitChoice_elements_literals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Choice_elements_literalsContext = Choice_elements_literalsContext;
class Naf_literalsContext extends ParserRuleContext_1.ParserRuleContext {
    naf_literal() {
        return this.getRuleContext(0, Naf_literalContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    naf_literals() {
        return this.tryGetRuleContext(0, Naf_literalsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_naf_literals; }
    // @Override
    enterRule(listener) {
        if (listener.enterNaf_literals) {
            listener.enterNaf_literals(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNaf_literals) {
            listener.exitNaf_literals(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaf_literals) {
            return visitor.visitNaf_literals(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Naf_literalsContext = Naf_literalsContext;
class Naf_literalContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    builtin_atom() {
        return this.tryGetRuleContext(0, Builtin_atomContext);
    }
    extAtom() {
        return this.tryGetRuleContext(0, ExtAtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_naf_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterNaf_literal) {
            listener.enterNaf_literal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNaf_literal) {
            listener.exitNaf_literal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaf_literal) {
            return visitor.visitNaf_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Naf_literalContext = Naf_literalContext;
class Naf_literal_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    naf_literal() {
        return this.tryGetRuleContext(0, Naf_literalContext);
    }
    aggregate_atom() {
        return this.tryGetRuleContext(0, Aggregate_atomContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_naf_literal_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterNaf_literal_aggregate) {
            listener.enterNaf_literal_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNaf_literal_aggregate) {
            listener.exitNaf_literal_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNaf_literal_aggregate) {
            return visitor.visitNaf_literal_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Naf_literal_aggregateContext = Naf_literal_aggregateContext;
class Existential_atomContext extends ParserRuleContext_1.ParserRuleContext {
    EXISTS() { return this.getToken(ASPCore2Parser.EXISTS, 0); }
    vars() {
        return this.getRuleContext(0, VarsContext);
    }
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_existential_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterExistential_atom) {
            listener.enterExistential_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExistential_atom) {
            listener.exitExistential_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExistential_atom) {
            return visitor.visitExistential_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Existential_atomContext = Existential_atomContext;
class Classic_literalContext extends ParserRuleContext_1.ParserRuleContext {
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    DASH() { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_classic_literal; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassic_literal) {
            listener.enterClassic_literal(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassic_literal) {
            listener.exitClassic_literal(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassic_literal) {
            return visitor.visitClassic_literal(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Classic_literalContext = Classic_literalContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    terms() {
        return this.tryGetRuleContext(0, TermsContext);
    }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAtom) {
            return visitor.visitAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AtomContext = AtomContext;
class ExtAtomContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASPCore2Parser.AMPERSAND, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    terms(i) {
        if (i === undefined) {
            return this.getRuleContexts(TermsContext);
        }
        else {
            return this.getRuleContext(i, TermsContext);
        }
    }
    extSemicol() {
        return this.tryGetRuleContext(0, ExtSemicolContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_extAtom; }
    // @Override
    enterRule(listener) {
        if (listener.enterExtAtom) {
            listener.enterExtAtom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExtAtom) {
            listener.exitExtAtom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExtAtom) {
            return visitor.visitExtAtom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtAtomContext = ExtAtomContext;
class ExtSemicolContext extends ParserRuleContext_1.ParserRuleContext {
    SEMICOLON() { return this.getToken(ASPCore2Parser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_extSemicol; }
    // @Override
    enterRule(listener) {
        if (listener.enterExtSemicol) {
            listener.enterExtSemicol(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExtSemicol) {
            listener.exitExtSemicol(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExtSemicol) {
            return visitor.visitExtSemicol(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExtSemicolContext = ExtSemicolContext;
class TermsContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    terms() {
        return this.tryGetRuleContext(0, TermsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_terms; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerms) {
            listener.enterTerms(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerms) {
            listener.exitTerms(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerms) {
            return visitor.visitTerms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermsContext = TermsContext;
class Basic_termsContext extends ParserRuleContext_1.ParserRuleContext {
    basic_term() {
        return this.getRuleContext(0, Basic_termContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    basic_terms() {
        return this.tryGetRuleContext(0, Basic_termsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_basic_terms; }
    // @Override
    enterRule(listener) {
        if (listener.enterBasic_terms) {
            listener.enterBasic_terms(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBasic_terms) {
            listener.exitBasic_terms(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasic_terms) {
            return visitor.visitBasic_terms(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Basic_termsContext = Basic_termsContext;
class Builtin_atomContext extends ParserRuleContext_1.ParserRuleContext {
    term(i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    }
    binop() {
        return this.getRuleContext(0, BinopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_builtin_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterBuiltin_atom) {
            listener.enterBuiltin_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBuiltin_atom) {
            listener.exitBuiltin_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBuiltin_atom) {
            return visitor.visitBuiltin_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Builtin_atomContext = Builtin_atomContext;
class CompareopContext extends ParserRuleContext_1.ParserRuleContext {
    EQUAL() { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
    UNEQUAL() { return this.tryGetToken(ASPCore2Parser.UNEQUAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_compareop; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompareop) {
            listener.enterCompareop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompareop) {
            listener.exitCompareop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompareop) {
            return visitor.visitCompareop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompareopContext = CompareopContext;
class BinopContext extends ParserRuleContext_1.ParserRuleContext {
    compareop() {
        return this.tryGetRuleContext(0, CompareopContext);
    }
    leftwardop() {
        return this.tryGetRuleContext(0, LeftwardopContext);
    }
    rightwardop() {
        return this.tryGetRuleContext(0, RightwardopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_binop; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinop) {
            listener.enterBinop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinop) {
            listener.exitBinop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBinop) {
            return visitor.visitBinop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BinopContext = BinopContext;
class Arithop1Context extends ParserRuleContext_1.ParserRuleContext {
    PLUS() { return this.tryGetToken(ASPCore2Parser.PLUS, 0); }
    DASH() { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_arithop1; }
    // @Override
    enterRule(listener) {
        if (listener.enterArithop1) {
            listener.enterArithop1(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArithop1) {
            listener.exitArithop1(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArithop1) {
            return visitor.visitArithop1(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Arithop1Context = Arithop1Context;
class Arithop2Context extends ParserRuleContext_1.ParserRuleContext {
    TIMES() { return this.tryGetToken(ASPCore2Parser.TIMES, 0); }
    SLASH() { return this.tryGetToken(ASPCore2Parser.SLASH, 0); }
    BACK_SLASH() { return this.tryGetToken(ASPCore2Parser.BACK_SLASH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_arithop2; }
    // @Override
    enterRule(listener) {
        if (listener.enterArithop2) {
            listener.enterArithop2(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArithop2) {
            listener.exitArithop2(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitArithop2) {
            return visitor.visitArithop2(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Arithop2Context = Arithop2Context;
class Term_Context extends ParserRuleContext_1.ParserRuleContext {
    ANON_VAR() { return this.tryGetToken(ASPCore2Parser.ANON_VAR, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    terms() {
        return this.tryGetRuleContext(0, TermsContext);
    }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    NUMBER(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.NUMBER);
        }
        else {
            return this.getToken(ASPCore2Parser.NUMBER, i);
        }
    }
    DDOT() { return this.tryGetToken(ASPCore2Parser.DDOT, 0); }
    DASH() { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
    term() {
        return this.tryGetRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_term_; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm_) {
            listener.enterTerm_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm_) {
            listener.exitTerm_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerm_) {
            return visitor.visitTerm_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Term_Context = Term_Context;
class Term__Context extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    NUMBER() { return this.tryGetToken(ASPCore2Parser.NUMBER, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    term() {
        return this.tryGetRuleContext(0, TermContext);
    }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_term__; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm__) {
            listener.enterTerm__(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm__) {
            listener.exitTerm__(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerm__) {
            return visitor.visitTerm__(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Term__Context = Term__Context;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    term_() {
        return this.tryGetRuleContext(0, Term_Context);
    }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterTerm) {
            listener.enterTerm(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTerm) {
            listener.exitTerm(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTerm) {
            return visitor.visitTerm(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TermContext = TermContext;
class ExprContext extends ParserRuleContext_1.ParserRuleContext {
    factor() {
        return this.getRuleContext(0, FactorContext);
    }
    arithop1() {
        return this.tryGetRuleContext(0, Arithop1Context);
    }
    expr() {
        return this.tryGetRuleContext(0, ExprContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_expr; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpr) {
            listener.enterExpr(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpr) {
            listener.exitExpr(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpr) {
            return visitor.visitExpr(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExprContext = ExprContext;
class FactorContext extends ParserRuleContext_1.ParserRuleContext {
    term__() {
        return this.getRuleContext(0, Term__Context);
    }
    arithop2() {
        return this.tryGetRuleContext(0, Arithop2Context);
    }
    factor() {
        return this.tryGetRuleContext(0, FactorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_factor; }
    // @Override
    enterRule(listener) {
        if (listener.enterFactor) {
            listener.enterFactor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFactor) {
            listener.exitFactor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFactor) {
            return visitor.visitFactor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FactorContext = FactorContext;
class Basic_termContext extends ParserRuleContext_1.ParserRuleContext {
    ground_term() {
        return this.tryGetRuleContext(0, Ground_termContext);
    }
    variable_term() {
        return this.tryGetRuleContext(0, Variable_termContext);
    }
    functional_term() {
        return this.tryGetRuleContext(0, Functional_termContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_basic_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterBasic_term) {
            listener.enterBasic_term(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBasic_term) {
            listener.exitBasic_term(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBasic_term) {
            return visitor.visitBasic_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Basic_termContext = Basic_termContext;
class Ground_termContext extends ParserRuleContext_1.ParserRuleContext {
    SYMBOLIC_CONSTANT() { return this.tryGetToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
    STRING() { return this.tryGetToken(ASPCore2Parser.STRING, 0); }
    NUMBER() { return this.tryGetToken(ASPCore2Parser.NUMBER, 0); }
    DASH() { return this.tryGetToken(ASPCore2Parser.DASH, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_ground_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterGround_term) {
            listener.enterGround_term(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGround_term) {
            listener.exitGround_term(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGround_term) {
            return visitor.visitGround_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Ground_termContext = Ground_termContext;
class Variable_termContext extends ParserRuleContext_1.ParserRuleContext {
    VARIABLE() { return this.tryGetToken(ASPCore2Parser.VARIABLE, 0); }
    ANON_VAR() { return this.tryGetToken(ASPCore2Parser.ANON_VAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_variable_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariable_term) {
            listener.enterVariable_term(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariable_term) {
            listener.exitVariable_term(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariable_term) {
            return visitor.visitVariable_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Variable_termContext = Variable_termContext;
class Functional_termContext extends ParserRuleContext_1.ParserRuleContext {
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    terms() {
        return this.getRuleContext(0, TermsContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_functional_term; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctional_term) {
            listener.enterFunctional_term(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctional_term) {
            listener.exitFunctional_term(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctional_term) {
            return visitor.visitFunctional_term(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Functional_termContext = Functional_termContext;
class VarsContext extends ParserRuleContext_1.ParserRuleContext {
    VARIABLE() { return this.getToken(ASPCore2Parser.VARIABLE, 0); }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    vars() {
        return this.tryGetRuleContext(0, VarsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_vars; }
    // @Override
    enterRule(listener) {
        if (listener.enterVars) {
            listener.enterVars(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVars) {
            listener.exitVars(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVars) {
            return visitor.visitVars(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarsContext = VarsContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    SYMBOLIC_CONSTANT() { return this.tryGetToken(ASPCore2Parser.SYMBOLIC_CONSTANT, 0); }
    STRING() { return this.tryGetToken(ASPCore2Parser.STRING, 0); }
    VARIABLE() { return this.tryGetToken(ASPCore2Parser.VARIABLE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class DirectiveContext extends ParserRuleContext_1.ParserRuleContext {
    DIRECTIVE_NAME() { return this.getToken(ASPCore2Parser.DIRECTIVE_NAME, 0); }
    DIRECTIVE_VALUE() { return this.getToken(ASPCore2Parser.DIRECTIVE_VALUE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_directive; }
    // @Override
    enterRule(listener) {
        if (listener.enterDirective) {
            listener.enterDirective(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDirective) {
            listener.exitDirective(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDirective) {
            return visitor.visitDirective(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DirectiveContext = DirectiveContext;
class QueryContext extends ParserRuleContext_1.ParserRuleContext {
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    QUERY_MARK() { return this.getToken(ASPCore2Parser.QUERY_MARK, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_query; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QueryContext = QueryContext;
class TestsContext extends ParserRuleContext_1.ParserRuleContext {
    TESTS_OPEN() { return this.getToken(ASPCore2Parser.TESTS_OPEN, 0); }
    TESTS_CLOSE() { return this.getToken(ASPCore2Parser.TESTS_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_tests; }
    // @Override
    enterRule(listener) {
        if (listener.enterTests) {
            listener.enterTests(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTests) {
            listener.exitTests(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTests) {
            return visitor.visitTests(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TestsContext = TestsContext;
class Lower_guard_compare_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    compareop() {
        return this.getRuleContext(0, CompareopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_lower_guard_compare_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterLower_guard_compare_aggregate) {
            listener.enterLower_guard_compare_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLower_guard_compare_aggregate) {
            listener.exitLower_guard_compare_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLower_guard_compare_aggregate) {
            return visitor.visitLower_guard_compare_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Lower_guard_compare_aggregateContext = Lower_guard_compare_aggregateContext;
class Upper_guard_compare_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    compareop() {
        return this.getRuleContext(0, CompareopContext);
    }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_upper_guard_compare_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpper_guard_compare_aggregate) {
            listener.enterUpper_guard_compare_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpper_guard_compare_aggregate) {
            listener.exitUpper_guard_compare_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpper_guard_compare_aggregate) {
            return visitor.visitUpper_guard_compare_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Upper_guard_compare_aggregateContext = Upper_guard_compare_aggregateContext;
class Compare_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    lower_guard_compare_aggregate() {
        return this.tryGetRuleContext(0, Lower_guard_compare_aggregateContext);
    }
    aggregate() {
        return this.getRuleContext(0, AggregateContext);
    }
    upper_guard_compare_aggregate() {
        return this.tryGetRuleContext(0, Upper_guard_compare_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_compare_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompare_aggregate) {
            listener.enterCompare_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompare_aggregate) {
            listener.exitCompare_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompare_aggregate) {
            return visitor.visitCompare_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Compare_aggregateContext = Compare_aggregateContext;
class Lower_guard_leftward_left_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    leftwardop() {
        return this.getRuleContext(0, LeftwardopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_lower_guard_leftward_left_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterLower_guard_leftward_left_aggregate) {
            listener.enterLower_guard_leftward_left_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLower_guard_leftward_left_aggregate) {
            listener.exitLower_guard_leftward_left_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLower_guard_leftward_left_aggregate) {
            return visitor.visitLower_guard_leftward_left_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Lower_guard_leftward_left_aggregateContext = Lower_guard_leftward_left_aggregateContext;
class Leftward_left_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    lower_guard_leftward_left_aggregate() {
        return this.getRuleContext(0, Lower_guard_leftward_left_aggregateContext);
    }
    aggregate() {
        return this.getRuleContext(0, AggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_leftward_left_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterLeftward_left_aggregate) {
            listener.enterLeftward_left_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLeftward_left_aggregate) {
            listener.exitLeftward_left_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLeftward_left_aggregate) {
            return visitor.visitLeftward_left_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Leftward_left_aggregateContext = Leftward_left_aggregateContext;
class Left_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    leftward_left_aggregate() {
        return this.tryGetRuleContext(0, Leftward_left_aggregateContext);
    }
    rightward_left_aggregate() {
        return this.tryGetRuleContext(0, Rightward_left_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_left_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterLeft_aggregate) {
            listener.enterLeft_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLeft_aggregate) {
            listener.exitLeft_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLeft_aggregate) {
            return visitor.visitLeft_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Left_aggregateContext = Left_aggregateContext;
class Lower_guard_rightward_left_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    term() {
        return this.getRuleContext(0, TermContext);
    }
    rightwardop() {
        return this.getRuleContext(0, RightwardopContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_lower_guard_rightward_left_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterLower_guard_rightward_left_aggregate) {
            listener.enterLower_guard_rightward_left_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLower_guard_rightward_left_aggregate) {
            listener.exitLower_guard_rightward_left_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLower_guard_rightward_left_aggregate) {
            return visitor.visitLower_guard_rightward_left_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Lower_guard_rightward_left_aggregateContext = Lower_guard_rightward_left_aggregateContext;
class Rightward_left_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    lower_guard_rightward_left_aggregate() {
        return this.getRuleContext(0, Lower_guard_rightward_left_aggregateContext);
    }
    aggregate() {
        return this.getRuleContext(0, AggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rightward_left_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterRightward_left_aggregate) {
            listener.enterRightward_left_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRightward_left_aggregate) {
            listener.exitRightward_left_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRightward_left_aggregate) {
            return visitor.visitRightward_left_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rightward_left_aggregateContext = Rightward_left_aggregateContext;
class Upper_guard_leftward_right_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    leftwardop() {
        return this.getRuleContext(0, LeftwardopContext);
    }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_upper_guard_leftward_right_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpper_guard_leftward_right_aggregate) {
            listener.enterUpper_guard_leftward_right_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpper_guard_leftward_right_aggregate) {
            listener.exitUpper_guard_leftward_right_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpper_guard_leftward_right_aggregate) {
            return visitor.visitUpper_guard_leftward_right_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Upper_guard_leftward_right_aggregateContext = Upper_guard_leftward_right_aggregateContext;
class Upper_guard_rightward_right_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    rightwardop() {
        return this.getRuleContext(0, RightwardopContext);
    }
    term() {
        return this.getRuleContext(0, TermContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_upper_guard_rightward_right_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterUpper_guard_rightward_right_aggregate) {
            listener.enterUpper_guard_rightward_right_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUpper_guard_rightward_right_aggregate) {
            listener.exitUpper_guard_rightward_right_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUpper_guard_rightward_right_aggregate) {
            return visitor.visitUpper_guard_rightward_right_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Upper_guard_rightward_right_aggregateContext = Upper_guard_rightward_right_aggregateContext;
class Right_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate() {
        return this.getRuleContext(0, AggregateContext);
    }
    upper_guard_leftward_right_aggregate() {
        return this.tryGetRuleContext(0, Upper_guard_leftward_right_aggregateContext);
    }
    upper_guard_rightward_right_aggregate() {
        return this.tryGetRuleContext(0, Upper_guard_rightward_right_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_right_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterRight_aggregate) {
            listener.enterRight_aggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRight_aggregate) {
            listener.exitRight_aggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRight_aggregate) {
            return visitor.visitRight_aggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Right_aggregateContext = Right_aggregateContext;
class Aggregate_atomContext extends ParserRuleContext_1.ParserRuleContext {
    left_aggregate() {
        return this.tryGetRuleContext(0, Left_aggregateContext);
    }
    right_aggregate() {
        return this.tryGetRuleContext(0, Right_aggregateContext);
    }
    compare_aggregate() {
        return this.tryGetRuleContext(0, Compare_aggregateContext);
    }
    leftward_left_aggregate() {
        return this.tryGetRuleContext(0, Leftward_left_aggregateContext);
    }
    upper_guard_leftward_right_aggregate() {
        return this.tryGetRuleContext(0, Upper_guard_leftward_right_aggregateContext);
    }
    rightward_left_aggregate() {
        return this.tryGetRuleContext(0, Rightward_left_aggregateContext);
    }
    upper_guard_rightward_right_aggregate() {
        return this.tryGetRuleContext(0, Upper_guard_rightward_right_aggregateContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_atom) {
            listener.enterAggregate_atom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_atom) {
            listener.exitAggregate_atom(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_atom) {
            return visitor.visitAggregate_atom(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_atomContext = Aggregate_atomContext;
class LeftwardopContext extends ParserRuleContext_1.ParserRuleContext {
    LESS() { return this.tryGetToken(ASPCore2Parser.LESS, 0); }
    LESS_OR_EQ() { return this.tryGetToken(ASPCore2Parser.LESS_OR_EQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_leftwardop; }
    // @Override
    enterRule(listener) {
        if (listener.enterLeftwardop) {
            listener.enterLeftwardop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLeftwardop) {
            listener.exitLeftwardop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLeftwardop) {
            return visitor.visitLeftwardop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LeftwardopContext = LeftwardopContext;
class RightwardopContext extends ParserRuleContext_1.ParserRuleContext {
    GREATER() { return this.tryGetToken(ASPCore2Parser.GREATER, 0); }
    GREATER_OR_EQ() { return this.tryGetToken(ASPCore2Parser.GREATER_OR_EQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rightwardop; }
    // @Override
    enterRule(listener) {
        if (listener.enterRightwardop) {
            listener.enterRightwardop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRightwardop) {
            listener.exitRightwardop(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRightwardop) {
            return visitor.visitRightwardop(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RightwardopContext = RightwardopContext;
class AggregateContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_function() {
        return this.getRuleContext(0, Aggregate_functionContext);
    }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    aggregate_elements() {
        return this.tryGetRuleContext(0, Aggregate_elementsContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate) {
            listener.enterAggregate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate) {
            listener.exitAggregate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate) {
            return visitor.visitAggregate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AggregateContext = AggregateContext;
class Aggregate_elementsContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_element() {
        return this.getRuleContext(0, Aggregate_elementContext);
    }
    SEMICOLON() { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
    aggregate_elements() {
        return this.tryGetRuleContext(0, Aggregate_elementsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_elements; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_elements) {
            listener.enterAggregate_elements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_elements) {
            listener.exitAggregate_elements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_elements) {
            return visitor.visitAggregate_elements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_elementsContext = Aggregate_elementsContext;
class Aggregate_elementContext extends ParserRuleContext_1.ParserRuleContext {
    basic_terms() {
        return this.getRuleContext(0, Basic_termsContext);
    }
    COLON() { return this.getToken(ASPCore2Parser.COLON, 0); }
    naf_literals() {
        return this.getRuleContext(0, Naf_literalsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_element; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_element) {
            listener.enterAggregate_element(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_element) {
            listener.exitAggregate_element(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_element) {
            return visitor.visitAggregate_element(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_elementContext = Aggregate_elementContext;
class Aggregate_functionContext extends ParserRuleContext_1.ParserRuleContext {
    AGGR_COUNT() { return this.tryGetToken(ASPCore2Parser.AGGR_COUNT, 0); }
    AGGR_MAX() { return this.tryGetToken(ASPCore2Parser.AGGR_MAX, 0); }
    AGGR_MIN() { return this.tryGetToken(ASPCore2Parser.AGGR_MIN, 0); }
    AGGR_SUM() { return this.tryGetToken(ASPCore2Parser.AGGR_SUM, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_function; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_function) {
            listener.enterAggregate_function(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_function) {
            listener.exitAggregate_function(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_function) {
            return visitor.visitAggregate_function(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_functionContext = Aggregate_functionContext;
class Annotation_globalContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_global_ordering() {
        return this.tryGetRuleContext(0, Annotation_global_orderingContext);
    }
    annotation_global_atom_indexed() {
        return this.tryGetRuleContext(0, Annotation_global_atom_indexedContext);
    }
    annotation_global_partial_order() {
        return this.tryGetRuleContext(0, Annotation_global_partial_orderContext);
    }
    annotation_global_extatom_conversion() {
        return this.tryGetRuleContext(0, Annotation_global_extatom_conversionContext);
    }
    annotation_global_wasp_heuristic() {
        return this.tryGetRuleContext(0, Annotation_global_wasp_heuristicContext);
    }
    annotation_global_wasp_propagator() {
        return this.tryGetRuleContext(0, Annotation_global_wasp_propagatorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global) {
            listener.enterAnnotation_global(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global) {
            listener.exitAnnotation_global(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global) {
            return visitor.visitAnnotation_global(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_globalContext = Annotation_globalContext;
class Annotations_ruleContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_rule() {
        return this.getRuleContext(0, Annotation_ruleContext);
    }
    annotations_rule() {
        return this.tryGetRuleContext(0, Annotations_ruleContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotations_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotations_rule) {
            listener.enterAnnotations_rule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotations_rule) {
            listener.exitAnnotations_rule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotations_rule) {
            return visitor.visitAnnotations_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotations_ruleContext = Annotations_ruleContext;
class Annotation_ruleContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_rule_ordering() {
        return this.tryGetRuleContext(0, Annotation_rule_orderingContext);
    }
    annotation_rule_atom_indexed() {
        return this.tryGetRuleContext(0, Annotation_rule_atom_indexedContext);
    }
    annotation_rule_partial_order() {
        return this.tryGetRuleContext(0, Annotation_rule_partial_orderContext);
    }
    annotation_rule_projection() {
        return this.tryGetRuleContext(0, Annotation_rule_projectionContext);
    }
    annotation_rule_rewriting_arith() {
        return this.tryGetRuleContext(0, Annotation_rule_rewriting_arithContext);
    }
    annotation_rule_align_substitutions() {
        return this.tryGetRuleContext(0, Annotation_rule_align_substitutionsContext);
    }
    annotation_rule_look_ahead() {
        return this.tryGetRuleContext(0, Annotation_rule_look_aheadContext);
    }
    annotation_rule_to_decompose() {
        return this.tryGetRuleContext(0, Annotation_rule_to_decomposeContext);
    }
    annotation_rule_to_not_decompose() {
        return this.tryGetRuleContext(0, Annotation_rule_to_not_decomposeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule) {
            listener.enterAnnotation_rule(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule) {
            listener.exitAnnotation_rule(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule) {
            return visitor.visitAnnotation_rule(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_ruleContext = Annotation_ruleContext;
class Annotation_rule_to_decomposeContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_TO_DECOMPOSE() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_TO_DECOMPOSE, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_to_decompose; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_to_decompose) {
            listener.enterAnnotation_rule_to_decompose(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_to_decompose) {
            listener.exitAnnotation_rule_to_decompose(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_to_decompose) {
            return visitor.visitAnnotation_rule_to_decompose(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_to_decomposeContext = Annotation_rule_to_decomposeContext;
class Annotation_rule_to_not_decomposeContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_TO_NOT_DECOMPOSE() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_TO_NOT_DECOMPOSE, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_to_not_decompose; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_to_not_decompose) {
            listener.enterAnnotation_rule_to_not_decompose(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_to_not_decompose) {
            listener.exitAnnotation_rule_to_not_decompose(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_to_not_decompose) {
            return visitor.visitAnnotation_rule_to_not_decompose(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_to_not_decomposeContext = Annotation_rule_to_not_decomposeContext;
class Annotation_rule_orderingContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_ORDERING() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ORDERING, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_ORDERING_VALUE() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
    EQUAL() { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
    rule_ordering_type() {
        return this.getRuleContext(0, Rule_ordering_typeContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_ordering; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_ordering) {
            listener.enterAnnotation_rule_ordering(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_ordering) {
            listener.exitAnnotation_rule_ordering(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_ordering) {
            return visitor.visitAnnotation_rule_ordering(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_orderingContext = Annotation_rule_orderingContext;
class Annotation_global_orderingContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_ORDERING() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ORDERING, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_ORDERING_VALUE() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
    EQUAL() { return this.tryGetToken(ASPCore2Parser.EQUAL, 0); }
    global_ordering_type() {
        return this.getRuleContext(0, Global_ordering_typeContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_ordering; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_ordering) {
            listener.enterAnnotation_global_ordering(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_ordering) {
            listener.exitAnnotation_global_ordering(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_ordering) {
            return visitor.visitAnnotation_global_ordering(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_orderingContext = Annotation_global_orderingContext;
class Annotation_global_extatom_conversionContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_EXTATOM_CONVERSION() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_EXTATOM_CONVERSION, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_EXTATOM_PREDICATE() { return this.getToken(ASPCore2Parser.ANNOTATION_EXTATOM_PREDICATE, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    annotation_extpredicate() {
        return this.getRuleContext(0, Annotation_extpredicateContext);
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_EXTATOM_TYPE() { return this.getToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE, 0); }
    extatom_conv_types() {
        return this.getRuleContext(0, Extatom_conv_typesContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_extatom_conversion; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_extatom_conversion) {
            listener.enterAnnotation_global_extatom_conversion(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_extatom_conversion) {
            listener.exitAnnotation_global_extatom_conversion(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_extatom_conversion) {
            return visitor.visitAnnotation_global_extatom_conversion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_extatom_conversionContext = Annotation_global_extatom_conversionContext;
class Annotation_extpredicateContext extends ParserRuleContext_1.ParserRuleContext {
    AMPERSAND() { return this.getToken(ASPCore2Parser.AMPERSAND, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_extpredicate; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_extpredicate) {
            listener.enterAnnotation_extpredicate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_extpredicate) {
            listener.exitAnnotation_extpredicate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_extpredicate) {
            return visitor.visitAnnotation_extpredicate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_extpredicateContext = Annotation_extpredicateContext;
class Extatom_conv_typesContext extends ParserRuleContext_1.ParserRuleContext {
    extatom_conv_type() {
        return this.getRuleContext(0, Extatom_conv_typeContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    extatom_conv_types() {
        return this.tryGetRuleContext(0, Extatom_conv_typesContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_extatom_conv_types; }
    // @Override
    enterRule(listener) {
        if (listener.enterExtatom_conv_types) {
            listener.enterExtatom_conv_types(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExtatom_conv_types) {
            listener.exitExtatom_conv_types(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExtatom_conv_types) {
            return visitor.visitExtatom_conv_types(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Extatom_conv_typesContext = Extatom_conv_typesContext;
class Extatom_conv_typeContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_EXTATOM_TYPE_QCONST() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_QCONST, 0); }
    ANNOTATION_EXTATOM_TYPE_CONST() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_CONST, 0); }
    ANNOTATION_EXTATOM_TYPE_U_INT() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_U_INT, 0); }
    ANNOTATION_EXTATOM_TYPE_UT_INT() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UT_INT, 0); }
    ANNOTATION_EXTATOM_TYPE_UR_INT() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_UR_INT, 0); }
    ANNOTATION_EXTATOM_TYPE_T_INT() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_T_INT, 0); }
    ANNOTATION_EXTATOM_TYPE_R_INT() { return this.tryGetToken(ASPCore2Parser.ANNOTATION_EXTATOM_TYPE_R_INT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_extatom_conv_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterExtatom_conv_type) {
            listener.enterExtatom_conv_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExtatom_conv_type) {
            listener.exitExtatom_conv_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExtatom_conv_type) {
            return visitor.visitExtatom_conv_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Extatom_conv_typeContext = Extatom_conv_typeContext;
class Rule_ordering_typeContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASPCore2Parser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_ordering_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_ordering_type) {
            listener.enterRule_ordering_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_ordering_type) {
            listener.exitRule_ordering_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_ordering_type) {
            return visitor.visitRule_ordering_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_ordering_typeContext = Rule_ordering_typeContext;
class Global_ordering_typeContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASPCore2Parser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_ordering_type; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_ordering_type) {
            listener.enterGlobal_ordering_type(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_ordering_type) {
            listener.exitGlobal_ordering_type(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_ordering_type) {
            return visitor.visitGlobal_ordering_type(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_ordering_typeContext = Global_ordering_typeContext;
class Annotation_rule_atom_indexedContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_ATOM_INDEXED() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ATOM_INDEXED, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_ATOM_INDEXED_ATOM() { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    rule_naf_literal_annotation() {
        return this.getRuleContext(0, Rule_naf_literal_annotationContext);
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_ATOM_INDEXED_ARGUMENTS() { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    rule_indexing_arguments() {
        return this.getRuleContext(0, Rule_indexing_argumentsContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_atom_indexed; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_atom_indexed) {
            listener.enterAnnotation_rule_atom_indexed(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_atom_indexed) {
            listener.exitAnnotation_rule_atom_indexed(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_atom_indexed) {
            return visitor.visitAnnotation_rule_atom_indexed(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_atom_indexedContext = Annotation_rule_atom_indexedContext;
class Annotation_global_atom_indexedContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_ATOM_INDEXED() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_ATOM_INDEXED, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_ATOM_INDEXED_ATOM() { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ATOM, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    global_naf_literal_annotation() {
        return this.getRuleContext(0, Global_naf_literal_annotationContext);
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_ATOM_INDEXED_ARGUMENTS() { return this.getToken(ASPCore2Parser.ANNOTATION_ATOM_INDEXED_ARGUMENTS, 0); }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    global_indexing_arguments() {
        return this.getRuleContext(0, Global_indexing_argumentsContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_atom_indexed; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_atom_indexed) {
            listener.enterAnnotation_global_atom_indexed(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_atom_indexed) {
            listener.exitAnnotation_global_atom_indexed(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_atom_indexed) {
            return visitor.visitAnnotation_global_atom_indexed(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_atom_indexedContext = Annotation_global_atom_indexedContext;
class Rule_indexing_argumentsContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASPCore2Parser.NUMBER, 0); }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    rule_indexing_arguments() {
        return this.tryGetRuleContext(0, Rule_indexing_argumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_indexing_arguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_indexing_arguments) {
            listener.enterRule_indexing_arguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_indexing_arguments) {
            listener.exitRule_indexing_arguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_indexing_arguments) {
            return visitor.visitRule_indexing_arguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_indexing_argumentsContext = Rule_indexing_argumentsContext;
class Rule_naf_literal_annotationContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.getRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_naf_literal_annotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_naf_literal_annotation) {
            listener.enterRule_naf_literal_annotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_naf_literal_annotation) {
            listener.exitRule_naf_literal_annotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_naf_literal_annotation) {
            return visitor.visitRule_naf_literal_annotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_naf_literal_annotationContext = Rule_naf_literal_annotationContext;
class Global_indexing_argumentsContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASPCore2Parser.NUMBER, 0); }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    global_indexing_arguments() {
        return this.tryGetRuleContext(0, Global_indexing_argumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_indexing_arguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_indexing_arguments) {
            listener.enterGlobal_indexing_arguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_indexing_arguments) {
            listener.exitGlobal_indexing_arguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_indexing_arguments) {
            return visitor.visitGlobal_indexing_arguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_indexing_argumentsContext = Global_indexing_argumentsContext;
class Global_naf_literal_annotationContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.getRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_naf_literal_annotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_naf_literal_annotation) {
            listener.enterGlobal_naf_literal_annotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_naf_literal_annotation) {
            listener.exitGlobal_naf_literal_annotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_naf_literal_annotation) {
            return visitor.visitGlobal_naf_literal_annotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_naf_literal_annotationContext = Global_naf_literal_annotationContext;
class Rule_atom_annotation_beforeContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    builtin_atom() {
        return this.tryGetRuleContext(0, Builtin_atomContext);
    }
    aggregate_atom() {
        return this.tryGetRuleContext(0, Aggregate_atomContext);
    }
    extAtom() {
        return this.tryGetRuleContext(0, ExtAtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_atom_annotation_before; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_atom_annotation_before) {
            listener.enterRule_atom_annotation_before(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_atom_annotation_before) {
            listener.exitRule_atom_annotation_before(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_atom_annotation_before) {
            return visitor.visitRule_atom_annotation_before(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_atom_annotation_beforeContext = Rule_atom_annotation_beforeContext;
class Global_atom_annotation_beforeContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    builtin_atom() {
        return this.tryGetRuleContext(0, Builtin_atomContext);
    }
    aggregate_atom() {
        return this.tryGetRuleContext(0, Aggregate_atomContext);
    }
    extAtom() {
        return this.tryGetRuleContext(0, ExtAtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_atom_annotation_before; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_atom_annotation_before) {
            listener.enterGlobal_atom_annotation_before(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_atom_annotation_before) {
            listener.exitGlobal_atom_annotation_before(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_atom_annotation_before) {
            return visitor.visitGlobal_atom_annotation_before(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_atom_annotation_beforeContext = Global_atom_annotation_beforeContext;
class Rule_atom_annotation_afterContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    builtin_atom() {
        return this.tryGetRuleContext(0, Builtin_atomContext);
    }
    aggregate_atom() {
        return this.tryGetRuleContext(0, Aggregate_atomContext);
    }
    extAtom() {
        return this.tryGetRuleContext(0, ExtAtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_atom_annotation_after; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_atom_annotation_after) {
            listener.enterRule_atom_annotation_after(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_atom_annotation_after) {
            listener.exitRule_atom_annotation_after(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_atom_annotation_after) {
            return visitor.visitRule_atom_annotation_after(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_atom_annotation_afterContext = Rule_atom_annotation_afterContext;
class Global_atom_annotation_afterContext extends ParserRuleContext_1.ParserRuleContext {
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    NAF() { return this.tryGetToken(ASPCore2Parser.NAF, 0); }
    builtin_atom() {
        return this.tryGetRuleContext(0, Builtin_atomContext);
    }
    aggregate_atom() {
        return this.tryGetRuleContext(0, Aggregate_atomContext);
    }
    extAtom() {
        return this.tryGetRuleContext(0, ExtAtomContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_atom_annotation_after; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_atom_annotation_after) {
            listener.enterGlobal_atom_annotation_after(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_atom_annotation_after) {
            listener.exitGlobal_atom_annotation_after(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_atom_annotation_after) {
            return visitor.visitGlobal_atom_annotation_after(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_atom_annotation_afterContext = Global_atom_annotation_afterContext;
class Rule_atoms_annotation_beforeContext extends ParserRuleContext_1.ParserRuleContext {
    rule_atom_annotation_before() {
        return this.getRuleContext(0, Rule_atom_annotation_beforeContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    rule_atoms_annotation_before() {
        return this.tryGetRuleContext(0, Rule_atoms_annotation_beforeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_atoms_annotation_before; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_atoms_annotation_before) {
            listener.enterRule_atoms_annotation_before(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_atoms_annotation_before) {
            listener.exitRule_atoms_annotation_before(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_atoms_annotation_before) {
            return visitor.visitRule_atoms_annotation_before(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_atoms_annotation_beforeContext = Rule_atoms_annotation_beforeContext;
class Global_atoms_annotation_beforeContext extends ParserRuleContext_1.ParserRuleContext {
    global_atom_annotation_before() {
        return this.getRuleContext(0, Global_atom_annotation_beforeContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    global_atoms_annotation_before() {
        return this.tryGetRuleContext(0, Global_atoms_annotation_beforeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_atoms_annotation_before; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_atoms_annotation_before) {
            listener.enterGlobal_atoms_annotation_before(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_atoms_annotation_before) {
            listener.exitGlobal_atoms_annotation_before(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_atoms_annotation_before) {
            return visitor.visitGlobal_atoms_annotation_before(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_atoms_annotation_beforeContext = Global_atoms_annotation_beforeContext;
class Rule_atoms_annotation_afterContext extends ParserRuleContext_1.ParserRuleContext {
    rule_atom_annotation_after() {
        return this.getRuleContext(0, Rule_atom_annotation_afterContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    rule_atoms_annotation_after() {
        return this.tryGetRuleContext(0, Rule_atoms_annotation_afterContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_rule_atoms_annotation_after; }
    // @Override
    enterRule(listener) {
        if (listener.enterRule_atoms_annotation_after) {
            listener.enterRule_atoms_annotation_after(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRule_atoms_annotation_after) {
            listener.exitRule_atoms_annotation_after(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRule_atoms_annotation_after) {
            return visitor.visitRule_atoms_annotation_after(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Rule_atoms_annotation_afterContext = Rule_atoms_annotation_afterContext;
class Global_atoms_annotation_afterContext extends ParserRuleContext_1.ParserRuleContext {
    global_atom_annotation_after() {
        return this.getRuleContext(0, Global_atom_annotation_afterContext);
    }
    COMMA() { return this.tryGetToken(ASPCore2Parser.COMMA, 0); }
    global_atoms_annotation_after(i) {
        if (i === undefined) {
            return this.getRuleContexts(Global_atoms_annotation_afterContext);
        }
        else {
            return this.getRuleContext(i, Global_atoms_annotation_afterContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_global_atoms_annotation_after; }
    // @Override
    enterRule(listener) {
        if (listener.enterGlobal_atoms_annotation_after) {
            listener.enterGlobal_atoms_annotation_after(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGlobal_atoms_annotation_after) {
            listener.exitGlobal_atoms_annotation_after(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGlobal_atoms_annotation_after) {
            return visitor.visitGlobal_atoms_annotation_after(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Global_atoms_annotation_afterContext = Global_atoms_annotation_afterContext;
class Annotation_rule_partial_order_beginContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_PARTIAL_ORDER() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_PARTIAL_ORDER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_partial_order_begin; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_partial_order_begin) {
            listener.enterAnnotation_rule_partial_order_begin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_partial_order_begin) {
            listener.exitAnnotation_rule_partial_order_begin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_partial_order_begin) {
            return visitor.visitAnnotation_rule_partial_order_begin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_partial_order_beginContext = Annotation_rule_partial_order_beginContext;
class Annotation_global_partial_order_beginContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_PARTIAL_ORDER() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_PARTIAL_ORDER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_partial_order_begin; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_partial_order_begin) {
            listener.enterAnnotation_global_partial_order_begin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_partial_order_begin) {
            listener.exitAnnotation_global_partial_order_begin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_partial_order_begin) {
            return visitor.visitAnnotation_global_partial_order_begin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_partial_order_beginContext = Annotation_global_partial_order_beginContext;
class Annotation_rule_partial_orderContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_rule_partial_order_begin() {
        return this.getRuleContext(0, Annotation_rule_partial_order_beginContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_PARTIAL_ORDER_BEFORE() { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    CURLY_OPEN(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.CURLY_OPEN);
        }
        else {
            return this.getToken(ASPCore2Parser.CURLY_OPEN, i);
        }
    }
    rule_atoms_annotation_before() {
        return this.getRuleContext(0, Rule_atoms_annotation_beforeContext);
    }
    CURLY_CLOSE(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.CURLY_CLOSE);
        }
        else {
            return this.getToken(ASPCore2Parser.CURLY_CLOSE, i);
        }
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_PARTIAL_ORDER_AFTER() { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
    rule_atoms_annotation_after() {
        return this.getRuleContext(0, Rule_atoms_annotation_afterContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_partial_order; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_partial_order) {
            listener.enterAnnotation_rule_partial_order(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_partial_order) {
            listener.exitAnnotation_rule_partial_order(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_partial_order) {
            return visitor.visitAnnotation_rule_partial_order(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_partial_orderContext = Annotation_rule_partial_orderContext;
class Annotation_global_partial_orderContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_global_partial_order_begin() {
        return this.getRuleContext(0, Annotation_global_partial_order_beginContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_PARTIAL_ORDER_BEFORE() { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_BEFORE, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    CURLY_OPEN(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.CURLY_OPEN);
        }
        else {
            return this.getToken(ASPCore2Parser.CURLY_OPEN, i);
        }
    }
    global_atoms_annotation_before() {
        return this.getRuleContext(0, Global_atoms_annotation_beforeContext);
    }
    CURLY_CLOSE(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.CURLY_CLOSE);
        }
        else {
            return this.getToken(ASPCore2Parser.CURLY_CLOSE, i);
        }
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_PARTIAL_ORDER_AFTER() { return this.getToken(ASPCore2Parser.ANNOTATION_PARTIAL_ORDER_AFTER, 0); }
    global_atoms_annotation_after() {
        return this.getRuleContext(0, Global_atoms_annotation_afterContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_partial_order; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_partial_order) {
            listener.enterAnnotation_global_partial_order(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_partial_order) {
            listener.exitAnnotation_global_partial_order(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_partial_order) {
            return visitor.visitAnnotation_global_partial_order(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_partial_orderContext = Annotation_global_partial_orderContext;
class Annotation_rule_projectionContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_PROJECTION() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_PROJECTION, 0); }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_ORDERING_VALUE() { return this.getToken(ASPCore2Parser.ANNOTATION_ORDERING_VALUE, 0); }
    EQUAL() { return this.getToken(ASPCore2Parser.EQUAL, 0); }
    annotation_rule_projection_value() {
        return this.getRuleContext(0, Annotation_rule_projection_valueContext);
    }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_projection; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_projection) {
            listener.enterAnnotation_rule_projection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_projection) {
            listener.exitAnnotation_rule_projection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_projection) {
            return visitor.visitAnnotation_rule_projection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_projectionContext = Annotation_rule_projectionContext;
class Annotation_rule_projection_valueContext extends ParserRuleContext_1.ParserRuleContext {
    NUMBER() { return this.getToken(ASPCore2Parser.NUMBER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_projection_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_projection_value) {
            listener.enterAnnotation_rule_projection_value(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_projection_value) {
            listener.exitAnnotation_rule_projection_value(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_projection_value) {
            return visitor.visitAnnotation_rule_projection_value(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_projection_valueContext = Annotation_rule_projection_valueContext;
class Annotation_rule_rewriting_arithContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_REWRITING_ARITH() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_REWRITING_ARITH, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_rewriting_arith; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_rewriting_arith) {
            listener.enterAnnotation_rule_rewriting_arith(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_rewriting_arith) {
            listener.exitAnnotation_rule_rewriting_arith(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_rewriting_arith) {
            return visitor.visitAnnotation_rule_rewriting_arith(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_rewriting_arithContext = Annotation_rule_rewriting_arithContext;
class Annotation_rule_align_substitutionsContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_ALIGN_SUBSTITUTIONS() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_ALIGN_SUBSTITUTIONS, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_align_substitutions; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_align_substitutions) {
            listener.enterAnnotation_rule_align_substitutions(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_align_substitutions) {
            listener.exitAnnotation_rule_align_substitutions(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_align_substitutions) {
            return visitor.visitAnnotation_rule_align_substitutions(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_align_substitutionsContext = Annotation_rule_align_substitutionsContext;
class Annotation_rule_look_aheadContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_RULE_LOOK_AHEAD() { return this.getToken(ASPCore2Parser.ANNOTATION_RULE_LOOK_AHEAD, 0); }
    PARAM_OPEN() { return this.tryGetToken(ASPCore2Parser.PARAM_OPEN, 0); }
    PARAM_CLOSE() { return this.tryGetToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_rule_look_ahead; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_rule_look_ahead) {
            listener.enterAnnotation_rule_look_ahead(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_rule_look_ahead) {
            listener.exitAnnotation_rule_look_ahead(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_rule_look_ahead) {
            return visitor.visitAnnotation_rule_look_ahead(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_rule_look_aheadContext = Annotation_rule_look_aheadContext;
class Annotation_global_wasp_propagatorContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_global_wasp_propagator_begin() {
        return this.getRuleContext(0, Annotation_global_wasp_propagator_beginContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    heuristic_python_file() {
        return this.getRuleContext(0, Heuristic_python_fileContext);
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    aggregate_elements_heuristic() {
        return this.getRuleContext(0, Aggregate_elements_heuristicContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_wasp_propagator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_wasp_propagator) {
            listener.enterAnnotation_global_wasp_propagator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_wasp_propagator) {
            listener.exitAnnotation_global_wasp_propagator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_wasp_propagator) {
            return visitor.visitAnnotation_global_wasp_propagator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_wasp_propagatorContext = Annotation_global_wasp_propagatorContext;
class Annotation_global_wasp_propagator_beginContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_WASP_PROPAGATOR() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_PROPAGATOR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_wasp_propagator_begin; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_wasp_propagator_begin) {
            listener.enterAnnotation_global_wasp_propagator_begin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_wasp_propagator_begin) {
            listener.exitAnnotation_global_wasp_propagator_begin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_wasp_propagator_begin) {
            return visitor.visitAnnotation_global_wasp_propagator_begin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_wasp_propagator_beginContext = Annotation_global_wasp_propagator_beginContext;
class Annotation_global_wasp_heuristicContext extends ParserRuleContext_1.ParserRuleContext {
    annotation_global_wasp_heuristic_begin() {
        return this.getRuleContext(0, Annotation_global_wasp_heuristic_beginContext);
    }
    PARAM_OPEN() { return this.getToken(ASPCore2Parser.PARAM_OPEN, 0); }
    ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE, 0); }
    EQUAL(i) {
        if (i === undefined) {
            return this.getTokens(ASPCore2Parser.EQUAL);
        }
        else {
            return this.getToken(ASPCore2Parser.EQUAL, i);
        }
    }
    heuristic_python_file() {
        return this.getRuleContext(0, Heuristic_python_fileContext);
    }
    COMMA() { return this.getToken(ASPCore2Parser.COMMA, 0); }
    ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS, 0); }
    CURLY_OPEN() { return this.getToken(ASPCore2Parser.CURLY_OPEN, 0); }
    aggregate_elements_heuristic() {
        return this.getRuleContext(0, Aggregate_elements_heuristicContext);
    }
    CURLY_CLOSE() { return this.getToken(ASPCore2Parser.CURLY_CLOSE, 0); }
    PARAM_CLOSE() { return this.getToken(ASPCore2Parser.PARAM_CLOSE, 0); }
    DOT() { return this.getToken(ASPCore2Parser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_wasp_heuristic; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_wasp_heuristic) {
            listener.enterAnnotation_global_wasp_heuristic(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_wasp_heuristic) {
            listener.exitAnnotation_global_wasp_heuristic(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_wasp_heuristic) {
            return visitor.visitAnnotation_global_wasp_heuristic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_wasp_heuristicContext = Annotation_global_wasp_heuristicContext;
class Annotation_global_wasp_heuristic_beginContext extends ParserRuleContext_1.ParserRuleContext {
    ANNOTATION_GLOBAL_WASP_HEURISTIC() { return this.getToken(ASPCore2Parser.ANNOTATION_GLOBAL_WASP_HEURISTIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_annotation_global_wasp_heuristic_begin; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation_global_wasp_heuristic_begin) {
            listener.enterAnnotation_global_wasp_heuristic_begin(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation_global_wasp_heuristic_begin) {
            listener.exitAnnotation_global_wasp_heuristic_begin(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation_global_wasp_heuristic_begin) {
            return visitor.visitAnnotation_global_wasp_heuristic_begin(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Annotation_global_wasp_heuristic_beginContext = Annotation_global_wasp_heuristic_beginContext;
class Heuristic_python_fileContext extends ParserRuleContext_1.ParserRuleContext {
    STRING() { return this.getToken(ASPCore2Parser.STRING, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_heuristic_python_file; }
    // @Override
    enterRule(listener) {
        if (listener.enterHeuristic_python_file) {
            listener.enterHeuristic_python_file(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitHeuristic_python_file) {
            listener.exitHeuristic_python_file(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitHeuristic_python_file) {
            return visitor.visitHeuristic_python_file(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Heuristic_python_fileContext = Heuristic_python_fileContext;
class Aggregate_element_heuristicContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_element() {
        return this.tryGetRuleContext(0, Aggregate_elementContext);
    }
    classic_literal() {
        return this.tryGetRuleContext(0, Classic_literalContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_element_heuristic; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_element_heuristic) {
            listener.enterAggregate_element_heuristic(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_element_heuristic) {
            listener.exitAggregate_element_heuristic(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_element_heuristic) {
            return visitor.visitAggregate_element_heuristic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_element_heuristicContext = Aggregate_element_heuristicContext;
class Aggregate_elements_heuristicContext extends ParserRuleContext_1.ParserRuleContext {
    aggregate_element_heuristic() {
        return this.getRuleContext(0, Aggregate_element_heuristicContext);
    }
    SEMICOLON() { return this.tryGetToken(ASPCore2Parser.SEMICOLON, 0); }
    aggregate_elements_heuristic() {
        return this.tryGetRuleContext(0, Aggregate_elements_heuristicContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return ASPCore2Parser.RULE_aggregate_elements_heuristic; }
    // @Override
    enterRule(listener) {
        if (listener.enterAggregate_elements_heuristic) {
            listener.enterAggregate_elements_heuristic(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAggregate_elements_heuristic) {
            listener.exitAggregate_elements_heuristic(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAggregate_elements_heuristic) {
            return visitor.visitAggregate_elements_heuristic(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Aggregate_elements_heuristicContext = Aggregate_elements_heuristicContext;
//# sourceMappingURL=ASPCore2Parser.js.map