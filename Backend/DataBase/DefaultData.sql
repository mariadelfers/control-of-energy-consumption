
--This information HAVE TO be in the DB to be connected to the front end.

-- ADMINISTRADOR
INSERT INTO admin (id_admin, name, email, password) VALUES(1,"nombre_admin_test","email_admin_test", "password_test");

-- SCENARIO ROOMS
INSERT INTO `scenario` (`name_scenario`) VALUES
('Bano'),
('Sala'),
('Comedor'),
('Estudio'),
('Jardin'),
('Cuarto'),
('Cocina'),
('Otro');
-- TYPE DEVICES
INSERT INTO `type` (`name_type`) VALUES
('Luz'),
('Bocina'),
('Tv'),
('Laptop'),
('Refrigerador'),
('Microondas'),
('Lavadora'),
('Otro');

-- STAGE
INSERT INTO stage (name, admin_id_admin) VALUES("Default stage", 1);
--FLOOR
INSERT INTO floor (name, stage_id_stage) VALUES("Default floor", 1);
-- ROOM
INSERT INTO room (name, floor_id_floor, scenario_id_scenario) VALUES("Default room", 1, 1);




