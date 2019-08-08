import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import Chip from './Chip';
import '../style/index.css';

storiesOf('Chip', module)
  .add('small', () => (
    <div>
      <Chip label="Lorem" onClick={action('clicked')} size="sm" />
      <Chip label="Lorem" onClick={action('clicked')} size="sm" />
    </div>
  ))
  .add('medium', () => (
    <div>
      <Chip label="Lorem" onClick={action('clicked')} />
      <Chip label="Lorem" onClick={action('clicked')} />
    </div>
  ));

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));
