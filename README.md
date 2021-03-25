# Roam to Slideshow

A simple script for converting an arbitrary Roam Research page json export into a reveal.js slideshow.

![demonstration gif](./demonstration.gif)

The general behavior is that the slideshow will:
- Start with a slide for the page title
- The second slide has the page title but lists the top-level bullets and reveals them one press at a time.
- For any slide with children, it will have a title, but will reveal them one at a time as a bulleted list.

Usage
- Clone/download this repository
- On a roam page, select "Export"
- On the export screen, select "JSON" type
- Unzip the exported bundle
- Rename the exported .json file to `roam.json` in this folder
- With node.js installed, run `node convert-local.js`

This folder will now be a working slideshow of that presentation. You can either host it on any http-server like github-pages, apache, or whatever you want. I use [http-server](https://www.npmjs.com/package/http-server) for local previewing.

Now here are the regular docs of reveal.js, which this is otherwise a clone of:

<p align="center">
  <a href="https://revealjs.com">
  <img src="https://hakim-static.s3.amazonaws.com/reveal-js/logo/v1/reveal-black-text.svg" alt="reveal.js" width="450">
  </a>
  <br><br>
  <a href="https://github.com/hakimel/reveal.js/actions"><img src="https://github.com/hakimel/reveal.js/workflows/tests/badge.svg"></a>
  <a href="https://slides.com/"><img src="https://s3.amazonaws.com/static.slid.es/images/slides-github-banner-320x40.png?1" alt="Slides" width="160" height="20"></a>
</p>

reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create fully featured and beautiful presentations for free. [Check out the live demo](https://revealjs.com/).

The framework comes with a broad range of features including [nested slides](https://revealjs.com/vertical-slides/), [Markdown support](https://revealjs.com/markdown/), [Auto-Animate](https://revealjs.com/auto-animate/), [PDF export](https://revealjs.com/pdf-export/), [speaker notes](https://revealjs.com/speaker-view/), [LaTeX support](https://revealjs.com/math/), [syntax highlighted code](https://revealjs.com/code/) and much more.

<h1>
  <a href="https://revealjs.com/installation" style="font-size: 3em;">Get Started</a>
</h1>

## Documentation
The full reveal.js documentation is available at [revealjs.com](https://revealjs.com).

## Online Editor
Want to create your presentation using a visual editor? Try the official reveal.js presentation platform for free at [Slides.com](https://slides.com). It's made by the same people behind reveal.js.

## License

MIT licensed

Copyright (C) 2011-2020 Hakim El Hattab, https://hakim.se
