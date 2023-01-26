/** @param {NS} ns */
export async function main(ns) {
    var target = ns.args[0];
    var minMoney = ns.getServerMaxMoney(target) * 0.75;
    var maxSecurity = ns.getServerSecurityLevel(target) + 5;
 
    while (true) {
        if (ns.getServerMoneyAvailable(target) < minMoney || ns.getServerSecurityLevel(target) > maxSecurity) {
            await ns.grow(target); await ns.weaken(target);
        }
        else {
            await ns.hack(target);
        }
    }
}
