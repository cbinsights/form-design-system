module.exports = {
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['if', 'else', 'import'],
      },
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': [
      'always',
      { ignoreAtRules: ['if', 'else'] },
    ],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-before': 'always',
    'color-no-invalid-hex': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'never-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-property-unit-whitelist': {
      'line-height': [],
      '/^animation/': ['ms'],
      '/^transition/': ['ms'],
    },
    'declaration-property-value-blacklist': [
      {
        outline: ['none'],
        // no font-size values under 12px or .75rem
        'font-size': [
          '^(((0?[.](7[5-9]|[8-9][0-9])|[1-9].?([0-9]?[0-9]?[0-9])*)rem)|(?:(?:1[2-9]|[2-9][0-9]|[1-9][0-9][0-9])px))$',
        ],
      },
      {
        message:
          "Either this font-size is too small, or you're overriding the focus outline. Please make sure this interfaces uses other techniques to maintain usability for all users.",
      },
    ],
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': 'numeric',
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'never-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'never-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-url-scheme-blacklist': ['/^data:image/'],
    'function-whitespace-after': 'always',
    indentation: 2,
    'length-zero-no-unit': true,
    'max-nesting-depth': 3,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-space-after': 'always',
    'media-query-list-comma-space-before': 'never',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'always',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'property-blacklist': 'text-rendering',
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'appearance',
          'touch-action',
          'user-select',
          'sticky',
          'hyphens',
          'font-feature-settings',
          'text-size-adjust',
          'interpolation-mode',
        ],
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-single-line-comment'],
        ignore: ['after-comment']
      },
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-blacklist': '|=',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'never-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-attribute': 1,
    'selector-max-class': 2,
    'selector-max-combinators': 1,
    'selector-max-compound-selectors': 2,
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,1',
    'selector-max-universal': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'time-min-milliseconds': 100,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['sticky'],
      },
    ],

    // the following rules are intentionally disabled
    'at-rule-blacklist': null,
    'at-rule-name-newline-after': null,
    'at-rule-no-unknown': null,
    'at-rule-whitelist': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-space-after': null,
    'color-hex-case': null,
    'color-hex-length': null,
    'color-named': null,
    'color-no-hex': null,
    'comment-empty-line-before': null,
    'comment-no-empty': null,
    'comment-whitespace-inside': null,
    'custom-media-pattern': null,
    'custom-property-empty-line-before': null,
    'custom-property-pattern': null,
    'declaration-block-no-duplicate-properties': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-colon-newline-after': null,
    'declaration-no-important': null,
    'declaration-property-unit-blacklist': null,
    'declaration-property-value-whitelist': null,
    'function-blacklist': null,
    'function-url-no-scheme-relative': null,
    'function-url-scheme-whitelist': null,
    'function-whitelist': null,
    'keyframe-declaration-no-important': null,
    'max-empty-lines': null,
    'max-line-length': null,
    'media-feature-name-blacklist': null,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-name-whitelist': null,
    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'no-missing-end-of-source-newline': null,
    'property-whitelist': null,
    'selector-attribute-operator-whitelist': null,
    'selector-combinator-blacklist': null,
    'selector-combinator-whitelist': null,
    'selector-id-pattern': null,
    'selector-max-pseudo-class': null,
    'selector-max-type': null,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-pseudo-class-blacklist': null,
    'selector-pseudo-class-whitelist': null,
    'selector-pseudo-element-blacklist': null,
    'selector-pseudo-element-whitelist': null,
    'unit-blacklist': null,
    'unit-whitelist': null,
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
  },
};
