CREATE TABLE user(
    id varchar(50) Primary key, 
    username varchar(50) UNIQUE,
    email varchar(50) UNIQUE NOT NULL, 
    password varchar(50) NOT NULL

);