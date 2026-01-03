// 02-Challenge — Professional README Generator (Unsolved Starter)

// TODO: Import the required packages:
// - fs for writing files
// - inquirer for collecting user input
// - the generateMarkdown function from ./utils/generateMarkdown
// const inquirer = require("inquirer");

import fs from "fs";
import inquirer from "inquirer";
import { generateMarkdown } from "./utils/generateMarkdown.js";

console.log("Required and imported all necessary packages");

// TODO: Create an array of questions for user input.
// Each question should collect part of the README content:
// - GitHub username
// - Email address
// - Project title
// - Project description
// - License (choose from a list)
// - Installation command
// - Test command
// - Usage information
// - Contribution guidelines
//
// Example shape of a question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?",
// }

const questions = [
  {
    type: "input",
    name: "username",
    message: "github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "github email: ",
  },
  {
    type: "input",
    name: "title",
    message: "project title: "
  },
  {
    type: "input",
    name: "description",
    message: "project description: "
  },
  {
    type: "choice",
    name: "license",
    message: "license: "
  },
  {
    title: "input",
    name: "installCommand",
    message: "installation command: "
  },
  {
    title: "input",
    name: "testCommand",
    message: "test command: "
  },
  {
    title: "input",
    name: "usageInfo",
    message: "usage information: "
  },
  {
    title: "input",
    name: "contributionGuide",
    message: "contribution guidelines: "
  }
];

inquirer
  .prompt(questions)
  .then((data) => {
    const name = data.name;
    console.log("Data is: ", data);
  })
  .catch((err) => console.error("Something bad happened: ", err));

// TODO: Create a function to write the README file.
// It should take a file name and the data to write.
// Use fs.writeFile or fs.writeFileSync inside this function.

function writeToFile(fileName, data) {
  // TODO: Implement this function so it writes "data" to "fileName"
}

// TODO: Create a function to initialize the app.
// Inside it:
// 1. Prompt the user with inquirer.prompt(questions)
// 2.
