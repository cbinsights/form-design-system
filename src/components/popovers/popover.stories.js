import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  optionsKnob as options,
  select,
  number,
  boolean,
} from '@storybook/addon-knobs';
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
        position={options('Position', arrayToOptions(VALID_POSITIONS), 'bottom', {
          display: 'inline-radio',
        })}
        alignment={options('Alignment', arrayToOptions(VALID_ALIGNMENTS), 'start', {
          display: 'inline-radio',
        })}
        distance={number('Distance', 4)}
        interactionMode={options(
          'Interaction mode',
          arrayToOptions(VALID_INTERACTION_MODES),
          'click',
          { display: 'inline-radio' }
        )}
        isOpen={boolean('isOpen (only works in controlled mode)', false)}
        disablePortal={boolean('Disable portal', false)}
        transitionName={select('Transition name', arrayToOptions(['GrowFast', '']), '')}
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
