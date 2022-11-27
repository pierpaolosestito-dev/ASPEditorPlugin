import * as fs from 'fs';

export function dictionarizer(path: string){
	let dictionarized_json_file = {};
	try {
        dictionarized_json_file = JSON.parse(fs.readFileSync(path, 'utf-8'));
    } catch (error) {
		return dictionarized_json_file;
    }	
    return dictionarized_json_file;
}
