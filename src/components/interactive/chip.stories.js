import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Chip from './Chip';
import '../style/index.css';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('knobs', () => (
    <Chip
      isActive={boolean('isActive', false)}
      label={text('label', 'Hello World')}
      subtitle={text('subtitle', '')}
      hasClose={boolean('hasClose', false)}
      onClick={action('clicked')}
      size="sm"
      theme={options(
        'theme',
        {
          gray: 'gray',
          blue: 'blue',
          outline: 'outline',
        },
        'gray',
        { display: 'inline-radio' }
      )}
    />
  ))
  .add('medium', () => (
    <div>
      <Chip label="Lorem" onClick={action('clicked')} />
      <Chip label="Lorem" onClick={action('clicked')} />
    </div>
  ));
