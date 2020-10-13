# Painting a Background

We now have a blank canvas created on which we can draw. One technique that is
often used in games and other applications which have characters or other objects
which move around is to erase the screen and then draw everything in its current
location each frame. This is one of the easiest ways to make sure everything on
screen moves to the right place.

In order to erase everything on a canvas, you need to fill it with a solid color.
That is, there is no "erase" function, but you can imagine that if you had a
picture and painted the entire thing one solid color it would look as though you'd
erased it.

So we'll pick a background color for our game and use that as our erase color.
Once we've chosen one, we need to draw that to the entire canvas each frame. Let's
modify our code again to do this:

```javascript
function setup() {
    // code run once at the beginning of the game
    createCanvas(730, 546);
}

function draw() {
    // code run on each frame of the game
    background(0, 0, 0);
}
```

Now if we refresh our browser window, this is what we'll see:

![black background](images/background.png)

It's still not all that interesting, but we're now actually drawing for the first
time. We put our call to p5.js's `background()` function inside of our `draw()`
function. That means that it will be called by p5.js each frame as the first thing
it does. So anything that was previously on the canvas will be painted over with
a black color.

You'll notice that we used `0, 0, 0` as the arguments to the `background()` function.
This is a way of telling the computer that we want a black color. This is because
each number represents the amount of red, green, and blue light that we want to
be displayed. Since we're showing none of any of those, we end up getting black.
If we were to set it to `255, 0, 0`, then the canvas would be completely red because
255 is the maximum amount of a color that can be shown:

![red background](images/background_red.png)

If we mix multiple colors, we can get any color of the rainbow. Here's how I might
define a royal looking purple: `121, 34, 121`. And this is how it would look:

![purple background](images/background_purple.png)

For the remainder of the sections, we'll change it back to black as that will match
the outer space theme that we want for our game. In the next section, we'll talk
about drawing things on top of our background.
