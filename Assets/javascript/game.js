var wins = 0;
var losses = 0;
var turnsLeft = 10;
var guesses = 0;

// User selects a letter
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
}
// Computer picks random letter

var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var turnsleft = 10;


		
if (userGuess == computerGuess){
			wins++;
}
else  {
	turnsleft --;
}

if (turnsleft === 0) {
	losses++;
}




