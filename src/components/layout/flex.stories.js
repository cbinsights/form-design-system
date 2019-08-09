import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import Flex from './Flex';
import FlexItem from './FlexItem';
import README from './Flex.md';

storiesOf('Layout/Flex', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Flex
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
          <img src="https://place-hold.it/48x24/a02385/fff&text=item1" />
        </FlexItem>
        <FlexItem>
          <img src="https://place-hold.it/48x24/a02385/fff&text=item2" />
        </FlexItem>
        <FlexItem>
          <img src="https://place-hold.it/48x24/a02385/fff&text=item3" />
        </FlexItem>
      </Flex>
    ),
    { notes: { markdown: README } }
  );
