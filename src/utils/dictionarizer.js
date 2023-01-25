"use strict";
exports.__esModule = true;
exports.dictionarizer = void 0;
var fs = require("fs");
function dictionarizer(path) {
    var dictionarized_json_file = {};
    try {
        dictionarized_json_file = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    catch (error) {
        return dictionarized_json_file;
    }
    return dictionarized_json_file;
}
exports.dictionarizer = dictionarizer;
