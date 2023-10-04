//Step 1: Generate a random number
let coinFlip = Math.round(Math.random())
// Step 2: Prompt the user to select Head or Tail
let userGuess = prompt("Select 'Heads' or 'Tails':").toLowerCase(); // Convert the user's input to lowercase for case-insensitive comparison

// Step 3: Use conditional statements to check the result of the coin flip and user's choice
if (coinFlip === 0) {
  // The result is heads
  if (userGuess === 'heads') {
    alert("The flip was heads and you chose heads...you win!");
  } else if (userGuess === 'tails') {
    alert("The flip was heads but you chose tails...you lose!");
  } else {
    alert("Invalid choice. Please select 'Heads' or 'Tails'.");
  }
} else {
  // The result is tails
  if (userGuess === 'tails') {
    alert("The flip was tails and you chose tails...you win!");
  } else if (userGuess === 'heads') {
    alert("The flip was tails but you chose heads...you lose!");
  } else {
    alert("Invalid choice. Please select 'Heads' or 'Tails'.");
  }
}