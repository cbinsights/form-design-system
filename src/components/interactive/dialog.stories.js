import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dialog from './Dialog';
import Button from './Button';

storiesOf('Interactive/Dialog', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Dialog
      isOpen={boolean('isOpen', true)}
      footerContent={
        <div>
          <div className="margin--right display--inlineBlock">
            <Button theme="ghost">Keep Collection</Button>
          </div>
          <Button isDestructive>Yes, delete</Button>
        </div>
      }
      content={text('content', 'This change will be permanent and cannot be undone.')}
      canDismiss={boolean('canDismiss', false)}
      title={text('title', 'Are you sure you want to delete this collection?')}
    />
  ));
