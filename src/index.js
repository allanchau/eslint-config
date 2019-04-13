'use strict';

const env = require('./env');
const parser = require('./parser');
const parserOptions = require('./parserOptions');
const plugins = require('./plugins');
const rules = require('./rules');
const settings = require('./settings');

module.exports = {
  env,
  parser,
  parserOptions,
  plugins,
  root: true,
  rules,
  settings,
};
