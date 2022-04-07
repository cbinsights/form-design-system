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
import { MenuTriggerProps } from './MenuTrigger';
import { MenuContentProps } from './MenuContent';
import { MenuItemProps } from './MenuItem';
import { MenuRootProps } from './MenuRoot';

const hidden = {
  table: {
    disable: true,
  },
};

const events = {
  content: {
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
    onOpenChange: {
      ...hidden,
      action: 'onOpenChange',
    },
  },
  item: {
    onSelect: {
      ...hidden,
      action: 'onSelect',
    },
  },
};

export const Primary = {
  render: (): JSX.Element => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button label="Menu trigger" hasCaret />
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>🍕 Pizza</Menu.Item>
        <Menu.Item>🌮 Tacos</Menu.Item>
        <Menu.Item>
          <Tooltip
            trigger={<span>🫔 Tamal</span>}
            message={"Yes, that's the singular for tamales"}
          />
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

export const AnyTriggerWorks = {
  render: (): JSX.Element => (
    <Flex>
      <FlexItem>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button theme="outlined" label="Recommended trigger" hasCaret />
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Cake</Menu.Item>
            <Menu.Item>Pizza</Menu.Item>
            <Menu.Item>Tide pod</Menu.Item>
          </Menu.Content>
        </Menu.Root>
      </FlexItem>
      <FlexItem>
        <Menu.Root>
          <Menu.Trigger asChild>
            <button>any button will work</button>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Cake</Menu.Item>
            <Menu.Item>Pizza</Menu.Item>
            <Menu.Item>Tide pod</Menu.Item>
          </Menu.Content>
        </Menu.Root>
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
  render: (): JSX.Element => (
    <Menu.Root>
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
    </Menu.Root>
  ),
  parameters: {
    docs: {
      description: {
        story: '`Menu.Item` will accept a plain string or any JSX node.',
      },
    },
  },
};

export const Trigger: StoryObj<MenuTriggerProps> = {
  render: (args: MenuTriggerProps): JSX.Element => {
    return (
      <Menu.Root>
        <Menu.Trigger {...args}>
          <Button label="Trigger Button" hasCaret />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Pase</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    );
  },
  argTypes: {
    asChild: {
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
};

export const Root: StoryObj<MenuRootProps> = {
  render: (args: MenuRootProps): JSX.Element => {
    return (
      <Menu.Root {...args} defaultOpen={args.defaultOpen}>
        <Menu.Trigger asChild>
          <Button label="Trigger Button" hasCaret />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Pase</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    );
  },
  argTypes: {
    defaultOpen: {
      type: 'boolean',
      defaultValue: true,
    },
    dir: {
      options: ['ltr', 'rtl'],
      defaultValue: 'ltr',
      control: { type: 'radio' },
    },
    modal: {
      type: 'boolean',
      defaultValue: true,
    },
    open: {
      type: 'boolean',
      required: false,
    },
    ...events.root,
  },
};

export const Content = {
  render: (args: MenuContentProps): JSX.Element => {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button label="Trigger Button" hasCaret style={{ minWidth: '400px' }} />
        </Menu.Trigger>
        <Menu.Content {...args}>
          <div>
            <Menu.Item>Cut</Menu.Item>
            <Menu.Item>Copy</Menu.Item>
            <Menu.Item>Pase</Menu.Item>
          </div>
        </Menu.Content>
      </Menu.Root>
    );
  },
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      defaultValue: 'center',
      control: { type: 'radio' },
    },
    alignOffset: {
      type: 'number',
      defaultValue: 0,
    },
    allowPinchZoom: {
      type: 'boolean',
      defaultValue: false,
    },
    asChild: {
      type: 'boolean',
      defaultValue: false,
    },
    avoidCollisions: {
      type: 'boolean',
      defaultValue: true,
    },
    collisionTolerance: {
      type: 'number',
      defaultValue: 0,
    },
    forceMount: {
      type: 'boolean',
      required: false,
    },
    loop: {
      type: 'boolean',
      defaultValue: false,
    },
    portalled: {
      type: 'boolean',
      defaultValue: true,
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'bottom',
      control: { type: 'radio' },
    },
    sideOffset: {
      type: 'number',
      defaultValue: 0,
    },
    ...events.content,
  },
};

export const Item = {
  render: (args: MenuItemProps & { onSelect: () => void }): JSX.Element => {
    return (
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button label="Trigger Button" hasCaret />
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item {...args}>
            <span style={{ outline: '1px dotted red' }}>Click Me!</span>
          </Menu.Item>
        </Menu.Content>
      </Menu.Root>
    );
  },
  argTypes: {
    asChild: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      required: false,
    },
    textValue: {
      type: 'string',
      required: false,
    },
    ...events.item,
  },
};

export default {
  // component: Menu,
  subcomponents: Menu,
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
  storySort: {
    order: ['Primary', '*'],
  },
};
