### burgers_db schema

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Of20695353?';

flush privileges;

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);