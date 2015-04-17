CALL gs1(5);



 SELECT * FROM SUBJECT WHERE classid =  5;
 
 
 CALL test04(1);
 


SELECT * FROM SUBJECT WHERE classid = 5

SELECT * FROM time_slot;

INSERT INTO  time_slot (label,active) VALUES 
('07.40 – 8-10',1);


INSERT INTO  time_slot (label,active) VALUES 
('08.10 – 8-40',1),
("08.40 – 9-10",1),
("09.10 – 9-40",1),
("09.40 - 10-10",1),
("10.10 – 10-30",1),

("10.30 – 11-00",1),
("11.00 – 11-30",1),
("11.30 – 12-00",1),
("12.00 – 12-30",1),
("12.30 –0 1-00",1);

DESCRIBE time_slot