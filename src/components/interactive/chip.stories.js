import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Chip from './Chip';
import '../style/index.css';

const chips = [
  { label: 'Lorem', href: '#lorem' },
  { label: 'Ipsum', href: '#ipsum', isActive: true, subtitle: 'active' },
  { label: 'Dolor', href: '#dolor', hasClose: true },
  { label: 'Sit', onClick: () => console.log('custom logic here'), isActive: false },
];

const chipsTwo = [
  { label: 'Lorem Ipsum' },
  { label: 'Dolor Sit' },
  { label: 'Sit Amet' },
  { label: 'Consectetur', onClick: () => console.log('custom logic here') },
];

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('knobs', () => (
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
  ))
  .add('spread', () => (
    <div>
      {chipsTwo.map((chip) => (
        <Chip {...chip} key={chip.label} theme="outline" hasClose={true} />
      ))}
      <br />
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
    </div>
  ));
