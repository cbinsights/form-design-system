import ApproveIcon from 'icons/react/ApproveIcon';
import { StoryObj } from '@storybook/react';
import FloatingAction, { FloatingActionProps } from '.';

export const Primary: StoryObj<FloatingActionProps> = {
  args: {
    Icon: ApproveIcon,
    label: 'Add Column',
  },
};

export default {
  component: FloatingAction,
  title: 'Components/FloatingAction',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
