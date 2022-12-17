import * as fs from 'fs';
import { Uri } from 'vscode';

export interface CodeInterface {
    _extensionUri: Uri;
    dlv(code_type: string): string;
}

export class Code implements CodeInterface {
    constructor(readonly _extensionUri: Uri) { }
    private path(type: string, file: string) {
        switch (type) {
            case 'dlv':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }
        return __dirname + '/code/dlv/example.txt';
    }

    // Path conditions
    private ListPath: {[key: string]: {[key: string]: boolean}} = {
        'dlv': { 'HAMILTON_PATH': true, 'KNAPSACK_PROBLEM': true, 'MINIMUM_SPANNING_TREE': true, '3_COLORABILITY': true, 'SEATING': true, 'STRATEGIC_COMPANIES': true, 'VERTEX_COVER': true},
    };

    dlv(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('dlv', code_type))) code = fs.readFileSync(this.path('dlv', code_type), 'utf-8');

        return code;
    }
}