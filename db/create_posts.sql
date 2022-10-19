DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    pseudonym varchar(50) NOT NULL,
    bodyText varchar NOT NULL,
);
