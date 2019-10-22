import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

/* :TODO: README */
import Popover from './Popover';
import Button from '../interactive/Button';

storiesOf('Popovers/Popover', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Popover
        trigger={<Button>Click Me</Button>}
        content={
          <div className="bgColor--white elevation--2 rounded--all padding--all">
            <h3 className="type--head3">look at me</h3>
            <p>
              <em>i am the popover</em>
            </p>
          </div>
        }
      />
    ),
    { notes: 'TK' }
  );
