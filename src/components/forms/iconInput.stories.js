import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Flex from '../layout/Flex';
import FlexItem from '../layout/FlexItem';
import SearchIcon from '../../../lib/icons/react/SearchIcon';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';

import IconInput from './IconInput';

/* eslint-disable react/prop-types */
const KnobsStoryComponent = ({ hasLeftIcon, hasRightIcon, placeholder }) => (
  <React.Fragment>
    <label htmlFor="storyInput">my god, it&apos;s full of stars!</label>
    <IconInput
      IconLeft={hasLeftIcon ? StarFilledIcon : undefined}
      IconRight={hasRightIcon ? StarFilledIcon : undefined}
    >
      <input type="text" placeholder={placeholder} />
    </IconInput>
  </React.Fragment>
);
/* eslint-enable react/prop-types */

storiesOf('Forms/IconInput', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <KnobsStoryComponent
        hasLeftIcon={boolean('Left star', true)}
        hasRightIcon={boolean('Right star', true)}
        placeholder={text('Placeholder text', '')}
      />
    ),
    { notes: { markdown: 'See Docs tab for more information' } }
  )
  .add('Variations', () => (
    <Flex direction="column">
      <FlexItem>
        <IconInput IconLeft={SearchIcon}>
          <input type="search" placeholder="Search" />
        </IconInput>
      </FlexItem>
      <FlexItem>
        <IconInput IconLeft={SearchIcon} IconRight={StarFilledIcon}>
          <input type="search" placeholder="Search" />
        </IconInput>
      </FlexItem>
      <FlexItem>
        <IconInput IconRight={StarFilledIcon}>
          <input type="search" placeholder="Search" />
        </IconInput>
      </FlexItem>
    </Flex>
  ));
