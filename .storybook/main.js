module.exports = {
  stories: ["../**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-backgrounds",
    "@storybook/addon-a11y",
    '@storybook/addon-viewport/register',
  ]
};