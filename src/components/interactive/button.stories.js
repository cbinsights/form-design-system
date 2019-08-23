import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Interactive/Button', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Button
      theme={options(
        'theme',
        {
          blue: 'primary--blue',
          red: 'primary--red',
          orange: 'primary--orange',
        },
        'primary--blue',
        { display: 'inline-radio' }
      )}
    />
  ));
