import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import CountdownButton from './CountdownButton';
import README from './CountdownButton.md';

storiesOf('Interactive/CountdownButton', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <CountdownButton
        duration={number('duration', 4000)}
        icon={text('icon', undefined)}
        onClick={action('clicked')}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <CountdownButton duration={8000} onClick={action('clicked')} />
  ));
