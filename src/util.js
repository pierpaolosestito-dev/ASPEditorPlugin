	t vscode = require('vscode');
const fs = require('fs');

//Checks if there is a file .asp .lp or .dlv open in the editor
function checkCurrentFile() {
	if(!vscode.window.activeTextEditor) {
		vscode.window.showErrorMessage('Cannot execute command: No open file');
		return false;
	}

	if(vscode.window.activeTextEditor.document.languageId != "asp") {
		vscode.window.showErrorMessage("The file with focus (" + vscode.window.activeTextEditor.document.fileName + ") is not an asp file");
		return false;
	}

	return true;
}

function checkWorkspace(showMessage) {
	if(!(vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length != 0)) {
		if(showMessage) {
			vscode.window.showErrorMessage("A workspace must be open to use this functionality");
		}
		return false;
	}
	return true;
}

//Reads the file config.json and returns a dictionary or undefined if it failed to read the file
function readConfigFile(context) {
	let configJSON;
	let config;
	try {
		configJSON = fs.readFileSync(context.asAbsolutePath('config.json'), 'utf-8');
		config = JSON.parse(configJSON);
	} catch (error) {
		vscode.window.showErrorMessage("An error occurred while reading the file config.json: " + error);
		return;
	}
	return config;
}

//Escapes the spaces in a specified path based on the os
function escapeSpaces(path) {
	switch(process.platform) {
		case "win32":
			path = path.replace(/ /g, "` ");
			break;

		case "darwin":
			path = path.replace(/ /g, "\\ ");
			break;
		
		default:
			path = path.replace(/ /g, "\\ ");
			break;
	}
	return path;
}

module.exports = {
    checkCurrentFile,
	checkWorkspace,
	readConfigFile,
	escapeSpaces
}	