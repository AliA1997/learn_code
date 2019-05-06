SELECT 
    name
    ,displayname
    ,email
    ,intro
    ,avatar
    ,pushnotificationtoken 
    ,occupation 
    ,casteducation(education)
    ,programmingexperience 
    ,returnplitems(favoriteprogramminglanguages)
    ,role
FROM users;