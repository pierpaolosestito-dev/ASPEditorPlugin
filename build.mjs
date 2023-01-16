/*
	Questo file permette di eseguire build diversi in base al sistema operativo.
*/

import console from 'console';
import { exec } from 'child_process';
import * as os from 'os';



const linux_command = "tsc && mkdir ./out/src/cpanel/code/ && mkdir ./out/src/cpanel/code/dlv\
&& cp -R ./src/cpanel/code/dlv/* ./out/src/cpanel/code/dlv/";

const windows_command = "tsc && mkdir .\\out\\src\\cpanel\\code\\ && mkdir .\\out\\src\\cpanel\\code\\dlv\
&& cp -R .\\src\\cpanel\\code\\dlv\\* .\\out\\src\\cpanel\\code\\dlv\\";

const mac_command = "tsc && mkdir ./out/src/cpanel/code/ && mkdir ./out/src/cpanel/code/dlv\
&& cp -R ./src/cpanel/code/dlv/* ./out/src/cpanel/code/dlv/";

function puts(error, stdout, stderr) {
	console.log(stdout);
}

// Run command depending on the OS
if (os.type() === 'Linux') {
	console.log('Linux Build');
	exec(linux_command, puts);
	console.log('Linux Build done!');
}
else if (os.type() === 'Darwin') {
	console.log('Mac Build');
	exec(mac_command, puts);
	console.log('Mac Build done!');
}
else if (os.type() === 'Windows_NT') {
	console.log('Windows Build');
	exec(windows_command, puts);
	console.log('Windows Build done!');
}
else
	throw new Error("Unsupported OS found: " + os.type());