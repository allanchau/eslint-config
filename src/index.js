'use strict';

const extensions = require('./extensions');
const parserOptions = require('./parserOptions');
const plugins = require('./plugins');
const rules = require('./rules');

module.exports = {
  extends: extensions,
  parserOptions,
  plugins,
  root: true,
  rules,
};
