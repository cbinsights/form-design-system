import React from 'react';
import ApproveIcon from 'lib/icons/react/ApproveIcon';

import FloatingAction from '.';

const Template = (args) => <FloatingAction {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  Icon: ApproveIcon,
  label: 'Add Column',
};

export default {
  component: FloatingAction,
  title: 'components/FloatingAction',
  parameters: {
    docs: {
      attributes: ['rest'],
      description: {
        component:
          'Component that renders a "floating action button" as outlined in [Material Design Guidelines](https://material.io/components/buttons-floating-action-button/). Essentially, a limited `IconButton` with a shadow.',
      },
    },
  },
};
