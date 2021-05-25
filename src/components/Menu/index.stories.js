import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from 'components/Button';

import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';

import CloneIcon from 'lib/icons/react/CloneIcon';
import TrashIcon from 'lib/icons/react/TrashIcon';
import EditIcon from 'lib/icons/react/EditIcon';
import FundingIcon from 'lib/icons/react/FundingIcon';
import Tooltip from 'components/Tooltip';

import { MenuItem, MenuLink } from 'components';
import Menu from '.';

export const Primary = (args) => (
  <Menu {...args} trigger={<Button label="Menu trigger" hasCaret />}>
    <MenuItem onSelect={action('copy')}>Copy</MenuItem>
    <MenuItem onSelect={action('delete')}>Delete</MenuItem>
  </Menu>
);

export const triggerElement = (args) => (
  <Flex>
    <FlexItem>
      <Menu
        {...args}
        trigger={<Button theme="outlined" label="Recommended trigger" hasCaret />}
      >
        <MenuItem onSelect={action('🍰')}>Cake</MenuItem>
        <MenuItem onSelect={action('🍕')}>Pizza</MenuItem>
        <MenuItem onSelect={action('☠️')}>Tide pod</MenuItem>
      </Menu>
    </FlexItem>
    <FlexItem>
      <Menu {...args} trigger={<button>any button will work</button>}>
        <MenuItem onSelect={action('🍰')}>Cake</MenuItem>
        <MenuItem onSelect={action('🍕')}>Pizza</MenuItem>
        <MenuItem onSelect={action('☠️')}>Tide pod</MenuItem>
      </Menu>
    </FlexItem>
  </Flex>
);

triggerElement.parameters = {
  docs: {
    description: {
      story:
        'A `Button` with the `hasCaret` prop enabled is recommended, but the Menu trigger can accept a `button`, or any component that renders a focusable element.',
    },
  },
};

export const customItems = (args) => (
  <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
    <MenuItem onSelect={action('Delete')}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <TrashIcon />
          </FlexItem>
          <FlexItem>Delete</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={action('Edit')}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <EditIcon />
          </FlexItem>
          <FlexItem>Edit</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={action('Clone')}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <CloneIcon />
          </FlexItem>
          <FlexItem>Clone</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={action('Bribe')}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <FundingIcon />
          </FlexItem>
          <FlexItem>Bribe</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuLink onSelect={action('Storybook')} href="/">
      Go to Storybook home
    </MenuLink>
  </Menu>
);

customItems.parameters = {
  docs: {
    description: {
      story: '`MenuItem` and `MenuLink` will accept a plain string or any JSX node.',
    },
  },
};

export const rest = (args) => (
  <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
    <MenuItem data-test="hello">Delete</MenuItem>
    <MenuLink href="#" data-test="world">
      Edit
    </MenuLink>
  </Menu>
);

rest.parameters = {
  docs: {
    description: {
      story: '`MenuItem` and `MenuLink` accept rest props.',
    },
  },
};

export const disabledItems = (args) => (
  <Menu
    {...args}
    trigger={<Button theme="outlined" label="Menu with disabled item" hasCaret />}
  >
    <MenuItem
      isDisabled
      onSelect={() => {
        action('🍰');
      }}
    >
      <Tooltip trigger={<button>Cake</button>} message="Not your birthday" />
    </MenuItem>
    <MenuItem
      onSelect={() => {
        action('🍕');
      }}
    >
      Pizza
    </MenuItem>
    <MenuItem
      onSelect={() => {
        action('☠️');
      }}
    >
      Tide pod
    </MenuItem>
  </Menu>
);

disabledItems.parameters = {
  docs: {
    description: {
      story:
        'When the `isDisabled` prop is passed to a `MenuItem`, the item will be styled as disabled and the `onSelect` handler will not be called. Prefer hiding actions instead of disabling them. Only disable a `MenuItem` if the disabling is only temporary (e.g. disabling a collections clone while a clone is in progress). When disabling a `MenuItem`, a `Tooltip` is recommended to explain why the action is disabled.',
    },
  },
};

export default {
  component: Menu,
  subcomponents: { MenuItem, MenuLink },
  title: 'components/Menu',
  parameters: {
    componentSubtitle:
      'Renders a dropdown containing links, and actions the user can take.',
    docs: {
      description: {
        component:
          'Use FDS `Popover` instead for content like forms & arbitrary content. Use `MenuLink` for rendering links, and default to using `MenuItem` otherwise.',
      },
    },
  },
};
