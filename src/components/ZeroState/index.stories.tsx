import React from 'react';
import DenyIcon from 'lib/icons/react/DenyIcon';
import { Story } from '@storybook/react';
import SearchIcon from 'lib/icons/react/SearchIcon';
import TableIcon from 'lib/icons/react/TableIcon';
import ZeroState, { Props } from '.';

const Template = (args: $TSFixMe) => <ZeroState {...args} />;

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  label: 'This is empty',
  height: '150px',
  Icon: TableIcon,
};

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = {
  label: 'There are no results',
  height: '300px',
  Icon: SearchIcon,
};

export const ViewportHeight: Story<Props> = Template.bind({});
ViewportHeight.args = {
  label: 'This sheet is empty',
  height: '100vh',
  Icon: TableIcon,
};

export const OnlyIcon: Story<Props> = Template.bind({});
OnlyIcon.args = {
  Icon: DenyIcon,
  height: '300px',
};

export const NoIcon: Story<Props> = Template.bind({});
NoIcon.args = {
  label: 'There is no icon',
  height: '300px',
};

export default {
  component: ZeroState,
  title: 'components/ZeroState',
  parameters: {
    componentSubtitle: 'Placeholder component',
  },
};
