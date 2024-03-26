#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Welcome Message
console.log("\n\tWelcome To \'calculatorcoding'\ - CLI Simple Calculator\n");

//Asking Questions from Users through Inquirer

let answers = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name:"firstNumber" },
  { message: "Enter second Number", type: "number", name:"secondNumber" },
{
    message: "Select one Operator to perform Operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  }
]);

// Conditional statement If-Else

if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Invalid Input");
}
