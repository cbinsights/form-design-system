import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import logo from "../src/assets/FDS-logo.svg"

import '../src/components/style/index.css';

addDecorator(withA11y)

const theme = create({
  brandTitle: 'FDS',
  brandUrl: 'cbinsights.github.io/form-design-system',
  brandImage: logo, // We can add an actual logo later,
});

addParameters({
  backgrounds: [
    { name: 'White', value: '#fff' },
    { name: 'Navy', value: '#003366' },
  ],
  options: {
    theme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module);
