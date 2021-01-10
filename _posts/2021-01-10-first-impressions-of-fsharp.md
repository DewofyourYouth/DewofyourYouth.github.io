---
layout: post
title: "First Impressions of F#"
date: "2021-01-10"
comments: true
categories:
  - F#
---

I've started to get my feet wet in C# and F#. I've discovered .NET interactive notebooks for C# and F# - which makes playing around with them more fun. I wonder if there is a way to embed them in markdown. Now that I've had an opp kick the tires a bit, here are some of my discoveries:

Here are some things that strike me as a little odd, but I'm sure were intentional decisions. Unlike most languages, in F# `=` is used for both assignment and equality. So you can do:

```fsharp
let my_bool = 10 = 2
let this_is_ten = 2
printf "%b" my_bool // false
printf "%i" this_is_ten // 2

```

I suppose this is similar to SQL. Similarly, `!=` is not used to show inequality but rather `<>`.

Also, in F# you don't have to declare the type - F# figures that out for you. Apparently, this can even happen after instanciation.

```fsharp
// This is a function that adds two things together
// but what kinda of things?
let add_stuff x y = x + y
// Here, the compiler decides that I'm concatenating strings with this function
let hello = add "Hello " "world!" // So this will output "Hello world!"
// If I then try to add numbers I will get a type error
let my_sum = add 10 30 // Error: expected strings, got ints
```

In an alternate reality - if I reversed the order, this would happen:

```fsharp
let add_stuff x y = x + y
let my_sum = add 10 30 // 40
let hello = add "Hello " "world!" // Error: expected ints, got strings
```

So it seems like, even though I the definition of the function is identical in both cases, it is further defined by how I first use it. For some reason I find this counterintuitive and would rather just define my function from the getgo.

For some reason, F# advocates like to make a big deal out of not needing to define your types. But I think I probably will. I'd rather be able to just look at a function and know how it behaves without seeing how it was used. Maybe there is something I'm missing here.

Of course, I don't have to let the compiler infer the type, I can be as explicit as you want to be. Here I'm telling my functions exactly what I want them to recieve.

```fsharp
let double_list (l: List<int>) = List.map(fun x -> x * 2) l
let add_one (l: List<int>) = List.map(fun x -> x + 1) l

// I can put them together like this:
let double_then_add = double_list >> add_one
// I can also do it like this:
let add_then_double = double_list << add_one
// Which is the same as this:
let also_add_then_double = add_one >> double_list

let new_list = double_then_add [1..10] // [3; 5; 7; 9; 11; 13; 15; 17; 19; 21]
let another_new_list = add_then_double [1..10] // [4; 6; 8; 10; 12; 14; 16; 18; 20; 22]
let a_third_new_list = also_add_then_double [1..10] // [4; 6; 8; 10; 12; 14; 16; 18; 20; 22]
```

The `>>` operator is called the composition operator.
Theres also a piping operator like this:

```fsharp
[1..100]
|> List.filter(fun x -> (x%2) = 0) // filter out all odd numbers
|> List.map(fun x -> x * 2) // Multiply them all by 2
|> printfn "Even doubles: %A"
(**
    Will return this:

        Even doubles:
        [4; 8; 12; 16; 20; 24; 28; 32; 36; 40; 44; 48; 52; 56; 60; 64; 68; 72; 76; 80;
        84; 88; 92; 96; 100; 104; 108; 112; 116; 120; 124; 128; 132; 136; 140; 144; 148;
        152; 156; 160; 164; 168; 172; 176; 180; 184; 188; 192; 196; 200]
*)
```

I'm not 100% yet on what the difference between piping and composing is.
