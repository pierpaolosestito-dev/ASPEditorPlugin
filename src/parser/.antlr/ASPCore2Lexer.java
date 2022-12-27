// Generated from /home/aleandro/.vscode/extensions/asp_editor_extension/src/parser/ASPCore2.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ASPCore2Lexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NAF=1, SYMBOLIC_CONSTANT=2, VARIABLE=3, STRING=4, NUMBER=5, WS=6, DOT=7, 
		DDOT=8, COMMA=9, HEAD_SEPARATOR=10, SEMICOLON=11, COLON=12, AT=13, CONS=14, 
		WCONS=15, PLUS=16, DASH=17, TIMES=18, SLASH=19, BACK_SLASH=20, PARAM_OPEN=21, 
		PARAM_CLOSE=22, SQUARE_OPEN=23, SQUARE_CLOSED=24, CURLY_OPEN=25, CURLY_CLOSE=26, 
		QUERY_MARK=27, ANON_VAR=28, EQUAL=29, UNEQUAL=30, LESS=31, GREATER=32, 
		LESS_OR_EQ=33, GREATER_OR_EQ=34, AMPERSAND=35, EXISTS=36, AGGR_COUNT=37, 
		AGGR_MAX=38, AGGR_MIN=39, AGGR_SUM=40, ANNOTATION_GLOBAL_WASP_PROPAGATOR=41, 
		DIRECTIVE_NAME=42, DIRECTIVE_VALUE=43, ANNOTATION_RULE_ALIGN_SUBSTITUTIONS=44, 
		ANNOTATION_RULE_LOOK_AHEAD=45, ANNOTATION_RULE_PROJECTION=46, ANNOTATION_RULE_REWRITING_ARITH=47, 
		ANNOTATION_RULE_ORDERING=48, ANNOTATION_ORDERING_VALUE=49, ANNOTATION_RULE_ATOM_INDEXED=50, 
		ANNOTATION_ATOM_INDEXED_ATOM=51, ANNOTATION_ATOM_INDEXED_ARGUMENTS=52, 
		ANNOTATION_RULE_PARTIAL_ORDER=53, ANNOTATION_PARTIAL_ORDER_BEFORE=54, 
		ANNOTATION_PARTIAL_ORDER_AFTER=55, ANNOTATION_EXTATOM_PREDICATE=56, ANNOTATION_EXTATOM_TYPE=57, 
		ANNOTATION_EXTATOM_TYPE_QCONST=58, ANNOTATION_EXTATOM_TYPE_CONST=59, ANNOTATION_EXTATOM_TYPE_U_INT=60, 
		ANNOTATION_EXTATOM_TYPE_UR_INT=61, ANNOTATION_EXTATOM_TYPE_UT_INT=62, 
		ANNOTATION_EXTATOM_TYPE_R_INT=63, ANNOTATION_EXTATOM_TYPE_T_INT=64, ANNOTATION_GLOBAL_ORDERING=65, 
		ANNOTATION_GLOBAL_ATOM_INDEXED=66, ANNOTATION_GLOBAL_PARTIAL_ORDER=67, 
		ANNOTATION_GLOBAL_EXTATOM_CONVERSION=68, ANNOTATION_RULE_TO_DECOMPOSE=69, 
		ANNOTATION_RULE_TO_NOT_DECOMPOSE=70, ANNOTATION_GLOBAL_WASP_HEURISTIC=71, 
		ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE=72, ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS=73, 
		EMPTY_COMMENT=74, COMMENT=75, MULTILINE_COMMENT=76, TESTS=77;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER", "WS", "DOT", 
			"DDOT", "COMMA", "HEAD_SEPARATOR", "SEMICOLON", "COLON", "AT", "CONS", 
			"WCONS", "PLUS", "DASH", "TIMES", "SLASH", "BACK_SLASH", "PARAM_OPEN", 
			"PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", "CURLY_OPEN", "CURLY_CLOSE", 
			"QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", "LESS", "GREATER", "LESS_OR_EQ", 
			"GREATER_OR_EQ", "AMPERSAND", "EXISTS", "AGGR_COUNT", "AGGR_MAX", "AGGR_MIN", 
			"AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR", "DIRECTIVE_NAME", "DIRECTIVE_VALUE", 
			"ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", "ANNOTATION_RULE_LOOK_AHEAD", 
			"ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH", "ANNOTATION_RULE_ORDERING", 
			"ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED", "ANNOTATION_ATOM_INDEXED_ATOM", 
			"ANNOTATION_ATOM_INDEXED_ARGUMENTS", "ANNOTATION_RULE_PARTIAL_ORDER", 
			"ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", 
			"ANNOTATION_EXTATOM_PREDICATE", "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", 
			"ANNOTATION_EXTATOM_TYPE_CONST", "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", 
			"ANNOTATION_EXTATOM_TYPE_UT_INT", "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", 
			"ANNOTATION_GLOBAL_ORDERING", "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", 
			"ANNOTATION_GLOBAL_EXTATOM_CONVERSION", "ANNOTATION_RULE_TO_DECOMPOSE", 
			"ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC", 
			"ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS", 
			"EMPTY_COMMENT", "COMMENT", "MULTILINE_COMMENT", "TESTS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'not'", null, null, null, null, null, "'.'", "'..'", "','", "'|'", 
			"';'", "':'", "'@'", "':-'", "':~'", "'+'", "'-'", "'*'", "'/'", "'\\'", 
			"'('", "')'", "'['", "']'", "'{'", "'}'", "'?'", "'_'", null, null, "'<'", 
			"'>'", "'<='", "'>='", "'&'", "'\\E'", "'#count'", "'#max'", "'#min'", 
			"'#sum'", "'#propagator'", "'#([A-Za-z_]*)'", "'.*'", "'%@rule_align_substitutions'", 
			"'%@rule_look_ahead'", "'%@rule_projection'", "'%@rule_rewriting_arith'", 
			"'%@rule_ordering'", "'@value'", "'%@rule_atom_indexed'", "'@atom'", 
			"'@arguments'", "'%@rule_partial_order'", "'@before'", "'@after'", "'@predicate'", 
			"'@type'", "'@Q_CONST'", "'@CONST'", "'@U_INT'", "'@UR_INT'", "'@UT_INT'", 
			"'@R_INT'", "'@T_INT'", "'%@global_ordering'", "'%@global_atom_indexed'", 
			"'%@global_partial_order'", "'%@global_external_predicate_conversion'", 
			"'%@rule_to_decompose'", "'%@rule_to_not_decompose'", "'%@global_heuristic'", 
			"'@file'", "'@elements'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "NAF", "SYMBOLIC_CONSTANT", "VARIABLE", "STRING", "NUMBER", "WS", 
			"DOT", "DDOT", "COMMA", "HEAD_SEPARATOR", "SEMICOLON", "COLON", "AT", 
			"CONS", "WCONS", "PLUS", "DASH", "TIMES", "SLASH", "BACK_SLASH", "PARAM_OPEN", 
			"PARAM_CLOSE", "SQUARE_OPEN", "SQUARE_CLOSED", "CURLY_OPEN", "CURLY_CLOSE", 
			"QUERY_MARK", "ANON_VAR", "EQUAL", "UNEQUAL", "LESS", "GREATER", "LESS_OR_EQ", 
			"GREATER_OR_EQ", "AMPERSAND", "EXISTS", "AGGR_COUNT", "AGGR_MAX", "AGGR_MIN", 
			"AGGR_SUM", "ANNOTATION_GLOBAL_WASP_PROPAGATOR", "DIRECTIVE_NAME", "DIRECTIVE_VALUE", 
			"ANNOTATION_RULE_ALIGN_SUBSTITUTIONS", "ANNOTATION_RULE_LOOK_AHEAD", 
			"ANNOTATION_RULE_PROJECTION", "ANNOTATION_RULE_REWRITING_ARITH", "ANNOTATION_RULE_ORDERING", 
			"ANNOTATION_ORDERING_VALUE", "ANNOTATION_RULE_ATOM_INDEXED", "ANNOTATION_ATOM_INDEXED_ATOM", 
			"ANNOTATION_ATOM_INDEXED_ARGUMENTS", "ANNOTATION_RULE_PARTIAL_ORDER", 
			"ANNOTATION_PARTIAL_ORDER_BEFORE", "ANNOTATION_PARTIAL_ORDER_AFTER", 
			"ANNOTATION_EXTATOM_PREDICATE", "ANNOTATION_EXTATOM_TYPE", "ANNOTATION_EXTATOM_TYPE_QCONST", 
			"ANNOTATION_EXTATOM_TYPE_CONST", "ANNOTATION_EXTATOM_TYPE_U_INT", "ANNOTATION_EXTATOM_TYPE_UR_INT", 
			"ANNOTATION_EXTATOM_TYPE_UT_INT", "ANNOTATION_EXTATOM_TYPE_R_INT", "ANNOTATION_EXTATOM_TYPE_T_INT", 
			"ANNOTATION_GLOBAL_ORDERING", "ANNOTATION_GLOBAL_ATOM_INDEXED", "ANNOTATION_GLOBAL_PARTIAL_ORDER", 
			"ANNOTATION_GLOBAL_EXTATOM_CONVERSION", "ANNOTATION_RULE_TO_DECOMPOSE", 
			"ANNOTATION_RULE_TO_NOT_DECOMPOSE", "ANNOTATION_GLOBAL_WASP_HEURISTIC", 
			"ANNOTATION_GLOBAL_WASP_HEURISTIC_FILE", "ANNOTATION_GLOBAL_WASP_HEURISTIC_ELEMENTS", 
			"EMPTY_COMMENT", "COMMENT", "MULTILINE_COMMENT", "TESTS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public ASPCore2Lexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ASPCore2.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2O\u0322\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\3\2\3\2\3\2\3\2\3\3\3\3\7\3\u00a4\n"+
		"\3\f\3\16\3\u00a7\13\3\3\4\3\4\7\4\u00ab\n\4\f\4\16\4\u00ae\13\4\3\5\3"+
		"\5\3\5\3\5\7\5\u00b4\n\5\f\5\16\5\u00b7\13\5\3\5\3\5\3\6\6\6\u00bc\n\6"+
		"\r\6\16\6\u00bd\3\7\6\7\u00c1\n\7\r\7\16\7\u00c2\3\7\3\7\3\b\3\b\3\t\3"+
		"\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\17\3\20"+
		"\3\20\3\20\3\21\3\21\3\22\3\22\3\23\3\23\3\24\3\24\3\25\3\25\3\26\3\26"+
		"\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35"+
		"\3\36\3\36\3\36\5\36\u00f9\n\36\3\37\3\37\3\37\3\37\5\37\u00ff\n\37\3"+
		" \3 \3!\3!\3\"\3\"\3\"\3#\3#\3#\3$\3$\3%\3%\3%\3&\3&\3&\3&\3&\3&\3&\3"+
		"\'\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3*\3*\3*\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3+\3,\3,\3,\3-"+
		"\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-"+
		"\3-\3-\3-\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3.\3/\3/"+
		"\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3/\3\60\3\60\3\60\3\60\3"+
		"\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3\60\3"+
		"\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3"+
		"\61\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62\3\62\3\62\3\62\3\62\3\62\3"+
		"\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3\63\3"+
		"\63\3\63\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\65\3\65\3"+
		"\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\66\3\66\3\66\3\66\3\66\3"+
		"\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3\66\3"+
		"\66\3\66\3\67\3\67\3\67\3\67\3\67\3\67\3\67\3\67\38\38\38\38\38\38\38"+
		"\39\39\39\39\39\39\39\39\39\39\39\3:\3:\3:\3:\3:\3:\3;\3;\3;\3;\3;\3;"+
		"\3;\3;\3;\3<\3<\3<\3<\3<\3<\3<\3=\3=\3=\3=\3=\3=\3=\3>\3>\3>\3>\3>\3>"+
		"\3>\3>\3?\3?\3?\3?\3?\3?\3?\3?\3@\3@\3@\3@\3@\3@\3@\3A\3A\3A\3A\3A\3A"+
		"\3A\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3C\3C\3C\3C"+
		"\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3C\3D\3D\3D\3D\3D"+
		"\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3D\3E\3E\3E\3E\3E"+
		"\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E"+
		"\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3E\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F\3F"+
		"\3F\3F\3F\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G\3G"+
		"\3G\3G\3G\3G\3G\3G\3G\3G\3G\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H\3H"+
		"\3H\3H\3H\3H\3H\3I\3I\3I\3I\3I\3I\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3K\3K"+
		"\3K\3K\3K\3L\3L\3L\7L\u02fc\nL\fL\16L\u02ff\13L\3L\3L\3L\3L\3M\3M\3M\3"+
		"M\7M\u0309\nM\fM\16M\u030c\13M\3M\3M\3M\3M\3M\3N\3N\3N\3N\3N\7N\u0318"+
		"\nN\fN\16N\u031b\13N\3N\3N\3N\3N\3N\3N\6\u00b5\u02fd\u030a\u0319\2O\3"+
		"\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37"+
		"\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37="+
		" ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61a\62c\63e\64g\65i\66k\67m8o9"+
		"q:s;u<w=y>{?}@\177A\u0081B\u0083C\u0085D\u0087E\u0089F\u008bG\u008dH\u008f"+
		"I\u0091J\u0093K\u0095L\u0097M\u0099N\u009bO\3\2\b\3\2c|\6\2\62;C\\aac"+
		"|\3\2C\\\3\2\62;\4\2\13\f\"\"\4\2\f\fBB\2\u032c\2\3\3\2\2\2\2\5\3\2\2"+
		"\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21"+
		"\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2"+
		"\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3"+
		"\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3"+
		"\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3"+
		"\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2"+
		"\2\2M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2"+
		"Y\3\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3"+
		"\2\2\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2"+
		"\2\2s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2"+
		"\177\3\2\2\2\2\u0081\3\2\2\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3"+
		"\2\2\2\2\u0089\3\2\2\2\2\u008b\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2"+
		"\2\u0091\3\2\2\2\2\u0093\3\2\2\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099"+
		"\3\2\2\2\2\u009b\3\2\2\2\3\u009d\3\2\2\2\5\u00a1\3\2\2\2\7\u00a8\3\2\2"+
		"\2\t\u00af\3\2\2\2\13\u00bb\3\2\2\2\r\u00c0\3\2\2\2\17\u00c6\3\2\2\2\21"+
		"\u00c8\3\2\2\2\23\u00cb\3\2\2\2\25\u00cd\3\2\2\2\27\u00cf\3\2\2\2\31\u00d1"+
		"\3\2\2\2\33\u00d3\3\2\2\2\35\u00d5\3\2\2\2\37\u00d8\3\2\2\2!\u00db\3\2"+
		"\2\2#\u00dd\3\2\2\2%\u00df\3\2\2\2\'\u00e1\3\2\2\2)\u00e3\3\2\2\2+\u00e5"+
		"\3\2\2\2-\u00e7\3\2\2\2/\u00e9\3\2\2\2\61\u00eb\3\2\2\2\63\u00ed\3\2\2"+
		"\2\65\u00ef\3\2\2\2\67\u00f1\3\2\2\29\u00f3\3\2\2\2;\u00f8\3\2\2\2=\u00fe"+
		"\3\2\2\2?\u0100\3\2\2\2A\u0102\3\2\2\2C\u0104\3\2\2\2E\u0107\3\2\2\2G"+
		"\u010a\3\2\2\2I\u010c\3\2\2\2K\u010f\3\2\2\2M\u0116\3\2\2\2O\u011b\3\2"+
		"\2\2Q\u0120\3\2\2\2S\u0125\3\2\2\2U\u0131\3\2\2\2W\u013f\3\2\2\2Y\u0142"+
		"\3\2\2\2[\u015d\3\2\2\2]\u016f\3\2\2\2_\u0181\3\2\2\2a\u0198\3\2\2\2c"+
		"\u01a8\3\2\2\2e\u01af\3\2\2\2g\u01c3\3\2\2\2i\u01c9\3\2\2\2k\u01d4\3\2"+
		"\2\2m\u01e9\3\2\2\2o\u01f1\3\2\2\2q\u01f8\3\2\2\2s\u0203\3\2\2\2u\u0209"+
		"\3\2\2\2w\u0212\3\2\2\2y\u0219\3\2\2\2{\u0220\3\2\2\2}\u0228\3\2\2\2\177"+
		"\u0230\3\2\2\2\u0081\u0237\3\2\2\2\u0083\u023e\3\2\2\2\u0085\u0250\3\2"+
		"\2\2\u0087\u0266\3\2\2\2\u0089\u027d\3\2\2\2\u008b\u02a4\3\2\2\2\u008d"+
		"\u02b8\3\2\2\2\u008f\u02d0\3\2\2\2\u0091\u02e3\3\2\2\2\u0093\u02e9\3\2"+
		"\2\2\u0095\u02f3\3\2\2\2\u0097\u02f8\3\2\2\2\u0099\u0304\3\2\2\2\u009b"+
		"\u0312\3\2\2\2\u009d\u009e\7p\2\2\u009e\u009f\7q\2\2\u009f\u00a0\7v\2"+
		"\2\u00a0\4\3\2\2\2\u00a1\u00a5\t\2\2\2\u00a2\u00a4\t\3\2\2\u00a3\u00a2"+
		"\3\2\2\2\u00a4\u00a7\3\2\2\2\u00a5\u00a3\3\2\2\2\u00a5\u00a6\3\2\2\2\u00a6"+
		"\6\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00ac\t\4\2\2\u00a9\u00ab\t\3\2\2"+
		"\u00aa\u00a9\3\2\2\2\u00ab\u00ae\3\2\2\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad"+
		"\3\2\2\2\u00ad\b\3\2\2\2\u00ae\u00ac\3\2\2\2\u00af\u00b5\7$\2\2\u00b0"+
		"\u00b1\7^\2\2\u00b1\u00b4\7$\2\2\u00b2\u00b4\13\2\2\2\u00b3\u00b0\3\2"+
		"\2\2\u00b3\u00b2\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b5"+
		"\u00b3\3\2\2\2\u00b6\u00b8\3\2\2\2\u00b7\u00b5\3\2\2\2\u00b8\u00b9\7$"+
		"\2\2\u00b9\n\3\2\2\2\u00ba\u00bc\t\5\2\2\u00bb\u00ba\3\2\2\2\u00bc\u00bd"+
		"\3\2\2\2\u00bd\u00bb\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\f\3\2\2\2\u00bf"+
		"\u00c1\t\6\2\2\u00c0\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c0\3\2"+
		"\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c5\b\7\2\2\u00c5"+
		"\16\3\2\2\2\u00c6\u00c7\7\60\2\2\u00c7\20\3\2\2\2\u00c8\u00c9\7\60\2\2"+
		"\u00c9\u00ca\7\60\2\2\u00ca\22\3\2\2\2\u00cb\u00cc\7.\2\2\u00cc\24\3\2"+
		"\2\2\u00cd\u00ce\7~\2\2\u00ce\26\3\2\2\2\u00cf\u00d0\7=\2\2\u00d0\30\3"+
		"\2\2\2\u00d1\u00d2\7<\2\2\u00d2\32\3\2\2\2\u00d3\u00d4\7B\2\2\u00d4\34"+
		"\3\2\2\2\u00d5\u00d6\7<\2\2\u00d6\u00d7\7/\2\2\u00d7\36\3\2\2\2\u00d8"+
		"\u00d9\7<\2\2\u00d9\u00da\7\u0080\2\2\u00da \3\2\2\2\u00db\u00dc\7-\2"+
		"\2\u00dc\"\3\2\2\2\u00dd\u00de\7/\2\2\u00de$\3\2\2\2\u00df\u00e0\7,\2"+
		"\2\u00e0&\3\2\2\2\u00e1\u00e2\7\61\2\2\u00e2(\3\2\2\2\u00e3\u00e4\7^\2"+
		"\2\u00e4*\3\2\2\2\u00e5\u00e6\7*\2\2\u00e6,\3\2\2\2\u00e7\u00e8\7+\2\2"+
		"\u00e8.\3\2\2\2\u00e9\u00ea\7]\2\2\u00ea\60\3\2\2\2\u00eb\u00ec\7_\2\2"+
		"\u00ec\62\3\2\2\2\u00ed\u00ee\7}\2\2\u00ee\64\3\2\2\2\u00ef\u00f0\7\177"+
		"\2\2\u00f0\66\3\2\2\2\u00f1\u00f2\7A\2\2\u00f28\3\2\2\2\u00f3\u00f4\7"+
		"a\2\2\u00f4:\3\2\2\2\u00f5\u00f9\7?\2\2\u00f6\u00f7\7?\2\2\u00f7\u00f9"+
		"\7?\2\2\u00f8\u00f5\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f9<\3\2\2\2\u00fa\u00fb"+
		"\7>\2\2\u00fb\u00ff\7@\2\2\u00fc\u00fd\7#\2\2\u00fd\u00ff\7?\2\2\u00fe"+
		"\u00fa\3\2\2\2\u00fe\u00fc\3\2\2\2\u00ff>\3\2\2\2\u0100\u0101\7>\2\2\u0101"+
		"@\3\2\2\2\u0102\u0103\7@\2\2\u0103B\3\2\2\2\u0104\u0105\7>\2\2\u0105\u0106"+
		"\7?\2\2\u0106D\3\2\2\2\u0107\u0108\7@\2\2\u0108\u0109\7?\2\2\u0109F\3"+
		"\2\2\2\u010a\u010b\7(\2\2\u010bH\3\2\2\2\u010c\u010d\7^\2\2\u010d\u010e"+
		"\7G\2\2\u010eJ\3\2\2\2\u010f\u0110\7%\2\2\u0110\u0111\7e\2\2\u0111\u0112"+
		"\7q\2\2\u0112\u0113\7w\2\2\u0113\u0114\7p\2\2\u0114\u0115\7v\2\2\u0115"+
		"L\3\2\2\2\u0116\u0117\7%\2\2\u0117\u0118\7o\2\2\u0118\u0119\7c\2\2\u0119"+
		"\u011a\7z\2\2\u011aN\3\2\2\2\u011b\u011c\7%\2\2\u011c\u011d\7o\2\2\u011d"+
		"\u011e\7k\2\2\u011e\u011f\7p\2\2\u011fP\3\2\2\2\u0120\u0121\7%\2\2\u0121"+
		"\u0122\7u\2\2\u0122\u0123\7w\2\2\u0123\u0124\7o\2\2\u0124R\3\2\2\2\u0125"+
		"\u0126\7%\2\2\u0126\u0127\7r\2\2\u0127\u0128\7t\2\2\u0128\u0129\7q\2\2"+
		"\u0129\u012a\7r\2\2\u012a\u012b\7c\2\2\u012b\u012c\7i\2\2\u012c\u012d"+
		"\7c\2\2\u012d\u012e\7v\2\2\u012e\u012f\7q\2\2\u012f\u0130\7t\2\2\u0130"+
		"T\3\2\2\2\u0131\u0132\7%\2\2\u0132\u0133\7*\2\2\u0133\u0134\7]\2\2\u0134"+
		"\u0135\7C\2\2\u0135\u0136\7/\2\2\u0136\u0137\7\\\2\2\u0137\u0138\7c\2"+
		"\2\u0138\u0139\7/\2\2\u0139\u013a\7|\2\2\u013a\u013b\7a\2\2\u013b\u013c"+
		"\7_\2\2\u013c\u013d\7,\2\2\u013d\u013e\7+\2\2\u013eV\3\2\2\2\u013f\u0140"+
		"\7\60\2\2\u0140\u0141\7,\2\2\u0141X\3\2\2\2\u0142\u0143\7\'\2\2\u0143"+
		"\u0144\7B\2\2\u0144\u0145\7t\2\2\u0145\u0146\7w\2\2\u0146\u0147\7n\2\2"+
		"\u0147\u0148\7g\2\2\u0148\u0149\7a\2\2\u0149\u014a\7c\2\2\u014a\u014b"+
		"\7n\2\2\u014b\u014c\7k\2\2\u014c\u014d\7i\2\2\u014d\u014e\7p\2\2\u014e"+
		"\u014f\7a\2\2\u014f\u0150\7u\2\2\u0150\u0151\7w\2\2\u0151\u0152\7d\2\2"+
		"\u0152\u0153\7u\2\2\u0153\u0154\7v\2\2\u0154\u0155\7k\2\2\u0155\u0156"+
		"\7v\2\2\u0156\u0157\7w\2\2\u0157\u0158\7v\2\2\u0158\u0159\7k\2\2\u0159"+
		"\u015a\7q\2\2\u015a\u015b\7p\2\2\u015b\u015c\7u\2\2\u015cZ\3\2\2\2\u015d"+
		"\u015e\7\'\2\2\u015e\u015f\7B\2\2\u015f\u0160\7t\2\2\u0160\u0161\7w\2"+
		"\2\u0161\u0162\7n\2\2\u0162\u0163\7g\2\2\u0163\u0164\7a\2\2\u0164\u0165"+
		"\7n\2\2\u0165\u0166\7q\2\2\u0166\u0167\7q\2\2\u0167\u0168\7m\2\2\u0168"+
		"\u0169\7a\2\2\u0169\u016a\7c\2\2\u016a\u016b\7j\2\2\u016b\u016c\7g\2\2"+
		"\u016c\u016d\7c\2\2\u016d\u016e\7f\2\2\u016e\\\3\2\2\2\u016f\u0170\7\'"+
		"\2\2\u0170\u0171\7B\2\2\u0171\u0172\7t\2\2\u0172\u0173\7w\2\2\u0173\u0174"+
		"\7n\2\2\u0174\u0175\7g\2\2\u0175\u0176\7a\2\2\u0176\u0177\7r\2\2\u0177"+
		"\u0178\7t\2\2\u0178\u0179\7q\2\2\u0179\u017a\7l\2\2\u017a\u017b\7g\2\2"+
		"\u017b\u017c\7e\2\2\u017c\u017d\7v\2\2\u017d\u017e\7k\2\2\u017e\u017f"+
		"\7q\2\2\u017f\u0180\7p\2\2\u0180^\3\2\2\2\u0181\u0182\7\'\2\2\u0182\u0183"+
		"\7B\2\2\u0183\u0184\7t\2\2\u0184\u0185\7w\2\2\u0185\u0186\7n\2\2\u0186"+
		"\u0187\7g\2\2\u0187\u0188\7a\2\2\u0188\u0189\7t\2\2\u0189\u018a\7g\2\2"+
		"\u018a\u018b\7y\2\2\u018b\u018c\7t\2\2\u018c\u018d\7k\2\2\u018d\u018e"+
		"\7v\2\2\u018e\u018f\7k\2\2\u018f\u0190\7p\2\2\u0190\u0191\7i\2\2\u0191"+
		"\u0192\7a\2\2\u0192\u0193\7c\2\2\u0193\u0194\7t\2\2\u0194\u0195\7k\2\2"+
		"\u0195\u0196\7v\2\2\u0196\u0197\7j\2\2\u0197`\3\2\2\2\u0198\u0199\7\'"+
		"\2\2\u0199\u019a\7B\2\2\u019a\u019b\7t\2\2\u019b\u019c\7w\2\2\u019c\u019d"+
		"\7n\2\2\u019d\u019e\7g\2\2\u019e\u019f\7a\2\2\u019f\u01a0\7q\2\2\u01a0"+
		"\u01a1\7t\2\2\u01a1\u01a2\7f\2\2\u01a2\u01a3\7g\2\2\u01a3\u01a4\7t\2\2"+
		"\u01a4\u01a5\7k\2\2\u01a5\u01a6\7p\2\2\u01a6\u01a7\7i\2\2\u01a7b\3\2\2"+
		"\2\u01a8\u01a9\7B\2\2\u01a9\u01aa\7x\2\2\u01aa\u01ab\7c\2\2\u01ab\u01ac"+
		"\7n\2\2\u01ac\u01ad\7w\2\2\u01ad\u01ae\7g\2\2\u01aed\3\2\2\2\u01af\u01b0"+
		"\7\'\2\2\u01b0\u01b1\7B\2\2\u01b1\u01b2\7t\2\2\u01b2\u01b3\7w\2\2\u01b3"+
		"\u01b4\7n\2\2\u01b4\u01b5\7g\2\2\u01b5\u01b6\7a\2\2\u01b6\u01b7\7c\2\2"+
		"\u01b7\u01b8\7v\2\2\u01b8\u01b9\7q\2\2\u01b9\u01ba\7o\2\2\u01ba\u01bb"+
		"\7a\2\2\u01bb\u01bc\7k\2\2\u01bc\u01bd\7p\2\2\u01bd\u01be\7f\2\2\u01be"+
		"\u01bf\7g\2\2\u01bf\u01c0\7z\2\2\u01c0\u01c1\7g\2\2\u01c1\u01c2\7f\2\2"+
		"\u01c2f\3\2\2\2\u01c3\u01c4\7B\2\2\u01c4\u01c5\7c\2\2\u01c5\u01c6\7v\2"+
		"\2\u01c6\u01c7\7q\2\2\u01c7\u01c8\7o\2\2\u01c8h\3\2\2\2\u01c9\u01ca\7"+
		"B\2\2\u01ca\u01cb\7c\2\2\u01cb\u01cc\7t\2\2\u01cc\u01cd\7i\2\2\u01cd\u01ce"+
		"\7w\2\2\u01ce\u01cf\7o\2\2\u01cf\u01d0\7g\2\2\u01d0\u01d1\7p\2\2\u01d1"+
		"\u01d2\7v\2\2\u01d2\u01d3\7u\2\2\u01d3j\3\2\2\2\u01d4\u01d5\7\'\2\2\u01d5"+
		"\u01d6\7B\2\2\u01d6\u01d7\7t\2\2\u01d7\u01d8\7w\2\2\u01d8\u01d9\7n\2\2"+
		"\u01d9\u01da\7g\2\2\u01da\u01db\7a\2\2\u01db\u01dc\7r\2\2\u01dc\u01dd"+
		"\7c\2\2\u01dd\u01de\7t\2\2\u01de\u01df\7v\2\2\u01df\u01e0\7k\2\2\u01e0"+
		"\u01e1\7c\2\2\u01e1\u01e2\7n\2\2\u01e2\u01e3\7a\2\2\u01e3\u01e4\7q\2\2"+
		"\u01e4\u01e5\7t\2\2\u01e5\u01e6\7f\2\2\u01e6\u01e7\7g\2\2\u01e7\u01e8"+
		"\7t\2\2\u01e8l\3\2\2\2\u01e9\u01ea\7B\2\2\u01ea\u01eb\7d\2\2\u01eb\u01ec"+
		"\7g\2\2\u01ec\u01ed\7h\2\2\u01ed\u01ee\7q\2\2\u01ee\u01ef\7t\2\2\u01ef"+
		"\u01f0\7g\2\2\u01f0n\3\2\2\2\u01f1\u01f2\7B\2\2\u01f2\u01f3\7c\2\2\u01f3"+
		"\u01f4\7h\2\2\u01f4\u01f5\7v\2\2\u01f5\u01f6\7g\2\2\u01f6\u01f7\7t\2\2"+
		"\u01f7p\3\2\2\2\u01f8\u01f9\7B\2\2\u01f9\u01fa\7r\2\2\u01fa\u01fb\7t\2"+
		"\2\u01fb\u01fc\7g\2\2\u01fc\u01fd\7f\2\2\u01fd\u01fe\7k\2\2\u01fe\u01ff"+
		"\7e\2\2\u01ff\u0200\7c\2\2\u0200\u0201\7v\2\2\u0201\u0202\7g\2\2\u0202"+
		"r\3\2\2\2\u0203\u0204\7B\2\2\u0204\u0205\7v\2\2\u0205\u0206\7{\2\2\u0206"+
		"\u0207\7r\2\2\u0207\u0208\7g\2\2\u0208t\3\2\2\2\u0209\u020a\7B\2\2\u020a"+
		"\u020b\7S\2\2\u020b\u020c\7a\2\2\u020c\u020d\7E\2\2\u020d\u020e\7Q\2\2"+
		"\u020e\u020f\7P\2\2\u020f\u0210\7U\2\2\u0210\u0211\7V\2\2\u0211v\3\2\2"+
		"\2\u0212\u0213\7B\2\2\u0213\u0214\7E\2\2\u0214\u0215\7Q\2\2\u0215\u0216"+
		"\7P\2\2\u0216\u0217\7U\2\2\u0217\u0218\7V\2\2\u0218x\3\2\2\2\u0219\u021a"+
		"\7B\2\2\u021a\u021b\7W\2\2\u021b\u021c\7a\2\2\u021c\u021d\7K\2\2\u021d"+
		"\u021e\7P\2\2\u021e\u021f\7V\2\2\u021fz\3\2\2\2\u0220\u0221\7B\2\2\u0221"+
		"\u0222\7W\2\2\u0222\u0223\7T\2\2\u0223\u0224\7a\2\2\u0224\u0225\7K\2\2"+
		"\u0225\u0226\7P\2\2\u0226\u0227\7V\2\2\u0227|\3\2\2\2\u0228\u0229\7B\2"+
		"\2\u0229\u022a\7W\2\2\u022a\u022b\7V\2\2\u022b\u022c\7a\2\2\u022c\u022d"+
		"\7K\2\2\u022d\u022e\7P\2\2\u022e\u022f\7V\2\2\u022f~\3\2\2\2\u0230\u0231"+
		"\7B\2\2\u0231\u0232\7T\2\2\u0232\u0233\7a\2\2\u0233\u0234\7K\2\2\u0234"+
		"\u0235\7P\2\2\u0235\u0236\7V\2\2\u0236\u0080\3\2\2\2\u0237\u0238\7B\2"+
		"\2\u0238\u0239\7V\2\2\u0239\u023a\7a\2\2\u023a\u023b\7K\2\2\u023b\u023c"+
		"\7P\2\2\u023c\u023d\7V\2\2\u023d\u0082\3\2\2\2\u023e\u023f\7\'\2\2\u023f"+
		"\u0240\7B\2\2\u0240\u0241\7i\2\2\u0241\u0242\7n\2\2\u0242\u0243\7q\2\2"+
		"\u0243\u0244\7d\2\2\u0244\u0245\7c\2\2\u0245\u0246\7n\2\2\u0246\u0247"+
		"\7a\2\2\u0247\u0248\7q\2\2\u0248\u0249\7t\2\2\u0249\u024a\7f\2\2\u024a"+
		"\u024b\7g\2\2\u024b\u024c\7t\2\2\u024c\u024d\7k\2\2\u024d\u024e\7p\2\2"+
		"\u024e\u024f\7i\2\2\u024f\u0084\3\2\2\2\u0250\u0251\7\'\2\2\u0251\u0252"+
		"\7B\2\2\u0252\u0253\7i\2\2\u0253\u0254\7n\2\2\u0254\u0255\7q\2\2\u0255"+
		"\u0256\7d\2\2\u0256\u0257\7c\2\2\u0257\u0258\7n\2\2\u0258\u0259\7a\2\2"+
		"\u0259\u025a\7c\2\2\u025a\u025b\7v\2\2\u025b\u025c\7q\2\2\u025c\u025d"+
		"\7o\2\2\u025d\u025e\7a\2\2\u025e\u025f\7k\2\2\u025f\u0260\7p\2\2\u0260"+
		"\u0261\7f\2\2\u0261\u0262\7g\2\2\u0262\u0263\7z\2\2\u0263\u0264\7g\2\2"+
		"\u0264\u0265\7f\2\2\u0265\u0086\3\2\2\2\u0266\u0267\7\'\2\2\u0267\u0268"+
		"\7B\2\2\u0268\u0269\7i\2\2\u0269\u026a\7n\2\2\u026a\u026b\7q\2\2\u026b"+
		"\u026c\7d\2\2\u026c\u026d\7c\2\2\u026d\u026e\7n\2\2\u026e\u026f\7a\2\2"+
		"\u026f\u0270\7r\2\2\u0270\u0271\7c\2\2\u0271\u0272\7t\2\2\u0272\u0273"+
		"\7v\2\2\u0273\u0274\7k\2\2\u0274\u0275\7c\2\2\u0275\u0276\7n\2\2\u0276"+
		"\u0277\7a\2\2\u0277\u0278\7q\2\2\u0278\u0279\7t\2\2\u0279\u027a\7f\2\2"+
		"\u027a\u027b\7g\2\2\u027b\u027c\7t\2\2\u027c\u0088\3\2\2\2\u027d\u027e"+
		"\7\'\2\2\u027e\u027f\7B\2\2\u027f\u0280\7i\2\2\u0280\u0281\7n\2\2\u0281"+
		"\u0282\7q\2\2\u0282\u0283\7d\2\2\u0283\u0284\7c\2\2\u0284\u0285\7n\2\2"+
		"\u0285\u0286\7a\2\2\u0286\u0287\7g\2\2\u0287\u0288\7z\2\2\u0288\u0289"+
		"\7v\2\2\u0289\u028a\7g\2\2\u028a\u028b\7t\2\2\u028b\u028c\7p\2\2\u028c"+
		"\u028d\7c\2\2\u028d\u028e\7n\2\2\u028e\u028f\7a\2\2\u028f\u0290\7r\2\2"+
		"\u0290\u0291\7t\2\2\u0291\u0292\7g\2\2\u0292\u0293\7f\2\2\u0293\u0294"+
		"\7k\2\2\u0294\u0295\7e\2\2\u0295\u0296\7c\2\2\u0296\u0297\7v\2\2\u0297"+
		"\u0298\7g\2\2\u0298\u0299\7a\2\2\u0299\u029a\7e\2\2\u029a\u029b\7q\2\2"+
		"\u029b\u029c\7p\2\2\u029c\u029d\7x\2\2\u029d\u029e\7g\2\2\u029e\u029f"+
		"\7t\2\2\u029f\u02a0\7u\2\2\u02a0\u02a1\7k\2\2\u02a1\u02a2\7q\2\2\u02a2"+
		"\u02a3\7p\2\2\u02a3\u008a\3\2\2\2\u02a4\u02a5\7\'\2\2\u02a5\u02a6\7B\2"+
		"\2\u02a6\u02a7\7t\2\2\u02a7\u02a8\7w\2\2\u02a8\u02a9\7n\2\2\u02a9\u02aa"+
		"\7g\2\2\u02aa\u02ab\7a\2\2\u02ab\u02ac\7v\2\2\u02ac\u02ad\7q\2\2\u02ad"+
		"\u02ae\7a\2\2\u02ae\u02af\7f\2\2\u02af\u02b0\7g\2\2\u02b0\u02b1\7e\2\2"+
		"\u02b1\u02b2\7q\2\2\u02b2\u02b3\7o\2\2\u02b3\u02b4\7r\2\2\u02b4\u02b5"+
		"\7q\2\2\u02b5\u02b6\7u\2\2\u02b6\u02b7\7g\2\2\u02b7\u008c\3\2\2\2\u02b8"+
		"\u02b9\7\'\2\2\u02b9\u02ba\7B\2\2\u02ba\u02bb\7t\2\2\u02bb\u02bc\7w\2"+
		"\2\u02bc\u02bd\7n\2\2\u02bd\u02be\7g\2\2\u02be\u02bf\7a\2\2\u02bf\u02c0"+
		"\7v\2\2\u02c0\u02c1\7q\2\2\u02c1\u02c2\7a\2\2\u02c2\u02c3\7p\2\2\u02c3"+
		"\u02c4\7q\2\2\u02c4\u02c5\7v\2\2\u02c5\u02c6\7a\2\2\u02c6\u02c7\7f\2\2"+
		"\u02c7\u02c8\7g\2\2\u02c8\u02c9\7e\2\2\u02c9\u02ca\7q\2\2\u02ca\u02cb"+
		"\7o\2\2\u02cb\u02cc\7r\2\2\u02cc\u02cd\7q\2\2\u02cd\u02ce\7u\2\2\u02ce"+
		"\u02cf\7g\2\2\u02cf\u008e\3\2\2\2\u02d0\u02d1\7\'\2\2\u02d1\u02d2\7B\2"+
		"\2\u02d2\u02d3\7i\2\2\u02d3\u02d4\7n\2\2\u02d4\u02d5\7q\2\2\u02d5\u02d6"+
		"\7d\2\2\u02d6\u02d7\7c\2\2\u02d7\u02d8\7n\2\2\u02d8\u02d9\7a\2\2\u02d9"+
		"\u02da\7j\2\2\u02da\u02db\7g\2\2\u02db\u02dc\7w\2\2\u02dc\u02dd\7t\2\2"+
		"\u02dd\u02de\7k\2\2\u02de\u02df\7u\2\2\u02df\u02e0\7v\2\2\u02e0\u02e1"+
		"\7k\2\2\u02e1\u02e2\7e\2\2\u02e2\u0090\3\2\2\2\u02e3\u02e4\7B\2\2\u02e4"+
		"\u02e5\7h\2\2\u02e5\u02e6\7k\2\2\u02e6\u02e7\7n\2\2\u02e7\u02e8\7g\2\2"+
		"\u02e8\u0092\3\2\2\2\u02e9\u02ea\7B\2\2\u02ea\u02eb\7g\2\2\u02eb\u02ec"+
		"\7n\2\2\u02ec\u02ed\7g\2\2\u02ed\u02ee\7o\2\2\u02ee\u02ef\7g\2\2\u02ef"+
		"\u02f0\7p\2\2\u02f0\u02f1\7v\2\2\u02f1\u02f2\7u\2\2\u02f2\u0094\3\2\2"+
		"\2\u02f3\u02f4\7\'\2\2\u02f4\u02f5\7\f\2\2\u02f5\u02f6\3\2\2\2\u02f6\u02f7"+
		"\bK\2\2\u02f7\u0096\3\2\2\2\u02f8\u02f9\7\'\2\2\u02f9\u02fd\n\7\2\2\u02fa"+
		"\u02fc\13\2\2\2\u02fb\u02fa\3\2\2\2\u02fc\u02ff\3\2\2\2\u02fd\u02fe\3"+
		"\2\2\2\u02fd\u02fb\3\2\2\2\u02fe\u0300\3\2\2\2\u02ff\u02fd\3\2\2\2\u0300"+
		"\u0301\7\f\2\2\u0301\u0302\3\2\2\2\u0302\u0303\bL\2\2\u0303\u0098\3\2"+
		"\2\2\u0304\u0305\7\'\2\2\u0305\u0306\7\61\2\2\u0306\u030a\3\2\2\2\u0307"+
		"\u0309\13\2\2\2\u0308\u0307\3\2\2\2\u0309\u030c\3\2\2\2\u030a\u030b\3"+
		"\2\2\2\u030a\u0308\3\2\2\2\u030b\u030d\3\2\2\2\u030c\u030a\3\2\2\2\u030d"+
		"\u030e\7\61\2\2\u030e\u030f\7\'\2\2\u030f\u0310\3\2\2\2\u0310\u0311\b"+
		"M\3\2\u0311\u009a\3\2\2\2\u0312\u0313\7\'\2\2\u0313\u0314\7,\2\2\u0314"+
		"\u0315\7,\2\2\u0315\u0319\3\2\2\2\u0316\u0318\13\2\2\2\u0317\u0316\3\2"+
		"\2\2\u0318\u031b\3\2\2\2\u0319\u031a\3\2\2\2\u0319\u0317\3\2\2\2\u031a"+
		"\u031c\3\2\2\2\u031b\u0319\3\2\2\2\u031c\u031d\7,\2\2\u031d\u031e\7,\2"+
		"\2\u031e\u031f\7\'\2\2\u031f\u0320\3\2\2\2\u0320\u0321\bN\2\2\u0321\u009c"+
		"\3\2\2\2\16\2\u00a5\u00ac\u00b3\u00b5\u00bd\u00c2\u00f8\u00fe\u02fd\u030a"+
		"\u0319\4\b\2\2\2\3\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}