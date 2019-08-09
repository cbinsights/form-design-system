import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import CheckIcon from '../../../lib/icons/react/CheckIcon';

import Updatable from './Updatable';
import README from './Updatable.md';

storiesOf('Media/Updatable', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Updatable message={text('message', 42)}>
        <button>lorem ipsum</button>
      </Updatable>
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <Updatable message="alert">
        <div
          style={{
            border: '1px dashed #f09',
            padding: '5px',
          }}
        >
          Updatable can wrap <b>anything</b>!
        </div>
      </Updatable>
      <br />
      <br />
      <Updatable message={<CheckIcon size="xs" color="#fff" />}>
        <img src="https://placeimg.com/80/81/animals" />
      </Updatable>
    </React.Fragment>
  ));
