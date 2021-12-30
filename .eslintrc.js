module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    // For unused parameters we allow prefixing them with an underscore
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // We want to use any as some people are not abiding by our contract and we do not want to have Typescript throw an error quite yet
    '@typescript-eslint/no-explicit-any': 0,
    // We like using empty noop (for now)
    '@typescript-eslint/no-empty-function': 0,
    // It's necessary to turn this off for non Typescript files
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    /* =========================================
       We generally do not prefer using enums.
       Instead, utilize union types and type
       narrowing with `as const`.
       ========================================= */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        // We want to start throwing again on Typescript files
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        // We don't use prop-types in TypeScript files
        'react/prop-types': 0,
      },
    },
  ],
};
