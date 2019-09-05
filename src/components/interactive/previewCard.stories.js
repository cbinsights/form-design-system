import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';

import PreviewCard from './PreviewCard';
import README from './PreviewCard.md';

storiesOf('Interactive/PreviewCard', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <PreviewCard
        href="#"
        hoverText={text('hoverText', 'View More')}
        footerLabel={text('footerLabel', 'Description')}
        footerLeftInfo={text('footerLeftInfo', '10/4/2021')}
        footerRightInfo={text('footerRightInfo', '1-20')}
        coverContent={text('coverContent', '')}
        coverTheme={options(
          'coverTheme',
          {
            purple: 'purple',
            darkPurple: 'darkPurple',
            aqua: 'aqua',
            pink: 'pink',
            none: '',
          },
          'purple',
          { display: 'inline-radio' }
        )}
      />
    ),
    { notes: { markdown: README } }
  )
  .add('Variations', () => (
    <div>
      <div className="margin--left margin--bottom display--inlineBlock">
        <PreviewCard
          href="#"
          hoverText="View More"
          footerLabel="Description"
          footerLeftInfo="10/4/2021"
          footerRightInfo="1-20"
          coverTheme="purple"
        />
      </div>
      <div className="margin--left margin--bottom display--inlineBlock">
        <PreviewCard
          href="#"
          hoverText="View"
          footerLabel="Description that is a bit longer than usual"
          footerLeftInfo="10/4/2021"
          footerRightInfo="1-20"
          coverTheme="pink"
        />
      </div>
      <div className="margin--left margin--bottom display--inlineBlock">
        <PreviewCard
          href="#"
          hoverText="Take me there"
          footerLabel="Description that is really longer than usual to show how the text may wrap and such"
          footerLeftInfo="user@example.com"
          footerRightInfo="1-20"
          coverTheme="aqua"
        />
      </div>
      <div className="margin--left margin--bottom display--inlineBlock">
        <PreviewCard
          href="#"
          hoverText="Some text to show how it looks when wrapping"
          footerLabel="Description"
          footerLeftInfo="10/4/2021"
          footerRightInfo="1-20"
          coverTheme="darkPurple"
        />
      </div>
      <div className="margin--left margin--bottom display--inlineBlock">
        <PreviewCard
          href="#"
          hoverText="View More"
          footerLabel="Description"
          footerLeftInfo="10/4/2021"
          footerRightInfo="1-20"
        />
      </div>
    </div>
  ));
