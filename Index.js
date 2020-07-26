//Node Modules
const inquirer = require('inquirer');
const fs = require('fs');

//Classes
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

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
        })
};

//Add Additional Team Members or build page

//Add Engineer

//Add Intern

//Start Application
addManager();


