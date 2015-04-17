DELIMITER $$

CREATE
    PROCEDURE `dev_teacher`.`test04`(IN id INT) 
    BEGIN
	 SELECT * FROM SUBJECT WHERE classid = id;
    END$$
DELIMITER ;

