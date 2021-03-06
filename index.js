const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fileName = 'ProjectReadMe.md'


// inquirer questios
const questions = [
    {
        type: 'input',
        message: 'Name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: "Write a description about the project or whatever you feel like, you're a free monkey.",
        name: 'description',
    },
    {
        type: 'input',
        message: "Input installation instructions about the project or preferably how to remove the cover plate of a remo ceiling light, why is it so hard?",
        name: 'install',
    },
    {
        type: 'input',
        message: "Input usage of your project or why anyone would use a remo ceiling light. They're old, difficult and I dont like them.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Input your contribution to the project or how whoever invented the remo ceiling light contributed nothing to society except for pain and suffering.",
        name: 'contribution',
    },
    {
        type: 'input',
        message: "Input any tests you have completed or how the inventor of the remo ceiling light failed to test his product and realise how terrible it was and still is.",
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select one of the following licenses. If there was a licence for creating decent ceiling lights that werent difficult to remove, the inventor of the remo ceiling light would definitely not have selected that license.',
        choices: ['Apache License', 'GNU License', 'MIT License', 'moelicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: "What's your gitHub user name?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What's your email?",
        name: 'email',
    }
];

// writes the files using generateMarkdown.js template
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Project ReadME saved :)')
    })
};

// runs inquirer questions and writetofile function
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(fileName, data);
        return data
    })
    .catch((error) => {
        console.error(error);
    });
};

// Function call to initialize app
init();
