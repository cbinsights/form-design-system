module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended',  'plugin:jest/recommended', 'prettier',],
  plugins: ['@typescript-eslint'],
  env: { browser: true },
  rules: {
    /* =========================================

      We use "no-restricted-syntax" is used to
      limit what gets rolled out in each stage.
      https://cbinsights.atlassian.net/wiki/spaces/TD/pages/2379907163/Rollout+plan

      ========================================= */
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSTypeAnnotation",
        "message": "Don't use Typescript yet (Still on Stage 0)"
      },
      {
        "selector": "TSEnumDeclaration",
        "message": "Don't declare enums (Stage 1 feature)"
      },
      {
        "selector": "TSInterfaceDeclaration",
        "message": "Don't declare interfaces (Stage 1 feature)"
      },
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
