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
    ,returnFavoriteTutorials(favoritetutorials) AS favoriteTutorials
    ,returnSubscription(subscription) AS subscription
FROM students;