import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Chip from './Chip';

storiesOf('Chip', module)
  .add('small', () => (
    <div>
      <Chip label="Lorem" onClick={action('clicked')} size="sm" />
      <Chip label="Lorem" onClick={action('clicked')} size="sm" />
    </div>
  ))
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

// import React from 'react'
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import Chip from './Chip'

// storiesOf('Welcome', module).add('to Storybook', () => <p>hey</p>);

// storiesOf('Chip', module).add('small', () => (
//       <Chip label="Lorem" size="sm" />
//   )).add('medium', () => (
//       <Chip label="Lorem" />
//   ));
