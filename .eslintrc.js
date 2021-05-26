module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSEnumDeclaration",
        "message": "Don't declare enums"
      }
    ]
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['*.test.js'],
    },
  ],
};
