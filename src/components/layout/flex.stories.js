import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import Flex from './Flex';
import FlexItem from './FlexItem';
import README from './Flex.md';

const parentStyle = {
  width: '600px',
  background: 'var(--color-haze)',
};

storiesOf('Layout/Flex', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div style={parentStyle}>
        <Flex
          className="debug--boxModel"
          direction={radios(
            'direction',
            {
              row: 'row',
              column: 'column',
            },
            'row'
          )}
          justify={radios('justify', {
            end: 'end',
            center: 'center',
            spaceBetween: 'spaceBetween',
            spaceAround: 'spaceAround',
          })}
          align={radios('align', {
            start: 'start',
            end: 'end',
            center: 'center',
            stretch: 'stretch',
          })}
          noGutters={boolean('noGutters', false)}
          reverse={boolean('reverse', false)}
        >
          <FlexItem shrink>
            <img src="https://place-hold.it/40x40/a02385/fff&text=:)" />
          </FlexItem>
          <FlexItem shrink>
            <h4>Look at this media block</h4>
          </FlexItem>
          <FlexItem shrink>
            <p className="color--link">edit</p>
          </FlexItem>
        </Flex>
      </div>
    ),
    { notes: { markdown: README } }
  );
