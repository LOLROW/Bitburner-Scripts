/** @param {NS} ns */
export async function main(ns) {
	// 32G RAM required
	
	// Take in hackable servers
	var targets = [ns.args[0], ns.args[1], ns.args[2], ns.args[3]]; // Min: 4 add more if u want.

	// Iterate through each
	for (let target in targets) {
		if (connect(target) == true) { // if you can connect
			// connect, download code, run the code.
			await connect(target); 
			await wget('https://github.com/LOLROW/Bitburner-Scripts/blob/main/test.js', 'virus.js');
			await run('virus.js', target);
		}
	}
}
