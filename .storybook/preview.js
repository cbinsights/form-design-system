import React from 'react';
import FDS from 'lib/dictionary/js/styleConstants';
import Layout from 'util/storybook-docs/Layout';

import '../src/components/style/index.css';

export const parameters = {
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  docs: {
    page: () => (
      <Layout />
    ),
  },
  backgrounds: {
    default: 'White',
    values: [
      { name: 'White', value: FDS.COLOR_WHITE },
      { name: 'Haze', value: FDS.COLOR_HAZE },
      { name: 'Navy', value: FDS.COLOR_NAVY },
      { name: 'Hot Pink', value: '#F09' },
    ],
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Intro',
        'UI Guidelines',
        'Design Tokens',
        'Icons',
        'Style Utilities',
        'Components',
      ],
      locales: '',
    },
  },
};
