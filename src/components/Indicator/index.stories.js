import React from 'react';
import Indicator from '.';

const Template = (args) => <Indicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Indicator',
};

export default {
  component: Indicator,
  title: 'components/Indicator',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
