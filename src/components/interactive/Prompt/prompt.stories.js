import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
  optionsKnob as options,
} from '@storybook/addon-knobs';

import Prompt from '.';

storiesOf('Modals/Prompt', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Prompt
      onDismiss={() => {
        // eslint-disable-next-line no-console
        console.log('close modal');
      }}
      isOpen={boolean('isOpen', true)}
      content={text('content', 'This change will be permanent and cannot be undone.')}
      title={text('title', 'Are you sure you want to delete this collection?')}
      primaryButton={object('primaryButton', {
        isDestructive: true,
        children: 'Yes, delete',
      })}
      buttonPosition={options(
        'buttonPosition',
        {
          content: 'content',
          footer: 'footer',
          none: undefined,
        },
        undefined,
        { display: 'inline-radio' }
      )}
      secondaryButton={object('secondaryButton', {
        theme: 'ghost',
        children: 'Keep Collection',
      })}
    />
  ));
