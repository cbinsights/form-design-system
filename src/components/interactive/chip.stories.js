import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Chip from './Chip';
import README from './Chip.md';

const chips = [
  { label: 'Lorem', href: '#lorem' },
  { label: 'Ipsum', href: '#ipsum', isActive: true, subtitle: 'active' },
  { label: 'Dolor', href: '#dolor', hasClose: true },
  { label: 'Sit', onClick: () => action('custom chip clicked'), isActive: false },
];

const chipsTwo = [
  { label: 'Lorem Ipsum' },
  { label: 'Dolor Sit' },
  { label: 'Sit Amet' },
  { label: 'Consectetur', onClick: () => action('custom chip clicked') },
];

storiesOf('Interactive/Chip', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Chip
        isActive={boolean('isActive', false)}
        label={text('label', 'Hello World')}
        subtitle={text('subtitle', '')}
        hasClose={boolean('hasClose', false)}
        onClick={action('clicked')}
        size="sm"
        theme={options(
          'theme',
          {
            gray: 'gray',
            blue: 'blue',
            outline: 'outline',
          },
          'gray',
          { display: 'inline-radio' }
        )}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div>
        {chipsTwo.map((chip) => (
          <Chip {...chip} key={chip.label} theme="outline" hasClose={true} />
        ))}
      </div>
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} size="sm" />
      ))}
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} theme="blue" size="sm" />
      ))}
      <br />
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} />
      ))}
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} theme="blue" />
      ))}
    </React.Fragment>
  ));
