-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE shopping (
	id SERIAL PRIMARY KEY,
	name varchar(80),
	quantity numeric(12,2),
	unit varchar(50)
);

INSERT INTO "shopping" ("name", "quantity", "unit") 
VALUES ('Milk', 1, 'Gallon'),('Eggs' ,1 ,'Dozen'),('Cake',2,'13x9'),('Coffee', 1, 'Bag');