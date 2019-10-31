import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Tooltip from './Tooltip';

storiesOf('Popovers/Tooltip', module)
  .addDecorator(withKnobs)
  .add('Knobs', () => (
    <Tooltip
      trigger={<p>ℹ️ hover over this text for some helpful information</p>}
      message={text('Message', 'lol, you are very bad at hovering!')}
      maxWidth={number('max width', 240)}
    />
  ));
