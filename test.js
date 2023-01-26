/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]; // Get target paramater
	var minimumMoney = ns.getServerMaxMoney(target) * 0.5; // Set the minimum value that the server should be at in order to hack
	var maximumSecurityLevel = ns.getServerSecurityLevel(target) + 5; // Set the maximum security level so that we can weaken it if it goes above a threshhold

	ns.nuke(target); // gain root access of the target

	while (true) {
		if (ns.getServerMoneyAvailable(target) < minimumMoney || ns.getServerMinSecurityLevel(target) > maximumSecurityLevel) { // check paramaters above ^
			await ns.grow(target); await ns.weaken(target); // act on the case that ^ are not met
		}
		await ns.hack(target) // steal the money
	}
}
