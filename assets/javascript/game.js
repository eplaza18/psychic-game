var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']

var wins = 0;
var loss = 0;
var guesses = 10;



var winsText = document.getElementById("wins-text");
var lossText = document.getElementById('losses-text');
var lettersGuessed = document.getElementById("letters-guessed")
var guessesLeft = document.getElementById("guesses-left");

function randomLetter() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(computerGuess);
 }
 //this code runs the function
 randomLetter();
 
 function resetGuesses() {
    randomLetter();
    guesses = 10;
 }
    
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    
    //If win, tally one win and reset game
    if (userGuess === computerGuess) {
        wins++;
        alert ("You Win!");
        resetGuesses();       
    }

    //Write letter guessed, and take one guess away, continue game.
    else if (userGuess !== computerGuess) {

        var newDiv = document.createElement("div");
        lettersGuessed.appendChild(newDiv);
        newDiv.textContent = userGuess + ", ";

        for (var i = 10; i > 0; i--) {
            guessesLeft.textContent = guesses - 1;            
        }
        
        if (guesses === 1) {
            loss++;
            alert ("You Lose, try again.");
            resetGuesses();
        }
           
        winsText.textContent = 'Wins: ' + wins;
        lossText.textContent = 'Losses: ' + loss;
        guesses--;
    }
}