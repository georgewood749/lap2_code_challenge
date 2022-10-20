DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY,
    author varchar(100) NOT NULL,
    dateTime timestamp,
    -- dateTime timestamp NOT NULL,
    title varchar(255) NOT NULL,
    content text NOT NULL
);
