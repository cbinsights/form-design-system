import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
import { arrayToOptions } from '../util/storybook';

/* :TODO: README */
import Popover, {
  VALID_ALIGNMENTS,
  VALID_POSITIONS,
  VALID_INTERACTION_MODES,
} from './Popover';
import Button from '../interactive/Button';

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
        isOpen={boolean('isActive (only works in controlled mode)', false)}
      >
        <div className="bgColor--white rounded--all elevation--2 padding--all">
          <p>
            <em>i am the popover</em>
          </p>
        </div>
      </Popover>
    ),
    { notes: 'TK' }
  );
