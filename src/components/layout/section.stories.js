import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options, select } from '@storybook/addon-knobs';
import { arrayToOptions, storyBackgrounds } from '../util/storybook';

import Section, { VALID_BG_NORMAL, VALID_BG_INVERTED, VALID_PADDING } from './Section';
import Flex from './Flex';
import FlexItem from './FlexItem';
import Button from '../interactive/Button';
import README from './Section.md';

const ALL_BACKGROUNDS = [...VALID_BG_NORMAL, ...VALID_BG_INVERTED];

const parentStyle = {
  background: storyBackgrounds.diagonalLine,
  height: '100vh',
  width: '100vw',
};

storiesOf('Layout/Section', module)
  .addDecorator(withKnobs)
  .add(
    'Knobs',
    () => (
      <div className="alignChild--center--center" style={parentStyle}>
        <Section
          xPadding={select(
            'Horizontal padding',
            arrayToOptions(VALID_PADDING),
            'default'
          )}
          yPadding={select('Vertical padding', arrayToOptions(VALID_PADDING), 'default')}
          bgColor={select('Background color', arrayToOptions(ALL_BACKGROUNDS), 'white')}
          border={options(
            'Border',
            arrayToOptions(['top', 'right', 'bottom', 'left', 'x', 'y', 'all']),
            undefined,
            { display: 'inline-radio' }
          )}
        >
          <h1 className="type--head3 margin--bottom">Look at me</h1>
          <p>I am the section content</p>
        </Section>
      </div>
    ),
    { notes: { markdown: README } }
  )
  .add('Stacked Sections', () => (
    <div style={parentStyle}>
      <Section xPadding="double" yPadding="double">
        <h1 className="type--head1">Title</h1>
        <p className="type--big">
          This title <code>Section</code> has extra padding
        </p>
      </Section>
      <Section yPadding="half" xPadding="double" border="y">
        <Flex align="center" justify="end">
          <FlexItem>
            <div className="align--right">
              <p className="color--secondary">
                Compact <code>Section</code> for actions or something
              </p>
            </div>
          </FlexItem>
          <FlexItem shrink>
            <Button>Some action</Button>
          </FlexItem>
        </Flex>
      </Section>
    </div>
  ))
  .add('Horizontal sectioning', () => (
    <div style={parentStyle}>
      <Section yPadding="double" border="bottom">
        <h1 className="type--head1">Horizontal sectioning</h1>
        <p className="type--big">
          You can also use <code>Section</code> to handle padding and borders of
          horizontal divisions. <code>Section</code> and
          <code>Flex</code> can be composed together
        </p>
      </Section>
      <Flex noGutters>
        <FlexItem>
          <Section border="right">
            <h2 className="type--head4 padding--bottom--half">Left section</h2>
            <p>
              This <code>Section</code> is inside a <code>FlexItem</code>. The gutters of
              the parent <code>Flex</code> have been disabled.
            </p>
          </Section>
        </FlexItem>
        <FlexItem>
          <Section>
            <h2 className="type--head4 padding--bottom--half">Right section</h2>
            <p>
              This <code>Section</code> is inside a <code>FlexItem</code>. The gutters of
              the parent <code>Flex</code> have been disabled.
            </p>
          </Section>
        </FlexItem>
      </Flex>
    </div>
  ));
