# node-eslint-config-allanchau

[![Build Status](https://travis-ci.org/allanchau/node-eslint-config-allanchau.svg?branch=master)](https://travis-ci.org/allanchau/node-eslint-config-allanchau)
[![npm](https://img.shields.io/npm/v/@allanchau/eslint-config.svg)](https://www.npmjs.com/package/@allanchau/eslint-config)

A comprehensive ESLint Shareable Config.

### Why use this?

When coding as part of a team, you should aim to produce clear and consistent code.

These set of rules will not only help enforce this, but also improve efficiency when reviewing code.

## Features

- ECMAScript 5.
- ECMAScript 6.

## Installation

This package is available on [NPM](https://www.npmjs.com/package/eslint-config-allanchau):

  ```shell
  $ npm install @allanchau/eslint-config
  ```
  ```javascript
  // @ .eslintrc
  // For node.js code (ES6).
  {
    "extends": "@allanchau/eslint-config"
  }

  // For browser code (ES5).
  {
    "extends": "@allanchau/eslint-config/src/browser"
  }
  ```

## Notes

- These rules follow my [JavaScript style guide](https://github.com/allanchau/styleguide/tree/master/js).
