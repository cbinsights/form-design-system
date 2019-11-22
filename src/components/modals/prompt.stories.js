import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import Button from '../interactive/Button';

import Prompt from './Prompt';
import README from './Prompt.md';

const primaryButtonProps = () =>
  object('primaryButton', {
    isDestructive: true,
    children: 'Yes, delete',
  });

const secondaryButtonProps = () =>
  object('secondaryButton', {
    theme: 'ghost',
    children: 'Keep Collection',
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('close modal');
    },
  });

storiesOf('Modals/Prompt', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Prompt
        isOpen={boolean('isOpen', true)}
        desc={text('content', 'This change will be permanent and cannot be undone.')}
        title={text('title', 'Are you sure you want to delete this collection?')}
        primaryButton={<Button {...primaryButtonProps()} />}
        secondaryButton={<Button {...secondaryButtonProps()} />}
      />
    ),
    {
      notes: { markdown: README },
      docs: { disable: true },
    }
  );
