// eslint-disable-next-line strict
'use strict';

module.exports = {
  'import/resolver': {
    node: {
      extensions: ['.js', '.jsx'],
    },
  },
  linkComponents: [{ linkAttribute: 'href', name: 'Link' }],
  react: {
    pragma: 'React',
    version: 'detect',
  },
};
