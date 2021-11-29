import React from 'react';

import Flex from 'components/Flex';
import FlexItem, { FlexItemProps } from '.';

const Template = (args: FlexItemProps): JSX.Element => (
  <div style={{ width: '600px' }} className="debug--flex">
    <Flex>
      <FlexItem {...args}>
        <img src="https://place-hold.it/40x40/a02385/fff&text=IMG" />
      </FlexItem>
      <FlexItem {...args}>
        <p>Dogs</p>
      </FlexItem>
      <FlexItem {...args}>
        <p>Cats</p>
      </FlexItem>
    </Flex>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export default {
  component: FlexItem,
  title: 'components/FlexItem',
  parameters: {
    componentSubtitle: 'An abstraction of a subset of CSS flexbox',
    docs: {
      description: {
        component: 'Direct parent must be `<Flex>`.',
      },
    },
  },
};
