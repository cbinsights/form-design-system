module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier', "plugin:jest/recommended"],
  plugins: ['@typescript-eslint'],
  env: { browser: true },
  rules: {
    /* "no-restricted-syntax" is used to limit what gets rolled out in each stage. */
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSEnumDeclaration",
        "message": "Don't declare enums"
      }
    ]
  },
  rules: {
    "@typescript-eslint/no-empty-function": 0, // We like using empty noop (for now)
    "@typescript-eslint/explicit-module-boundary-types": "off", // It's necessary to turn this off for non Typescript files
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": ["error"] // We want to start throwing again on Typescript files
      }
    }
  ],
};
