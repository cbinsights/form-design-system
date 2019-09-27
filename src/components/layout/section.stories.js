import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { arrayToOptions, storyBackgrounds } from '../util/storybook';

import Section, { VALID_BG_NORMAL, VALID_BG_INVERTED, VALID_PADDING } from './Section';
import README from './Flex.md';

const ALL_BACKGROUNDS = [...VALID_BG_NORMAL, ...VALID_BG_INVERTED];

const parentStyle = {
  background: storyBackgrounds.diagonalLine,
  height: '100vh',
  width: '100vw',
};

storiesOf('Layout/Section', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div className="alignChild--center--center" style={parentStyle}>
        <Section
          hPadding={select(
            'Horizontal padding',
            arrayToOptions(VALID_PADDING),
            'default'
          )}
          vPadding={select('Vertical padding', arrayToOptions(VALID_PADDING), 'default')}
          bgColor={select('Background color', arrayToOptions(ALL_BACKGROUNDS), 'white')}
          border={select(
            'Border',
            arrayToOptions(['top', 'right', 'bottom', 'left', 'h', 'v', 'all'])
          )}
        >
          <h1 className="type--head3 margin--bottom">Look at me</h1>
          <p>I am the section content</p>
        </Section>
      </div>
    ),
    { notes: { markdown: README } }
  );
