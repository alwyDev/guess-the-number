var secretNumber = 5;

var stringGuess = prompt("Guess a number!");
var guess = Number(stringGuess);

if (guess === secretNumber) {
  alert("You guess a correct number");
} else if (guess > secretNumber) {
  alert("Your guess number is too high");
} else {
  alert("Your guess number is too low");
}