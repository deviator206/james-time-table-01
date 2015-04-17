DELIMITER $$

CREATE 
    /*[DEFINER = { user | CURRENT_USER }]*/
    PROCEDURE `dev_teacher`.`addNewTeacher`( IN fname VARCHAR(100),IN lname VARCHAR(100), IN ac INT, OUT latestId INT  )
    BEGIN
	INSERT INTO teacher (firstname,lastname,isactive) VALUES (fname,lname,ac);
	SET latestId =  LAST_INSERT_ID();
	SELECT latestId;
	
    END$$

DELIMITER ;
