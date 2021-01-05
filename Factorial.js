/*
* This program uses recursion to find factorial of a number.
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2021-01-05
*/

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

function factorialer(someInt) {
  if (someInt == 1) {
    return 1;
  } else {
    return (someInt * factorialer(someInt - 1));
  }
}

/**
 * This function handles all the inputs and outputs.
 */

try {
  // input
  const userInt = prompt("Input an integer: ");
  
  // process
  let factorialNum = factorialer(userInt);

  //output
  console.log("Factorial " + userInt + " is: " + factorialNum);

} catch (err) {
  console.log("Invalid Input");
}

