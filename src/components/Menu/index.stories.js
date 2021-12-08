import React from 'react';

import Button from 'components/Button';

import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';

import CloneIcon from 'icons/react/CloneIcon';
import TrashIcon from 'icons/react/TrashIcon';
import EditIcon from 'icons/react/EditIcon';
import FundingIcon from 'icons/react/FundingIcon';
import Tooltip from 'components/Tooltip';

import { MenuItem, MenuLink } from 'components';
import Menu from '.';

/**
 * eslint complains about PropTypes when destructuring.
 * since this will be migrated to typescript there's no point in investing time on PropTypes.
 * TODO: deconstruct onSelect and do rest operator on args when migrating to typescript
 * */
export const Primary = (args) => (
  <Menu {...args} trigger={<Button label="Menu trigger" hasCaret />}>
    <MenuItem onSelect={args.onSelect}>Copy</MenuItem>
    <MenuItem onSelect={args.onSelect}>Delete</MenuItem>
  </Menu>
);

export const TriggerElement = (args) => (
  <Flex>
    <FlexItem>
      <Menu
        {...args}
        trigger={<Button theme="outlined" label="Recommended trigger" hasCaret />}
      >
        <MenuItem onSelect={args.onSelect}>Cake</MenuItem>
        <MenuItem onSelect={args.onSelect}>Pizza</MenuItem>
        <MenuItem onSelect={args.onSelect}>Tide pod</MenuItem>
      </Menu>
    </FlexItem>
    <FlexItem>
      <Menu {...args} trigger={<button>any button will work</button>}>
        <MenuItem onSelect={args.onSelect}>Cake</MenuItem>
        <MenuItem onSelect={args.onSelect}>Pizza</MenuItem>
        <MenuItem onSelect={args.onSelect}>Tide pod</MenuItem>
      </Menu>
    </FlexItem>
  </Flex>
);

TriggerElement.parameters = {
  docs: {
    description: {
      story:
        'A `Button` with the `hasCaret` prop enabled is recommended, but the Menu trigger can accept a `button`, or any component that renders a focusable element.',
    },
  },
};

export const CustomItems = (args) => (
  <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
    <MenuItem onSelect={args.onSelect}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <TrashIcon />
          </FlexItem>
          <FlexItem>Delete</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={args.onSelect}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <EditIcon />
          </FlexItem>
          <FlexItem>Edit</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={args.onSelect}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <CloneIcon />
          </FlexItem>
          <FlexItem>Clone</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuItem onSelect={args.onSelect}>
      <div className="color--primary">
        <Flex align="center">
          <FlexItem shrink>
            <FundingIcon />
          </FlexItem>
          <FlexItem>Bribe</FlexItem>
        </Flex>
      </div>
    </MenuItem>
    <MenuLink onSelect={args.onSelect} href="/">
      Go to Storybook home
    </MenuLink>
  </Menu>
);

CustomItems.parameters = {
  docs: {
    description: {
      story: '`MenuItem` and `MenuLink` will accept a plain string or any JSX node.',
    },
  },
};

export const Rest = (args) => (
  <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
    <MenuItem data-test="hello">Delete</MenuItem>
    <MenuLink href="#" data-test="world">
      Edit
    </MenuLink>
  </Menu>
);

Rest.parameters = {
  docs: {
    description: {
      story: '`MenuItem` and `MenuLink` accept rest props.',
    },
  },
};

export const DisabledItems = (args) => (
  <Menu
    {...args}
    trigger={<Button theme="outlined" label="Menu with disabled item" hasCaret />}
  >
    <MenuItem isDisabled onSelect={args.onSelect}>
      <Tooltip trigger={<button>Cake</button>} message="Not your birthday" />
    </MenuItem>
    <MenuItem onSelect={args.onSelect}>Pizza</MenuItem>
    <MenuItem onSelect={args.onSelect}>Tide pod</MenuItem>
  </Menu>
);

DisabledItems.parameters = {
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
  argTypes: {
    onSelect: { action: 'onSelect' },
  },
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
