import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';

import Hscroll from './Hscroll';
import README from './Hscroll.md';

/* eslint-disable react/prop-types */
const ExampleItem = ({ label }) => (
  <div
    className="fontSize--xl display--inlineFlex alignChild--center--center media--xl
    color--red"
    style={{
      outline: '1px dotted red',
      background: 'pink',
    }}
  >
    {label}
  </div>
);
/* eslint-enable react/prop-types */

storiesOf('Layout/Hscroll', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <Hscroll
        enableFade={boolean('Enable Fade', true)}
        enableGutter={boolean('Enable scrollbar gutter background', false)}
        bgColor={radios('Background Color', { haze: 'haze', white: 'white' }, 'white')}
        style={{ width: '400px' }}
      >
        <ExampleItem label="1" />
        <ExampleItem label="2" />
        <ExampleItem label="3" />
        <ExampleItem label="4" />
        <ExampleItem label="5" />
        <ExampleItem label="6" />
        <ExampleItem label="7" />
        <ExampleItem label="8" />
        <ExampleItem label="9" />
        <ExampleItem label="10" />
        <ExampleItem label="11" />
        <ExampleItem label="12" />
        <ExampleItem label="13" />
        <ExampleItem label="14" />
        <ExampleItem label="15" />
      </Hscroll>
    ),
    { notes: { markdown: README } }
  );
