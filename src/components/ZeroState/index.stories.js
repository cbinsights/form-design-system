import React from 'react';
import DenyIcon from 'lib/icons/react/DenyIcon';
import SearchIcon from 'lib/icons/react/SearchIcon';
import TableIcon from 'lib/icons/react/TableIcon';
import ZeroState from '.';

const Template = (args) => <ZeroState {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'This is empty',
  height: '150px',
  Icon: TableIcon,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'There are no results',
  height: '300px',
  Icon: SearchIcon,
};

export const ViewportHeight = Template.bind({});
ViewportHeight.args = {
  label: 'This sheet is empty',
  height: '100vh',
  Icon: TableIcon,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  Icon: DenyIcon,
  height: '300px',
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  label: 'There is no icon',
  height: '300px',
};

export default {
  component: ZeroState,
  title: 'components/ZeroState',
  parameters: {
    docs: {
      description: {
        component: 'Useful to display if there no results, no columns, etc.',
      },
    },
  },
};
