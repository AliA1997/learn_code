SELECT
    id
    ,name
    ,displayName
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
FROM educators;