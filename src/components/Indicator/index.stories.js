import React from 'react';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import { StoryWrapper, StoryItem } from 'util/storybook-docs/StoryLayout';

import Indicator from '.';

const Template = (args) => <Indicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 42,
};

export const variations = () => (
  <StoryWrapper>
    <StoryItem>
      <Indicator label="42" />
    </StoryItem>
    <StoryItem>
      <Indicator label="42" type="count" />
    </StoryItem>
    <StoryItem>
      <Indicator />
    </StoryItem>
    <StoryItem>
      <Indicator type="count" />
    </StoryItem>
  </StoryWrapper>
);

variations.parameters = {
  docs: {
    description: {
      story:
        'Indicator uses the `update` type by default, which is used to notify users of new updates. The `count` type can be used to show a count of total items. When the `label` is left undefined, both types will collapse into a dot.',
    },
  },
};

export const withTableRows = (args) => (
  <Flex>
    <FlexItem shrink>
      <div style={{ width: '100%', height: '32px' }}>
        <Indicator {...args} />
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
        'To indicate a table row is "new", place the indicator to the left of the first column. The bubble will center itself within the nearest parent.',
    },
  },
};

export default {
  component: Indicator,
  title: 'components/Indicator',
  parameters: {
    docs: {
      description: {
        component:
          ' Renders an indicator bubble with an optional label. The bubble will be centered within the parent container you place it in. To render a `Indicator` in the top right corner of an element, use the `Updatable` component.',
      },
    },
  },
};
