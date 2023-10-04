//GRADE ASSGINER

// Step 1: Prompt the user to enter a number between 1 and 100
let userInput = parseInt(prompt("Enter a number between 1 and 100:"));

// Step 2: Check if the input is a valid number between 1 and 100
if (userInput >= 1 && userInput <= 100) {
  // Step 3: Determine the grade based on the score
  if (userInput >= 90 && userInput <= 100) {
    console.log("You received an A");
  } else if (userInput >= 80 && userInput < 90) {
    console.log("You received a B");
  } else if (userInput >= 70 && userInput < 80) {
    console.log("You received a C");
  } else if (userInput >= 60 && userInput < 70) {
    console.log("You received a D");
  } else {
    console.log("You received an F");
  }
} else {
  // Step 4: Display an error message for invalid input
  console.log("Only numbers between 1 and 100 are accepted.");
}








  
  