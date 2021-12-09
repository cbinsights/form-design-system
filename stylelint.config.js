module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    // There's no attachment to remove the nullifying of these rules.
    // This is mostly here so that we don't have to refactor CSS now.
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'no-descending-specificity': null,
    'keyframes-name-pattern': null,
    'max-line-length': null,
  },
};
