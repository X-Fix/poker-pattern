# Poker-pattern

This is a [Svelte](https://svelte.dev) app serving as a pattern library. It serves as a both a component reference website, and the workshop within which I create the HTML+CSS components used in the poker planning (link coming soon) web app.

This project started as a Svelte template which lives at https://github.com/sveltejs/template.

## Stack details

- JS Framework: [Svelte](https://svelte.dev)
- Build tool: [Rollup](https://rollupjs.org)
- CSS tools: [PostCSS](https://postcss.org/), [Autoprefixer](https://autoprefixer.github.io/) and [cssnano](https://cssnano.co/)
- SVG spritesheet plugin: [SvgSprite](https://www.npmjs.com/package/rollup-plugin-svg-sprite)
- An attempt was made to include TypeScript (cos why not) but it doesn't seem like Svelte is ready for that

I went with Svelte partly to see what it could do, and partly because of how small it claimed its build would be. This project doesn't require monster technical capabilities or scaling so no need for the other popular SPA options

Rollup came with the Svelte template and just like the web-app requirements, bundling did not require something as customisable as Webpack so here we are

Svelte comes with scoped CSS out-of-the-box but ultimately I want to be able to export and deploy a stylesheet with re-usable component styles so anything related to this web-app gets scoped in the Svelte file and any exported component CSS goes into a separate css file to be bundled by rollup and the CSS tools. The toolchain is small cos all I really needed for a project this size was variables and imports

The chosen spritesheet generator was just the first one that came up in a search for a relevant rollup plugin and it does the job. There's a custom bash script for taking the output spritesheet and injecting it into the right place in the public index.html file. This process will need to be reproduced in any projects that use these components anyway

## Get started

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

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run serve`. This uses [sirv](https://github.com/lukeed/sirv), which is included in the package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).