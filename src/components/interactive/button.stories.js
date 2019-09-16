import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CaretDownIcon from '../../../lib/icons/react/CaretDownIcon';

import Button from './Button';
import README from './Button.md';

storiesOf('Interactive/Button', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => {
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
          disabled={boolean('disabled', false)}
          isLoading={boolean('isLoading', false)}
          isDestructive={boolean('isDestructive', false)}
          Icon={iconOptions && StarFilledIcon}
          iconPlacement={iconOptions}
          block={boolean('block', false)}
          theme={options(
            'theme',
            {
              contained: 'contained',
              outlined: 'outlined',
              ghost: 'ghost',
            },
            'contained',
            { display: 'inline-radio' }
          )}
        >
          {text('Text', 'Button')}
        </Button>
      );
    },
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained">Button</Button>
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained" isDestructive href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--botton--half">
          <Button theme="contained" Icon={CaretDownIcon}>
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="outlined" href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="ghost" href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="outlined" isDestructive href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="ghost" isDestructive href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained" disabled>
            Disabled
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained" disabled href="#">
            Disabled Link
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained" isLoading>
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="contained" isLoading>
            Really long text!
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="outlined" isLoading>
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="outlined" isLoading isDestructive>
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="ghost" isLoading isDestructive>
            Button
          </Button>
        </div>

        <div
          className="margin--right--half margin--bottom--half"
          style={{ width: '100px' }}
        >
          <Button theme="contained" isLoading>
            Text that wraps!
          </Button>
        </div>

        <div
          className="margin--right--half margin--bottom--half"
          style={{ width: '100px' }}
        >
          <Button theme="contained">Text that wraps!</Button>
        </div>

        <div
          className="margin--right--half margin--bottom--half"
          style={{ width: '100px' }}
        >
          <Button theme="outlined">Text that wraps!</Button>
        </div>
      </div>
    </React.Fragment>
  ));
