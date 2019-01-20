---Sample Educator
INSERT INTO educators (name, displayName, email, intro, avatar, pushNotificationToken, occupation, education, programmingExperience, favoriteProgrammingLanguages, role, languagesOfExpertise)
VALUES ('Ali Alhaddad', 'AliA1997', 'devmtnali@gmail.com', 'Learner and Educator', 'https://res.cloudinary.com/aa1997/image/upload/v1534804940/rwvgwhqverv3pl3w2fna.svg', 'pushnotificationtoken', 'General Software Engineer', 
ROW('devmtnali@gmail', 'Devmountain', 'Web Development Badge', 2018), 1, 
ARRAY[ROW('Javascript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738803/javascript.svg'),
ROW('C++', 'https://res.cloudinary.com/aa1997/image/upload/v1542867266/c.jpg')]::programminglanguage[], 'Educator',
ARRAY[ROW('Javascript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738803/javascript.svg')]::programminglanguage[]);

--Sample Student
INSERT INTO students (name, displayName, email, intro, avatar, pushnotificationtoken, occupation, education, programmingexperience, favoriteprogramminglanguages, role, favoritetutorials, subscription)
VALUES ('Ali Alhaddad', 'AQA_1997', 'aalhaddad1997@gmail.com', 'Striving Machine Learning Engineer', 'https://res.cloudinary.com/aa1997/image/upload/v1534736552/br73wmvzoiqryegnpzu6.jpg', 
'pushnotificationtoken', 'Flow Member at Target', ROW('aalhaddad1997@gmail.com', 'Modesto Junior College', 'Associate Degree in Computer Science', 2018), 1, 
ARRAY[ROW('Typescript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738804/typescript.svg'),
ROW('Javascript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738803/javascript.svg')]::PROGRAMMINGLANGUAGE[], 'Student - Basic', 
ARRAY[ROW('http://saf', 'Basic of Javascrpt', 'Javascript', ROW(1, 'Ali Alhaddad', 'https://res.cloudinary.com/aa1997/image/upload/v1534673234/nn6pyrvlgkbwnqvoox7y.jpg'))]::FAVORITETUTORIAL[],
ROW('Basic', 0.00));

--Sample PlItem
INSERT INTO plItems (name, image) VALUES
('Javascript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738803/javascript.svg'), 
('C++', 'https://res.cloudinary.com/aa1997/image/upload/v1542867266/c.jpg');


--Sample Tutorial
INSERT INTO tutorials (educatorId, title, image, subject, skilllevel, averagerating, tags, author, criticisms, datecreated, dateupdated)
VALUES (1, 'Intro to Javascript', 'https://res.cloudinary.com/aa1997/image/upload/v1534738803/javascript.svg', 'Javascript', 'Beginner', 3.0, 
ARRAY[ROW('Javascript'), ROW('Web Development'), ROW('Software Engineering')]::TAGITEM[], ROW(1, 'Ali Alhaddad', 'https://res.cloudinary.com/aa1997/image/upload/v1534804940/rwvgwhqverv3pl3w2fna.svg'),
ARRAY[ROW(1, ROW(1, 'Jasmine Alhaddad', 'https://res.cloudinary.com/aa1997/image/upload/v1534804940/rwvgwhqverv3pl3w2fna.svg'), 'Sample Body', 3.0)]::CRITICISM[], now(), now());
