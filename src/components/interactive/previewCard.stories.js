import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';

import PreviewCard from './PreviewCard';
import README from './PreviewCard.md';

storiesOf('Interactive/PreviewCard', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <PreviewCard
        href="#"
        hoverText={text('hoverText', 'View More')}
        footerLabel={text('footerLabel', 'Description')}
        footerLeftInfo={text('footerLeftInfo', '10/4/2021')}
        footerRightInfo={text('footerRightInfo', '1-20')}
        coverContent={text('coverContent', '')}
        coverTheme={options(
          'coverTheme',
          {
            purple: 'purple',
            darkPurple: 'darkPurple',
            aqua: 'aqua',
            pink: 'pink',
            none: '',
          },
          'purple',
          { display: 'inline-radio' }
        )}
      />
    ),
    { notes: { markdown: README } }
  );
