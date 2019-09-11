import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CaretDownIcon from '../../../lib/icons/react/CaretDownIcon';

import Button from './Button';

storiesOf('Interactive/Button', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => {
    const iconOptions = options(
      'Show sample icon?',
      {
        left: 'left',
        right: 'right',
        none: '',
      },
      '',
      { display: 'inline-radio' }
    );

    return (
      <Button
        isLoading={boolean('isLoading', false)}
        Icon={iconOptions && StarFilledIcon}
        iconPlacement={iconOptions}
        theme={options(
          'theme',
          {
            'contained--blue': 'contained--blue',
            'contained--red': 'contained--red',
          },
          'contained--blue',
          { display: 'inline-radio' }
        )}
      >
        {text('Text', 'Button')}
      </Button>
    );
  })
  .add('Variations', () => (
    <div className="display--inlineFlex">
      <div className="margin--right--half">
        <Button theme="contained--blue">Button</Button>
      </div>
      <div className="margin--right--half">
        <Button theme="contained--red" href="#">
          Button
        </Button>
      </div>

      <div className="margin--right--half">
        <Button theme="contained--blue" isLoading>
          Button
        </Button>
      </div>

      <div className="margin--right--half">
        <Button theme="contained--blue" Icon={CaretDownIcon}>
          Button
        </Button>
      </div>
    </div>
  ));
