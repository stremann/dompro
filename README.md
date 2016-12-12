Dompro
======
Easy Virtual DOM implementation for JavaScript apps.  

[![Build Status](https://travis-ci.org/stremann/dompro.svg?branch=master)](https://travis-ci.org/stremann/dompro)
[![Coverage Status](https://coveralls.io/repos/github/stremann/dompro/badge.svg?branch=master)](https://coveralls.io/github/stremann/dompro?branch=master)
[![NPM Version](https://img.shields.io/npm/v/dompro.svg)](https://www.npmjs.com/package/dompro)
[![NPM Downloads](https://img.shields.io/npm/dm/dompro.svg?style=flat-square)](https://www.npmjs.com/package/dompro)

### Influences

Dompro evolves the ideas of [Virtual DOM](https://github.com/Matt-Esch/virtual-dom), but avoids its complexity by taking cues from emergency design.  
Whether you have used it or not, Dompro only takes a few minutes to get started with.

### Installation

To install the stable version:

```
npm install --save dompro
```

This assumes you are using [npm](https://www.npmjs.com/) as your package manager.  
If you don't, you can [access these files on unpkg](https://unpkg.com/dompro/), download them, or point your package manager to them.

Most commonly people consume Dompro as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules. 
These modules are what you get when you import `dompro` in a [Webpack](http://webpack.github.io), [Browserify](http://browserify.org/), or a Node environment.

If you don't use a module bundler, it's also fine. 
The `dompro` npm package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/dompro/dist/). 
They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. 
For example, you can drop a UMD build as a [`<script>` tag](https://unpkg.com/dompro/dist/dompro.js) on the page. 
The UMD builds make Dompro available as a `window.Dompro` global variable.

The Dompro source code is written in ES2015 but it is precompiled both CommonJS and UMD builds to ES5 so they work in [any modern browser](http://caniuse.com/#feat=es5). 
You don't need to use Babel or a module bundler to [get started with Dompro](https://github.com/stremann/dompro/blob/master/examples/counter/pure%20%2B%20dompro/index.html).

### Examples

* List ([source](https://github.com/stremann/dompro/tree/master/examples/list))

### Change Log

This project adheres to [Semantic Versioning](http://semver.org/).
Every release is documented on the GitHub [Releases](https://github.com/stremann/dompro/releases) page.

### License

MIT