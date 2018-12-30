# twriter
Javascript class to create typewriter effect on your website.

It's easy as:
```html
<p id="twriter-p"> This will be animated </p>

<script>
  let paragraph = new TWriter(document.querySelector("#twriter-p"));
  paragraph.start();
</script>
```

The animation takes 2000ms.
To set in how much time the animation have to take you can set the data-twr-duration attribute on the element to animate (integer, in milliseconds)

```html
<p id="twriter-p" data-twr-duration="4000"> This will be animated in 4 second</p>

<script>
  let paragraph = new TWriter(document.querySelector("#twriter-p"));
  paragraph.start();
</script>
```
