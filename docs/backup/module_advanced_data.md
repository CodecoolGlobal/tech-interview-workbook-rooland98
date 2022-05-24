# Advanced Data module

## General SQL

### What are relational databases? Explain the theory behind them!
A relational database organizes data into tables which can be linked—or related—based on data common to each. This capability enables you to retrieve an entirely new table from data in one or more tables with a single query. It also allows you and your business to better understand the relationships among all available data and gain new insights for making better decisions or identifying new opportunities.

### Why SQL is important these days?
You can communicate with relational databases using Structured Query Language (SQL), the standard language for interacting with management systems. SQL allows the joining of tables using a few lines of code, with a structure most nontechnical employees can learn quickly.
With SQL, analysts do not need to know where the order table resides on disk, how to perform the lookup to find a specific order, or how to connect the order and customer tables. The database compiles the query and figures out the correct data points.

### All the new GUI tools enable me to click a button to write SQL. Why should I spend time learning to write SQL manually?

### If SQL is standardized, should you be able to program with SQL on any databases?
Only relational databases

### What makes SQL a nonprocedural language?
In the non-procedural languages, the user has to specify only “what to do” and not “how to do”. It is also known as an applicative or functional language. It involves the development of the functions from other functions to construct more complex functions.

### What can you do with SQL?

    SQL can execute queries against a database
    SQL can retrieve data from a database
    SQL can insert records in a database
    SQL can update records in a database
    SQL can delete records from a database
    SQL can create new databases
    SQL can create new tables in a database
    SQL can create stored procedures in a database
    SQL can create views in a database
    SQL can set permissions on tables, procedures, and views

---

## DQL

### Do the following statements return the same or different output? Why?

```sql
SELECT * FROM CHECKS; <- this is a common syntax of writing queris using uppercase only on query commands
select * from checks; both evaluates the same for the compiler
```

### The following queries do not work when entered into the command line psql console. Why not?

```sql
Select *
Select * from checks
Select amount name payee FROM checks;
```
double select wont work, maybe with a join

### What shorthand could you use instead of `WHERE a >= 10 AND a <=30`?
Great alternative is using HAVING statement instead of where

### Which function capitalizes the first letter of a character string and makes the rest lowercase?
INITCAP(string)

### Will this query work? Why?

```sql
SELECT COUNT(LASTNAME) FROM CHARACTERS;
```
It will count how many entries have in the characters table with a last name column

### Assuming that they are separate columns, which function(s) would splice together FIRSTNAME and LASTNAME?
Concat(string1,string2,...stringN)

### Why are so few functions defined in the ANSI standard and so many defined by the individual implementations?

### What is the function of the GROUP BY clause?
The GROUP BY clause is a SQL command that is used to group rows that have the same values. The GROUP BY clause is used in the SELECT statement. Optionally it is used in conjunction with aggregate functions to produce summary reports from the database.

### When using the HAVING clause, do you always have to use a GROUP BY also?
Having can be used without groupby clause,in aggregate function,in that case it behaves like where clause. groupby can be used without having clause with the select statement. 3. The having clause can contain aggregate functions.

### Can you use ORDER BY on a column that is not one of the columns in the SELECT statement?
Yes, you can order by a field(s)even if it is not your in your select statement but exists in your table.
---

## Joins

### Explain the different kind of joins! (outer, inner, left, right, natural, etc.)
    LEFT JOIN: Returns all of the records from the left table, and the matched records from the right 
    RIGHT JOIN:returns all records from the right table, and the matched recors from the left table 
    FULL JOIN: returns all recrods when there is a match in either left or right table 
    INNER JOIN: returns records that have matching values in both tables

### How many tables can you join on?
Theoritically there is no limitation but the database engine has a restriction of max 64 tables.

### Would it be fair to say that when tables are joined, they actually become one table?

### How many rows would a two-table join produce if one table had 50,000 rows and the other had 100,000?
Depends on the join type. How many matching elements does it contain etc.

### What type of join appears in the following SELECT statement?

```sql
select e.name, e.employee_id, ep.salary  
from employee_tbl e, employee_pay_tbl ep  
where e.employee_id = ep.employee_id;
```

### In joining tables are you limited to one-column joins, or can you join on more than one column?
When joining tables , one table must contain a reference to the other table to be able to join.
---

## DML

### Does SQL have a statement for file import/export operations?

### Can you copy data from a table into itself using the INSERT command? You would like to make duplicate copies of all the existing records and change the value of one field.
insert into your_table (c1, c2, ...)
select c1, c2, ...
from your_table
*optional*where id = 1

### What would happen if you issued the following statement?

```sql
DELETE * FROM COLLECTION;
```
Deletes all row from collection table

### Can you remove columns with the ALTER TABLE statement?
Yes you can wtih alter table Drop column statement:
ALTER TABLE table_name 
DROP COLUMN
column_name1,
column_name2

### Is the DROP TABLE command functionally equivalent to the DELETE FROM <table_name> command?

### What is the difference between the functionality of the DELETE FROM <table_name> and the TRUNCATE TABLE command?

### When a table is created, who is the owner?
Table owner name. In SQL Server, this column represents the name of the database user who created the table. This field always returns a value.

### If data in a character column has varying lengths, what is the best choice for the data type?
As the name suggests, varchar means character data that is varying. Also known as Variable Character, it is an indeterminate length string data type. It can hold numbers, letters and special characters.
 It is recommended to use varchar as the data type when columns have variable length and the actual data is way less than the given capacity 
