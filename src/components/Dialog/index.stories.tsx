import React from 'react';
import { StoryObj } from '@storybook/react';
import { NoStoriesLayout } from 'util/storybook-docs/Layout';
import Button from 'components/Button';
import Popover from 'components/Popover';
import Dialog, { DialogProps } from '.';

export const Primary: StoryObj<DialogProps> = {
  render: (args: DialogProps): JSX.Element => (
    <Dialog disableFocusTrap={true} {...args} />
  ),
  args: {
    isOpen: true,
    content: 'Modal content here',
    title: 'Modal title here',
    disablePortal: true,
  },
};

export const DialogWithSubtitle: StoryObj<DialogProps> = {
  render: (args: DialogProps): JSX.Element => (
    <Dialog disableFocusTrap={true} {...args} />
  ),
  args: {
    isOpen: true,
    content: 'Modal content here',
    title: 'Modal title here',
    subTitle: 'Modal subtitle here',
    disablePortal: true,
  },
};

export const ScrollingContent: StoryObj<DialogProps> = {
  render: (args: DialogProps): JSX.Element => (
    <Dialog disableFocusTrap={true} {...args} />
  ),
  args: {
    isOpen: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin.',
    title: 'Long content area',
  },
};

export const ScrollingContentWithFooter: StoryObj<DialogProps> = {
  render: (args: DialogProps): JSX.Element => (
    <Dialog disableFocusTrap={true} {...args} />
  ),
  args: {
    isOpen: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin.',
    footerContent: <Button label="Confirm" />,
    title: 'Long content area w/footer',
  },
};

export const ScrollingContentFooterPermanentBorder: StoryObj<DialogProps> = {
  render: (args: DialogProps): JSX.Element => (
    <Dialog disableFocusTrap={true} {...args} />
  ),
  args: {
    isOpen: true,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus.',
    footerContent: <Button label="Confirm" />,
    title: 'Footer & permanent border',
    alwaysShowBorder: true,
  },
};

const hidden = {
  table: {
    disable: true,
  },
};

export const DialogFromPopover: StoryObj<DialogProps> = {
  render: ({ onDismiss = () => {}, ...args }: DialogProps): JSX.Element => {
    const [dialogIsOpen, setDialogOpen] = React.useState(false);

    const handleClick = () => {
      setDialogOpen(true);
    };

    return (
      <Popover trigger={<button>Open the popover</button>}>
        <div className="border--all rounded--all padding--all--m">
          <p>
            This item launches a dialog. <button onClick={handleClick}>Launch</button>
          </p>
          <p>
            This item launches a dialog. <button onClick={handleClick}>Launch</button>
          </p>
          <p>
            This item launches a dialog. <button onClick={handleClick}>Launch</button>
          </p>
          <Dialog
            {...args}
            onDismiss={() => {
              onDismiss();
              setDialogOpen(false);
            }}
            isOpen={dialogIsOpen}
          />
        </div>
      </Popover>
    );
  },
  args: {
    disablePortal: true,
    title: 'Disabled Portal Dialog',
    content:
      'This was triggered from a popover and is still interactive without closing the popover.',
  },
  argTypes: {
    onDismiss: { ...hidden, action: 'onDismiss' },
    isOpen: hidden,
    role: hidden,
    footerContent: hidden,
    width: hidden,
    height: hidden,
    alwaysShowBorder: hidden,
    disableFocusTrap: hidden,
  },
};

export default {
  component: Dialog,
  title: 'Components/Dialog',
  argTypes: {
    onDismiss: {
      action: 'onDismiss',
    },
  },
  parameters: {
    docs: {
      fds: {
        related: ['Prompt'],
      },
      page: NoStoriesLayout,
      description: {
        component: '**Please click "Canvas" to view examples**.',
      },
    },
  },
};
