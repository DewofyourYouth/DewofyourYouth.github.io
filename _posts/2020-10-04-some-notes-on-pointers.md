---
layout: post
title: 'Some Notes on Pointers in Go'
date: 2020-10-04
comments: true
published: true
---

## The Symbols

A pointer points to the memory address the variable is referencing. 
The ampersand prints the address of a value. The asterix prints the value stored at an address.

```go
a := 43
b := &a
c := a
a = a + 3
fmt.Println(b)    // some memory address
fmt.Println(&a)   // the same memory address
fmt.Println(&c)   // a different memory address
fmt.Println(*b)   // 46 - this is a referring to whatever is stored at the memory address of "a"
fmt.Println(c)    // 43 - this is just referring to the value stored in "a" at the time of assignment
```

## Uses of Pointers

When you assign something to a variable in a function you will typically be assigning it to a pointer. Because when you use a variable in a function in Go - it will make a copy of the variable with the global scope and assign it to a variable of the same name with a local scope.

```go
// This will only change "s" inside this function
func failToChange(s string) {
	s = "I don't care what was here before, I will change you to a new string!"
	fmt.Println("failToChange scope:", s)
}
// This will change "s" everywhere
func actuallyChange(s *string) {
	*s = "I know you are, but what am I?"
	fmt.Println("actuallyChange scope:", *s)
}
```

[See in Go Play Space](https://goplay.space/#JLNj3qxxBfS)