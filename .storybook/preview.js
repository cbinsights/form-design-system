import React from 'react';
import FDS from 'dictionary/js/styleConstants';
import Layout from 'util/storybook-docs/Layout';

import 'components/style/index.css';

export const parameters = {
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  docs: {
    page: () => <Layout />,
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
    showRoots: true,
    storySort: (a, b) => {
      const alphabeticalSort = () => {
        if (a[1].id.split('--')[1] === 'primary') {
          return -1;
        }
        if (b[1].id.split('--')[1] === 'primary') {
          return 1;
        }
        return a[1].kind === b[1].kind
          ? 0
          : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
      };

      const sectionSortOrder = [
        'Intro',
        'UI Guidelines',
        'Design Tokens',
        'Icons',
        'Style Utilities',
        'Components',
        'Examples',
        'Hooks',
      ].reduce((ordering, section, i) => {
        ordering[section] = i;
        return ordering;
      }, {});

      const sectionSort = () => {
        return sectionSortOrder[first] - sectionSortOrder[second];
      };

      const first = a[1].kind.split('/')[0];
      const second = b[1].kind.split('/')[0];
      if (first === second) return alphabeticalSort();
      return sectionSort();
    },
  },
};
