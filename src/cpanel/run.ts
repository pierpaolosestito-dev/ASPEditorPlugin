import * as fs from 'fs';
import { Uri } from 'vscode';

export interface CodeInterface {
    _extensionUri: Uri;
    dlv(code_type: string): string;
    js(code_type: string): string;
}

export class Code implements CodeInterface {
    constructor(readonly _extensionUri: Uri) { }

    private path(type: string, file: string) {
        switch (type) {
            case 'dlv':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'js':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }

        return __dirname + '/code/dlv/example.txt';
    }

    // TODO verificare la rimozione di questo metodo
    private setup_database(type: string) {
        let path = null;
        switch (type) {
            case 'php':
                path = __dirname;
                break;
        }

        return path;
    }

    // Path conditions
    private ListPath: {[key: string]: {[key: string]: boolean}} = {
        // DLV
        'dlv':{'example': true},
        // javascript
        'js':{'if': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'async_function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true}
    };

    // DLV
    dlv(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('dlv', code_type))) code = fs.readFileSync(this.path('dlv', code_type), 'utf-8');

        return code;
    }

    // Javascript
    js(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('js', code_type))) code = fs.readFileSync(this.path('js', code_type), 'utf-8');

        return code;
    }
}