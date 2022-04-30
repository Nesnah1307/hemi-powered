DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;


CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL
);


CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    base_salary DECIMAL(10, 2) NOT NULL,
    departmentId INTEGER,
    CONSTRAINT fk_departments FOREIGN KEY(departmentId) REFERENCES departments(id) ON DELETE CASCADE
);


CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT fk_role_id FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE
);

