import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import { arrayToOptions } from '../util/storybook';

import Chip from './Chip';
import README from './Chip.md';

const chips = [
  { label: 'Lorem', href: '#lorem' },
  { label: 'Ipsum', href: '#ipsum', isActive: true, subtitle: 'active' },
  { label: 'Dolor', href: '#dolor', onClose: () => {} },
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
        onClose={action('close')}
        onClick={action('clicked')}
        size={options('size', arrayToOptions(['s', 'm', 'l']), 's', {
          display: 'inline-radio',
        })}
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
          <Chip {...chip} key={chip.label} theme="outline" />
        ))}
      </div>
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} size="s" />
      ))}
      <br />
      {chips.map((chip) => (
        <Chip {...chip} key={chip.label} theme="blue" size="s" />
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
