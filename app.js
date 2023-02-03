const inquirer = import('inquirer')

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