import React from 'react';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';

import Badge from '.';

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 42,
};

export const variations = () => (
  <StoryWrapper>
    <StoryItem>
      <Badge label="42" />
    </StoryItem>
    <StoryItem>
      <Badge label="42" type="count" />
    </StoryItem>
    <StoryItem>
      <Badge />
    </StoryItem>
    <StoryItem>
      <Badge type="count" />
    </StoryItem>
  </StoryWrapper>
);

variations.parameters = {
  docs: {
    description: {
      story:
        'Badge uses the `update` type by default, which is used to notify users of new updates. The `count` type can be used to show a count of total items. When the `label` is left undefined, both types will collapse into a dot.',
    },
  },
};

export const withTableRows = (args) => (
  <Flex>
    <FlexItem shrink>
      <div style={{ width: '100%', height: '32px' }}>
        <Badge {...args} />
      </div>
    </FlexItem>
    <FlexItem>
      <div className="bgColor--haze" style={{ width: '100%', height: '32px' }} />
    </FlexItem>
  </Flex>
);

withTableRows.parameters = {
  docs: {
    description: {
      story:
        'To demonstrate a table row is "new", place the badge to the left of the first column. The bubble will center itself within the nearest parent.',
    },
  },
};

export default {
  component: Badge,
  title: 'components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          ' Renders a bubble with an optional label. The bubble will be centered within the parent container you place it in. To render a `Badge` in the top right corner of an element, use the `Updatable` component.',
      },
    },
  },
};
