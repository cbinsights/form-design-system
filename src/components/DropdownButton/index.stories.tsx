import React from 'react';
import { Story } from '@storybook/react';
import DropdownButton, { DropdownButtonProps } from '.';

const Template = (args: DropdownButtonProps): JSX.Element => <DropdownButton {...args} />;

export const Primary: Story<DropdownButtonProps> = Template.bind({});
Primary.args = {
  children: 'Dropdown Button',
};

export default {
  component: DropdownButton,
  title: 'components/DropdownButton',
  parameters: {
    docs: {
      fds: {
        attributes: ['rest'],
      },
    },
  },
};
