module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  // babelOptions: { configFile: './babel.config.json' },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'import/no-unresolved': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 0,
    'eslint-plugin-import': 0,
    'anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    camelcase: 0,

    // Parsing error: Unexpected token import
  },
};
