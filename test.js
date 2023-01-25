/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    var minMoney = ns.getServerMaxMoney * 0.75;
    var maxSecurity = ns.getServerSecurityLevel + 5;
 
    while (true) {
        if (ns.getServerMoneyAvailable < minMoney || ns.getServerSecurityLevel > maxSecurity) {
            await ns.grow(target); await ns.weaken(target);
        }
        else {
            await ns.hack(target);
        }
    }
}
