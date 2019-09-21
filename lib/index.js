'use strict';

const env = require('./env');
const extension = require('./extends');
const parser = require('./parser');
const parserOptions = require('./parserOptions');
const plugins = require('./plugins');
const rules = require('./rules');
const settings = require('./settings');

module.exports = {
  env,
  extends: extension,
  parser,
  parserOptions,
  plugins,
  root: true,
  rules,
  settings,
};
