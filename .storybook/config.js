import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import React from 'react'

import '../src/components/style/index.css';

const theme = create({
  brandTitle: 'fds-components',
  brandUrl: 'cbinsights.github.io/form-design-system',
  brandImage: '', // We can add an actual logo later,
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
