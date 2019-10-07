import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, optionsKnob as options } from '@storybook/addon-knobs';

import Chip from './Chip';
import InlineBlockList from '../layout/InlineBlockList';
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
        size={options(
          'size',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg',
          },
          'sm',
          { display: 'inline-radio' }
        )}
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
      <InlineBlockList
        items={chipsTwo.map((chip) => (
          <Chip {...chip} key={chip.label} theme="outline" />
        ))}
      />
      <br />
      <InlineBlockList
        items={chips.map((chip) => (
          <Chip {...chip} key={chip.label} size="sm" />
        ))}
      />
      <br />
      <InlineBlockList
        items={chips.map((chip) => (
          <Chip {...chip} key={chip.label} theme="blue" size="sm" />
        ))}
      />
      <br />
      <InlineBlockList
        items={chips.map((chip) => (
          <Chip {...chip} key={chip.label} />
        ))}
      />
      <br />
      <InlineBlockList
        items={chips.map((chip) => (
          <Chip {...chip} key={chip.label} theme="blue" />
        ))}
      />
    </React.Fragment>
  ));
