import React from 'react';
import { Story } from '@storybook/react';
import Tooltip, { TooltipProps } from 'components/Tooltip';

const Template = (args: TooltipProps) => <Tooltip {...args} />;

export const Primary: Story<TooltipProps> = Template.bind({});
Primary.args = {
  trigger: <button>ℹ️ Hover Here!</button>,
  message: 'Hello world',
};

export const MaxWidth: Story<TooltipProps> = Template.bind({});
MaxWidth.args = {
  maxWidth: 600,
  trigger: <button>ℹ️ Hover Here!</button>,
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export default {
  component: Tooltip,
  title: 'components/Tooltip',
};
