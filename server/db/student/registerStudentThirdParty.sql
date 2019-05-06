INSERT INTO students
(role, displayname, email, avatar) 
VALUES
(${role}, ${displayName}, ${email}, ${avatar});
SELECT
    displayname
    ,email 
    ,avatar
    ,role
FROM students
ORDER BY id  DESC LIMIT 1;
