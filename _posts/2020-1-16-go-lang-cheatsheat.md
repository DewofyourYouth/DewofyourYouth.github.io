---
layout: post
title: 'Quick Go Cheat Sheet'
date: '2020-01-16'
comments: true
categories:
  - cheat sheets
  - go
---

Here I have put together some helpful go syntax, tips and tricks. Yay!

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

## Loops In Go

In Go - there is only a `for` loop. This does all types of loops:

```go
/**
*
* Basic for loop syntax
* for init; condition; post {
*   run command until the condition is true
*
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
```

[Go Play Space Link: Loops](https://goplay.space/#eA_7jQqpZjM)

\* [A Tour of Go](https://tour.golang.org/flowcontrol/2)

## Arrays and Slices

Arrays have a fixed length, slices don't.

So to make something an array you would put the arrays length as an integer in the square brackets like so:

```go
  myCoolArr := [3]int{1, 2, 4}
```

To make a slice it's the same thing, just without assigning a number.

```go
mySliceOf := [string]{`pepperoni pizza`, `life`, `the pie`}
```
