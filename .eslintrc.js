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
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier', "plugin:jest/recommended"],
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSEnumDeclaration",
        "message": "Don't declare enums"
      }
    ]
  },
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/extensions': 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": 0
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'import/no-unresolved': 0,
      },
    },
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"]
      }
    }
  ],
};
