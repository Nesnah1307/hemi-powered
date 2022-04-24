const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require('./db/connection');
require("console.table");

function start() {

    inquirer.prompt({
        name: "Choices",
        type: "list",
        message: "Please select an action for the Employee Database.",
        choices: [
            "View Departments",
            "View Employees",
            "View Roles",
            "Add a department",
            "Add an employee",
            "Add Role",
            "Exit",
        ],
    }).then((userSelect) => {
        switch (userSelect.Choices) {
            case 'View Departments':
                viewDepartments();
                break;

            case 'View Employees':
                viewEmployees();
                break;

            case 'View Roles':
                viewRoles();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Add employee':
                addEmployee();
                break;

            case 'Add role':
                addRole();
                break;
        }

    });
}

const viewDepartments = () => {
    const department = `SELECT * FROM departments`;
    db.query(department, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.table('All departments: ', data);
        }
        start();
    });
}


const viewEmployees = () => {
    const employees = `SELECT * FROM employees`;
    db.query(employees, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.table('All employees: ', data);
        }
        start();
    });
}


const viewRoles = () => {
    const roles = `SELECT * FROM roles`;
    db.query(roles, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.table('All roles: ', data);
        }
        start();
    });
}


function addDepartment() {
    inquirer.prompt([
        {
           message: "Enter name of new department:",
           type: "input",
           name: "name"
        }
     ]) .then(function (answer) {
        const newDepartment = answer.name

        db.query("INSERT INTO department (depart_name) VALUES ( ? )", [newDepartment], function (err, res) {
            if (err) throw err;

            console.table(`${newDepartment} added!`);
            start();
        });
    });
};





start();
