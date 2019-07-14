---
layout: post
title: "Python Tips, Tricks &amp Reminders"
date: 2019-07-14
comments: true
---

## 1) Use Ternary Conditionals For Simple Checking

```python
condition = False
x = 1 if condition else 0 # x will be 0 since condition is False
```

## 2) Separate Large Numbers with Underscores

```python
num1 = 100_000_000_000
num2 = 100_000_000

total = num1 + num2 # total is 100100000000
```


To include [formating in answer](https://docs.python.org/3/library/string.html#format-examples):

```python
print(f'{total:,}') # prints 100,100,000,000
```

## 3) Use Context Managers

```python
with open('somefile.txt', 'r') as f:
    file_contents = f.read()

words = file_contents.split(' ')
word_count = len(words)
print(word_count)
```

## 4) Use Enumerate (Not Counter Variable)

```python
for i, item in enumerate(list_name):
    print(i, item)

"""
Prints:
----
0 item1
1 item2
...
"""
```

If you want to start from a number other that 1 you can put that number as a second argument:

```python
for i, item in enumerate(list_name, 1):
    print(i, item)

"""
Prints:
----
1 item1
2 item2
...
"""
```

## 5) Use The Zip Function

```python
fnames = ['Billy', 'MaryAnne', 'Robert', 'Susy']
lnames = ['McDougal', 'Swanson', 'Lee', 'Sheehan']

fullnames = [f'{fname} {lname}' for fname, lname in zip(fnames, lnames)] 
# ['Billy McDougal', 'MaryAnne Swanson', 'Robert Lee', 'Susy Sheehan']
```

## 6) Tuple Unpacking

```python
a, b = 1, 2 # a = 1, b = 2

a, b, c = 1, 2, 3, 4, 5 # Error: too many values

a, b, *c = 1, 2, 3, 4, 5 # a = 1, b =2, c = [3, 4, 5]

a, b, *c, d = 1, 2, 3, 4, 5 # a=1, b=2, c = [3, 4] d=5
```

## 7) setattr / getattr

```python
class Person:
    pass

person = Person()

first_key = "first_name"
first_val = "Jacob"

setattr(person, first_key, first_val)

first = getattr(person, first_key)

print(person.first_name) # 'Jacob'
print(first) # 'Jacob'

```

## 8) Help

In python repl:

```python
>>> import <module_name>
>>> help(<module_name>) # Returns instructions on modules
>>> dir(<module_name>) # Returns available attributes and methods
```

## 9) Use .get() For Dictionaries

```python
my_dict = {
    'key1': 'cheesecake',
    'key2': 52,
    'key4': 'James', # see how we skipped 'key3' - nothing gets by you!!!
    'key5': True,
}

print(my_dict['key3']) # will return a KeyError: 'key3'. Oh no!!! Your code has crashed!!

print(my_dict.get('key3')) # will return NoneType instead.
```

## 10) For Loops Have Else

```python
needle = 'Jerry'
haystack = ['Billy', 'MaryAnne', 'Robert', 'Susy']

for name in haystack:
    if needle == name:
        print('Found')
        break
else:
    print('Not found')
```

or in a function...

```python
def find_needle(needle, haystack):
    """"
    Checks if needle is in haystack
    returns a boolean
    """
    for name in haystack:
        if needle == name:
          return True
    else:
        return False

find_needle(needle, haystack) # returns False

needle = 'Billy' # change needle to value in haystack

find_needle(needle, haystack) # now it returns True
```

## 11) NamedTuples - Faster Than Making Classes Manually (but immutable - like tuples)

```python
from collections import namedtuple

Cake = namedtuple('Cake', 'flavor price')

my_cake = Cake('cheesecake', 12.35)

print(my_cake) # Cake(flavor='cheesecake', price=12.35)

# unlike regular classes = namedtuples are immutable

my_cake.price == 10.99 # AttributeError: can't set attribute

```

## 12) Lambda Functions

### Filter:

```python
nums_list = [1, 5, -6, 6, -34, 108, 4, -22]

b_positive = list(filter(lambda x: x > 0, nums_list)) # [1, 5, 6, 108, 4]
```

or as an iterator...

```python
b_positive = (filter(lambda x: x > 0, nums_list)) # <filter object at 0x7f900ee81fd0>

for num in b_positive:
    print(num)

"""
Prints:
-------
1
5
6
108
4
"""
```

### Map:

```python
make_positive = map(lambda x: abs(x), nums_list) # [1, 5, 6, 6, 34, 108, 4, 22]
```

## 13) List Comprehension

```python
nums_list = [1, 5, -6, 6, -34, 108, 4, -22]

b_positive = [num for num in nums_list if num > 0] # [1, 5, 6, 108, 4]
```

or... 

```python
nums_list = [1, 5, -6, 6, -34, 108, 4, -22]

make_positive = [abs(num) for num in nums_list] # [1, 5, 6, 6, 34, 108, 4, 22]
```
