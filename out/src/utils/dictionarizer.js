"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dictionarizer = void 0;
const fs = require("fs");
function dictionarizer(path) {
    let dictionarized_json_file = {};
    try {
        dictionarized_json_file = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    catch (error) {
        return dictionarized_json_file;
    }
    return dictionarized_json_file;
}
exports.dictionarizer = dictionarizer;
//# sourceMappingURL=dictionarizer.js.map