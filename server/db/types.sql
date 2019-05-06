-- Education Composite Type Definition
CREATE TYPE EDUCATION as (email VARCHAR(100), institution VARCHAR(200), certificate VARCHAR(150), yearOfGraduation INTEGER);
-- Education Composite Type function definition
CREATE OR REPLACE FUNCTION castEducation (educationArg EDUCATION) 
RETURNS JSONB AS $educationToReturn$
declare 
  educationToReturn jsonb;
BEGIN
  educationToReturn := jsonb_build_object(
    'email', (educationArg).email,
    'institution', (educationArg).institution,
    'certificate', (educationArg).certificate,
    'yearofgraduation', (educationArg).yearofgraduation
  );
  RETURN educationToReturn;
END;
$educationToReturn$ LANGUAGE plpgsql;

----Cast arguments to a Education type for register and inserting, and updating data.
CREATE OR REPLACE FUNCTION castJsonbToEducation(email TEXT, institution TEXT, yearOfGraduation INTEGER, certificate TEXT) 
RETURNS EDUCATION AS $educationToReturn$
DECLARE 
    educationToReturn EDUCATION;
BEGIN
    educationToReturn := ROW(email, certificate, institution, yearOfGraduation, certificate);
    RETURN educationToReturn;
END;
$educationToReturn$ LANGUAGE plpgsql;

------------------------------------------------------------------------------------------------
--Composite type definition
CREATE TYPE FEE as (paymentId VARCHAR(50), amount INTEGER, type VARCHAR(30), description VARCHAR(250), billing BOOLEAN);

-- Will cast fee to a jsonb
CREATE OR REPLACE FUNCTION castFee(fee FEE) 
RETURNS JSONB AS $feeToReturn$
DECLARE 
    feeToReturn jsonb;
BEGIN
    feeToReturn := json_build_object(
        'paymentId', (fee).paymentid,
        'amount', (fee).amount,
        'type', (fee).type,
        'description', (fee).description,
        'billing', (fee).billing
    );
    RETURN feeToReturn;
END;
$feeToReturn$ LANGUAGE plpgsql;


------------------------------------------------------------------------------------------------------

-- Will map over the stripePaymentArg fees and use your castFee function to cast each fee to a jsonb object.
CREATE OR REPLACE FUNCTION returnFees(feesArg FEE[])
RETURNS JSONB[] AS $feesToReturn$
DECLARE 
    feesToReturn JSONB[] := ARRAY[]::JSONB[];
    feeToCast JSONB;
    lengthOfFees INTEGER;
    counter INTEGER := 1;
BEGIN
    lengthOfFees := array_length(feesArg, 1);
    LOOP
    EXIT WHEN lengthOfFees < counter;
        feeToCast := castFee(feesArg[counter]);
        feesToReturn[counter] = feeToCast;
        counter := counter + 1;
    END LOOP; 
    RETURN feesToReturn;
END;
$feesToReturn$ LANGUAGE plpgsql;


-----------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------------------------------
--Define a your Subscription composite type.
CREATE TYPE SUBSCRIPTIONSTATUS as (subscription VARCHAR(20), price INTEGER);

--Define a function for returning a subscription mapped to a jsonb object.
CREATE OR REPLACE FUNCTION returnSubscription(subscriptionArg SUBSCRIPTIONSTATUS)
RETURNS JSONB AS $subscriptionToReturn$
DECLARE 
    subscriptionToReturn JSONB;
BEGIN
    subscriptionToReturn := json_build_object(
        'subscription', (subscriptionArg).subscription,
        'price', (subscriptionArg).price
    );
    RETURN subscriptionToReturn;
END;
$subscriptionToReturn$ LANGUAGE plpgsql;

-------------------------------------------------------------------------------------------------------------

-- Define your composite type 
CREATE TYPE STRIPEPAYMENT as (
    type VARCHAR(20),
    token VARCHAR(50),
    cardholderName VARCHAR(200),
    addressline1 VARCHAR(120),
    addressline2 VARCHAR(120),
    addressCity VARCHAR(100),
    addressZipcode VARCHAR(10),
    addressCountry VARCHAR(50),
    fees FEE[]  
);

--DEfine the function that will cast your stripe payment composite type to a jsonb object.
CREATE OR REPLACE FUNCTION selectStripePayment(spArg STRIPEPAYMENT) 
RETURNS JSONB AS $spToReturn$
DECLARE 
    spToReturn JSONB;
BEGIN
    spToReturn := json_build_object(
                    'type', (spArg).type,
                    'token', (spArg).token,
                    'cardholderName', (spArg).cardholdername,
                    'addressLine1', (spArg).addressline1,
                    'addressLine2', (spArg).addressline2,
                    'addressCity', (spArg).addresscity,
                    'addressCountry', (spArg).addresscountry,
                    'addressZipcode', (spArg).addresszipcode,
                    'fees', returnFees((spArg).fees)
                );
    RETURN spToReturn;
END;
$spToReturn$ LANGUAGE plpgsql;
----StripePayment Data type example
ROW(
        'billing',
        'dafka;sfkj token',
        'Ali',
        'asd',
        'addressline2',
        'la',
        32031,
        'usa',
        ARRAY[ROW('paymentId---------', 12.00, 'billing', 'description', true)]::FEE[]
    );

---------------------------------------------------------------------------------------------------------------------------

---Composite Type definition for ProgammingLanguages
CREATE TYPE PROGRAMMINGLANGUAGE as (
    name VARCHAR(45),
    image VARCHAR(125)
);

--Converts a programmingLanguage to a jsonb object to be returned
CREATE OR REPLACE FUNCTION castPL(pl PROGRAMMINGLANGUAGE) 
RETURNS jsonb AS $castedPl$
    DECLARE castedPl jsonb;
    BEGIN
        castedPl := json_build_object(
            'name', ($1).name,
            'image', ($1).image
        );
        RETURN castedPl;
    END;
$castedPl$ LANGUAGE plpgsql;

--Converts a programminglanguage array to an array of jsonb objects.
-- FUNCTION takes a email to get specific pl items based on the user's email.
--And a type to get a specific pl item.
CREATE OR REPLACE FUNCTION returnPlItems(plItems PROGRAMMINGLANGUAGE[]) 
-- THe return is a array of jsonb objects
RETURNS jsonb[] AS $plItemsToReturn$
 DECLARE 
 --Variable of the function
    plItemsToReturn jsonb[] := ARRAY[]::jsonb[];
    plItemToCast jsonb;
    lengthOfPlItems INTEGER;
    counter INTEGER := 1;
 BEGIN
 --Body of the function
    -- Note can have two statements one before the block and within the block.
    lengthOfPlItems := array_length(plItems, 1);
    --Use the loop keyword to indicate the there will be a loop
    LOOP
    --Use the exit keyword to indicate that based on the condition it will exit the loop.
    EXIT WHEN lengthOfPlItems < counter;
        --Use your castPl function to convert the current item of hte array to a plitem
        plItemToCast = castPl(plItems[counter]);
        -- THen assign that item to hte plItemToReturn index value
        plItemsToReturn[counter] = plItemToCast;
        -- Then add one to the counter.
        counter := counter + 1;
        --ENd the loop
    END LOOP;
    -- Then return the pl items.
    RETURN plItemsToReturn;
    --End the function
 END;
 --Indicate the return type and what language are your queries, in this case it will be postgresql.
$plItemsToReturn$ LANGUAGE plpgsql;

UPDATE educators 
    SET languagesofexpertise = array_append(favoriteprogramminglanguages, ROW('name1', 'image1')::PROGRAMMINGLANGUAGE)
WHERE email = 'devmtnali@gmail.com';

-----------------------------------------------------------------------------------------------------------------------------------
-- Define a favorite tutorial composite type.
CREATE TYPE FAVORITETUTORIAL as (
    link VARCHAR(25),
    title VARCHAR(30),
    subject VARCHAR(40),
    author AUTHOR
);

-- Define a function that will be responsible for casting a favorite tutorial composite type to a jsonb object.
CREATE OR REPLACE FUNCTION castFavoriteTutorial(favoriteTutorialArg FAVORITETUTORIAL) 
RETURNS JSONB as $favoriteTutorialToReturn$
DECLARE 
    favoriteTutorialToReturn JSONB;
BEGIN
    favoriteTutorialToReturn = json_build_object(
        'link', (favoriteTutorialArg).link,
        'title', (favoriteTutorialArg).title,
        'subject', (favoriteTutorialArg).subject,
        'author', (favoriteTutorialArg).author
    );
    RETURN favoriteTutorialToReturn;
END;
$favoriteTutorialToReturn$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION returnFavoriteTutorials(favoriteTutorialsArg FAVORITETUTORIAL[]) 
RETURNS JSONB[] AS $favoriteTutorialsToReturn$
DECLARE 
    favoriteTutorialsToReturn JSONB[] := ARRAY[]::JSONB[];
    favoriteTutorialToCast JSONB;
    counter INTEGER := 1;
    lengthOfFavoriteTutorials INTEGER;
BEGIN
    lengthOfFavoriteTutorials := array_length(favoriteTutorialsArg, 1);
    LOOP
    EXIT WHEN lengthOfFavoriteTutorials < counter;
        favoriteTutorialToCast := castFavoriteTutorial(favoriteTutorialsArg[counter]);
        favoriteTutorialsToReturn[counter] := favoriteTutorialToCast;
        counter := counter + 1;
    END LOOP;
    RETURN favoriteTutorialsToReturn;
END;
$favoriteTutorialsToReturn$ LANGUAGE plpgsql;
-------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------
-- Define a composite for your tagItem
CREATE TYPE TAGITEM as (
    title VARCHAR(200)
);

--Define a function that will cast a tag to a jsonb object.
CREATE OR REPLACE FUNCTION castTag(tagArg TAGITEM) 
RETURNS JSONB AS $tagToReturn$
DECLARE 
    tagToReturn JSONB;
BEGIN
    tagToReturn := json_build_object(
                        'title', (tagArg).title
                    );
    RETURN tagToReturn;
END;
$tagToReturn$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION returnTags(tagsArg TAGITEM[]) 
RETURNS JSONB[] AS $tagsToReturn$
DECLARE 
    tagsToReturn JSONB[] := ARRAY[]::JSONB[];
    tagToCast JSONB;
    lengthOfTags INTEGER;
    counter INTEGER := 1;
BEGIN
    lengthOfTags := array_length(tagsArg, 1);
    LOOP
    EXIT WHEN lengthOfTags < counter;
        tagToCast := castTag(tagsArg[counter]);
        tagsToReturn[counter] := tagToCast;
        counter := counter + 1;
    END LOOP;
    RETURN tagsToReturn;
END;
$tagsToReturn$ LANGUAGE plpgsql;

---------------------------------------------------------------------------------------------------------------------------
--Define your AUthor Composite Type.
CREATE TYPE AUTHOR as (
    educatorId INTEGER,
    name VARCHAR(100),
    avatar VARCHAR(150)
);

---Define your function that will cast your AUthor types to a jsonb object.
CREATE OR REPLACE FUNCTION castAuthor(authorArg AUTHOR) 
RETURNS JSONB AS $authorToReturn$
    DECLARE 
        authorToReturn JSONB;
BEGIN
    authorToReturn := json_build_object(
                            'educatorId', (authorArg).educatorId,
                            'name', (authorArg).name,
                            'avatar', (authorArg).avatar
                        );
    RETURN authorToReturn;
END;
$authorToReturn$ LANGUAGE plpgsql;
---------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------
--Define your Criticism composite type.
CREATE TYPE CRITICISM AS (tutorialId INTEGER, author AUTHOR, body TEXT, rating NUMERIC);

--Define a function for casting your Criticisms to a jsonb object
CREATE OR REPLACE FUNCTION castCriticism(criticismArg CRITICISM)
RETURNS JSONB AS $criticismToReturn$
DECLARE 
    criticismToReturn JSONB;
BEGIN
    criticismToReturn := json_build_object(
        'tutorialId', (criticismArg).tutorialId,
        'author', castAuthor((criticismArg).author),
        'body', (criticismArg).body,
        'rating', (criticismArg).rating
    );
    RETURN criticismToReturn;
END;
$criticismToReturn$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION returnCriticisms(criticismsArg CRITICISM[])
RETURNS JSONB[] AS $criticismsToReturn$
DECLARE 
    criticismsToReturn JSONB[] := ARRAY[]::JSONB[];
    criticismToCast JSONB;
    lengthOfCriticisms INTEGER;
    counter INTEGER := 1;
BEGIN
    lengthOfCriticisms := array_length(criticismsArg, 1);
    LOOP
    EXIT WHEN lengthOfCriticisms < counter;
        criticismToCast := castCriticism(criticismsArg[counter]);
        criticismsToReturn[counter] := criticismToCast;
        counter := counter + 1;
    END LOOP;
    RETURN criticismsToReturn;
END;
$criticismsToReturn$ LANGUAGE plpgsql;

----------------------------------------------------------------------------------------------------------------------------------