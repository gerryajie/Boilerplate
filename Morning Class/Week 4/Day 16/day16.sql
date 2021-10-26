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


-- INSERT 
INSERT INTO customers(name) VALUES 
	("Wawan"),
	("Firman"),
	("Ilham");
	
INSERT INTO customers(name) VALUES ("Adi");

INSERT INTO suppliers(name) VALUES 
	("Khay"),
	("Heru"),
	("Siti");

INSERT INTO goods(name, price, id_supplier) VALUES 
	("Pepsodent", 14500, 1),
	("Lifeboy", 24600, 2),
	("Clear", 44500, 3);

INSERT INTO transactions(id_good, id_customer, quantity, total) VALUES 
	(1, 1, 1, 14500),
	(2, 2, 2, 49200),
	(3, 3, 3, 133500);

-- SELECT
SELECT * FROM customers;

SELECT * FROM suppliers;

SELECT * FROM goods;

SELECT * FROM transactions;

-- SELECT WHERE
SELECT * FROM transactions WHERE id=1;

-- SELECT ORDER BY
SELECT * FROM customers ORDER BY name;
SELECT * FROM customers ORDER BY name DESC;

-- DELETE
DELETE FROM transactions WHERE id_customer=3;
DELETE FROM customers WHERE id=3;

-- DROP TABLE
DROP TABLE transactions;

-- UPDATE
UPDATE customers SET name="Dhea" WHERE id=1;
UPDATE transactions SET id_good=2,id_customer=1, quantity=1, total=24600 WHERE id=1;

-- SELECT LIMIT
SELECT * FROM suppliers ORDER BY name LIMIT 5;

-- SELECT WITH JOIN
SELECT t.id, g.name as goodName, s.name as goodSupplier, g.price, c.name as customerName, t.time, t.quantity, t.total FROM transactions t
JOIN customers c ON t.id_customer=c.id
JOIN goods g ON g.id=t.id_good
JOIN suppliers s ON g.id_supplier=s.id

SELECT c.id, c.name, COUNT(*) AS totalTransaction FROM customers c
JOIN transactions t ON t.id_customer=c.id
GROUP BY t.id_customer 

SELECT * FROM transactions t, customers c 
ORDER BY t.id