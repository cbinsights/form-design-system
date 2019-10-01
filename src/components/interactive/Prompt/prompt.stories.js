import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

import Dialog from '.';

storiesOf('Interactive/Prompt', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Dialog
      isOpen={boolean('isOpen', true)}
      content={text('content', 'This change will be permanent and cannot be undone.')}
      title={text('title', 'Are you sure you want to delete this collection?')}
      primaryButton={object('primaryButton', {
        isDestructive: true,
        children: 'Yes, delete',
      })}
      secondaryButton={object('secondaryButton', {
        theme: 'ghost',
        children: 'Keep Collection',
      })}
    />
  ));
