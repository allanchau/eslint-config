'use strict';

const parserOptions = require('./parserOptions');
const plugins = require('./plugins');
const rules = require('./rules');

module.exports = {
  parserOptions,
  plugins,
  root: true,
  rules,
};
