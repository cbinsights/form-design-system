import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dialog from './Dialog';
import README from './Dialog.md';

storiesOf('Modals/Dialog', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Dialog
        isOpen={boolean('isOpen', true)}
        footerContent={text('footerContent', '')}
        content={text('content', 'Modal content here')}
        // eslint-disable-next-line no-console
        onDismiss={
          boolean('onDismiss', true)
            ? () => {
                console.log('close modal');
              }
            : undefined
        }
        title={text('title', 'Modal title here')}
      />
    ),
    { notes: { markdown: README } }
  );
