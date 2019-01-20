INSERT INTO educators (name, displayname, email, intro, avatar, pushnotificationtoken, occupation, education, programmingexperience, favoriteprogramminglanguages, role, payment, languagesofexpertise)
VALUES ('Ali ALhaddad', 'AliA1997', 'devmtnali@gmail.com', 'Life long learner and educator.',
 'https://res.cloudinary.com/aa1997/image/upload/v1534804940/rwvgwhqverv3pl3w2fna.svg', 'pushnotificationtoken', 'General Software Engineer',
 ROW('devmtnali@gmail.com', 'Devmountain', 'Web Development Bootcamp', 2018), 2,
 ARRAY[ROW('Javascript', 'http://res.cloudinary.com/aa1997/image/upload/t_media_lib_thumb/v1534738803/javascript.jpg')]::PROGRAMMINGLANGUAGE[],
'Educator', null, 
ARRAY[ROW('Javascript', 'http://res.cloudinary.com/aa1997/image/upload/t_media_lib_thumb/v1534738803/javascript.jpg')]::programminglanguage[]);