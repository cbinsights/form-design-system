import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CaretDownIcon from '../../../lib/icons/react/CaretDownIcon';
import { arrayToOptions } from '../util/storybook';

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
          none: null,
        },
        undefined,
        { display: 'inline-radio' }
      );

      return (
        <div
          className={boolean('Toggle Background', false) ? 'padding--all inverted' : ''}
          style={
            boolean('Toggle Background', false) ? { background: 'var(--color-navy)' } : {}
          }
        >
          <Button
            disabled={boolean('disabled', false)}
            isLoading={boolean('isLoading', false)}
            isDestructive={boolean('isDestructive', false)}
            Icon={iconOptions ? StarFilledIcon : undefined}
            iconPlacement={iconOptions}
            isFullWidth={boolean('isFullWidth', false)}
            size={options('size', arrayToOptions(['s', 'm']), undefined, {
              display: 'inline-radio',
            })}
            theme={options(
              'theme',
              arrayToOptions(['blue', 'outlined', 'ghost']),
              undefined,
              { display: 'inline-radio' }
            )}
          >
            {text('Text', 'Button')}
          </Button>
        </div>
      );
    },
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <Button size="s">Button</Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button>Button</Button>
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Button isDestructive href="#">
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--botton--half">
          <Button theme="blue" Icon={CaretDownIcon}>
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
          <Button theme="blue" disabled>
            Disabled
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="blue" disabled href="#">
            Disabled Link
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="blue" isLoading>
            Button
          </Button>
        </div>

        <div className="margin--right--half margin--bottom--half">
          <Button theme="blue" isLoading>
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
          <Button theme="blue" isLoading>
            Text that wraps!
          </Button>
        </div>

        <div
          className="margin--right--half margin--bottom--half"
          style={{ width: '100px' }}
        >
          <Button theme="blue">Text that wraps!</Button>
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
