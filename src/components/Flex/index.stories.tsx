import React from 'react';
import FlexItem from 'components/FlexItem';
import Flex, { FlexProps } from '.';
import { StoryObj } from '@storybook/react';

const parentStyle = {
  width: '600px',
};

export const Primary: StoryObj<FlexProps> = {
  render: (args: FlexProps): JSX.Element => (
    <div style={parentStyle} className="debug--flex">
      <Flex {...args}>
        <FlexItem shrink>
          <img src="https://place-hold.it/40x40/a02385/fff&text=IMG" />
        </FlexItem>
        <FlexItem>
          <p>This item grows to fill remaining space</p>
        </FlexItem>
        <FlexItem shrink>
          <p className="type--link">edit</p>
        </FlexItem>
      </Flex>
    </div>
  ),
};

export const ClassicMediaBlock: StoryObj<FlexProps> = {
  render: (args: FlexProps): JSX.Element => (
    <div style={parentStyle} className="debug--flex">
      <Flex {...args}>
        <FlexItem shrink>
          <img src="https://place-hold.it/40x40/a02385/fff&text=:)" />
        </FlexItem>
        <FlexItem>
          Look at this media block. Notice how this area grows to fill the remaining space
          of the fixed width parent container. When this content wraps, it will not wrap
          below the figure the same way it would when positioning the image with a
          <code>float</code>.
        </FlexItem>
      </Flex>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Making the image `FlexItem` `shrink` and allowing the description `FlexItem` to grow creates the classic "media block" layout pattern.',
      },
    },
  },
};

export const AutoSizedContentArea: StoryObj<FlexProps> = {
  render: (args: FlexProps): JSX.Element => (
    <div
      style={{
        height: '300px',
      }}
      className="debug--flex"
    >
      <Flex {...args} direction="column">
        <FlexItem shrink>
          <p>
            This is the header, in a <code>FlexItem</code> set to <code>shrink</code>
          </p>
        </FlexItem>
        <FlexItem>
          <p>
            This is the content area, in a <code>FlexItem</code> that will grow to fill
            remaining space
          </p>
        </FlexItem>
        <FlexItem shrink>
          <p>
            This is the footer, in a <code>FlexItem</code> set to <code>shrink</code>
          </p>
        </FlexItem>
      </Flex>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Within a fixed height container, this `Flex` creates a fixed height header and footer which allows the content area to expand to fill the remaining space.',
      },
    },
  },
};

export const ResponsiveFlex: StoryObj<FlexProps> = {
  render: (args: FlexProps): JSX.Element => (
    <div className="debug--flex">
      <Flex {...args} direction="column" switchDirection="m">
        <FlexItem>
          <p>Item 1</p>
        </FlexItem>
        <FlexItem>
          <p>Item 2</p>
        </FlexItem>
        <FlexItem>
          <p>Item 3</p>
        </FlexItem>
      </Flex>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'This `Flex` displays in column direction by default and uses the `switchDirection` prop to change flex direction when the viewport reaches the `m` breakpoint.',
      },
    },
  },
};

export default {
  component: Flex,
  subcomponents: {
    FlexItem,
  },
  title: 'Components/Flex',
  parameters: {
    componentSubtitle: 'An abstraction of a subset of CSS flexbox',
    docs: {
      description: {
        component: 'A `Flex` should only contain `FlexItem` children.',
      },
    },
  },
};
