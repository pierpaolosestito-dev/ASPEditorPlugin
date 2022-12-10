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
        'dlv': { 'ADVANCED_KNAPSACK_PROBLEM': true, 'HAMILTON_PATH': true, 'KNAPSACK_PROBLEM': true, 'MINIMUM_SPANNING_TREE': true, 'N_COLORABILITY': true, 'SEATING': true, 'STRATEGIC_COMPANIES': true, 'VERTEX_COVER': true},
        // javascript
        'js': { 'if': true}
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