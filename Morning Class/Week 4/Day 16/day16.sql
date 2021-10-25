-- CREATE DATABASE with name sales
CREATE DATABASE sales;

-- USE sales database
USE sales;

-- CREATE suppliers TABLE
CREATE TABLE suppliers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- CREATE goods TABLE
CREATE TABLE goods (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     price DECIMAL NOT NULL,
     id_supplier BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_supplier) REFERENCES suppliers(id)
);

-- CREATE customers TABLE
CREATE TABLE customers (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL
);

-- CREATE transactions TABLE
CREATE TABLE transactions (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_good BIGINT UNSIGNED NOT NULL,
    id_customer BIGINT UNSIGNED NOT NULL,
    time DATETIME DEFAULT now() NOT NULL,
    quantity INT NOT NULL,
    total DECIMAL NOT NULL,
    FOREIGN KEY (id_good) REFERENCES goods(id),
    FOREIGN KEY (id_customer) REFERENCES customers(id)
);
