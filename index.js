import { stdin as input, stdout as output } from "node:process";
import * as readline from "node:readline/promises";

const r1 = readline.createInterface({ input, output });

let wantContinue = true;

while (wantContinue) {
  const n = 22;
  console.log("\n");
  console.log("\n");
  console.log("\n");
  console.log("Welcome to the Number Guessing Game! \n");
  console.log("I'm thinking of a number between 1 and 100. \n");
  console.log("You have 5 chances to guess the correct number. \n");
  console.log("\n");
  console.log("Please select the difficulty level: \n");
  console.log("1. Easy (10 chances)\n");
  console.log("2. Medium (5 chances)\n");
  console.log("3. Hard (3 chances)\n");
  const diff = await r1.question("Enter your choice: ");
  let dNumber = diff.toString().trim();
  let difficulty = "";
  let totalAttempts = 0;
  console.log(dNumber);
  if (dNumber === "1") {
    difficulty = "Easy";
    totalAttempts = 10;
  }
  if (dNumber === "2") {
    difficulty = "Medium";
    totalAttempts = 5;
  }
  if (dNumber === "3") {
    difficulty = "Hard";
    totalAttempts = 3;
  }
  console.log(`Great! You have selected the ${difficulty} difficulty level.\n`);
  console.log("Let's start the game!");
  const startTime = new Date();
  console.log("\n");

  let attemptsTaken = 1;

  while (attemptsTaken <= totalAttempts) {
    let answer = await r1.question("Enter your choice: ");
    answer = parseInt(answer.toString().trim());
    if (n == answer) {
      let endTime = new Date();
      console.log(
        `Congratulations! You guessed the correct number in ${attemptsTaken} attempts and ${
          endTime - startTime
        } miliseconds.`
      );
      break;
    } else {
      if (n > answer)
        console.log("Incorrect! The number is greater than ", answer);
      else console.log("Incorrect! The number is less than ", answer);
    }
    attemptsTaken++;
  }

  let res = await r1.question("Do you want to play another round ? [y/n]");
  if (res.toString().trim() === "y") wantContinue = true;
  else {
    wantContinue = false;
    break;
  }
}

r1.close();
