module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module'
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'prettier'
  ],
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
  env: {
    "browser": true,
    'jest/globals': true
  },
  overrides: [
    {
      files: [
        '*.test.js'
      ],
      'rules': {
        'import/no-unresolved': false,
      }
    }
  ]
}
