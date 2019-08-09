import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  number,
  optionsKnob as options,
  object,
  text,
} from '@storybook/addon-knobs';

import AvatarRow from './AvatarRow';
import README from './AvatarRow.md';

storiesOf('Media/AvatarRow', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <AvatarRow
        max={number('max', 3)}
        size={options(
          'size',
          {
            s: 's',
            m: 'm',
            l: 'l',
            xl: 'xl',
          },
          'm',
          { display: 'inline-radio' }
        )}
        borderColor={text('borderColor', undefined)}
        className={text('className', '')}
        memberList={object('memberList', [
          { name: 'member mcmemberton', src: 'https://placeimg.com/80/81/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/81/80/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/82/80/animals' },
          { name: 'member mcmemberton' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/83/80/animals' },
        ])}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <AvatarRow
        memberList={[
          { name: 'member mcmemberton', src: 'https://placeimg.com/80/81/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/81/80/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/82/80/animals' },
          { name: 'member mcmemberton' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/83/80/animals' },
        ]}
        size="s"
      />
      <AvatarRow
        memberList={[
          { name: 'member mcmemberton', src: 'https://placeimg.com/80/81/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/81/80/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/82/80/animals' },
          { name: 'member mcmemberton' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/83/80/animals' },
        ]}
        max={6}
      />
      <AvatarRow
        memberList={[
          { name: 'member mcmemberton', src: 'https://placeimg.com/80/81/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/81/80/animals' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/82/80/animals' },
          { name: 'member mcmemberton' },
          { name: 'member mcmemberton', src: 'https://placeimg.com/83/80/animals' },
        ]}
        size="l"
        max={2}
      />
    </React.Fragment>
  ));
