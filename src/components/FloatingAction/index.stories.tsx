import React from 'react';
import ApproveIcon from 'icons/react/ApproveIcon';
import { Story } from '@storybook/react';

import FloatingAction, { FloatingActionProps } from '.';

const Template = (args: FloatingActionProps): JSX.Element => <FloatingAction {...args} />;

export const Primary: Story<FloatingActionProps> = Template.bind({});

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
