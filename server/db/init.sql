CREATE TABLE plItems (
    id SERIAL,
    name VARCHAR(100),
    image VARCHAR(100)
);

CREATE TABLE users (
    id SERIAL,
    name VARCHAR(100),
    displayName VARCHAR(50),
    email VARCHAR(50),
    intro VARCHAR(150),
    avatar VARCHAR(150),
    pushNotificationToken VARCHAR(100),
    occupation VARCHAR(50),
    education EDUCATION,
    programmingExperience INTEGER,
    favoriteProgrammingLanguages PROGRAMMINGLANGUAGE[],
    role VARCHAR(50),
    password VARCHAR(100)
    -- payment STRIPEPAYMENT
);

CREATE TABLE students (
    favoriteTutorials FAVORITETUTORIAL,
    subscription SUBSCRIPTIONSTATUS    
) INHERITS (users);

CREATE TABLE educators (
    languagesOfExpertise PROGRAMMINGLANGUAGE[]
) INHERITS (users);

CREATE TABLE tutorials (
    id SERIAL,
    educatorId INTEGER,
    title VARCHAR(75),
    image VARCHAR(150),
    subject VARCHAR(70),
    skillLevel VARCHAR(50),
    averageRating NUMERIC,
    tags TAGITEM[],
    author AUTHOR,
    criticisms CRITICISM[],
    dateCreated DATE,
    dateUpdated DATE
);

CREATE TABLE session (
    "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
);

