---
layout: post
title: 'Basic Vue Todo App (w/ localStorage): Part II'
date: '2019-11-27'
comments: true
categories:
  - javascript
  - tutorials
---

In the last post we've displayed a list on using Vuejs. Now we'll learn how to add things to our todo list.

First we'll need to add an method of input within our HTML code. While we're doing things, lets add some Bootstrap classes to our HTML as well.

```html
<!-- Here is Bootstrap "Jumbotron" title -->
<div class="jumbotron">
  <h1 class="display-2">Todo App</h1>
</div>
<!-- Here we're adding some Bootstrap classes to the list -->
<div id="app" class="container">
  <!-- Here is where we're adding the form input -->
  <form>
    <input class="form-control" name="todo" type="text" />
  </form>
  <ul class="list-group">
    <li class="list-group-item text-center" v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ul>
</div>
```
