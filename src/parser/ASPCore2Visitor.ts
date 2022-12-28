// Generated from ./src/parser/ASPCore2.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
import { TestsContext } from "./ASPCore2Parser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ASPCore2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ASPCore2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ASPCore2Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule?: (ctx: RuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.simple_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_rule?: (ctx: Simple_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.head`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHead?: (ctx: HeadContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.weight_at_levels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeight_at_levels?: (ctx: Weight_at_levelsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.levels_and_terms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevels_and_terms?: (ctx: Levels_and_termsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.disjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunction?: (ctx: DisjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.conjunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunction?: (ctx: ConjunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.choice_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice_atom?: (ctx: Choice_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.lower_guard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLower_guard?: (ctx: Lower_guardContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.upper_guard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_guard?: (ctx: Upper_guardContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.choice_elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice_elements?: (ctx: Choice_elementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.choice_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice_element?: (ctx: Choice_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.choice_element_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice_element_atom?: (ctx: Choice_element_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.choice_elements_literals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoice_elements_literals?: (ctx: Choice_elements_literalsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.naf_literals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNaf_literals?: (ctx: Naf_literalsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.naf_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNaf_literal?: (ctx: Naf_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.naf_literal_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNaf_literal_aggregate?: (ctx: Naf_literal_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.existential_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistential_atom?: (ctx: Existential_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.classic_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassic_literal?: (ctx: Classic_literalContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.extAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtAtom?: (ctx: ExtAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.extSemicol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtSemicol?: (ctx: ExtSemicolContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.terms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerms?: (ctx: TermsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.basic_terms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_terms?: (ctx: Basic_termsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.builtin_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltin_atom?: (ctx: Builtin_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.compareop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareop?: (ctx: CompareopContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.binop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinop?: (ctx: BinopContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.arithop1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithop1?: (ctx: Arithop1Context) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.arithop2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithop2?: (ctx: Arithop2Context) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.term_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm_?: (ctx: Term_Context) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.term__`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm__?: (ctx: Term__Context) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.basic_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasic_term?: (ctx: Basic_termContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.ground_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGround_term?: (ctx: Ground_termContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.variable_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable_term?: (ctx: Variable_termContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.functional_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctional_term?: (ctx: Functional_termContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.vars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVars?: (ctx: VarsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.tests`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTests?: (ctx: TestsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.lower_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLower_guard_compare_aggregate?: (ctx: Lower_guard_compare_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.upper_guard_compare_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_guard_compare_aggregate?: (ctx: Upper_guard_compare_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.compare_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompare_aggregate?: (ctx: Compare_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.lower_guard_leftward_left_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLower_guard_leftward_left_aggregate?: (ctx: Lower_guard_leftward_left_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.leftward_left_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftward_left_aggregate?: (ctx: Leftward_left_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.left_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeft_aggregate?: (ctx: Left_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.lower_guard_rightward_left_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLower_guard_rightward_left_aggregate?: (ctx: Lower_guard_rightward_left_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rightward_left_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightward_left_aggregate?: (ctx: Rightward_left_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.upper_guard_leftward_right_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_guard_leftward_right_aggregate?: (ctx: Upper_guard_leftward_right_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.upper_guard_rightward_right_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpper_guard_rightward_right_aggregate?: (ctx: Upper_guard_rightward_right_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.right_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRight_aggregate?: (ctx: Right_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_atom?: (ctx: Aggregate_atomContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.leftwardop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftwardop?: (ctx: LeftwardopContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rightwardop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightwardop?: (ctx: RightwardopContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate?: (ctx: AggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_elements?: (ctx: Aggregate_elementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_element?: (ctx: Aggregate_elementContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_function?: (ctx: Aggregate_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global?: (ctx: Annotation_globalContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotations_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations_rule?: (ctx: Annotations_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule?: (ctx: Annotation_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_to_decompose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_to_decompose?: (ctx: Annotation_rule_to_decomposeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_to_not_decompose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_to_not_decompose?: (ctx: Annotation_rule_to_not_decomposeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_ordering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_ordering?: (ctx: Annotation_rule_orderingContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_ordering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_ordering?: (ctx: Annotation_global_orderingContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_extatom_conversion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_extatom_conversion?: (ctx: Annotation_global_extatom_conversionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_extpredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_extpredicate?: (ctx: Annotation_extpredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.extatom_conv_types`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtatom_conv_types?: (ctx: Extatom_conv_typesContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.extatom_conv_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtatom_conv_type?: (ctx: Extatom_conv_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_ordering_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_ordering_type?: (ctx: Rule_ordering_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_ordering_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_ordering_type?: (ctx: Global_ordering_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_atom_indexed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_atom_indexed?: (ctx: Annotation_rule_atom_indexedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_atom_indexed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_atom_indexed?: (ctx: Annotation_global_atom_indexedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_indexing_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_indexing_arguments?: (ctx: Rule_indexing_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_naf_literal_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_naf_literal_annotation?: (ctx: Rule_naf_literal_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_indexing_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_indexing_arguments?: (ctx: Global_indexing_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_naf_literal_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_naf_literal_annotation?: (ctx: Global_naf_literal_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_atom_annotation_before`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_atom_annotation_before?: (ctx: Rule_atom_annotation_beforeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_atom_annotation_before`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_atom_annotation_before?: (ctx: Global_atom_annotation_beforeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_atom_annotation_after`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_atom_annotation_after?: (ctx: Rule_atom_annotation_afterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_atom_annotation_after`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_atom_annotation_after?: (ctx: Global_atom_annotation_afterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_before`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_atoms_annotation_before?: (ctx: Rule_atoms_annotation_beforeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_atoms_annotation_before`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_atoms_annotation_before?: (ctx: Global_atoms_annotation_beforeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.rule_atoms_annotation_after`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule_atoms_annotation_after?: (ctx: Rule_atoms_annotation_afterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.global_atoms_annotation_after`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_atoms_annotation_after?: (ctx: Global_atoms_annotation_afterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order_begin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_partial_order_begin?: (ctx: Annotation_rule_partial_order_beginContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_partial_order_begin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_partial_order_begin?: (ctx: Annotation_global_partial_order_beginContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_partial_order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_partial_order?: (ctx: Annotation_rule_partial_orderContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_partial_order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_partial_order?: (ctx: Annotation_global_partial_orderContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_projection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_projection?: (ctx: Annotation_rule_projectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_projection_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_projection_value?: (ctx: Annotation_rule_projection_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_rewriting_arith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_rewriting_arith?: (ctx: Annotation_rule_rewriting_arithContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_align_substitutions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_align_substitutions?: (ctx: Annotation_rule_align_substitutionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_rule_look_ahead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_rule_look_ahead?: (ctx: Annotation_rule_look_aheadContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_wasp_propagator?: (ctx: Annotation_global_wasp_propagatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_propagator_begin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_wasp_propagator_begin?: (ctx: Annotation_global_wasp_propagator_beginContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_wasp_heuristic?: (ctx: Annotation_global_wasp_heuristicContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.annotation_global_wasp_heuristic_begin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation_global_wasp_heuristic_begin?: (ctx: Annotation_global_wasp_heuristic_beginContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.heuristic_python_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeuristic_python_file?: (ctx: Heuristic_python_fileContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_element_heuristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_element_heuristic?: (ctx: Aggregate_element_heuristicContext) => Result;

	/**
	 * Visit a parse tree produced by `ASPCore2Parser.aggregate_elements_heuristic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_elements_heuristic?: (ctx: Aggregate_elements_heuristicContext) => Result;
}

