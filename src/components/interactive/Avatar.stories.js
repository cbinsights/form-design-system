import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import CollectionPublicIcon from '../../../lib/icons/react/CollectionPublicIcon';
import { arrayToOptions } from '../util/storybook';

import Avatar, { VALID_BG_COLORS } from './Avatar';
import README from './Avatar.md';

storiesOf('Media/Avatar', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Avatar
        bgColor={options('bgColor', arrayToOptions(VALID_BG_COLORS), undefined, {
          display: 'inline-radio',
        })}
        size={options('size', arrayToOptions(['s', 'm']), undefined, {
          display: 'inline-radio',
        })}
        name={text('name', 'Samuel Jackson')}
        imgUrl={text('imgUrl', undefined)}
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
        <br />
      </div>
    </React.Fragment>
  ));
