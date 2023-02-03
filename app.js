const inquirer = require('inquirer');
const fs = require('fs');




let readmeWrapper = (data) =>
 `function generateMarkdown(data) {
    return '# ${data.title}

  ${licenseGenerator.checkLicense(data.license)}

  ## Table of Contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contribution)
  - [Questions](#questions)

  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}
  
  ## License

 ${licenseGenerator.licenseContent(data.license)}
  
  ## Contribution
  
  ${data.contribute}
  
  ## Questions
  
  If you have any questions, you can contact me via the information below.

  // TODO: Add link to github with username 
  * Email: ${data.email}';
  * Github: https://github.com/${data.github}
}`;



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation guide?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email for questions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github username for questions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
                }
    }
]

function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        return answers
    })
    .catch((error)=>{
        console.log(error)
    })
}

runQuery();