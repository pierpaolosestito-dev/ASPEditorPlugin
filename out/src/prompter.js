"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinAggregateInfo = exports.BuiltinAggregateFixer = void 0;
const diagnostics_1 = require("./diagnostics");
const similarity_1 = require("./utils/similarity");
const dictionarizer_1 = require("./utils/dictionarizer");
const dynamic_predicate_dictionary_1 = require("./utils/dynamic_predicate_dictionary");
const path = require("path");
const vscode = require("vscode");
const COMMAND = 'code-actions-sample.command';
class BuiltinAggregateFixer {
    constructor(context) {
        this.context = context;
    }
    provideCodeActions(document, range) {
        const result = [];
        if (this.isAtStartOfBuiltins(document, range)) {
            let builtinsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath('builtins.json')); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const builtinRegex = /(&\w+)\{/gm;
            const matches = line.matchAll(builtinRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        for (const elem of Object.values(builtinsDict['&'])) {
                            if ((0, similarity_1.similarity)(m1, "&" + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(m1, "&" + elem.label + "{") < 1.00) {
                                const replaceWithRightBuiltin = this.createFix(document, range, "&" + elem.label + "{", ("&" + elem.label + "{").length);
                                const commandAction = this.createCommand();
                                result.push(replaceWithRightBuiltin);
                                result.push(commandAction);
                            }
                        }
                        if (result.length == 0) {
                            builtinsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath('aggregates.json'));
                            for (const elem of Object.values(builtinsDict['#'])) {
                                if ((0, similarity_1.similarity)(m1, "&" + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(m1, "&" + elem.label + "{") < 1.00) {
                                    const replaceWithRightAggregate = this.createFix(document, range, "#" + elem.label + "{", ("#" + elem.label + "{").length);
                                    const commandAction = this.createCommand();
                                    result.push(replaceWithRightAggregate);
                                    result.push(commandAction);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.isAtStartOfAggregate(document, range)) {
            let aggregatesDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath('aggregates.json')); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const aggregateRegex = /(#\w+)\{/gm; //#count{}
            const matches = line.matchAll(aggregateRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) { //#coutn
                        for (const elem of Object.values(aggregatesDict['#'])) {
                            if ((0, similarity_1.similarity)(m1, "#" + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(m1, "#" + elem.label + "{") < 1.00) {
                                const replaceWithRightAggregate = this.createFix(document, range, "#" + elem.label + "{", ("#" + elem.label + "{").length);
                                const commandAction = this.createCommand();
                                result.push(replaceWithRightAggregate);
                                result.push(commandAction);
                            }
                        }
                        //&coutn
                        if (result.length == 0) {
                            aggregatesDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath('builtins.json'));
                            for (const elem of Object.values(aggregatesDict['&'])) {
                                if ((0, similarity_1.similarity)(m1, "#" + elem.label + "{") >= 0.5 && (0, similarity_1.similarity)(m1, "#" + elem.label + "{") < 1.00) {
                                    const replaceWithRightAggregate = this.createFix(document, range, "&" + elem.label + "{", ("&" + elem.label + "{").length);
                                    const commandAction = this.createCommand();
                                    result.push(replaceWithRightAggregate);
                                    result.push(commandAction);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (this.isAtStartOfConstants(document, range)) {
            const constantsDict = (0, dictionarizer_1.dictionarizer)(this.context.asAbsolutePath('constants.json')); //La dobbiamo leggere da aggregates.json
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const constantsRegex = /([A-Z]+_+)*[A-Z]+/gm; //#count{}
            const matches = line.matchAll(constantsRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[0];
                    if (m1) {
                        for (const elem of Object.values(constantsDict['language-constants'])) {
                            if ((0, similarity_1.similarity)(m1, elem) == 1.00) {
                                return;
                            }
                            if ((0, similarity_1.similarity)(m1, elem) >= 0.5 && (0, similarity_1.similarity)(m1, elem) < 1.00) {
                                const replaceWithRightConstant = this.createFix(document, range, elem, elem.length);
                                const commandAction = this.createCommand();
                                result.push(replaceWithRightConstant);
                                result.push(commandAction);
                            }
                        }
                    }
                }
            }
        }
        if (this.isAtStartOfDynamicPredicates(document, range)) {
            //Starting point for dynamic predicates correction
            const chiave = path.basename(document.fileName);
            const dd = dynamic_predicate_dictionary_1.DynamicPredicateDictionary.getInstance();
            const start = range.start;
            const line = document.lineAt(start.line).text;
            const aggregateRegex = /(\w+)\(/gm;
            const matches = line.matchAll(aggregateRegex);
            if (matches) {
                for (const match of matches) {
                    const m1 = match[1];
                    if (m1) {
                        for (const elem of Object.values(dd.get_field(chiave))) {
                            const indexOf = elem.label.indexOf("(");
                            const substringToCompare = elem.label.substring(0, indexOf);
                            if ((0, similarity_1.similarity)(m1, substringToCompare) >= 0.5 && (0, similarity_1.similarity)(m1, substringToCompare) < 1.00) {
                                const replaceWithRightAggregate = this.createFix(document, range, substringToCompare, substringToCompare.length);
                                const commandAction = this.createCommand();
                                result.push(replaceWithRightAggregate);
                                result.push(commandAction);
                            }
                        }
                    }
                }
            }
        }
        return result;
    }
    isAtStartOfAggregate(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "#";
    }
    isAtStartOfBuiltins(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character] === "&";
    }
    isAtStartOfDynamicPredicates(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character].match(/[a-zA-Z]/gm);
    }
    isAtStartOfConstants(document, range) {
        const start = range.start;
        const line = document.lineAt(start.line);
        return line.text[start.character].match(/[A-Z_]/gm);
    }
    createFix(document, range, emoji, endstring = 2) {
        const fix = new vscode.CodeAction(`Convert to ${emoji}`, vscode.CodeActionKind.QuickFix);
        fix.edit = new vscode.WorkspaceEdit();
        fix.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, endstring)), emoji);
        return fix;
    }
    createCommand() {
        const action = new vscode.CodeAction('Learn more about ASP', vscode.CodeActionKind.Empty);
        action.command = { command: COMMAND, title: 'Learn more about ASP', tooltip: 'This will open the ASP documentation.' };
        return action;
    }
}
exports.BuiltinAggregateFixer = BuiltinAggregateFixer;
BuiltinAggregateFixer.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix
];
class BuiltinAggregateInfo {
    provideCodeActions(document, range, context, token) {
        // for each diagnostic entry that has the matching `code`, create a code action command
        return context.diagnostics
            .filter(diagnostic => diagnostic.code === diagnostics_1.CODE_ERROR)
            .map(diagnostic => this.createCommandCodeAction(diagnostic));
    }
    createCommandCodeAction(diagnostic) {
        const action = new vscode.CodeAction('Fix rule', vscode.CodeActionKind.QuickFix);
        action.command = { command: COMMAND, title: 'Fix rule.', tooltip: 'Fix rule' };
        action.diagnostics = [diagnostic];
        action.isPreferred = true;
        return action;
    }
}
exports.BuiltinAggregateInfo = BuiltinAggregateInfo;
BuiltinAggregateInfo.providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix
];
//# sourceMappingURL=prompter.js.map