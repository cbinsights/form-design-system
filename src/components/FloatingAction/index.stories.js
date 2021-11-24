import React from 'react';
import ApproveIcon from 'icons/react/ApproveIcon';

import FloatingAction from '.';

const Template = (args) => <FloatingAction {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  Icon: ApproveIcon,
  label: 'Add Column',
};

export default {
  component: FloatingAction,
  title: 'components/FloatingAction',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
