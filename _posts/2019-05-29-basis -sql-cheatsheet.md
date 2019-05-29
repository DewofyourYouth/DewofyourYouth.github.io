---
layout: post
title: "SQL (Structured Query Language) Basics"
date: 2019-05-29
comments: true
---

Every query must end with a semi-colon. 

Whenever something should be substituted with a value I will indicate this like this ```<value>``` - unless impractical, then you'll need to use your judgement.

## CREATING STUFF

### Create a database

```sql
CREATE DATABASE <db_name>;
```

Well, that was easy! Next you'll need to connect to the database. The way you do this will largely depend on which SQL database you're using. In PostgreSQL - if your already in the psql prompt you can connect like this:

```sql
\connect <db_name>
```

If you're in bash or alike you'd do something like this:

```bash
psql <db_name> <user_name>
```

You can check out what applies to your SQL version. But enough about that! Let's discuss make tables now!

The general syntax for making a table is:

```sql
CREATE TABLE <table-name>(
    <column1> <data-type>,
    <column2> <data-type>,
    <column2> <data-type>
);
```

For many tables you're going to want to have an auto-incrementing primary key. This means that each entry has it's own id number specific to it.

In PostgreSQL this is accomplished like this:

```sql
CREATE TABLE <table-name>(
    id SERIAL PRIMARY KEY,
    ...
);
```

In MySQL and MariaDB it is accomplished like this:

```sql
CREATE TABLE <table-name>(
    id INT AUTO_INCREMENT PRIMARY KEY,
    ...
);
```

### Basic Data Type

These vary a bit between diffent DB systems

- VARCHAR(N) - basically a string (you provide the max number of charachters as an argument.)
- TEXT - a VARCHAR with no limit
- INT, INTEGER - a whole integer
- FLOAT - a floating point number (decimal)
- TINYINT - basically 0 or 1 - this is how MySQL supports booleans, if you put in a BOOLEAN column - it will still come out as TINYINT
- BOOLEAN, BOOL - True or False
- DATE, DATETIME, TIMESTAMP etc.

### FINDING STUFF (SELECT Queries)

To retrieve data - use SELECT queries. Most DBs are pretty much the same with this.

Basic syntax for SELECT queries is:

```sql
SELECT <column/columns>
FROM <table/tables>;
```

With common additions like

```sql
SELECT <column/s>
FROM <column_name/s>
WHERE <condition/s> AND/OR
GROUP BY <column_name/s>
ORDER BY <column_name/s> ASC/DESC
LIMIT <NUMBER>;
```

To select all columns an astrix is subsituted for the column names - like this: 

```sql
SELECT *
FROM <table/tables>;
```

### Common SQL Functions

- COUNT
- MIN
- MAX
- AVG
- SUM

### DISTINCT

```sql
SELECT DISTINCT <column>
FROM <table>;
```


```sql
SELECT DISTINCT <column1>, <column2>
FROM <table>;
```

```sql
SELECT
   DISTINCT ON (<column1>) <column_alias>,
   <column2>
FROM
   <table>
ORDER BY
   <column1>,
   <column2>;
```

### LIKE

### UPDATE

```sql
UPDATE <table>
SET <column>=<value>
WHERE <condition/s>;
```

### DELETE

```sql
DELETE FROM <table>
WHERE <condition/s>;
```

### JOINS

#### INNER

#### FULL

#### LEFT

#### RIGHT

#### CROSS

### SUBQUERIES

### VIEWS

### INDEXES