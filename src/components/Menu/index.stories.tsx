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
import Menu, { MenuProps } from '.';
import { StoryObj } from '@storybook/react';

interface MenuStoryProps extends MenuProps {
  onSelect: () => void;
}

export const Primary: StoryObj<MenuStoryProps> = {
  render: ({ onSelect, ...args }: MenuStoryProps): JSX.Element => (
    <Menu {...args} trigger={<Button label="Menu trigger" hasCaret />}>
      <MenuItem onSelect={onSelect}>Copy</MenuItem>
      <MenuItem onSelect={onSelect}>Delete</MenuItem>
    </Menu>
  ),
};

export const TriggerElement: StoryObj<MenuStoryProps> = {
  render: ({ onSelect, ...args }: MenuStoryProps): JSX.Element => (
    <Flex>
      <FlexItem>
        <Menu
          {...args}
          trigger={<Button theme="outlined" label="Recommended trigger" hasCaret />}
        >
          <MenuItem onSelect={onSelect}>Cake</MenuItem>
          <MenuItem onSelect={onSelect}>Pizza</MenuItem>
          <MenuItem onSelect={onSelect}>Tide pod</MenuItem>
        </Menu>
      </FlexItem>
      <FlexItem>
        <Menu {...args} trigger={<button>any button will work</button>}>
          <MenuItem onSelect={onSelect}>Cake</MenuItem>
          <MenuItem onSelect={onSelect}>Pizza</MenuItem>
          <MenuItem onSelect={onSelect}>Tide pod</MenuItem>
        </Menu>
      </FlexItem>
    </Flex>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A `Button` with the `hasCaret` prop enabled is recommended, but the Menu trigger can accept a `button`, or any component that renders a focusable element.',
      },
    },
  },
};

export const CustomItems: StoryObj<MenuStoryProps> = {
  render: ({ onSelect, ...args }: MenuStoryProps): JSX.Element => (
    <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
      <MenuItem onSelect={onSelect}>
        <div className="color--primary">
          <Flex align="center">
            <FlexItem shrink>
              <TrashIcon />
            </FlexItem>
            <FlexItem>Delete</FlexItem>
          </Flex>
        </div>
      </MenuItem>
      <MenuItem onSelect={onSelect}>
        <div className="color--primary">
          <Flex align="center">
            <FlexItem shrink>
              <EditIcon />
            </FlexItem>
            <FlexItem>Edit</FlexItem>
          </Flex>
        </div>
      </MenuItem>
      <MenuItem onSelect={onSelect}>
        <div className="color--primary">
          <Flex align="center">
            <FlexItem shrink>
              <CloneIcon />
            </FlexItem>
            <FlexItem>Clone</FlexItem>
          </Flex>
        </div>
      </MenuItem>
      <MenuItem onSelect={onSelect}>
        <div className="color--primary">
          <Flex align="center">
            <FlexItem shrink>
              <FundingIcon />
            </FlexItem>
            <FlexItem>Bribe</FlexItem>
          </Flex>
        </div>
      </MenuItem>
      <MenuLink onSelect={onSelect} href="/">
        Go to Storybook home
      </MenuLink>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: '`MenuItem` and `MenuLink` will accept a plain string or any JSX node.',
      },
    },
  },
};

export const Rest: StoryObj<MenuStoryProps> = {
  render: (args: MenuProps): JSX.Element => (
    <Menu {...args} trigger={<Button hasCaret label="actions" theme="outlined" />}>
      <MenuItem data-test="hello" onSelect={() => {}}>
        Delete
      </MenuItem>
      <MenuLink href="#" data-test="world">
        Edit
      </MenuLink>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: '`MenuItem` and `MenuLink` accept rest props.',
      },
    },
  },
};

export const DisabledItems: StoryObj<MenuStoryProps> = {
  render: ({ onSelect, ...args }: MenuStoryProps): JSX.Element => (
    <Menu
      {...args}
      trigger={<Button theme="outlined" label="Menu with disabled item" hasCaret />}
    >
      <MenuItem isDisabled onSelect={onSelect}>
        <Tooltip trigger={<button>Cake</button>} message="Not your birthday" />
      </MenuItem>
      <MenuItem onSelect={onSelect}>Pizza</MenuItem>
      <MenuItem onSelect={onSelect}>Tide pod</MenuItem>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When the `isDisabled` prop is passed to a `MenuItem`, the item will be styled as disabled and the `onSelect` handler will not be called. Prefer hiding actions instead of disabling them. Only disable a `MenuItem` if the disabling is only temporary (e.g. disabling a collections clone while a clone is in progress). When disabling a `MenuItem`, a `Tooltip` is recommended to explain why the action is disabled.',
      },
    },
  },
};

export default {
  component: Menu,
  subcomponents: {
    MenuItem,
    MenuLink,
  },
  title: 'Components/Menu',
  argTypes: {
    onSelect: {
      action: 'onSelect',
    },
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
