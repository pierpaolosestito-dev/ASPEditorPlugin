const fs = require('fs');
function dictionarizer(path){
	let dictionarized_json_file = {};
	try {
        dictionarized_json_file = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (error) {
        //vscode.window.showErrorMessage("An error occurred while reading the file autocomplete.json: " + error);
        console.log(error);
		return dictionarized_json_file;
    }	
    return dictionarized_json_file;
}
let regexp= /(\w+\(\w+(?:\,\w+)*\))(?:\:\-|\|)/g;
let string = "antonio(X):-";
console.log(regexp.test(string));
module.exports = dictionarizer;
    
