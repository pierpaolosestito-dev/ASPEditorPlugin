"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const fs = require("fs");
class Code {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
        // Path conditions
        this.ListPath = {
            // DLV
            'dlv': { 'ADVANCED_KNAPSACK_PROBLEM': true, 'HAMILTON_PATH': true, 'KNAPSACK_PROBLEM': true, 'MINIMUM_SPANNING_TREE': true, 'N_COLORABILITY': true, 'SEATING': true, 'STRATEGIC_COMPANIES': true, 'VERTEX_COVER': true },
            // javascript
            'js': { 'if': true }
        };
    }
    path(type, file) {
        switch (type) {
            case 'dlv':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'js':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }
        return __dirname + '/code/dlv/example.txt';
    }
    // TODO verificare la rimozione di questo metodo
    setup_database(type) {
        let path = null;
        switch (type) {
            case 'php':
                path = __dirname;
                break;
        }
        return path;
    }
    // DLV
    dlv(code_type) {
        let code = '';
        if (fs.existsSync(this.path('dlv', code_type)))
            code = fs.readFileSync(this.path('dlv', code_type), 'utf-8');
        return code;
    }
    // Javascript
    js(code_type) {
        let code = '';
        if (fs.existsSync(this.path('js', code_type)))
            code = fs.readFileSync(this.path('js', code_type), 'utf-8');
        return code;
    }
}
exports.Code = Code;
//# sourceMappingURL=run.js.map