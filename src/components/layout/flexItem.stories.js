import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import Flex from './Flex';
import FlexItem from './FlexItem';
import README from './FlexItem.md';

const parentStyle = {
  width: '600px',
  background: 'var(--color-haze)',
};

const getAlignKnob = (label) =>
  select(`\`align\` "${label}" item`, {
    start: 'start',
    end: 'end',
    center: 'center',
  });

storiesOf('Layout/FlexItem', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div style={parentStyle}>
        <Flex className="debug--boxModel">
          <FlexItem
            shrink={boolean('add `shrink` prop to "image" item', false)}
          >
            <img src="https://place-hold.it/40x40/a02385/fff&text=IMG" />
          </FlexItem>
          <FlexItem
            shrink={boolean('add `shrink` prop to "Dogs" item', false)}
            align={getAlignKnob('Dogs')}
          >
            <p>Dogs</p>
          </FlexItem>
          <FlexItem
            shrink={boolean('add `shrink` prop to "Cats" item', false)}
            align={getAlignKnob('Cats')}
          >
            <p>Cats</p>
          </FlexItem>
        </Flex>
      </div>
    ),
    { notes: { markdown: README } }
  );
