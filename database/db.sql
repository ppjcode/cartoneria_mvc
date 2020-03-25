CREATE DATABASE cartoneria;

USE cartoneria;

--TABLE USERS

--TABLE PRODUCTS
CREATE TABLE product (
    id INT(11) NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    stock INT(20) NOT NULL,
    price DECIMAL(12) NOT NULL,
    img VARCHAR(255) NOT NULL
);

ALTER TABLE product
  ADD PRIMARY KEY (id);



