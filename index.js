const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for input
const questions = [

{
    type: 'input', 
    name: 'title',
    message: 'What is the title of your Project?:',
},
{
    type: 'input', 
    name: 'description',
    message: 'Provide a description of your project: ',
},
{
    type: 'input', 
    name: 'motivation',
    message: 'What was your motivation for building the project?: ',
},
{
    type: 'input', 
    name: 'installation',
    message: 'Provide usage information: ',
},
{
    type: 'input', 
    name: 'credits',
    message: 'List of collaberators if any: ',
},
{
    type: 'list', 
    name: 'license',
    message: 'Choose a license for your project: ',
    choices: ['MIT', 'Apache', 'GPL', 'None'],
},
{
    type: 'input', 
    name: 'contributing',
    message: 'Provide contribution guidelines: ',
},
{
    type: 'input', 
    name: 'tests',
    message: 'Provide test instructions: ',
},
{
    type: 'input', 
    name: 'github',
    message: 'What is your GitHub username?: ',
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your email address?: ',
},
];

// Generate README content

function generateREADME(answers) {

return `

# ${answers.title}

## Description

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [tests](#tests)
- [GitHub](#github)
- [Email](#email)

## Installation

${answers.installation}

## Credits

${answers.credits}

## Usage

${answers.usage}

## License

This product is licensed under the ${answers.license} license.

## Contributing

${answers.contributing}

## Tests

${answers.tests}

## Questions or Inquiries

For any questions you may have, feel free to contact me using the following information:

GitHub: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.github}
`;
}


// Initialize application

async function init() {

try {

    const answers = await inquirer.prompt(questions);
    const readmeContent = generateREADME(answers);
    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md is a success!');
} catch (error) {
    console.error('Error:', error)
}
}

init();











  