const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': [0, { caseSensitive: false }],
    'react/no-children-prop': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
  },
};
