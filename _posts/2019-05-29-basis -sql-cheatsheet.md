---
layout: post
title: "Making A Basic Flask Blog: Part I"
date: 2019-05-29
comments: true
---

## SQL (Structured Query Language) Basics

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
- TINYINT - basically 0 or 1 - this is how MySQL supports booleans
- BOOLEAN, BOOL - True or False
- DATE