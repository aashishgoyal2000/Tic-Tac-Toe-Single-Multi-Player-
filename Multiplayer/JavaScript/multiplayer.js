var x0 = 0;
var arrItr = 0;
var undoArray = [];
var scoreCounterX = 0;
var scoreCounter0 = 0;

function setName(name) {
	document.getElementById("set" + name).innerHTML = document.getElementById(name).value;	
}

function toggleIMG(ab) {
	if (document.getElementById(ab).src == "file:///C:/Users/Dell/Desktop/Tic%20Tac%20Toe/Multiplayer/Style/user1.png") {
		document.getElementById(ab).src = "file:///C:/Users/Dell/Desktop/Tic%20Tac%20Toe/Multiplayer/Style/user2.png";
	}

	else if (document.getElementById(ab).src == "file:///C:/Users/Dell/Desktop/Tic%20Tac%20Toe/Multiplayer/Style/user2.png") {
		document.getElementById(ab).src = "file:///C:/Users/Dell/Desktop/Tic%20Tac%20Toe/Multiplayer/Style/user1.png";
    }

}

function undi() {
		if (x0 == 0) {
		document.getElementById(undoArray[arrItr - 1]).value = " ";
		return;
	}
	document.getElementById(undoArray[arrItr - 1]).value = " ";
	x0 = x0 - 1;
	arrItr = arrItr - 1;
}

function checkGoal(a) {
	if (document.getElementById(a).value == " ") {
		if (x0%2 == 0) {
			document.getElementById(a).value = "X";
		} else {
			document.getElementById(a).value = "0";
		}
		undoArray[arrItr] = a;
		arrItr += 1;

		x0 = x0 + 1;
	}
	checkForWin();
	var a = checkForPossibility();
	if (!a) {
		window.alert("Win not Possible");
		resetBoard();
	}
}

function checkForPossibility() {
	for (var i = 1; i <= 9; i++) {
		if (document.getElementById(i).value == " ") {
			return true;
		}
	}
	return false;
}

function checkForWin() {
	for (var i = 1; i <= 3; i++) {
		var a1 = document.getElementById(i).value;
		var a2 = document.getElementById(i + 3).value;
		var a3 = document.getElementById(i + 6).value;
		if (a1 == "X" || a1 == "0") {
			if (a1 == a2 && a2 == a3) {
				console.log(a1);
				window.alert(a1 + " Wins");
				scoreUpdater(a1);
				resetBoard();
				return;
			}
		}
	}
	for (var i = 1; i <= 9; i += 3) {
		var a1 = document.getElementById(i).value;
		var a2 = document.getElementById(i + 1).value;
		var a3 = document.getElementById(i + 2).value;
		if (a1 == "X" || a1 == "0") {
			if (a1 == a2 && a2 == a3) {
				window.alert(a1+" Wins");
				scoreUpdater(a1);
				resetBoard();
				return;
			}
		}
	}
	var a1 = document.getElementById(1).value;
	var a2 = document.getElementById(5).value;
	var a3 = document.getElementById(9).value;
	if (a1 == "X" || a1 == "0") {
		if (a1 == a2 && a2 == a3) {
			window.alert(a1+" Wins");
			scoreUpdater(a1);
			resetBoard();
			return;
		}
	}
	a1 = document.getElementById(3).value;
	a2 = document.getElementById(5).value;
	a3 = document.getElementById(7).value;
	if (a1 == "X" || a1 == "0") {
		if (a1 == a2 && a2 == a3) {
			window.alert(a1 + " Wins");
			scoreUpdater(a1);
			resetBoard();
			return;
		}
	}
}

function resetBoard() {
	for (var i = 1; i <= 9; i++) {
		document.getElementById(i).value = " ";
		x0 = 0;
	}
}

function scoreUpdater(a1) {
	if (a1 == "X") {
		scoreCounterX += 1;
		document.getElementById("X").innerHTML = scoreCounterX;
	}
	else if (a1 == "0") {
		scoreCounter0 += 1;
		document.getElementById("0").innerHTML = scoreCounterX;
	}
	console.log(scoreCounterX + " " + scoreCounter0);

}