---
layout: post
title: "C# Was 'Meh', Rust Is Awesome! Intro."
date: "2021-02-12"
published: true
comments: true
tags:
  - rust
  - intro
categories:
  - rust
---

Despite my New Year's "resolution" to learn .NET. I found I enjoyed F# but found C# to be a thoroughly 'meh' version of the most 'meh' language ever (i.e. Java). Frankly, I found C# to be what Java would be if it really had strong opinions about the OS it was running on - but was kinda in denial of it. However, I found Rust to be loads of fun! Basically, Rust is a relatively "low level" or "sytem's programming" language with a cool "python like" modern syntax. Also, the Cargo crates system is awesome! The whole C# NuGet thing, I imagine probably works well on Windows - on Linux, this was not a smooth experience. I've heard Rust contrasting with Go often (they were both started around the same time), people claim that Rust has more of a learning curve. I disagree. If you're familiar with Python or JavaScript - languages with generics that support a declaritive, concise coding style - the imperitive and verbose style that Go gives you can be a bit off-putting. Don't get me wrong, I like Go a lot - but the fact that you can learn the syntax in a few hours is often overshadowed by the fact that whenever you do anything, you kinda have to write some `for _, val := range someCollection { // do something with val here. }` loops and do a bunch of `err, val := bla bla; if !err....`. Compared to this, I find it's relatively easy to hit the ground running with Rust, and the "new" ownership paradigm that Rust comes with is actually quite intuitive once you get the idea.

Anyways, stay tuned for my notes on the Rust language and some projects I'm doing with it.
