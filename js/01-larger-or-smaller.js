// Step 1: prompt user to input the integer
var num1 = parseInt(prompt("Enter your first integer: "));
var num2 = parseInt(prompt("Enter your second integer: "));

if (isNaN(num1) || isNaN(num2)) {
    //Step 2 invalid input
    document.write("Invalid input. Please enter valid integers.");
} else {
    if (num1 > num2) {//Step 3 if statement for this condition
        document.write("The larger number is: " + num1);
    } else if (num2 > num1) {
        document.write("The larger number is: " + num2);
    } else {
        document.write("Both numbers are equal: " + num1);
    }
}