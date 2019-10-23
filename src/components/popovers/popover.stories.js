import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
import { arrayToOptions } from '../util/storybook';

import Popover, {
  VALID_ALIGNMENTS,
  VALID_POSITIONS,
  VALID_INTERACTION_MODES,
} from './Popover';
import Button from '../interactive/Button';
import README from './Popover.md';

storiesOf('Popovers/Popover', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Popover
        trigger={<Button>Click Me</Button>}
        position={select('Position', arrayToOptions(VALID_POSITIONS), 'bottom')}
        alignment={select('Alignment', arrayToOptions(VALID_ALIGNMENTS, 'start'))}
        distance={number('Distance', 4)}
        interactionMode={select(
          'Interaction mode',
          arrayToOptions(VALID_INTERACTION_MODES),
          'click'
        )}
        isOpen={boolean('isOpen (only works in controlled mode)', false)}
      >
        <div className="padding--all" style={{ outline: '3px dotted red' }}>
          popover content
        </div>
      </Popover>
    ),
    { notes: { markdown: README } }
  )
  .add(
    'Styled popover content',
    () => (
      <Popover
        trigger={<Button theme="outlined">Open popover</Button>}
        position="bottom"
        alignment="start"
        distance={8}
      >
        <div className="bgColor--white rounded--all elevation--2 padding--all">
          <h3 className="type--head3">Look at me</h3>
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    ),
    { notes: 'Inspect the popover content to see the FDS classes used' }
  );
