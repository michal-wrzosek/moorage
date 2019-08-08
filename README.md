# moorage

### React HOC for generating masonry-like grid layout that would work with server side rendering.

<a href="https://michal-wrzosek.github.io/moorage"><img src="/demo.png" width="300px" /></a>

[Live demo](https://michal-wrzosek.github.io/moorage)

I was building a website for my wife and she asked me to create for her a grid of images that looks like Pinterest website. This is of course not that simple, especially when you want to serve your website with SSR and you don't want any flickering on loading of the page.

I made some shortcuts to make this idea more doable. First, you need to know what's the ratio (width / height) of each of your grid tiles in advance. If your tiles are just pictures it basically mean that you need to keep in your DB width and height of every image.

Secondly, you should inspect incoming UserAgent on your server to figure out roughly with what kind of device you're dealing with (phone, tablet or desktop) using library like [mobile-detect](https://github.com/hgoebl/mobile-detect.js) and then serve the layout with a fixed nr of columns for your grid.

Obvoisly making such grid with SSR is hard because you can't be fully sure what will be the exact size of your user's screen so you can't position your tiles to exact xy coordinates. What you can do though is to shape your grid in ratios and percentages of the outer container. That's what I did here.

There is this cool trick in CSS with `padding-bottom: x%` aka [Aspect Ratio Boxes](https://css-tricks.com/aspect-ratio-boxes/) that let's you create elements that will always keep the ratio no matter what width of the element is gonna be. It's like making your `<div />` behave like `<img />`.

Using such ratio divs inside ratio divs I created a math hell component that will render a nice layout for a given tiles.

Please take a look and use it if you want. If you have some ideas for improvement let me know or just create a PR.

---

### To install run:

```
npm i moorage
```

Example of how to use this component package [here](example/src/App.tsx).

---

Name of this package comes from Polish word [murarz](https://translate.google.pl/#view=home&op=translate&sl=pl&tl=en&text=murarz) (mason/brickmaker).

---

This repository was built using `react-component-lib` biolerplate:
https://github.com/michal-wrzosek/react-component-lib
