import React from 'react';
import DropdownButton from '.';

const Template = (args) => <DropdownButton {...args} />;

export const Primary = Template.bind({});
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
