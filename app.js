const inquirer = require('inquirer');
const fs = require('fs');




let readmeWrapper = (data) => 
`# ${data.title}



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

 ${data.license}
  
  ## Contribution
  
  ${data.contribute}
  
  ## Questions
  
  If you have any questions, you can contact me via the information below.

  * Email: ${data.email}
  * Github: https://github.com/${data.github}
}}`;
    

inquirer.prompt([
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
    type: 'list',
    name: 'license',
    message: 'License?',
    choices:['MIT', 'ISC', 'GNUPLv3'],
},
{
    type: 'input',
    name: 'contribute',
    message: 'Contributions?',
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
}
])
.then((answers) => {
   const userInput = readmeWrapper(answers)


fs.writeFile('gREADME.md', userInput, (err) =>
  err ? console.error(err) : console.log('Success!')
); 
})
