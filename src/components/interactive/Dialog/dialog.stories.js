import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Dialog from './';
import Button from '../Button';

storiesOf('Interactive/Dialog', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Dialog
      isOpen={boolean('isOpen', true)}
      footerContent={text('footerContent', 'footer content here')}
      content={text('content', 'Modal content here')}
      canDismiss={boolean('canDismiss', false)}
      title={text('title', 'Modal title here')}
    />
  ));
