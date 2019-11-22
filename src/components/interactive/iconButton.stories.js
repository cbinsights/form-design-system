import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, optionsKnob as options } from '@storybook/addon-knobs';
import StarFilledIcon from '../../../lib/icons/react/StarFilledIcon';
import CollectionPublicIcon from '../../../lib/icons/react/CollectionPublicIcon';
import StoryAddIcon from '../../../lib/icons/react/StoryAddIcon';
import WorkFasterIcon from '../../../lib/icons/react/WorkFasterIcon';
import SalesforceIcon from '../../../lib/icons/react/SalesforceIcon';
import { arrayToOptions } from '../util/storybook';

import IconButton from './IconButton';
import README from './IconButton.md';

storiesOf('Interactive/IconButton', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <IconButton
        isDestructive={boolean('isDestructive', false)}
        disabled={boolean('disabled', false)}
        isLoading={boolean('isLoading', false)}
        theme={options('theme', arrayToOptions(['ghost', 'aqua']), undefined, {
          display: 'inline-radio',
        })}
        size={options('size', arrayToOptions(['s', 'm']), undefined, {
          display: 'inline-radio',
        })}
        radius={options('radius', arrayToOptions(['square', 'circle']), undefined, {
          display: 'inline-radio',
        })}
        Icon={StarFilledIcon}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={CollectionPublicIcon} disabled />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={StoryAddIcon} isActive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton Icon={WorkFasterIcon} isActive isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton theme="aqua" disabled Icon={SalesforceIcon} />
        </div>
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
        <br />
      </div>
      <br />
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <p className="margin--right">small:</p>
        <div className="margin--right--half margin--bottom--half">
          <IconButton size="s" theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton radius="circle" size="s" theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <IconButton
            size="s"
            theme="aqua"
            Icon={SalesforceIcon}
            radius="circle"
            isLoading
          />
        </div>
      </div>
    </React.Fragment>
  ));
