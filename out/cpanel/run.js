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
            'dlv': { 'example': true},
            // javascript
            'js': { 'if': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'async_function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true }
        };
    }
    path(type, file) {
        switch (type) {
            case 'dlv':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'js':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }
        return __dirname + '/code/js/hello.txt';
    }
    setup_database(type) {
        let path = null;
        switch (type) {
            case 'php':
                path = __dirname;
                break;
        }
        return path;
    }
    
    // Javascript
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