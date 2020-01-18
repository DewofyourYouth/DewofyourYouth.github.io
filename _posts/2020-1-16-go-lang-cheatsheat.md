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

- [Your "Hello Go" Program](#your-%22hello-go%22-program)
- [Assignments](#assignments)
- [Arrays and Slices](#arrays-and-slices)
- [Loops In Go](#loops-in-go)
- [Functions](#functions)
- [Maps](#maps)
- [Struct Methods v. Functions + Interfaces](#struct-methods-v-functions--interfaces)

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

[Go Play Space Link: variable assignment](https://goplay.space/#chP7SjGaWw2)

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

You can add to a slice or array with the `append` method - like this:

```go
x = append(x, 11)
fmt.Println(x) // [1 2 3 4 5 6 7 8 9 10 11]
```

To access the elements of the slice put ... after the slice variable.
To join two slices you can do something like this:

```go
slice1 := []string{"the", "rain", "in", "Spain"}
slice2 := []string{"falls", "mainly", "on", "the", "plane"}
slice3 := append(slice1, slice2...)
fmt.Println(slice3) // [the rain in Spain falls mainly on the plane]

```

To delete an element you can do this:

```go
// delete the element with the index of 3
x = append(x[:3], x[4:]...)
fmt.Println(x) // [1 2 3 5 6 7 8 9 10 11] - 4 (@ index 3) has vanished
```

[Go Play Space Link: slices](https://goplay.space/#1jMAXCKZErJ)

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

## Functions

Placeholder

## Maps

Maps are kind of like hash tables (or python dictionaries).

```go
//  varName := map[keyType]valueType
	numbers := map[string]int64{
		"Billy":  17185554545,
		"Susy":   15612345678,
		"Martha": 9173557171,
	}
	// you can also add to the map values like this
	numbers["Jerry"] = 18002345555

	fmt.Println(numbers["Billy"]) // 17185554545
	fmt.Println(numbers["Susy"]) // 15612345678
	fmt.Println(numbers["Martha"]) // 9173557171
	fmt.Println(numbers["Jerry"]) // 18002345555
}
```

[Go Play Space Link: maps](https://goplay.space/#nIW3QM-95Rg)

## Struct Methods v. Functions + Interfaces

For those not thoroughly ensconced in the Go philosophy - just think of structs as objects.

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
	fmt.Println(jacob.getNameMethod()) // Jacob Shore from method
	fmt.Println(getNameFunction(jacob)) //  Jacob Shore from function
	getName(jacob) // Jacob Shore from method
	getName(macbook) // MacBook Air
}

```

[Go Play Space link](https://goplay.space/#i8AXrXfyAGZ)
