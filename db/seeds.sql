INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Mack', 'Hansen', 01),
('Gus', 'Guapo', 02),
('Payton', 'Swimmer', 03),
('Kody', 'Mastic', 04),
('Lyil', 'Teflon', 05),
('Jayson', 'Great', 06);


INSERT INTO role (job, base_salary, departmentId) 
VALUES
('Service Technician', 70000, 1),
('Plumber', 69000, 2),
('Service Manager', 90000, 1);


INSERT INTO department
VALUES
('HVAC'),
('Plumbing'),
('Manager')