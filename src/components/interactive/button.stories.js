import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';

import Button from './Button';

storiesOf('Interactive/Button', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => {
    return (
      <Button
        Icon={boolean('Show Sample Icon?', false) && StarFilledIcon}
        iconPlacement={options(
          'iconPlacement',
          {
            left: 'left',
            right: 'right',
          },
          'left',
          { display: 'inline-radio' }
        )}
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
    );
  });
