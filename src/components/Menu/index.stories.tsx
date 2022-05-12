import React from 'react';
import Button from 'components/Button';
import Flex from 'components/Flex';
import FlexItem from 'components/FlexItem';
import CloneIcon from 'icons/react/CloneIcon';
import TrashIcon from 'icons/react/TrashIcon';
import EditIcon from 'icons/react/EditIcon';
import FundingIcon from 'icons/react/FundingIcon';
import { Menu, Tooltip } from 'components';
import { StoryObj } from '@storybook/react';
import { MenuProps } from '.';

const hidden = {
  table: {
    disable: true,
  },
};

const events = {
  content: {
    ...hidden,
    onCloseAutoFocus: {
      ...hidden,
      action: 'onCloseAutoFocus',
    },
    onEscapeKeyDown: {
      ...hidden,
      action: 'onEscapeKeyDown',
    },
    onPointerDownOutside: {
      ...hidden,
      action: 'onPointerDownOutside',
    },
    onFocusOutside: {
      ...hidden,
      action: 'onFocusOutside',
    },
    onInteractOutside: {
      ...hidden,
      action: 'onInteractOutside',
    },
  },
  root: {
    ...hidden,
    onOpenChange: {
      ...hidden,
      action: 'onOpenChange',
    },
  },
  item: {
    ...hidden,
    onSelect: {
      ...hidden,
      action: 'onSelect',
    },
  },
};

export const Primary = {
  render: (args: any): JSX.Element => (
    <Menu {...args}>
      <Menu.Trigger {...args} asChild>
        <Button label="Menu trigger" hasCaret />
      </Menu.Trigger>
      <Menu.Content {...args}>
        <Menu.Item {...args}>🍕 Pizza</Menu.Item>
        <Menu.Item {...args}>🌮 Tacos</Menu.Item>
        <Menu.Item>
          <Tooltip
            trigger={<span>🫔 Tamal</span>}
            message={"Yes, that's the singular for tamales"}
          />
        </Menu.Item>
      </Menu.Content>
    </Menu>
  ),
  argTypes: {
    ...events.root,
    ...events.content,
    ...events.item,
  },
};

export const AnyTriggerWorks = {
  render: (_args: unknown): JSX.Element => (
    <Flex>
      <FlexItem>
        <Menu>
          <Menu.Trigger asChild>
            <Button theme="outlined" label="Recommended trigger" hasCaret />
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Cake</Menu.Item>
            <Menu.Item>Pizza</Menu.Item>
            <Menu.Item>Tide pod</Menu.Item>
          </Menu.Content>
        </Menu>
      </FlexItem>
      <FlexItem>
        <Menu>
          <Menu.Trigger asChild>
            <button>any button will work</button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Cake</Menu.Item>
            <Menu.Item>Pizza</Menu.Item>
            <Menu.Item>Tide pod</Menu.Item>
          </Menu.Content>
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

export const CustomItems = {
  render: (_args: unknown): JSX.Element => (
    <Menu>
      <Menu.Trigger asChild>
        <Button hasCaret label="actions" theme="outlined" />
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>
          <div className="color--primary">
            <Flex align="center">
              <FlexItem shrink>
                <TrashIcon />
              </FlexItem>
              <FlexItem>Delete</FlexItem>
            </Flex>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="color--primary">
            <Flex align="center">
              <FlexItem shrink>
                <EditIcon />
              </FlexItem>
              <FlexItem>Edit</FlexItem>
            </Flex>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="color--primary">
            <Flex align="center">
              <FlexItem shrink>
                <CloneIcon />
              </FlexItem>
              <FlexItem>Clone</FlexItem>
            </Flex>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="color--primary">
            <Flex align="center">
              <FlexItem shrink>
                <FundingIcon />
              </FlexItem>
              <FlexItem>Bribe</FlexItem>
            </Flex>
          </div>
        </Menu.Item>
        <Menu.Item>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Go to Storybook home
          </a>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  ),
  parameters: {
    docs: {
      description: {
        story: '`Menu.Item` will accept a plain string or any JSX node.',
      },
    },
  },
};

export const DisabledItems: StoryObj<MenuProps> = {
  render: (_args: MenuProps) => {
    return (
      <Menu>
        <Menu.Trigger>
          <Button label="Trigger Button" hasCaret />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item disabled>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.Content>
      </Menu>
    );
  },
};

export const Disabled: StoryObj<{ disabled: boolean }> = {
  render: (args: { disabled: boolean }) => (
    <Menu>
      <Menu.Trigger>
        <Button label="Trigger Button" hasCaret />
      </Menu.Trigger>
      {!args.disabled && (
        <Menu.Content>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menu.Content>
      )}
    </Menu>
  ),
  args: {
    disabled: true,
  },
};

export default {
  title: 'Components/Menu',
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
  storySort: {
    order: ['Primary', '*'],
  },
};
