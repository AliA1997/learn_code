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
    ,returnFavoriteTutorials(favoritetutorials) as favoriteTutorials
    ,role
    ,returnsubscription(subscription) AS subscription
FROM students WHERE displayName = $1 OR email = $1;
