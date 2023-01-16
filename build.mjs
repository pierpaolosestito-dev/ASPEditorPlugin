import console from 'console';
import { exec } from 'child_process';
import * as os from 'os';

const linux_command = "tsc && mkdir ./out/src/cpanel/code/ && mkdir ./out/src/cpanel/code/dlv\
&& cp -R ./src/cpanel/code/dlv/* ./out/src/cpanel/code/dlv/";

const windows_command = "tsc && mkdir ./out/src/cpanel/code/ && mkdir ./out/src/cpanel/code/dlv\
&& cp -R ./src/cpanel/code/dlv/* ./out/src/cpanel/code/dlv/";

function puts(error, stdout, stderr) {
	console.log(stdout);
}

// Run command depending on the OS
if (os.type() === 'Linux')
	exec(linux_command, puts);
else if (os.type() === 'Darwin')
	exec(windows_command, puts);
else if (os.type() === 'Windows_NT')
	exec("node build-windows.js", puts);
else
	throw new Error("Unsupported OS found: " + os.type());