import React from 'react';
import { StoryObj } from '@storybook/react';
import Tooltip, { TooltipProps } from 'components/Tooltip';
export const Primary: StoryObj<TooltipProps> = {
  args: {
    trigger: <button>ℹ️ Hover Here!</button>,
    message: 'Hello world',
  },
};

export const MaxWidth: StoryObj<TooltipProps> = {
  args: {
    maxWidth: 600,
    trigger: <button>ℹ️ Hover Here!</button>,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
};

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
};
