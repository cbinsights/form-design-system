import React from 'react';
import { action } from '@storybook/addon-actions';
import { NoStoriesLayout } from 'util/storybook-docs/Layout';

import Button from 'components/Button';
import Popover from 'components/Popover';

import Dialog from '.';

const Template = (args) => <Dialog disableFocusTrap={true} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  content: 'Modal content here',
  title: 'Modal title here',
  onDismiss: action('close modal'),
  disablePortal: true,
};

export const DialogWithSubtitle = Template.bind({});
DialogWithSubtitle.args = {
  isOpen: true,
  content: 'Modal content here',
  title: 'Modal title here',
  subTitle: 'Modal subtitle here',
  onDismiss: action('close modal'),
  disablePortal: true,
};

export const ScrollingContent = Template.bind({});
ScrollingContent.args = {
  isOpen: true,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin.',
  onDismiss: action('close modal'),
  title: 'Long content area',
};

export const ScrollingContentWithFooter = Template.bind({});
ScrollingContentWithFooter.args = {
  isOpen: true,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus. Neque laoreet suspendisse interdum consectetur. Ut porttitor leo a diam. Quisque egestas diam in arcu cursus euismod quis viverra. Eget nunc lobortis mattis aliquam. Mauris pharetra et ultrices neque ornare aenean euismod. Luctus accumsan tortor posuere ac. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Non arcu risus quis varius quam quisque id diam. Vel pharetra vel turpis nunc eget lorem dolor sed. Risus quis varius quam quisque id diam vel quam elementum. Velit ut tortor pretium viverra suspendisse potenti. Amet purus gravida quis blandit turpis cursus in hac. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Egestas maecenas pharetra convallis posuere morbi leo. Pellentesque pulvinar pellentesque habitant morbi tristique. Habitasse platea dictumst quisque sagittis purus. Fermentum dui faucibus in ornare quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Turpis egestas integer eget aliquet. Bibendum est ultricies integer quis auctor elit sed vulputate. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Lectus urna duis convallis convallis tellus id interdum velit. A arcu cursus vitae congue mauris rhoncus aenean. Odio euismod lacinia at quis risus sed vulputate odio. Nibh tellus molestie nunc non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. A erat nam at lectus urna duis convallis convallis. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Mauris sit amet massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Risus quis varius quam quisque id diam vel. Id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing vitae proin.',
  onDismiss: action('close modal'),
  footerContent: <Button label="Confirm" />,
  title: 'Long content area w/footer',
};

export const ScrollingContentFooterPermanentBorder = Template.bind({});
ScrollingContentFooterPermanentBorder.args = {
  isOpen: true,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci. Placerat vestibulum lectus mauris ultrices eros in cursus.',
  onDismiss: action('close modal'),
  footerContent: <Button label="Confirm" />,
  title: 'Footer & permanent border',
  alwaysShowBorder: true,
};

export const DialogFromPopover = (args) => {
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
        <Dialog {...args} onDismiss={() => setDialogOpen(false)} isOpen={dialogIsOpen} />
      </div>
    </Popover>
  );
};
const hidden = { table: { disable: true } };
DialogFromPopover.args = {
  disablePortal: true,
  title: 'Disabled Portal Dialog',
  content:
    'This was triggered from a popover and is still interactive without closing the popover.',
};
DialogFromPopover.argTypes = {
  onDismiss: hidden,
  isOpen: hidden,
  role: hidden,
  footerContent: hidden,
  width: hidden,
  height: hidden,
  alwaysShowBorder: hidden,
  disableFocusTrap: hidden,
};

export default {
  component: Dialog,
  title: 'components/Dialog',
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
