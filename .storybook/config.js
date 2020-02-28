import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import logo from "../src/assets/FDS-logo.svg"

import '../src/components/style/index.css';

addDecorator(withA11y)

const theme = create({
  brandTitle: 'Form Design System',
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
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
  },
});

configure(
  [
    require.context('../src/components', true, /\.docs\.stories\.(js|mdx)$/),
    require.context('../src/components', true, /\.stories\.(js|mdx)$/),
    require.context('../docs/icons', true, /\.stories\.(js|mdx)$/),
    require.context('../docs/styles', true, /\.stories\.(js|mdx)$/),
    require.context('../docs/dictionary', true, /\.stories\.(js|mdx)$/),
  ],
  module
);

