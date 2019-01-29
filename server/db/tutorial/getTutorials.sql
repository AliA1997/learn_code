
SELECT  id,
        educatorId,
        title,
        image,
        subject,
        skilllevel,
        averagerating,
        returnTags(tags) AS tags,
        castAuthor(author) AS author,
        returnCriticisms(criticisms) AS criticisms,
        datecreated,
        dateupdated
FROM tutorials;