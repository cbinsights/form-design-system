import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import Section, { VALID_BG_NORMAL, VALID_BG_INVERTED, VALID_PADDING } from './Section';
import README from './Flex.md';

const ALL_BACKGROUNDS = [...VALID_BG_NORMAL, ...VALID_BG_INVERTED];

// transform list of values into radio options
const toOptions = (values) =>
  values.reduce((o, value) => {
    o[value] = value;
    return o;
  }, {});

const parentStyle = {
  background: 'var(--color-timberwolf)',
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
          hPadding={radios('Horizontal padding', toOptions(VALID_PADDING))}
          vPadding={radios('Vertical padding', toOptions(VALID_PADDING))}
          bgColor={radios('Background color', toOptions(ALL_BACKGROUNDS))}
          border={radios(
            'Border',
            toOptions(['top', 'right', 'bottom', 'left', 'h', 'v', 'all'])
          )}
          elevation={radios('Elevation (shadow)', toOptions([1, 2, 3, 4, 5]))}
        >
          <h1 class="type--head3 margin--bottom">Look at me</h1>
          <p>I am the section content</p>
        </Section>
      </div>
    ),
    { notes: { markdown: README } }
  );
