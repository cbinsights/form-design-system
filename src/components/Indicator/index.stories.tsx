import { StoryObj } from '@storybook/react';
import Indicator, { IndicatorProps } from '.';

export const Primary: StoryObj<IndicatorProps> = {
  args: {
    label: 'Indicator',
  },
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
