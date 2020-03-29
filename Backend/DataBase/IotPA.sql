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
