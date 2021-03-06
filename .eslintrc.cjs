module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'import'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'always'
    ],
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
          '_argv'
        ],
        allowAfterThis: true,
        enforceInMethodNames: false
      }
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
          'info'
        ]
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true }
    ],
    radix: ['error', 'as-needed'],
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'no-template-curly-in-string': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js'
        ]
      }
    }
  }
};
