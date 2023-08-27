// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('../Develop/utils/generateMarkdown');
const { type } = require('os');
const { createBrotliDecompress } = require('zlib');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: input,
        name: readmetitle,
        message: 'Please name your README:',
    },
    {
        type: input,
        name: purposeofproject,
        message: 'What was the purpose for building thid project:',
    },
    {
        type: input,
        name: resolution,
        message: 'What probelm will this project help sove:',
    },
    {
        type: input,
        name: standout,
        message: 'What makes your project stand out from others:',
    },
    {
        type: input,
        name: languages,
        message: 'What languages were used in your project:',
    },
    {
        type: input,
        name: creator,
        message: 'What is your name:',
    }, 
    {
        type: input,
        name: creatorusername,
        message: 'What is your GitHub username:',
    }, 
    {
        type: input,
        name: collaborators,
        message: 'List any collaborators you had:',
    }, 

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
