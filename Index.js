//Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

//Classes
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/generatepage.js');

//Empty Array to add Team Member Objects
const teamArr = [];

//Add Manager
const addManager = () => {
    console.log('Create your team');

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is manager's employee ID? (Required)",
                validate: idInput => {
                    if (idInput > 0) {
                        return true;
                    } else {
                        console.log('Please enter valid employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is manager's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is manager's office number? (Required)",
                validate: officeNumberInput => {
                    if (officeNumberInput > 0) {
                        return true;
                    } else {
                        console.log('Please enter a valid office number!');
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            teamArr.push(manager);
            console.log(manager);
            addTeam();
        })
};

//Add Additional Team Members or build page
const addTeam = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'Would you like to add additional team members or is your team complete?',
                choices: ['Add Engineer', 'Add Intern', 'Finished with team']
            }
        ])
        .then(data => {
            if (data.menu === 'Add Engineer') {
                addEngineer();
            } else if (data.menu === 'Add Intern') {
                addIntern();
            } 
            else {
                buildTeam();
            }
        })
};
//Add Engineer
const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team engineer's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is engineer's employee ID? (Required)",
                validate: idInput => {
                    if (idInput > 0) {
                        return true;
                    } else {
                        console.log('Please enter valid employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is engineer's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is engineer's Github username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a Github username');
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            teamArr.push(engineer);
            console.log(engineer);
            addTeam();
        })
}

//Add Intern
const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team intern's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is intern's employee ID? (Required)",
                validate: idInput => {
                    if (idInput > 0) {
                        return true;
                    } else {
                        console.log('Please enter valid employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is intern's email address? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email address!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school? (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a school');
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            teamArr.push(intern);
            console.log(intern);
            addTeam();
        })
}
//Start Application
addManager();

//Build Team
function buildTeam() {
    fs.writeFileSync('./dist/team.html', generatePage(teamArr), 'UTF-8');
    fs.copyFileSync('./src/style.css', './dist/style.css', 'UTF-8');
    console.log(teamArr);
};



