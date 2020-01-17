---
layout: post
title: 'Quick Go Cheat Sheet'
date: '2020-01-16'
comments: true
categories:
  - cheat sheets
  - go
---

This post is still being written.

Here I have put together some helpful go syntax, tips and tricks. Yay!

- Hello World
- Assignments
- Loops
- Arrays and Slices

## Your "Hello Go" Program

Link C and a myriad of other programs. The executable runs in the main function of the main package:

```go
package main

// your imports go here
import "fmt" // you'll probably be needing this

func main() {
  fmt.Println("Hey man, watcha doin' there?")
  fmt.Println("Working on your program?")
  fmt.Println("You there?")
}
```

## Assignments

There are basically four ways to assign a variable

```go
// 1) explicitly assign type
var a int = 10

// 2) implicit type is assigned
var a = 10

// 3) declare variable and assign value later
var c int
c = 10

// 4) short assignment (no need for var)
// only use inside a function
d := 10

```

You can also assign multiple variables together, like this:

```go
food, kosher, tastesLikeChicken := "alligator", false, true
```

## Arrays and Slices

Arrays have a fixed length, slices don't.

So to make something an array you would put the arrays length as an integer in the square brackets like so:

```go
  myCoolArr := [3]int{1, 2, 4}
```

To make a slice it's the same thing, just without assigning a number.

```go
mySliceOf := [string]{`pepperoni pizza`, `life`, `pie`}
```

You can get a value from a slice or a slice of a slice.

```go
x := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

fmt.Println(x) // [1 2 3 4 5 6 7 8 9 10]
fmt.Println(x[:5]) // [1 2 3 4 5] doesn't include index 5
fmt.Println(x[5:]) // [6 7 8 9 10]
fmt.Println(x[6]) // 7
```

[Go Play Space Link](https://goplay.space/#fSrIFSc-KQb)

## Loops In Go

In Go - there is only a `for` loop. This does all types of loops:

```go
/**
*
* Basic for loop syntax
* for init; condition; post {
*   run command until the condition is true
* }
*/


// Example:
for i := 0; i < 10; i++ {
  fmt.Printf("Ran %v times\n", i + 1)
}

// The init and post statement are optional

sum := 1
for ; sum < 1000; {
  sum += sum // will be 1024 (*example from A Tour of Go)
}

// An infinite loop
runTimes := 0
for {
  fmt.Printf("%v: hey buddy, you should probably put a break condition in here\n", runTimes + 1)
		runTimes++
		if runTimes > 9 {
			break
		}
}

// Can be used like a while loop
whileSlice := []string{"Runs", "like", "a", "while", "loop"}
	i := 0
	for i < len(whileSlice) {
		fmt.Println(whileSlice[i])
		i += 1
	}

// you can get the index with "range"
for i, v := range whileSlice {
  fmt.Printf("%v: %v\n", i, v)
}

/*
  if you need to use range, but only want the value -
  you can discard the index by using an underscore for
  the variable name - like this:
*/
for _, v := range whileSlice {
  fmt.Printf("%v\n",  v)
}
```

[Go Play Space Link: Loops](https://goplay.space/#eA_7jQqpZjM)

\* [A Tour of Go](https://tour.golang.org/flowcontrol/2)

## Struct Methods v. Functions + Interfaces

```go
package main

import (
	"fmt"
)

type person struct {
	firstName string
	lastName  string
}

type product struct {
	productName string
	category    string
	price       float64
}

// this is like a method => called from the struct "person"
func (p person) getNameMethod() string {
	return p.firstName + " " + p.lastName + " from method"
}

// this is like a function => accepts the struct "person" as an argument
func getNameFunction(p person) string {
	return p.firstName + " " + p.lastName + " from function"
}

func (prod product) getNameMethod() string {
	return prod.productName
}

// named thing is any type with a getNameMethod() method
type namedThing interface {
	getNameMethod() string
}

// this function will now accept both 'person' and 'product' types
func getName(n namedThing) {
	fmt.Println(n.getNameMethod())
}

func main() {
	jacob := person{
		"Jacob",
		"Shore",
	}
	macbook := product{
		"MacBook Air",
		"electronics",
		999.0,
	}
	fmt.Println(jacob.getNameMethod())
	fmt.Println(getNameFunction(jacob))
	getName(jacob)
	getName(macbook)
}

```

[Go Play Space link](https://goplay.space/#i8AXrXfyAGZ)
