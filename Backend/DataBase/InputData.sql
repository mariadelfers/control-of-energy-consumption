
--This information HAVE TO be in the DB to be connected to the front end.

-- ADMINISTRADOR
INSERT INTO admin (id_admin, name, email, password) VALUES(1,"nombre_admin_test","email_admin_test", "password_test");
-- SCENARIO ROOMS
INSERT INTO `scenario` (`id_scenario`, `name_scenario`) VALUES
('1', 'Bano'),
('2', 'Sala'),
('3', 'Comedor'),
('4', 'Estudio'),
('5', 'Jardin'),
('6', 'Cuarto'),
('7', 'Cocina'),
('8', 'Otro');
-- TYPE DEVICES
INSERT INTO `type` (`id_type`, `name_type`) VALUES
('1', 'Luz'),
('2', 'Bocina'),
('3', 'Tv'),
('4', 'Laptop'),
('5', 'Refrigerador'),
('6', 'Microondas'),
('7', 'Lavadora'),
('8', 'Otro');





