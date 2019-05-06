INSERT INTO educators 
(role, displayname, email, avatar, education, programmingexperience, password) 
VALUES
(${role}, ${displayName}, ${email}, ${avatar}, castJsonbToEducation(${email}, ${education.institution}, ${education.yearofgraduation}, ${education.certificate})
, ${programmingExperience}, ${password});
SELECT  
     displayname
     ,email 
     ,avatar
     ,programmingexperience
     ,castEducation(education) AS education
     ,role
FROM educators
ORDER BY id  DESC LIMIT 1;