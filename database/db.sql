CREATE DATABASE cartoneria;

USE cartoneria;


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

USE cartoneria;

--TABLE USERS
CREATE TABLE users(
  id INT PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);



