---
layout: post
title: "Regular Expressions"
date: 2018-09-17
comments: true
---

.    = any character except new line
\d = any digit 0-9
\D = anything not a digit

\w = any word
\W = anything not a word

\s = whitspace
\S = not whitespace

\b = word boundry (starts word)
\B = not word boundry

example = Ha HaHa
\bHa matches     : Ha HaHa
\bHa\b matches : Ha HaHa
\BHa matches     : Ha HaHa

^ = beginning of string
$ = end of string

^Ha matches : Ha HaHa
Ha$ matches : Ha HaHa

### Character Set = []

phone number 123-456-7890 or 123.456.7890
\d\d\d[-.]\d\d\d[-.]\d\d\d\d

on 800 or 900 numbers
[89]00[-.]\d\d\d[-.]\d\d\d\d

match between
[0-9] matches numbers 0-9
[a-zA-Z] matches all letters
in character sets a ^ matches everything not in the string
example [^b]at : **cat mat** bat **sat**

### Quantifiers

* = 0 or more
+ = 1 or more
? = 0 or 1
{3} = exact number
{3,4} = range of numbers

example for phone numbers
\d{3}[-.]\d{3}[-.]\d{4}

Mr\.?\s[A-Z]\w*
M(r|s|rs)\.?\s[A-Z]\w*

### Emails Example:

[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net|io)
[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+

### URL Example

https?://(www\.)?\w+\.\w+

#### To Group

```bash
\\ Group:     1    2     3
https?://(www\.)?(\w+)(\.\w+)
```

In replace $2$3 (or \2\3) will return group 2 and 3

### Overlapping Patterns

search for patterns of zeros surrounded by ones:
(10+1)
11110001001111 : match 1 = 10001

(?=(10+1))
11110001001111 : match 1 = 10001 match 2 = 1001

Search Before (?<=pattern)