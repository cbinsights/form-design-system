import React from 'react';
import Tooltip from 'components/Tooltip';

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <span>ℹ️ Hover Here!</span>,
  message: 'message',
};

export default {
  component: Tooltip,
  title: 'components/Tooltip',
};
