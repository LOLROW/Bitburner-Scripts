/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0];
	var minimumMoney = ns.getServerMaxMoney(target) * 0.5;
	var maximumSecurityLevel = ns.getServerSecurityLevel(target) + 5;

	ns.nuke(target);

	while (true) {
		if (ns.getServerMoneyAvailable(target) < minimumMoney || ns.getServerMinSecurityLevel(target) > maximumSecurityLevel) {
			await ns.grow(target); await ns.weaken(target);
		}
		await ns.hack(target)
	}
}
