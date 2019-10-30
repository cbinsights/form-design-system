import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CaretDownIcon from '../../../lib/icons/react/CaretDownIcon';
import CollectionPublicIcon from '../../../lib/icons/react/CollectionPublicIcon';
import StoryAddIcon from '../../../lib/icons/react/StoryAddIcon';
import WorkFasterIcon from '../../../lib/icons/react/WorkFasterIcon';
import SalesforceIcon from '../../../lib/icons/react/SalesforceIcon';

import StackedButton from './StackedButton';
import README from './StackedButton.md';

storiesOf('Interactive/StackedButton', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div
        className={boolean('Toggle Background', false) ? 'padding--all inverted' : ''}
        style={
          boolean('Toggle Background', false) ? { background: 'var(--color-navy)' } : {}
        }
      >
        <StackedButton
          disabled={boolean('disabled', false)}
          Icon={StarFilledIcon}
          label={text('Text', 'Button')}
          isMulti={boolean('isMulti', false)}
        />
      </div>
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--bottom--half">
          <StackedButton Icon={CaretDownIcon} label="Lorem" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={StarFilledIcon} label="Lorem Ipsum" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={StarFilledIcon} label="Lorem Ipsum Dolor" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={StarFilledIcon} label="Lorem Ipsum Dolor Sit Amet" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={CollectionPublicIcon} label="Add to Collections" isMulti />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={StoryAddIcon} label="Add to Stories" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={WorkFasterIcon} label="View Dossier" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={SalesforceIcon} label="Salesforce Sync" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={SalesforceIcon} label="Lorem" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={SalesforceIcon} disabled label="Lorem Ipsum (Disabled)" />
        </div>
        <div className="margin--bottom--half">
          <StackedButton Icon={SalesforceIcon} isActive label="Lorem Ipsum (Active)" />
        </div>
      </div>
    </React.Fragment>
  ));
