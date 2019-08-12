import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MenuButton from './MenuButton';
import README from './MenuButton.md';

storiesOf('Interactive/MenuButton', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <MenuButton
        iconComponent={text('iconComponent', '🔥')}
        label={text('label', 'Lorem Ipsum')}
        active={boolean('active', false)}
        className={text('className', '')}
        disabled={boolean('disabled', false)}
        labelClassName={text('labelClassName', '')}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <MenuButton
        iconComponent={<span className="typemod--xlarge">🔥</span>}
        label="Set on fire"
        onClick={() => {
          action('clicked');
        }}
      />
      <MenuButton
        iconComponent={<span className="typemod--xlarge">🍕</span>}
        label="Long pizza button label"
      />
      <MenuButton
        iconComponent={<span className="typemod--xlarge">📞</span>}
        label="Call"
        disabled
      />
      <MenuButton
        iconComponent={<span className="typemod--xlarge">✏️</span>}
        label="Edit Mode"
        active
      />
    </React.Fragment>
  ));
