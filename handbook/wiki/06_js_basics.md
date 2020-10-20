# JavaScript Basics

In the previous chapters, we talked a lot about the specifics of how to use p5.js
functions to draw things to the screen. What we glossed over are some basics of
how to create a more complex JavaScript application and some of the features that
it offers.

# Functions

If you want to define a piece of code that will be run multiple times during the
program, you can write a function. It would look something like this:

```JavaScript
function sayHello() {
    console.log("Hello");
}
```

This function can be called from other places in code anywhere we want to have
the word `Hello` printed in the console. You call a function by giving its name
followed by parentheses:

```JavaScript
sayHello();
sayHello();
sayHello();
```

This would call the `sayHello()` function 3 times printing the `Hello` string in
our console 3 times.

# Variables

Variables are names we can use to store a value that we want to get back later.
In JavaScript, you must declare a variable before you can use it:

```JavaScript
var amount = 10;
console.log(`I have ${amount} coconuts, which is a lovely bunch.`);
```

Here, we stored the value of `10` into a variable called `amount`. Then later we
retrieved the value stored in `amount` when we referenced it in our log message.

# Classes

When you want to combine a set of variables and functions into one logical unit,
you can create a class. A class usually represents some kind of entity in your
program. You can have multiple instances of a class in the same program. Here is
a very simple class for representing a lightbulb:

```JavaScript
class Lightbulb {
    constructor() {
        this.cycles = 0;
        this.maxLife = 100;
        this.state = "off";
        this.burnedOut = false;
    }

    turnOn() {
        if (this.cycles > this.maxLife) {
            this.burnedOut = true;
            return;
        }

        this.state = "on";
    }

    turnOff() {
        this.state = "off";
    }
}

var light = new Lightbulb();
console.log(`The light is ${light.state}`);
light.turnOn();
console.log(`The light is ${light.state}`);
light.turnOff();
console.log(`The light is ${light.state}`);
```

This program defines a `Lightbulb` class which tracks the current state of the
bulb as well as how much life it has left. When we want to create a new instance
of a `Lightbulb` in our program, we use the keyword `new`. We can then interact
with that instance by calling its methods and accessing its member variables.

It's important to note that inside of a class definition, there is a special method
called `constructor()`. This get called by the JavaScript interpreter when you use
the `new` keyword in your program. The other methods are very much like the `sayHello()`
function we defined before except that they don't use the `function` keyword.

You should also take care to always use `this.` when referencing something that
belongs to the class when you are inside one of the class functions. `this.` refers
to the current instance of the class that is being called.
 