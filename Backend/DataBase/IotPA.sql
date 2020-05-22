--** PROCEDIMIENTOS ALMACENADOS **

-- LoginAdministrador
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginAdministrador`(IN username VARCHAR(10))
BEGIN
SELECT * FROM admin WHERE id_admin = username;
END ;;
DELIMITER ;

-- LoginUser
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `LoginUser`(IN username VARCHAR(10))
BEGIN
SELECT * FROM user WHERE username = username;
END ;;
DELIMITER ;

--Insertar un usuario 
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertUser`
(IN username VARCHAR(20), IN name VARCHAR(45), IN email VARCHAR(45), IN encriptado VARCHAR(255), admin VARCHAR(20))
INSERT INTO user 
(username, name, email, password, status, admin_id_admin) 
VALUES(username, name, email, encriptado, TRUE, admin) ;;
DELIMITER ;;

--Mostrar todos los usuarios
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `showUser`()
BEGIN
SELECT * FROM user where status = 1;
END ;;
DELIMITER ;

--Buscar un usuario dado username
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarUser`(IN username VARCHAR(20))
BEGIN
SELECT username, name, email FROM user WHERE username = username;
END ;;
DELIMITER ;

--Insertar un nuevo stage
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertStage`
(IN name VARCHAR(45), IN admin VARCHAR(20))
INSERT INTO stage
(name, admin_id_admin) 
VALUES(name, admin) ;;
DELIMITER ;;

--Buscar stage dado un id_stage
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarStage`(IN id_stage VARCHAR(20))
BEGIN
SELECT id_stage, name FROM stage WHERE id_stage = id_stage;
END ;;
DELIMITER ;