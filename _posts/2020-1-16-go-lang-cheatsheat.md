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
	- [Pointers](#pointers)
	- [Recursive Example](#recursive-example)
	- [Function Literals](#function-literals)
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

You can use this to switch values of variables:

```go
x := 5
y := 6

x, y = y, x
fmt.Println("x:", x, "y:", y) //  x: 6 y: 5
```

[Go Play Space Link: variable assignment](https://goplay.space/#E0skIGHnA30)

## Arrays and Slices

Arrays have a fixed length, slices don't.

So to make something an array you would put the arrays length as an integer in the square brackets like so:

```go
  myCoolArr := [3]int{1, 2, 4}
```

To make a slice it's the same thing, just without assigning a number.

```go
mySliceOf := []string{`pepperoni pizza`, `life`, `pie`}
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

[Go Play Space Link: slices](https://goplay.space/#_iyWeiznn3V)

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

Functions are indicated with the keyword `func`.

```go
func giveUsTheFunc() {
	fmt.Println("Gotta have dat funk!")
}

func main() {
	giveUsTheFunc() //Gotta have dat funk!
}
```

A function can take one or more arguments:

```go
func sayHello(s string) {
	fmt.Println("Hello", s)
}


func repeatPhrase(phrase string, times int) {
	for times > 0 {
		fmt.Println(times, phrase)
		times--
	}
}

func main() {
	sayHello("Clarice") // Hello Clarice
	repeatPhrase("bottles of beer on the wall", 10)
}
```

You can define the output

```go
//              in:int  out:int
func squareAnInt(i int) int {
	return i * i
}

func main() {
	fmt.Println(squareAnInt(3)) // 9
}
```

[Go Play Space Link: functions](https://goplay.space/#7BYOzziNEGk)

### Pointers

Functions in Go take arguments and make a copy of the argument - they don't change the original variable. However, at times you may want to make a function that changes the actual state of a variable. In such cases - you would use pointers.

This points to the memory address the pointer is stored at.

To reference a variable's pointer you add an ampersand in front of the variable name `&varName` - to reference a pointer's value - you add an asterisks in front of the pointer `*varName`.

Example:

```go
myInt := 5
myPointer := &myInt
fmt.Println(myInt) // 5
fmt.Println(myPointer) // 0x40e020
fmt.Println(*myPointer) // 5
fmt.Println(&myInt) // 0x40e020
```

Now, suppose we wanted to make a function taking the int as an argument and adding on to the int - like this:

```go
func addOne(i int) { // input myInt (with the value of 5)
	i = i + 1 // this will not change the original value of myInt
	fmt.Println(i) // this will print out the copied value
}
```

If we print out `myInt` in the main function we will still get 5.

```go
addOne(myInt)
fmt.Println(myInt) // still 5 😦
```

Now lets make a function using a pointer:

```go
func simonSaysAddOne(i *int) {
	*i = *i + 1 // this will add one to the value stored in memory by the variable
}
```

Now in the main function input the pointer:

```go
simonSaysAddOne(&myInt)
fmt.Println(myInt) // 6 😄
```

[Go Play Space Link: pointers](https://goplay.space/#BQtQveQTm2Z)

### Recursive Example

Here's an example of a recursive function using pointers:

```go
package main

import (
	"fmt"
	"math"
)

func cutSliceInHalf(s *[]int) {
	// this will cut a slice of ints in half until there is only one left.
	fmt.Println(*s)
	if len(*s) <= 1 {
		return
	}
	half := int(math.Floor(float64(len(*s)) / 2))
	newSlice := []int{}
	newSlice = append(newSlice, *s...)
	*s = newSlice[:half]

	cutSliceInHalf(s)

}

func main() {
	mySlice := []int{1, 2, 3, 4, 5, 6, 7, 8}
	cutSliceInHalf(&mySlice)
	fmt.Println(mySlice, "Printed from main function")

}
```

This will output:

```
[1 2 3 4 5 6 7 8]
[1 2 3 4]
[1 2]
[1]
[1] Printed from main function
```

[Go Play Space: recursive](https://goplay.space/#b6njCOXCxf-,2)

### Function Literals

Go also supports function literals - which is basically Go's term for lambda functions:

```go
isMoreThan100 := func(x int) bool { return x > 100}

fmt.Println(isMoreThan100(10)) // false
fmt.Println(isMoreThan100(1000)) // true
```

[Go Play Space: function literals](https://goplay.space/#TbJ93hVuztf)

## Maps

Maps are kind of like hash tables (or python dictionaries).

```go
//  varName := map[keyType]valueType
	fakePhoneNumbers := map[string]int64{
		"Billy":  17185554545,
		"Susan":   15612345678,
		"Martha": 19173557171,
	}
	// you can also add to the map values like this
	numbers["Jerry"] = 18002345555

	fmt.Println(fakePhoneNumbers["Billy"]) // 17185554545
	fmt.Println(fakePhoneNumbers["Susan"]) // 15612345678
	fmt.Println(fakePhoneNumbers["Martha"]) // 19173557171
	fmt.Println(fakePhoneNumbers["Jerry"]) // 18002345555
}
```

[Go Play Space Link: maps](https://goplay.space/#RtGPCBnCujT)

## Struct Methods v. Functions + Interfaces

For those not thoroughly ensconced in the Go philosophy - just think of structs as objects.

An interface is a construct that allows you to use all structs that have any given method and use them as one type.

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
