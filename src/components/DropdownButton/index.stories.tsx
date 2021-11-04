import React from 'react';
import { Story } from '@storybook/react';
import DropdownButton, { Props } from '.';

const Template = (args: Props) => <DropdownButton {...args} />;

export const Primary: Story<Props> = Template.bind({});
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
