import React from 'react';
import Tooltip from 'components/Tooltip';

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <button>ℹ️ Hover Here!</button>,
  message: 'Hello world',
};

export const maxWidth = Template.bind({});
maxWidth.args = {
  maxWidth: 600,
  trigger: <button>ℹ️ Hover Here!</button>,
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default {
  component: Tooltip,
  title: 'components/Tooltip',
};
