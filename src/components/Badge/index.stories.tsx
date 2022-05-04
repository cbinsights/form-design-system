import React from 'react';
import { StoryObj } from '@storybook/react';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';
import Badge, { BadgeProps } from '.';

export const Primary: StoryObj<BadgeProps> = {
  args: {
    label: '42',
  },
};

export const Variations: StoryObj<BadgeProps> = {
  render: (args: BadgeProps): JSX.Element => (
    <StoryWrapper>
      <StoryItem>
        <Badge {...args} label="42" />
      </StoryItem>
      <StoryItem>
        <Badge {...args} label="42" type="count" />
      </StoryItem>
      <StoryItem>
        <Badge {...args} />
      </StoryItem>
      <StoryItem>
        <Badge {...args} type="count" />
      </StoryItem>
    </StoryWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Badge uses the `update` type by default, which is used to notify users of new updates. The `count` type can be used to show a count of total items. When the `label` is left undefined, both types will collapse into a dot.',
      },
    },
  },
};

export const WithTableRows: StoryObj<BadgeProps> = {
  render: (args: BadgeProps): JSX.Element => (
    <Flex>
      <FlexItem shrink>
        <div
          style={{
            width: '100%',
            height: '32px',
          }}
        >
          <Badge {...args} />
        </div>
      </FlexItem>
      <FlexItem>
        <div
          className="bgColor--haze"
          style={{
            width: '100%',
            height: '32px',
          }}
        />
      </FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'To demonstrate a table row is "new", place the badge to the left of the first column. The bubble will center itself within the nearest parent.',
      },
    },
  },
};

export default {
  component: Badge,
  title: 'components/Badge',
  parameters: {
    componentSubtitle: 'Renders a bubble with an optional label.',
    docs: {
      fds: {
        related: ['CornerPosition'],
      },
      subtitle: 'ok',
      description: {
        component:
          'The bubble will be centered within the parent container you place it in. To render a `Badge` in the top right corner of an element, use the `CornerPosition` component.',
      },
    },
  },
};
