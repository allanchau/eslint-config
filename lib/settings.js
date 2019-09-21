'use strict';

module.exports = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx'],
    },
  },
  linkComponents: [{ name: 'Link', linkAttribute: 'href' }],
  react: {
    pragma: 'React',
    version: 'detect',
  },
};
