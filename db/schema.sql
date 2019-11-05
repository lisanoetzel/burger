-- var mysql = require ("mysql");

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(275) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);