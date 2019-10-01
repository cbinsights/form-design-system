import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dialog from '.';

storiesOf('Interactive/Dialog', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Dialog
      isOpen={boolean('isOpen', true)}
      footerContent={text('footerContent', '')}
      content={text('content', 'Modal content here')}
      canDismiss={boolean('canDismiss', true)}
      title={text('title', 'Modal title here')}
    />
  ));
