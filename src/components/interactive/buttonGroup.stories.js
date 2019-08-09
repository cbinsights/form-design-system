import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import ButtonGroup from './ButtonGroup';
import FeedIcon from '../../../lib/icons/react/FeedIcon';
import README from './ButtonGroup.md';

const buttons = [
  { label: 'Lorem', Icon: FeedIcon, isActive: true },
  { label: 'Ipsum', Icon: FeedIcon, disabled: true },
  { label: 'Dolor', Icon: FeedIcon },
  { label: 'Sit', Icon: FeedIcon },
];

const buttonsNoIcons = [
  { label: 'Lorem', disabled: true },
  { label: 'Ipsum' },
  { label: 'Dolor', isActive: true },
  { label: 'Sit' },
];

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => <ButtonGroup buttons={object('buttons', buttons)} />, {
    notes: { markdown: README },
  })
  .add('Variations', () => (
    <div>
      <ButtonGroup buttons={buttons} />
      <br /> <br />
      <ButtonGroup buttons={buttonsNoIcons} />
    </div>
  ));
