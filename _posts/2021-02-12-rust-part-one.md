---
layout: post
title: "Rust Basics: Part One"
date: "2021-02-12"
published: true
comments: true
tags:
  - rust
  - basics
categories:
  - rust
  - cheatsheets
---

The docs on Rust are very good and the have a script that installs Rust and Cargo and everything you need to get going. The script is available at [Rustup](https://rustup.rs/) and the documentation is at the [rust-lang website](https://www.rust-lang.org/). My reason for writing this is to have a quick reference for the basic concepts - but most of my knowledge is from [The Rust Book](https://doc.rust-lang.org/book/).

It seems necessary to say that Rust sets out to be safe by default and to have a compiler that catches and doesn't allow unsafe code. I find that most times in Rust, the compiler error will pinpoint where the problem with my code is, give the reasoning why it's not allowing the code - and actually give suggestions for a fix. I find this to be very helpful and will provide some examples later.

NOTE: If you are trying out the code here - I left out the `fn main {}` for all but the first sample. Also, if you don't want warning about unused variables add `#![allow(unused)]` at the top. You can also try the [Rust Playground](https://play.rust-lang.org/).

## Hello Rust!

```rust
// main.rs
fn main() {
    println!("Hello Rust!");
}

```

### Running A Rust Program

You could run this like this:

```zsh
$ rustc main.rs
$ ./main

Output:

Hello Rust!
```

But, if you're making a Rust project, you're probably going to want to use cargo:

```zsh
$ cargo new my_awesome_project
$ cd my_awesome_project
$ ls
Cargo.toml src
```

Cargo.toml is the config file and the src directory contains the program. You can build the program by typing `cargo build` in the terminal and `cargo run` will run the program.

### The Basic Syntax

#### Types &amp; Variables

Variables are declared with the `let` keyword. All variables are immutable by default. To allow variables to be mutable - the `mut` keyword is used before the variable.

```rust
// main.rs
fn main() {
    let name = "Rust";
    println!("Hello {}!", name); // Hello Rust!
}
```

The above program produces an immutable value `name`. If you are planning on reassigning a variable you can do:

```rust
let mut x = 5;
x = 6;
println!("The value of x is {}.", x); // The value of x is 6.
```

Rust is strong typed - so you can only assign another integer to x:

```rust
let mut x = 5;
x = "Sidney";
```

```zsh
Output:
  |
4 | x = "Sidney";
  |     ^^^^^^^ expected integer, found `&str`
```

If you _really_ wanted to make `x = "Sidney`" you could "shaddow" `x` by using the `let` keyword to initialize another variable called `x` - like this:

```rust
let x = 5;
let x = "Sidney";
println!("Hi, {}!", x);
```

```zsh
Output:
Hi, Sidney!
```

By default, Rust will make all the integers you create signed 32 bit integers (`i32`) - but there are a bunch of types you can assign them to. Here I am assigning a number to an unsigned 8 bit integer.

```rust
let mut eight_bit_fun: u8 = 1;
println!("{}", eight_bit_fun); // 1
```

Since the number is unsigned - if I try to subtract 2 from `eight_bit_fun` I will get an error.

```rust
eight_bit_fun -= 2;
```

```zsh
Output:
  |
3 | eight_bit_fun -= 6;
  | ^^^^^^ attempt to compute `1_u8 - 2_u8`, which would overflow
  |
  = note: `#[deny(arithmetic_overflow)]` on by default
```

However, if I really, really want to overflow - I can do so explicitly with the `wrapping_sub` method:

```rust
println!("1 - 2 = {}", eight_bit_fun.wrapping_sub(2));
```

```zsh
Output:

1 - 2 = 255
```

Off course, there are also floats (decimal point numbers), I'm sure you can imagine.

Besides ints, floats, and strings, there are collections, like tuples and arrays.

this is a tuple:

```rust
let my_tup: (&str, bool, i32, f64) = ("my tuple", true, 100, 11.3);
// this is similar to python tuples - or object destructuring for arrays in JavaScript
let (name, is_tuple, my_int, my_float) = my_tup;

println!("name: {}, is_tuple: {}, my_int: {}, my_float: {}", name, is_tuple, my_int, my_float);
```

```zsh
Output:

name: my tuple, is_tuple: true, my_int: 100, my_float: 11.3
```

You can also assign variables like this:

```rust
let the_truth = my_tup.1; // true (bool)
println!("the truth is {}", the_truth);
```

```zsh
Output:

the truth is true
```

this is an array:

```rust
let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
```

This will print the second month:

```rust
println!("{}", months[1]);
```

```zsh
Output

February
```

You can do the same destructuring assignment with arrays. (NOTE: Stay tuned, there are better ways to do something like this.)

```rust
let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
let [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = months;
println!("{}", apr);
println!("{}", months[3]);
```

```zsh
Output:

April
April
```

We will get more into loops later on, but if we wanter to loop through them we would do this:

This loops through all the months as a numbered list:

```rust
for (i, month) in months.iter().enumerate() {
    println!("{}: {}", i + 1, month);
}
```

```zsh
Output:

1: January
2: February
3: March
4: April
5: May
6: June
7: July
8: August
9: September
10: October
11: November
12: December

```

If we didn't want the index we would just do: `for month in months.iter(){println!("{}", month)}` without `.enumerate()` at the end.

Here is a [link to above code](https://play.rust-lang.org/?version=stable&mode=debug&edition=2018&gist=74c282811597b9013cae111d530e48f0).

Here is a [Gist](https://gist.github.com/DewofyourYouth/2756e6a3b2bc6b96f9669f36f3c87d44) with some more stuff.

Next Rust posts planned will talk about:

1. control flow (mostly rust specific stuff - `match` and `loop`)
2. functions, pointers, ownership, and slices
3. structs, enums and methods
