
--This information HAVE TO be in the DB to be connected to the front end.

-- ADMINISTRADOR
INSERT INTO admin (id_admin, name, email, password) VALUES(1,"Admin","email_admin_test", "password_test");

-- SCENARIO ROOMS
INSERT INTO `scenario` (`name_scenario`) VALUES
('Otro'),
('Bano'),
('Biblioteca'),
('Cocina'),
('Comedor'),
('Cuarto'),
('Gym'),
('Jardín'),
('Sala');
-- TYPE DEVICES
INSERT INTO `type` (`name_type`) VALUES
('Bocina'),
('Consola'),
('Luz'),
('Tv'),
('Otro');

-- STAGE
INSERT INTO stage (name, admin_id_admin) VALUES("Default stage", 1);
-- ROOM
INSERT INTO room (name, scenario_id_scenario, stage_id_stage) VALUES("Default room", 1, 1);




