"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const fs = require("fs");
class Code {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
        // Path conditions
        this.ListPath = {
            'dlv': {'HAMILTON_PATH': true, 'KNAPSACK_PROBLEM': true, 'MINIMUM_SPANNING_TREE': true, 'N_COLORABILITY': true, 'SEATING': true, 'STRATEGIC_COMPANIES': true, 'VERTEX_COVER': true },
        };
    }
    path(type, file) {
        switch (type) {
            case 'dlv':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }
        return __dirname + '/code/dlv/example.txt';
    }

    dlv(code_type) {
        let code = '';
        if (fs.existsSync(this.path('dlv', code_type)))
            code = fs.readFileSync(this.path('dlv', code_type), 'utf-8');
        return code;
    }
}
exports.Code = Code;