import React from 'react';
import { Story } from '@storybook/react';
import Indicator, { IndicatorProps } from '.';

const Template = (args: IndicatorProps): JSX.Element => <Indicator {...args} />;

export const Primary: Story<IndicatorProps> = Template.bind({});
Primary.args = {
  label: 'Indicator',
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
