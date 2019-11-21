import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import DecoratedInput from './DecoratedInput';
import README from './DecoratedInput.md';

storiesOf('Forms/DecoratedInput', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <React.Fragment>
        <p className="margin--bottom type--data color--purple fontStyle--italic">
          Use the knobs panel to add left and right labels
        </p>
        <label htmlFor="horseName">Name your horse</label>
        <DecoratedInput
          before={text('before', undefined)}
          after={text('after', undefined)}
        >
          <input id="horseName" type="text" />
        </DecoratedInput>
      </React.Fragment>
    ),
    { notes: { markdown: README } }
  )
  .add(
    'Variations',
    () => (
      <Flex direction="column">
        <FlexItem>
          <DecoratedInput key="both" before="£" after="GBP">
            <input type="number" placeholder="Price of lorry" step="0.01" min="0.01" />
          </DecoratedInput>
        </FlexItem>
        <FlexItem>
          <DecoratedInput key="first" before="£">
            <input type="number" placeholder="Price of lorry" step="0.01" min="0.01" />
          </DecoratedInput>
        </FlexItem>
        <FlexItem>
          <DecoratedInput key="last" after="GBP">
            <input type="number" placeholder="Price of lorry" step="0.01" min="0.01" />
          </DecoratedInput>
        </FlexItem>
      </Flex>
    ),
    { notes: { markdown: README } }
  );
