import React from 'react';
import { action } from '@storybook/addon-actions';
import { NoStoriesLayout } from 'util/storybook-docs/Layout';
import Button from 'components/Button';

import Prompt from '.';

const Template = (args) => <Prompt {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  desc: 'This change will be permanent and cannot be undone.',
  title: 'Are you sure you want to delete this collection?',
  primaryButton: <Button isDestructive label="Delete" />,
  secondaryButton: (
    <Button theme="ghost" label="Keep Collection" onClick={action('close modal')} />
  ),
  onDismiss: action('close modal'),
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  ...Primary.args,
  desc: false,
};

export default {
  component: Prompt,
  title: 'components/Prompt',
  parameters: {
    componentSubtitle: 'An inflexible version of Dialog that is used for confirm modals.',
    docs: {
      fds: {
        related: ['Dialog'],
      },
      page: NoStoriesLayout,
      description: {
        component:
          'Displays a simple string message, with 2 buttons to either confirm the action, or deny it. **Please click "Canvas" to view examples**.',
      },
    },
  },
};
