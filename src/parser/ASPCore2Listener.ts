// Generated from src/parser/ASPCore2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./ASPCore2Parser";
import { RuleContext } from "./ASPCore2Parser";
import { Simple_ruleContext } from "./ASPCore2Parser";
import { HeadContext } from "./ASPCore2Parser";
import { BodyContext } from "./ASPCore2Parser";
import { Weight_at_levelsContext } from "./ASPCore2Parser";
import { Levels_and_termsContext } from "./ASPCore2Parser";
import { DisjunctionContext } from "./ASPCore2Parser";
import { ConjunctionContext } from "./ASPCore2Parser";
import { Choice_atomContext } from "./ASPCore2Parser";
import { Lower_guardContext } from "./ASPCore2Parser";
import { Upper_guardContext } from "./ASPCore2Parser";
import { Choice_elementsContext } from "./ASPCore2Parser";
import { Choice_elementContext } from "./ASPCore2Parser";
import { Choice_element_atomContext } from "./ASPCore2Parser";
import { Choice_elements_literalsContext } from "./ASPCore2Parser";
import { Naf_literalsContext } from "./ASPCore2Parser";
import { Naf_literalContext } from "./ASPCore2Parser";
import { Naf_literal_aggregateContext } from "./ASPCore2Parser";
import { Existential_atomContext } from "./ASPCore2Parser";
import { Classic_literalContext } from "./ASPCore2Parser";
import { AtomContext } from "./ASPCore2Parser";
import { ExtAtomContext } from "./ASPCore2Parser";
import { ExtSemicolContext } from "./ASPCore2Parser";
import { TermsContext } from "./ASPCore2Parser";
import { Basic_termsContext } from "./ASPCore2Parser";
import { Builtin_atomContext } from "./ASPCore2Parser";
import { CompareopContext } from "./ASPCore2Parser";
import { BinopContext } from "./ASPCore2Parser";
import { Arithop1Context } from "./ASPCore2Parser";
import { Arithop2Context } from "./ASPCore2Parser";
import { Term_Context } from "./ASPCore2Parser";
import { Term__Context } from "./ASPCore2Parser";
import { TermContext } from "./ASPCore2Parser";
import { ExprContext } from "./ASPCore2Parser";
import { FactorContext } from "./ASPCore2Parser";
import { Basic_termContext } from "./ASPCore2Parser";
import { Ground_termContext } from "./ASPCore2Parser";
import { Variable_termContext } from "./ASPCore2Parser";
import { Functional_termContext } from "./ASPCore2Parser";
import { VarsContext } from "./ASPCore2Parser";
import { IdentifierContext } from "./ASPCore2Parser";
import { DirectiveContext } from "./ASPCore2Parser";
import { QueryContext } from "./ASPCore2Parser";
import { Lower_guard_compare_aggregateContext } from "./ASPCore2Parser";
import { Upper_guard_compare_aggregateContext } from "./ASPCore2Parser";
import { Compare_aggregateContext } from "./ASPCore2Parser";
import { Lower_guard_leftward_left_aggregateContext } from "./ASPCore2Parser";
import { Leftward_left_aggregateContext } from "./ASPCore2Parser";
import { Left_aggregateContext } from "./ASPCore2Parser";
import { Lower_guard_rightward_left_aggregateContext } from "./ASPCore2Parser";
import { Rightward_left_aggregateContext } from "./ASPCore2Parser";
import { Upper_guard_leftward_right_aggregateContext } from "./ASPCore2Parser";
import { Upper_guard_rightward_right_aggregateContext } from "./ASPCore2Parser";
import { Right_aggregateContext } from "./ASPCore2Parser";
import { Aggregate_atomContext } from "./ASPCore2Parser";
import { LeftwardopContext } from "./ASPCore2Parser";
import { RightwardopContext } from "./ASPCore2Parser";
import { AggregateContext } from "./ASPCore2Parser";
import { Aggregate_elementsContext } from "./ASPCore2Parser";
import { Aggregate_elementContext } from "./ASPCore2Parser";
import { Aggregate_functionContext } from "./ASPCore2Parser";
import { Annotation_globalContext } from "./ASPCore2Parser";
import { Annotations_ruleContext } from "./ASPCore2Parser";
import { Annotation_ruleContext } from "./ASPCore2Parser";
import { Annotation_rule_to_decomposeContext } from "./ASPCore2Parser";
import { Annotation_rule_to_not_decomposeContext } from "./ASPCore2Parser";
import { Annotation_rule_orderingContext } from "./ASPCore2Parser";
import { Annotation_global_orderingContext } from "./ASPCore2Parser";
import { Annotation_global_extatom_conversionContext } from "./ASPCore2Parser";
import { Annotation_extpredicateContext } from "./ASPCore2Parser";
import { Extatom_conv_typesContext } from "./ASPCore2Parser";
import { Extatom_conv_typeContext } from "./ASPCore2Parser";
import { Rule_ordering_typeContext } from "./ASPCore2Parser";
import { Global_ordering_typeContext } from "./ASPCore2Parser";
import { Annotation_rule_atom_indexedContext } from "./ASPCore2Parser";
import { Annotation_global_atom_indexedContext } from "./ASPCore2Parser";
import { Rule_indexing_argumentsContext } from "./ASPCore2Parser";
import { Rule_naf_literal_annotationContext } from "./ASPCore2Parser";
import { Global_indexing_argumentsContext } from "./ASPCore2Parser";
import { Global_naf_literal_annotationContext } from "./ASPCore2Parser";
import { Rule_atom_annotation_beforeContext } from "./ASPCore2Parser";
import { Global_atom_annotation_beforeContext } from "./ASPCore2Parser";
import { Rule_atom_annotation_afterContext } from "./ASPCore2Parser";
import { Global_atom_annotation_afterContext } from "./ASPCore2Parser";
import { Rule_atoms_annotation_beforeContext } from "./ASPCore2Parser";
import { Global_atoms_annotation_beforeContext } from "./ASPCore2Parser";
import { Rule_atoms_annotation_afterContext } from "./ASPCore2Parser";
import { Global_atoms_annotation_afterContext } from "./ASPCore2Parser";
import { Annotation_rule_partial_order_beginContext } from "./ASPCore2Parser";
import { Annotation_global_partial_order_beginContext } from "./ASPCore2Parser";
import { Annotation_rule_partial_orderContext } from "./ASPCore2Parser";
import { Annotation_global_partial_orderContext } from "./ASPCore2Parser";
import { Annotation_rule_projectionContext } from "./ASPCore2Parser";
import { Annotation_rule_projection_valueContext } from "./ASPCore2Parser";
import { Annotation_rule_rewriting_arithContext } from "./ASPCore2Parser";
import { Annotation_rule_align_substitutionsContext } from "./ASPCore2Parser";
import { Annotation_rule_look_aheadContext } from "./ASPCore2Parser";
import { Annotation_global_wasp_propagatorContext } from "./ASPCore2Parser";
import { Annotation_global_wasp_propagator_beginContext } from "./ASPCore2Parser";
import { Annotation_global_wasp_heuristicContext } from "./ASPCore2Parser";
import { Annotation_global_wasp_heuristic_beginContext } from "./ASPCore2Parser";
import { Heuristic_python_fileContext } from "./ASPCore2Parser";
import { Aggregate_element_heuristicContext } from "./ASPCore2Parser";
import { Aggregate_elements_heuristicContext } from "./ASPCore2Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ASPCore2Parser`.
 */
export interface ASPCore2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ASPCore2Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule`.
	 * @param ctx the parse tree
	 */
	enterRule?: (ctx: RuleContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule`.
	 * @param ctx the parse tree
	 */
	exitRule?: (ctx: RuleContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.simple_rule`.
	 * @param ctx the parse tree
	 */
	enterSimple_rule?: (ctx: Simple_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.simple_rule`.
	 * @param ctx the parse tree
	 */
	exitSimple_rule?: (ctx: Simple_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.head`.
	 * @param ctx the parse tree
	 */
	enterHead?: (ctx: HeadContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.head`.
	 * @param ctx the parse tree
	 */
	exitHead?: (ctx: HeadContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.weight_at_levels`.
	 * @param ctx the parse tree
	 */
	enterWeight_at_levels?: (ctx: Weight_at_levelsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.weight_at_levels`.
	 * @param ctx the parse tree
	 */
	exitWeight_at_levels?: (ctx: Weight_at_levelsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.levels_and_terms`.
	 * @param ctx the parse tree
	 */
	enterLevels_and_terms?: (ctx: Levels_and_termsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.levels_and_terms`.
	 * @param ctx the parse tree
	 */
	exitLevels_and_terms?: (ctx: Levels_and_termsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.disjunction`.
	 * @param ctx the parse tree
	 */
	enterDisjunction?: (ctx: DisjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.disjunction`.
	 * @param ctx the parse tree
	 */
	exitDisjunction?: (ctx: DisjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.conjunction`.
	 * @param ctx the parse tree
	 */
	enterConjunction?: (ctx: ConjunctionContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.conjunction`.
	 * @param ctx the parse tree
	 */
	exitConjunction?: (ctx: ConjunctionContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.choice_atom`.
	 * @param ctx the parse tree
	 */
	enterChoice_atom?: (ctx: Choice_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.choice_atom`.
	 * @param ctx the parse tree
	 */
	exitChoice_atom?: (ctx: Choice_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.lower_guard`.
	 * @param ctx the parse tree
	 */
	enterLower_guard?: (ctx: Lower_guardContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.lower_guard`.
	 * @param ctx the parse tree
	 */
	exitLower_guard?: (ctx: Lower_guardContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.upper_guard`.
	 * @param ctx the parse tree
	 */
	enterUpper_guard?: (ctx: Upper_guardContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.upper_guard`.
	 * @param ctx the parse tree
	 */
	exitUpper_guard?: (ctx: Upper_guardContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.choice_elements`.
	 * @param ctx the parse tree
	 */
	enterChoice_elements?: (ctx: Choice_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.choice_elements`.
	 * @param ctx the parse tree
	 */
	exitChoice_elements?: (ctx: Choice_elementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.choice_element`.
	 * @param ctx the parse tree
	 */
	enterChoice_element?: (ctx: Choice_elementContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.choice_element`.
	 * @param ctx the parse tree
	 */
	exitChoice_element?: (ctx: Choice_elementContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.choice_element_atom`.
	 * @param ctx the parse tree
	 */
	enterChoice_element_atom?: (ctx: Choice_element_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.choice_element_atom`.
	 * @param ctx the parse tree
	 */
	exitChoice_element_atom?: (ctx: Choice_element_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.choice_elements_literals`.
	 * @param ctx the parse tree
	 */
	enterChoice_elements_literals?: (ctx: Choice_elements_literalsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.choice_elements_literals`.
	 * @param ctx the parse tree
	 */
	exitChoice_elements_literals?: (ctx: Choice_elements_literalsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.naf_literals`.
	 * @param ctx the parse tree
	 */
	enterNaf_literals?: (ctx: Naf_literalsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.naf_literals`.
	 * @param ctx the parse tree
	 */
	exitNaf_literals?: (ctx: Naf_literalsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.naf_literal`.
	 * @param ctx the parse tree
	 */
	enterNaf_literal?: (ctx: Naf_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.naf_literal`.
	 * @param ctx the parse tree
	 */
	exitNaf_literal?: (ctx: Naf_literalContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.naf_literal_aggregate`.
	 * @param ctx the parse tree
	 */
	enterNaf_literal_aggregate?: (ctx: Naf_literal_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.naf_literal_aggregate`.
	 * @param ctx the parse tree
	 */
	exitNaf_literal_aggregate?: (ctx: Naf_literal_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.existential_atom`.
	 * @param ctx the parse tree
	 */
	enterExistential_atom?: (ctx: Existential_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.existential_atom`.
	 * @param ctx the parse tree
	 */
	exitExistential_atom?: (ctx: Existential_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.classic_literal`.
	 * @param ctx the parse tree
	 */
	enterClassic_literal?: (ctx: Classic_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.classic_literal`.
	 * @param ctx the parse tree
	 */
	exitClassic_literal?: (ctx: Classic_literalContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.extAtom`.
	 * @param ctx the parse tree
	 */
	enterExtAtom?: (ctx: ExtAtomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.extAtom`.
	 * @param ctx the parse tree
	 */
	exitExtAtom?: (ctx: ExtAtomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.extSemicol`.
	 * @param ctx the parse tree
	 */
	enterExtSemicol?: (ctx: ExtSemicolContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.extSemicol`.
	 * @param ctx the parse tree
	 */
	exitExtSemicol?: (ctx: ExtSemicolContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.terms`.
	 * @param ctx the parse tree
	 */
	enterTerms?: (ctx: TermsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.terms`.
	 * @param ctx the parse tree
	 */
	exitTerms?: (ctx: TermsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.basic_terms`.
	 * @param ctx the parse tree
	 */
	enterBasic_terms?: (ctx: Basic_termsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.basic_terms`.
	 * @param ctx the parse tree
	 */
	exitBasic_terms?: (ctx: Basic_termsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.builtin_atom`.
	 * @param ctx the parse tree
	 */
	enterBuiltin_atom?: (ctx: Builtin_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.builtin_atom`.
	 * @param ctx the parse tree
	 */
	exitBuiltin_atom?: (ctx: Builtin_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.compareop`.
	 * @param ctx the parse tree
	 */
	enterCompareop?: (ctx: CompareopContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.compareop`.
	 * @param ctx the parse tree
	 */
	exitCompareop?: (ctx: CompareopContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.arithop1`.
	 * @param ctx the parse tree
	 */
	enterArithop1?: (ctx: Arithop1Context) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.arithop1`.
	 * @param ctx the parse tree
	 */
	exitArithop1?: (ctx: Arithop1Context) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.arithop2`.
	 * @param ctx the parse tree
	 */
	enterArithop2?: (ctx: Arithop2Context) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.arithop2`.
	 * @param ctx the parse tree
	 */
	exitArithop2?: (ctx: Arithop2Context) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.term_`.
	 * @param ctx the parse tree
	 */
	enterTerm_?: (ctx: Term_Context) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.term_`.
	 * @param ctx the parse tree
	 */
	exitTerm_?: (ctx: Term_Context) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.term__`.
	 * @param ctx the parse tree
	 */
	enterTerm__?: (ctx: Term__Context) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.term__`.
	 * @param ctx the parse tree
	 */
	exitTerm__?: (ctx: Term__Context) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.basic_term`.
	 * @param ctx the parse tree
	 */
	enterBasic_term?: (ctx: Basic_termContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.basic_term`.
	 * @param ctx the parse tree
	 */
	exitBasic_term?: (ctx: Basic_termContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.ground_term`.
	 * @param ctx the parse tree
	 */
	enterGround_term?: (ctx: Ground_termContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.ground_term`.
	 * @param ctx the parse tree
	 */
	exitGround_term?: (ctx: Ground_termContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.variable_term`.
	 * @param ctx the parse tree
	 */
	enterVariable_term?: (ctx: Variable_termContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.variable_term`.
	 * @param ctx the parse tree
	 */
	exitVariable_term?: (ctx: Variable_termContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.functional_term`.
	 * @param ctx the parse tree
	 */
	enterFunctional_term?: (ctx: Functional_termContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.functional_term`.
	 * @param ctx the parse tree
	 */
	exitFunctional_term?: (ctx: Functional_termContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.vars`.
	 * @param ctx the parse tree
	 */
	enterVars?: (ctx: VarsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.vars`.
	 * @param ctx the parse tree
	 */
	exitVars?: (ctx: VarsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.lower_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 */
	enterLower_guard_compare_aggregate?: (ctx: Lower_guard_compare_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.lower_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 */
	exitLower_guard_compare_aggregate?: (ctx: Lower_guard_compare_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.upper_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 */
	enterUpper_guard_compare_aggregate?: (ctx: Upper_guard_compare_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.upper_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 */
	exitUpper_guard_compare_aggregate?: (ctx: Upper_guard_compare_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.compare_aggregate`.
	 * @param ctx the parse tree
	 */
	enterCompare_aggregate?: (ctx: Compare_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.compare_aggregate`.
	 * @param ctx the parse tree
	 */
	exitCompare_aggregate?: (ctx: Compare_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.lower_guard_leftward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	enterLower_guard_leftward_left_aggregate?: (ctx: Lower_guard_leftward_left_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.lower_guard_leftward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	exitLower_guard_leftward_left_aggregate?: (ctx: Lower_guard_leftward_left_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.leftward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	enterLeftward_left_aggregate?: (ctx: Leftward_left_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.leftward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	exitLeftward_left_aggregate?: (ctx: Leftward_left_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.left_aggregate`.
	 * @param ctx the parse tree
	 */
	enterLeft_aggregate?: (ctx: Left_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.left_aggregate`.
	 * @param ctx the parse tree
	 */
	exitLeft_aggregate?: (ctx: Left_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.lower_guard_rightward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	enterLower_guard_rightward_left_aggregate?: (ctx: Lower_guard_rightward_left_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.lower_guard_rightward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	exitLower_guard_rightward_left_aggregate?: (ctx: Lower_guard_rightward_left_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rightward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	enterRightward_left_aggregate?: (ctx: Rightward_left_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rightward_left_aggregate`.
	 * @param ctx the parse tree
	 */
	exitRightward_left_aggregate?: (ctx: Rightward_left_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.upper_guard_leftward_right_aggregate`.
	 * @param ctx the parse tree
	 */
	enterUpper_guard_leftward_right_aggregate?: (ctx: Upper_guard_leftward_right_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.upper_guard_leftward_right_aggregate`.
	 * @param ctx the parse tree
	 */
	exitUpper_guard_leftward_right_aggregate?: (ctx: Upper_guard_leftward_right_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.upper_guard_rightward_right_aggregate`.
	 * @param ctx the parse tree
	 */
	enterUpper_guard_rightward_right_aggregate?: (ctx: Upper_guard_rightward_right_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.upper_guard_rightward_right_aggregate`.
	 * @param ctx the parse tree
	 */
	exitUpper_guard_rightward_right_aggregate?: (ctx: Upper_guard_rightward_right_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.right_aggregate`.
	 * @param ctx the parse tree
	 */
	enterRight_aggregate?: (ctx: Right_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.right_aggregate`.
	 * @param ctx the parse tree
	 */
	exitRight_aggregate?: (ctx: Right_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_atom`.
	 * @param ctx the parse tree
	 */
	enterAggregate_atom?: (ctx: Aggregate_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_atom`.
	 * @param ctx the parse tree
	 */
	exitAggregate_atom?: (ctx: Aggregate_atomContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.leftwardop`.
	 * @param ctx the parse tree
	 */
	enterLeftwardop?: (ctx: LeftwardopContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.leftwardop`.
	 * @param ctx the parse tree
	 */
	exitLeftwardop?: (ctx: LeftwardopContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rightwardop`.
	 * @param ctx the parse tree
	 */
	enterRightwardop?: (ctx: RightwardopContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rightwardop`.
	 * @param ctx the parse tree
	 */
	exitRightwardop?: (ctx: RightwardopContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate`.
	 * @param ctx the parse tree
	 */
	enterAggregate?: (ctx: AggregateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate`.
	 * @param ctx the parse tree
	 */
	exitAggregate?: (ctx: AggregateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_elements`.
	 * @param ctx the parse tree
	 */
	enterAggregate_elements?: (ctx: Aggregate_elementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_elements`.
	 * @param ctx the parse tree
	 */
	exitAggregate_elements?: (ctx: Aggregate_elementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_element`.
	 * @param ctx the parse tree
	 */
	enterAggregate_element?: (ctx: Aggregate_elementContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_element`.
	 * @param ctx the parse tree
	 */
	exitAggregate_element?: (ctx: Aggregate_elementContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_function`.
	 * @param ctx the parse tree
	 */
	enterAggregate_function?: (ctx: Aggregate_functionContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_function`.
	 * @param ctx the parse tree
	 */
	exitAggregate_function?: (ctx: Aggregate_functionContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global?: (ctx: Annotation_globalContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global?: (ctx: Annotation_globalContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotations_rule`.
	 * @param ctx the parse tree
	 */
	enterAnnotations_rule?: (ctx: Annotations_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotations_rule`.
	 * @param ctx the parse tree
	 */
	exitAnnotations_rule?: (ctx: Annotations_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule?: (ctx: Annotation_ruleContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule?: (ctx: Annotation_ruleContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_to_decompose`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_to_decompose?: (ctx: Annotation_rule_to_decomposeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_to_decompose`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_to_decompose?: (ctx: Annotation_rule_to_decomposeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_to_not_decompose`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_to_not_decompose?: (ctx: Annotation_rule_to_not_decomposeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_to_not_decompose`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_to_not_decompose?: (ctx: Annotation_rule_to_not_decomposeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_ordering`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_ordering?: (ctx: Annotation_rule_orderingContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_ordering`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_ordering?: (ctx: Annotation_rule_orderingContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_ordering`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_ordering?: (ctx: Annotation_global_orderingContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_ordering`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_ordering?: (ctx: Annotation_global_orderingContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_extatom_conversion`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_extatom_conversion?: (ctx: Annotation_global_extatom_conversionContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_extatom_conversion`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_extatom_conversion?: (ctx: Annotation_global_extatom_conversionContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_extpredicate`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_extpredicate?: (ctx: Annotation_extpredicateContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_extpredicate`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_extpredicate?: (ctx: Annotation_extpredicateContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.extatom_conv_types`.
	 * @param ctx the parse tree
	 */
	enterExtatom_conv_types?: (ctx: Extatom_conv_typesContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.extatom_conv_types`.
	 * @param ctx the parse tree
	 */
	exitExtatom_conv_types?: (ctx: Extatom_conv_typesContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.extatom_conv_type`.
	 * @param ctx the parse tree
	 */
	enterExtatom_conv_type?: (ctx: Extatom_conv_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.extatom_conv_type`.
	 * @param ctx the parse tree
	 */
	exitExtatom_conv_type?: (ctx: Extatom_conv_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_ordering_type`.
	 * @param ctx the parse tree
	 */
	enterRule_ordering_type?: (ctx: Rule_ordering_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_ordering_type`.
	 * @param ctx the parse tree
	 */
	exitRule_ordering_type?: (ctx: Rule_ordering_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_ordering_type`.
	 * @param ctx the parse tree
	 */
	enterGlobal_ordering_type?: (ctx: Global_ordering_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_ordering_type`.
	 * @param ctx the parse tree
	 */
	exitGlobal_ordering_type?: (ctx: Global_ordering_typeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_atom_indexed`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_atom_indexed?: (ctx: Annotation_rule_atom_indexedContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_atom_indexed`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_atom_indexed?: (ctx: Annotation_rule_atom_indexedContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_atom_indexed`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_atom_indexed?: (ctx: Annotation_global_atom_indexedContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_atom_indexed`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_atom_indexed?: (ctx: Annotation_global_atom_indexedContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_indexing_arguments`.
	 * @param ctx the parse tree
	 */
	enterRule_indexing_arguments?: (ctx: Rule_indexing_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_indexing_arguments`.
	 * @param ctx the parse tree
	 */
	exitRule_indexing_arguments?: (ctx: Rule_indexing_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_naf_literal_annotation`.
	 * @param ctx the parse tree
	 */
	enterRule_naf_literal_annotation?: (ctx: Rule_naf_literal_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_naf_literal_annotation`.
	 * @param ctx the parse tree
	 */
	exitRule_naf_literal_annotation?: (ctx: Rule_naf_literal_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_indexing_arguments`.
	 * @param ctx the parse tree
	 */
	enterGlobal_indexing_arguments?: (ctx: Global_indexing_argumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_indexing_arguments`.
	 * @param ctx the parse tree
	 */
	exitGlobal_indexing_arguments?: (ctx: Global_indexing_argumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_naf_literal_annotation`.
	 * @param ctx the parse tree
	 */
	enterGlobal_naf_literal_annotation?: (ctx: Global_naf_literal_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_naf_literal_annotation`.
	 * @param ctx the parse tree
	 */
	exitGlobal_naf_literal_annotation?: (ctx: Global_naf_literal_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_atom_annotation_before`.
	 * @param ctx the parse tree
	 */
	enterRule_atom_annotation_before?: (ctx: Rule_atom_annotation_beforeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_atom_annotation_before`.
	 * @param ctx the parse tree
	 */
	exitRule_atom_annotation_before?: (ctx: Rule_atom_annotation_beforeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_atom_annotation_before`.
	 * @param ctx the parse tree
	 */
	enterGlobal_atom_annotation_before?: (ctx: Global_atom_annotation_beforeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_atom_annotation_before`.
	 * @param ctx the parse tree
	 */
	exitGlobal_atom_annotation_before?: (ctx: Global_atom_annotation_beforeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_atom_annotation_after`.
	 * @param ctx the parse tree
	 */
	enterRule_atom_annotation_after?: (ctx: Rule_atom_annotation_afterContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_atom_annotation_after`.
	 * @param ctx the parse tree
	 */
	exitRule_atom_annotation_after?: (ctx: Rule_atom_annotation_afterContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_atom_annotation_after`.
	 * @param ctx the parse tree
	 */
	enterGlobal_atom_annotation_after?: (ctx: Global_atom_annotation_afterContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_atom_annotation_after`.
	 * @param ctx the parse tree
	 */
	exitGlobal_atom_annotation_after?: (ctx: Global_atom_annotation_afterContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_before`.
	 * @param ctx the parse tree
	 */
	enterRule_atoms_annotation_before?: (ctx: Rule_atoms_annotation_beforeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_before`.
	 * @param ctx the parse tree
	 */
	exitRule_atoms_annotation_before?: (ctx: Rule_atoms_annotation_beforeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_atoms_annotation_before`.
	 * @param ctx the parse tree
	 */
	enterGlobal_atoms_annotation_before?: (ctx: Global_atoms_annotation_beforeContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_atoms_annotation_before`.
	 * @param ctx the parse tree
	 */
	exitGlobal_atoms_annotation_before?: (ctx: Global_atoms_annotation_beforeContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_after`.
	 * @param ctx the parse tree
	 */
	enterRule_atoms_annotation_after?: (ctx: Rule_atoms_annotation_afterContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_after`.
	 * @param ctx the parse tree
	 */
	exitRule_atoms_annotation_after?: (ctx: Rule_atoms_annotation_afterContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.global_atoms_annotation_after`.
	 * @param ctx the parse tree
	 */
	enterGlobal_atoms_annotation_after?: (ctx: Global_atoms_annotation_afterContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.global_atoms_annotation_after`.
	 * @param ctx the parse tree
	 */
	exitGlobal_atoms_annotation_after?: (ctx: Global_atoms_annotation_afterContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order_begin`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_partial_order_begin?: (ctx: Annotation_rule_partial_order_beginContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order_begin`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_partial_order_begin?: (ctx: Annotation_rule_partial_order_beginContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_partial_order_begin`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_partial_order_begin?: (ctx: Annotation_global_partial_order_beginContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_partial_order_begin`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_partial_order_begin?: (ctx: Annotation_global_partial_order_beginContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_partial_order?: (ctx: Annotation_rule_partial_orderContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_partial_order?: (ctx: Annotation_rule_partial_orderContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_partial_order`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_partial_order?: (ctx: Annotation_global_partial_orderContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_partial_order`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_partial_order?: (ctx: Annotation_global_partial_orderContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_projection`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_projection?: (ctx: Annotation_rule_projectionContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_projection`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_projection?: (ctx: Annotation_rule_projectionContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_projection_value`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_projection_value?: (ctx: Annotation_rule_projection_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_projection_value`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_projection_value?: (ctx: Annotation_rule_projection_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_rewriting_arith`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_rewriting_arith?: (ctx: Annotation_rule_rewriting_arithContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_rewriting_arith`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_rewriting_arith?: (ctx: Annotation_rule_rewriting_arithContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_align_substitutions`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_align_substitutions?: (ctx: Annotation_rule_align_substitutionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_align_substitutions`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_align_substitutions?: (ctx: Annotation_rule_align_substitutionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_rule_look_ahead`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_rule_look_ahead?: (ctx: Annotation_rule_look_aheadContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_rule_look_ahead`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_rule_look_ahead?: (ctx: Annotation_rule_look_aheadContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_wasp_propagator?: (ctx: Annotation_global_wasp_propagatorContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_wasp_propagator?: (ctx: Annotation_global_wasp_propagatorContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator_begin`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_wasp_propagator_begin?: (ctx: Annotation_global_wasp_propagator_beginContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator_begin`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_wasp_propagator_begin?: (ctx: Annotation_global_wasp_propagator_beginContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_wasp_heuristic?: (ctx: Annotation_global_wasp_heuristicContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_wasp_heuristic?: (ctx: Annotation_global_wasp_heuristicContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic_begin`.
	 * @param ctx the parse tree
	 */
	enterAnnotation_global_wasp_heuristic_begin?: (ctx: Annotation_global_wasp_heuristic_beginContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic_begin`.
	 * @param ctx the parse tree
	 */
	exitAnnotation_global_wasp_heuristic_begin?: (ctx: Annotation_global_wasp_heuristic_beginContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.heuristic_python_file`.
	 * @param ctx the parse tree
	 */
	enterHeuristic_python_file?: (ctx: Heuristic_python_fileContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.heuristic_python_file`.
	 * @param ctx the parse tree
	 */
	exitHeuristic_python_file?: (ctx: Heuristic_python_fileContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_element_heuristic`.
	 * @param ctx the parse tree
	 */
	enterAggregate_element_heuristic?: (ctx: Aggregate_element_heuristicContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_element_heuristic`.
	 * @param ctx the parse tree
	 */
	exitAggregate_element_heuristic?: (ctx: Aggregate_element_heuristicContext) => void;

	/**
	 * Enter a parse tree produced by `ASPCore2Parser.aggregate_elements_heuristic`.
	 * @param ctx the parse tree
	 */
	enterAggregate_elements_heuristic?: (ctx: Aggregate_elements_heuristicContext) => void;
	/**
	 * Exit a parse tree produced by `ASPCore2Parser.aggregate_elements_heuristic`.
	 * @param ctx the parse tree
	 */
	exitAggregate_elements_heuristic?: (ctx: Aggregate_elements_heuristicContext) => void;
}

