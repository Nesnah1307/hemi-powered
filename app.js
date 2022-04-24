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
        console.table("All departments: ", data);
        }
        start();
    });
}


start();
