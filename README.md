# Angular 2 bootstrap

## Purpose
To provide a simple and reusable starting point for applications using Angular 2.

## Running the code

Having cloned the repository run `npm install` followed by `npm start`. This runs two parallel processes: 

* The TypeScript compiler in watch mode
* A static file `lite-server` that loads `index.html` in a browser with a connection to BrowserSync

## The code

* `package.json` lists NPM packages
* `tsconfig.json` specifies how the TypeScript compiler generates JavaScript
* `typings.json` lists definition files for libraries the TypeScript compiler doesn't natively recognise
* `systemjs.config.js` provides information to the SystemJS module loader (registering the necessary packages and where to find modules)