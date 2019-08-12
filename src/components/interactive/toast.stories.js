import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  number,
  withKnobs,
  text,
  boolean,
  optionsKnob as options,
} from '@storybook/addon-knobs';

import Toast from './Toast';
import README from './Toast.md';

storiesOf('Interactive/Toast', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Toast
        content={text(
          'label',
          <p>
            Check out this <strong className="typemod--dark">toast</strong>
          </p>
        )}
        actionLabel={text('actionLabel', 'Action')}
        onAction={action('action button clicked')}
        onDismiss={action('Toast dismissed')}
        canDismiss={boolean('canDismiss', true)}
        dismissDelay={number('dismissDelay', 4000)}
        isAutoDismiss={boolean('isAutoDismiss', true)}
        progress={number('progress', 42, {
          range: true,
          min: 1,
          max: 100,
          step: 1,
        })}
        type={options(
          'type',
          {
            info: 'info',
            error: 'error',
            success: 'success',
            warn: 'warn',
            progress: 'progress',
          },
          'info',
          { display: 'inline-radio' }
        )}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <Toast
        content={
          <p>
            Check out this <strong className="typemod--dark">toast</strong>
          </p>
        }
        actionLabel="Action"
        onAction={() => {}}
        type="info"
      />
      <br />
      <Toast
        content={
          <p>
            You better <strong className="typemod--dark">watch out</strong>
          </p>
        }
        actionLabel="run away"
        onAction={() => {}}
        type="warn"
      />
      <br />
      <Toast
        content={
          <p>
            You <strong className="typemod--dark">Did it!</strong>
          </p>
        }
        type="success"
      />
      <br />
      <Toast
        content={
          <p>
            Failed to <strong className="typemod--dark">do a thing</strong>
          </p>
        }
        actionLabel="Retry"
        onAction={() => {}}
        type="error"
      />
      <br />
      <Toast
        content={
          <p>
            Uploading a photo of your <strong className="typemod--dark">your cat</strong>
          </p>
        }
        type="progress"
      />
      <br />
      <Toast
        content={
          <p>
            <strong className="typemod--dark">42%</strong> complete uploading your cat
            photo
          </p>
        }
        progress={42}
        type="progress"
      />
    </React.Fragment>
  ));
