# Poker-pattern

![CI - PR](https://github.com/X-Fix/poker-pattern/workflows/CI%20-%20PR/badge.svg?branch=master)

## Table of Contents

-   [Introduction](#introduction)
-   [Get Started](#get-started)
-   [Building and Running in Production Mode](#building-and-running-in-production-mode)
-   [Stack Details](#stack-details)
-   [Configuration Decisions](#configuration-decisions)

## Introduction

This is a [Svelte](https://svelte.dev) app serving as a pattern library. It serves as a both a component reference website, and the workshop within which I create the HTML+CSS components used in the poker planning (link coming soon) web app.

## Get Started

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Install the dependencies...

```bash
npm install
```

...then start :

```bash
npm start
```

Navigate to [localhost:5000](http://localhost:5000) (or whatever it says in the CLI). You should see the app running. Any changes made to the src files will trigger a page reload.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and Running in Production Mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run serve`. This uses [sirv](https://github.com/lukeed/sirv), which is included in the package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Stack Details

-   JS Framework: [Svelte](https://svelte.dev)
-   Build tool: [Rollup](https://rollupjs.org)
-   CSS tools: [PostCSS](https://postcss.org/), [Autoprefixer](https://autoprefixer.github.io/) and [cssnano](https://cssnano.co/)
-   SVG spritesheet plugin: [SvgSprite](https://www.npmjs.com/package/rollup-plugin-svg-sprite)
-   An attempt was made to include TypeScript (cos why not) but it doesn't seem like Svelte is ready for that

This project started as a Svelte template which lives at https://github.com/sveltejs/template.

I went with Svelte partly to see what it could do, and partly because of how small it claimed its build would be. This project doesn't require monster technical capabilities or scaling so no need for the other popular SPA options

Rollup came with the Svelte template and just like the web-app requirements, bundling did not require something as customisable as Webpack so here we are

The CSS bundling does the standard UA prefixing and minification, as well providing PostCSS plugins for supporting Sass-like variables and import statements

The chosen spritesheet generator was just the first one that came up in a search for a relevant rollup plugin and it does the job. There's a custom bash script for taking the output spritesheet and injecting it into the right place in the public index.html file. This process will need to be reproduced in any projects that use these components anyway

## Configuration Decisions

### \*rc.json

I've included the `.json` extension in the various \*rc filenames as this makes it easier to include them in the Prettier's pattern matching. For Eslint, Prettier and Husky this worked fine by default but I needed to explicitly point Lint-Staged to the lintstagedrc.json file. Seeing as all of these tools allow custom config file names/locations, I may move all the files into a `/config` folder to clean up the root folder

### Scoped vs Global CSS

Svelte comes with scoped CSS out-of-the-box but ultimately I want to be able to export and deploy a stylesheet with re-usable component styles. Anything styles only required by this web-app get scoped in the relevant Svelte component file, and any exported component CSS goes into a separate `.css` file to be bundled by rollup and the CSS tools.

### Local Scope

Wherever possible, I use a local installation or configuration for the various tools used in this project so as to avoid conflicts with any global installations, eg.

-   The ESlint `nodepath` setting for VS Code is defined in a local `settings.json` file, and points to this project's installation of ESlint
