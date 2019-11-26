---
layout: post
title: 'Basic Vue Todo (Using localStorage)'
date: '2019-11-26'
comments: true
categories:
  - javascript
  - tutorials
---

So in this little tutorial I will run through making a 'todo' app in Vuejs. I will be using the localStorage API to avoid annoyingly losing my list when I refresh the browser - but also avoid having to use a backend db API. It will also sync my todo list across multiple tabs in the same browser.

## Set Up

So this tutorial will assume that you know how to set up the basics for front end development with css and javascript. In your `index.html` within the body tags - before you import your `index.js` file - import the Vuejs library like this:

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

Then, in your root directory make a directory call `js` and make a file called something like `index.js`. Then import `index.js` after vue.js - like this:

```html
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="js/index.js"></script>
```

In the demo, I use the Bootstrap 4 framework for styling - to import this - in the head section of your html add this `link` tag before linking to your own stylesheet:

```html
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>
```

This is the only part of Bootstrap I use, so it should suffice (you could feasible import less of the css - but I didn't bother as the Bootstrap 4 stylesheet is probably already cached in your browser, so it's cool.) Next make a css stylesheet and link to in under the Bootstrap link.

Now lets make a div for our view instance to live in - will give it an id of `app`

like this:

```html
<body>
  <div id="app"></div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="js/index.js"></script>
</body>
```

HTML so far:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vue Stuff</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div id="app">

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="js/index.js"></script>
  </body>
</html>
```

## Getting Started

Lets start by going to our `index.js` file and making the view instance.

The documentation for Vuejs is found [here](https://vuejs.org/).

The github repo for the finished project is [here](https://github.com/DewofyourYouth/vue-localStorage-todo) and a demo page for that repo is [here](https://dewofyouryouth.github.io/vue-localStorage-todo/).

Here is the finished app on CodePen:

<p class="codepen" data-height="711" data-theme-id="dark" data-default-tab="result" data-user="JacobShore" data-slug-hash="QWWXvGw" style="height: 711px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Vue Todo with localStorage">
  <span>See the Pen <a href="https://codepen.io/JacobShore/pen/QWWXvGw">
  Vue Todo with localStorage</a> by Jacob Shore (<a href="https://codepen.io/JacobShore">@JacobShore</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
