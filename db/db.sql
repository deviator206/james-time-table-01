CREATE DATABASE dev_teacher;

//teacher TABLE
CREATE TABLE teacher (teacherid INT,firstname  VARCHAR(100),lastname VARCHAR(100), isactive INT );
ALTER TABLE teacher CHANGE teacherid teacherid INT NOT NULL AUTO_INCREMENT;

//class TABLE
CREATE TABLE class (classid INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(40), isactive INT NOT NULL , PRIMARY KEY (classid));

//SUBJECT TABLE
CREATE TABLE SUBJECT (subjectid INT NOT NULL AUTO_INCREMENT, NAME VARCHAR(40), isactive INT NOT NULL , classid INT, PRIMARY KEY (subjectid),FOREIGN KEY (classid) REFERENCES class (classid));


//map TABLE
CREATE TABLE map_teach_sub (mapid INT NOT NULL AUTO_INCREMENT, classid INT,subjectid INT,teacherid INT, isactive INT NOT NULL ,  PRIMARY KEY (mapid),FOREIGN KEY (classid) REFERENCES class (classid),FOREIGN KEY (teacherid) REFERENCES teacher (teacherid),FOREIGN KEY (subjectid) REFERENCES SUBJECT (subjectid));


addTeacher 

CREATE PROCEDURE addteacher (fname VARCHAR(100),lname VARCHAR(100) )AS INSERT INTO teacher (firstname,lastname,isactive) VALUES (fname,lname,1) go;


CREATE OR REPLACE PROCEDURE greetings() BEGIN    dbms_output.put_line('Hello World!');END/;