INSERT INTO departments (title)
VALUES
('HVAC'),
('Plumbing'),
('Manager');

INSERT INTO roles (title, base_salary, departmentId) 
VALUES
('Service Technician', 70000, 1),
('Plumber', 69000, 2),
('Service Manager', 90000, 3);

INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Mack', 'Hansen', 1),
('Gus', 'Guapo', 2),
('Payton', 'Swimmer', 3),
('Kody', 'Mastic', 3),
('Lyil', 'Teflon', 3),
('Jayson', 'Great', 1);





