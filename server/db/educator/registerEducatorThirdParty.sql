INSERT INTO educators 
(role, displayname, email, avatar) 
VALUES
(${role}, ${displayName}, ${email}, ${avatar});
SELECT
    displayname
    ,email 
    ,avatar
    ,role
FROM educators
ORDER BY id  DESC LIMIT 1;