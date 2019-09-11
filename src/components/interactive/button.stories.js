import React from 'react';

import { storiesOf } from '@storybook/react';
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
        <Button theme="contained--red">Button</Button>
      </div>
      <div className="margin--right--half">
        <Button theme="contained--red" href="#">
          Button
        </Button>
      </div>

      <div className="margin--right--half">
        <Button theme="contained--red" isLoading>
          Button
        </Button>
      </div>
    </div>
  ));
