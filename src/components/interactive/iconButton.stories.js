import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CollectionPublicIcon from '../../../lib/icons/react/CollectionPublicIcon';
import StoryAddIcon from '../../../lib/icons/react/StoryAddIcon';
import WorkFasterIcon from '../../../lib/icons/react/WorkFasterIcon';
import SalesforceIcon from '../../../lib/icons/react/SalesforceIcon';
import { arrayToOptions } from '../util/storybook';
import { MockLink } from '../util/mock-react-router';

import IconButton from './IconButton';
import Button from './Button';
import README from './IconButton.md';

storiesOf('Interactive/IconButton', module)
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
        <IconButton
          isDestructive={boolean('isDestructive', false)}
          disabled={boolean('disabled', false)}
          isLoading={boolean('isLoading', false)}
          theme={options('theme', arrayToOptions(['ghost', 'aqua']), undefined, {
            display: 'inline-radio',
          })}
          radius={options('radius', arrayToOptions(['square', 'circle']), undefined, {
            display: 'inline-radio',
          })}
          Icon={StarFilledIcon}
        />
      </div>
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={CollectionPublicIcon} href="#" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={StoryAddIcon} Link={MockLink} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={WorkFasterIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} disabled />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} isActive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} isActive isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" disabled Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Button>Button</Button>
        </div>
      </div>
      <br />
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={CollectionPublicIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={StoryAddIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={WorkFasterIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} raidus="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" disabled />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" isActive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" isActive isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" disabled Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" Icon={SalesforceIcon} radius="circle" isLoading />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" isLoading />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} radius="circle" isLoading isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Button>Button</Button>
        </div>
      </div>
    </React.Fragment>
  ));
