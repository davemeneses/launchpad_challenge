CREATE DATABASE IF NOT EXISTS launchpad;
USE launchpad;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS votes;

-- Create the burgers table
-- CREATE TABLE votes (
--     id int NOT NULL AUTO_INCREMENT,
--     email varchar(255) NOT NULL,
--     framework varchar(255) NOT NULL,
--     PRIMARY KEY (id)
-- );
