import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import ApproveIcon from '../../../lib/icons/react/ApproveIcon';
import { arrayToOptions } from '../util/storybook';

import FloatingAction, { VALID_FAB_THEMES } from './FloatingAction';
import README from './FloatingAction.md';

storiesOf('Interactive/FloatingAction', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <FloatingAction
        disabled={boolean('disabled', false)}
        isLoading={boolean('isLoading', false)}
        theme={options('theme', arrayToOptions(VALID_FAB_THEMES), undefined, {
          display: 'inline-radio',
        })}
        Icon={ApproveIcon}
        label="Add Column"
      />
    ),
    { notes: { markdown: README } }
  );
