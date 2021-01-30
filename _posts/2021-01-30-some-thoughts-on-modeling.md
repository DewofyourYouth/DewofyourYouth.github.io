---
layout: post
title: "Some Thoughts About Data Modeling In Jupyter Notebooks"
date: "2021-01-30"
published: true
comments: true
tags:
  - sql
  - data
  - postgresql
  - python
categories:
  - data-engineering
  - postgresql
  - data
---

My job recent sponsored my taking a Nanodegree course at Udacity for data engineering. So far, the projects seem to be done mostly by interacting with various databases (currently PostgreSQL and Cassandra) through python in Jupyter Notebooks set up on their platform. The format they set up the exercises is really rather repetitive an tedious. Each insert is the same thing, many times. I wonder if this is a common pattern among data people, or just an attempt to get you used to writing the SQL. (Although, SQL knowledge and python was a supposedly prerequisite for the course, so this is a bit confusing.)

I've taken to working out the SQL using DataGrip locally first, then implementing the queries through abstracting the queries to classes. It seems wrong to use an ORM when the course isn't (especially, since I know data people often hate ORMs 😀), so I have set up the classes myself. Here is the basic idea:

- Make a meta class that puts all the similar insert classes into a list.
- Make a new class for every typical insert.
- Then abstract away the actual inserts so you can reuse the logic.

Here is the basic code:

```python
# The metaclass
class MetaInsert(type):
    counter = 0
    instances = []

    def __iter__(self):
        return iter(getattr(self, "instances", []))

# This just creates the table
# Should probably take a string for the table name and
# namedtuples for columns and types -
# so it could be leveraged for all tables.
def create_cheese_table():
    try:
        cur.execute(f"CREATE TABLE IF NOT EXISTS cheese (id SERIAL, name varchar);")
    except psycopg2.Error as e:
        print(e)

# Example insert class
class CheeseType(metaclass=MetaInsert):
    def __init__(self, name):
        CheeseType.instances.appens(self)
        self._id = CheeseType._counter + 1
        self.name = name

    def insert_row(self):
        insert_str = f"INSERT INTO cheese (name) VALUE ('{self.name}');"
        try:
            cur.execute(insert_str)
            print(f'{self.name} inserted into the cheese table!')
        except psycopg2.Error as e:
            print(e)

create_cheese_table()

cheddar = CheeseType('cheddar')
mozzarella = CheeseType('mozzarella')
muenster = CheeseType('muenster')

[cheese.insert_row() from cheese in CheeseType]

# cheddar inserted into the cheese table!
# mozzarella inserted into the cheese table!
# muenster inserted into the cheese table!

```

This is not the most robust solution, but it works for its use case.

Please LMK what could be improved 😀 or what you would've done differently.
