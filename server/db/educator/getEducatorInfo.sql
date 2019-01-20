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
FROM educators WHERE displayName = $1 OR email = $1;