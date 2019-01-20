SELECT
    id
    ,name
    ,displayName
    ,password
    ,email
    ,intro
    ,avatar
    ,pushNotificationToken
    ,occupation
    ,castEducation(education) AS education
    ,programmingExperience
    ,returnPlItems(favoriteprogramminglanguages) AS favoriteProgrammingLanguages
    ,role
    ,returnPlItems(languagesOfExpertise) AS languagesOfExpertise
FROM students WHERE displayName = $1 OR email = $1;