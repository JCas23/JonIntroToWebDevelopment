function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}


function play() {
		var startBet = Number(document.forms["diceRoll"]["startingBet"].value);
		var gameMoney = startBet;
		var die1;
		var die2;
		var diceSum;
		var maxWinnings = gameMoney;
		var rollCount = 0;
		var rollsMax = 0;

	if (gameMoney <= 0 || isNaN(gameMoney)) {
		alert("Starting bet must be greater than $0");
	}
	else {
		while (gameMoney > 0) {
			die1 = rollDice();
			die2 = rollDice();
			diceSum = die1 + die2;
			rollCount++;
			if (diceSum != 7) {
				gameMoney--;
			}
			else {
				gameMoney += 4;
				if (gameMoney > maxWinnings) {
					maxWinnings += (gameMoney - maxWinnings);
					rollsMax = rollCount;
				}
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again";
	document.getElementById("startingBetResult").innerText = startBet;
	document.getElementById("rollCount").innerText = rollCount;
	document.getElementById("highestPayout").innerText = maxWinnings;
	document.getElementById("highestPayoutRoll").innerText = rollsMax;
	return false;
}
