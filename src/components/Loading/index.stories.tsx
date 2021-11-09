import React from 'react';
import { Story } from '@storybook/react';
import Loading, { Props } from '.';

const Template = (args: Props) => <Loading {...args} />;
export const Default: Story<Props> = Template.bind({});
Default.parameters = { layout: 'centered' };

export default {
  component: Loading,
  title: 'components/Loading',
};
