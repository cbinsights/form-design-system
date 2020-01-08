import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

import '../src/components/style/index.css';

addDecorator(withA11y)

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
  }
});


configure(
  [
    require.context('../src/components', true, /\.docs\.stories\.(js|mdx)$/),
    require.context('../src/components', true, /\.stories\.(js|mdx)$/),
  ],
  module
);
