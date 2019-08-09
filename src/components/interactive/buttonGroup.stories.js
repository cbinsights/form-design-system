import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';

import ButtonGroup from './ButtonGroup';
import FeedIcon from '../../../lib/icons/react/FeedIcon';

const buttons = [
  { label: 'Lorem', Icon: FeedIcon, isActive: true },
  { label: 'Ipsum', Icon: FeedIcon, disabled: true },
  { label: 'Dolor', Icon: FeedIcon },
  { label: 'Sit', Icon: FeedIcon },
];

storiesOf('ButtonGroup', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => <ButtonGroup buttons={object('buttons', buttons)} />);
