import React from 'react';
import FDS from 'lib/dictionary/js/styleConstants';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import ImportPath from 'util/storybook-docs/ImportPath';
import Badges from 'util/storybook-docs/Badges';

import '../src/components/style/index.css';

export const parameters = {
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  docs: {
    page: () => (
      <>
        <Title />
        <ImportPath />
        <Subtitle />
        <Description />
        <Primary />
        <Badges />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
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
