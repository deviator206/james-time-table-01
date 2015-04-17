CREATE
    /*[DEFINER = { user | CURRENT_USER }]*/
    FUNCTION `dev_teacher`.`func1`(IN classId INT)
    RETURNS  TABLE AS RETURN  SELECT * FROM SUBJECT WHERE classid =  classId;
