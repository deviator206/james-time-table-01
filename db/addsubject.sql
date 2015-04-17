DELIMITER $$

CREATE
    /*[DEFINER = { user | CURRENT_USER }]*/
    PROCEDURE `dev_teacher`.`addNewSubject`(IN subName VARCHAR(40),IN ac INT,classId INT, OUT nSubjectId INT)
    /*LANGUAGE SQL
    | [NOT] DETERMINISTIC
    | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
    | SQL SECURITY { DEFINER | INVOKER }
    | COMMENT 'string'*/
    BEGIN
	SET nSubjectId = 0;
	INSERT INTO SUBJECT (NAME,isactive,classid) VALUES (subName,ac,classId);
	SET nSubjectId =  LAST_INSERT_ID();
	SELECT nSubjectId;
    END$$

DELIMITER ;