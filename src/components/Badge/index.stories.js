import React from 'react';
import Badge from '.';

const Template = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Badge',
};

export default {
  component: Badge,
  title: 'components/Badge',
  parameters: {
    docs: {
      attributes: ['rest'],
      description: {},
    },
  },
};
