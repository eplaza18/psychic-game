var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']

var wins = 0;
var losses = 0;
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var lettersGuessed = document.getElementById("letters-guessed");

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    //Computer guesses random character from array.
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    //If win, tally one win and reset game
    if (userGuess === computerGuess) {
        console.log("You win!"); 
    }
    //Write letter guessed, and take one guess away, continue game.
    else (userGuess !== computerGuess) 
    //Write letter guessed
    console.log(userGuess);
    // document.write(lettersguessed=userGuess);
    
    //Take 1 guess away, repeat until none left, write loss, restart

    
    }

    