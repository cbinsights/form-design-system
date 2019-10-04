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
        onDismiss={() => {
          // eslint-disable-next-line no-console
          console.log('close modal');
        }}
        isOpen={boolean('isOpen', true)}
        footerContent={text('footerContent', '')}
        content={text('content', 'Modal content here')}
        canDismiss={boolean('canDismiss', true)}
        title={text('title', 'Modal title here')}
      />
    ),
    { notes: { markdown: README } }
  );
