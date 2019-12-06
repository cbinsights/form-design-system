import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import CollectionPublicIcon from '../../../lib/icons/react/CollectionPublicIcon';
import StoryAddIcon from '../../../lib/icons/react/StoryAddIcon';
import WorkFasterIcon from '../../../lib/icons/react/WorkFasterIcon';
import SalesforceIcon from '../../../lib/icons/react/SalesforceIcon';
import { arrayToOptions } from '../util/storybook';
import { MockLink } from '../util/mock-react-router';

import Avatar, { VALID_COLORS } from './Avatar';
import README from './Avatar.md';

storiesOf('Media/Avatar', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Avatar
        color={options('theme', arrayToOptions(VALID_COLORS), undefined, {
          display: 'inline-radio',
        })}
        size={options('size', arrayToOptions(['s', 'm']), undefined, {
          display: 'inline-radio',
        })}
        label={text('label', 'Samuel Jackson')}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <React.Fragment>
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={CollectionPublicIcon} href="#" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={StoryAddIcon} Link={MockLink} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={WorkFasterIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={CollectionPublicIcon} disabled />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={StoryAddIcon} isActive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={WorkFasterIcon} isActive isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar theme="aqua" disabled Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={CollectionPublicIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={StoryAddIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={WorkFasterIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} raidus="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" disabled />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" isActive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" isActive isDestructive />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar theme="aqua" Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar theme="aqua" disabled Icon={SalesforceIcon} radius="circle" />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar theme="aqua" Icon={SalesforceIcon} radius="circle" isLoading />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" isLoading />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar Icon={SalesforceIcon} radius="circle" isLoading isDestructive />
        </div>
        <br />
      </div>
      <br />
      <div className="display--inlineFlex margin--all" style={{ flexWrap: 'wrap' }}>
        <p className="margin--right">small:</p>
        <div className="margin--right--half margin--bottom--half">
          <Avatar size="s" theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar radius="circle" size="s" theme="aqua" Icon={SalesforceIcon} />
        </div>
        <div className="margin--right--half margin--bottom--half">
          <Avatar size="s" theme="aqua" Icon={SalesforceIcon} radius="circle" isLoading />
        </div>
      </div>
    </React.Fragment>
  ));
