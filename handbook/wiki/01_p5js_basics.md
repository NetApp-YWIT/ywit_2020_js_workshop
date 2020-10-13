# Intro

p5.js is a library for JavaScript that provides many functions for creating any
number of applications. It focuses on being simple to use while providing all of
the necessary building blocks to create something complex.

You can find out much more about p5.js
* in their repository: https://github.com/processing/p5.js/wiki
* or on their website: https://p5js.org/reference/

In this wiki, we will cover a piece of the functionality that p5.js exposes and
how it is being used in our workshop. Feel free to reference back to the p5.js
wiki or website at any time for more details.

# Getting started

The first important thing to do when getting started with a new p5.js project is
to create an HTML file which will host your application. A minimal example might
look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.1.9/lib/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
  </body>
</html>
```

This page does 3 things:
* It provides the basic HTML structure (head, body, html tags)
* it imports the p5.js library
* and it imports our own `sketch.js` script

The `sketch.js` script is what we will be writing in. Here is what you should
create to start with:

```JavaScript
function setup() {
    // code run once at the beginning of the game
}

function draw() {
    // code run on each frame of the game
}
```

This file defines two functions, `setup()` and `draw()`. These function names
are special to p5.js. You can see from the comments in them how they will be
used. p5.js is going to call these functions for us, so whatever we put there
will be run as soon as our page gets loaded by the browser. If we load this file
in our browser, this is what we'll see:

![All white image](images/start.png)

That's an all white image because we haven't drawn anything in our code yet so
we just see the default white of our browser page. In the next section, we'll
cover how to show something other than a white page.
