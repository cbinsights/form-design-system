import React from 'react';
import CloneIcon from 'icons/react/CloneIcon';
import TrashIcon from 'icons/react/TrashIcon';
import EditIcon from 'icons/react/EditIcon';
import FundingIcon from 'icons/react/FundingIcon';
import { Menu, Tooltip, Dialog, Button, Flex, FlexItem } from 'components';
import { StoryObj } from '@storybook/react';
import { MenuProps } from '.';
import { MenuItemProps } from './MenuItem';
import MenuContent, { MenuContentProps } from './MenuContent';
import MenuItem from './MenuItem';
import MenuTrigger from './MenuTrigger';

type AllEvents = Pick<MenuProps, 'onOpenChange'> &
  Pick<MenuItemProps, 'onSelect'> &
  Pick<
    MenuContentProps,
    | 'onCloseAutoFocus'
    | 'onEscapeKeyDown'
    | 'onPointerDownOutside'
    | 'onFocusOutside'
    | 'onInteractOutside'
  >;

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

export const Primary: StoryObj<AllEvents> = {
  render: (args: AllEvents): JSX.Element => (
    <Menu {...args} onOpenChange={args.onOpenChange}>
      <Menu.Trigger asChild>
        <Button label="Menu trigger" hasCaret />
      </Menu.Trigger>
      <Menu.Content
        onCloseAutoFocus={args.onCloseAutoFocus}
        onEscapeKeyDown={args.onEscapeKeyDown}
        onPointerDownOutside={args.onPointerDownOutside}
        onFocusOutside={args.onFocusOutside}
        onInteractOutside={args.onInteractOutside}
      >
        <Menu.Item onSelect={args.onSelect}>🍕 Pizza</Menu.Item>
        <Menu.Item onSelect={args.onSelect}>🌮 Tacos</Menu.Item>
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

export const ShowDialogFromMenuItem: StoryObj<unknown> = {
  render: (args: unknown): JSX.Element => {
    const [showDialog, setShowDialog] = React.useState(false);

    return (
      <>
        <Menu {...args}>
          <Menu.Trigger asChild>
            <Button theme="outlined" label="Click me" hasCaret />
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item
              onSelect={() => {
                setShowDialog(true);
              }}
            >
              Show Dialog
            </Menu.Item>
          </Menu.Content>
        </Menu>
        <Dialog
          isOpen={showDialog}
          content="dialog content goes here"
          title="dialog title here"
          onDismiss={() => {
            setShowDialog(false);
          }}
        />
      </>
    );
  },
};

export const AnyTriggerWorks: StoryObj<unknown> = {
  render: (args: unknown): JSX.Element => (
    <Flex>
      <FlexItem>
        <Menu {...args}>
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
        <Menu {...args}>
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

export const CustomItems: StoryObj<unknown> = {
  render: (args: unknown): JSX.Element => (
    <Menu {...args}>
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
  render: (args: MenuProps) => {
    return (
      <Menu {...args}>
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
    <Menu {...args}>
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
  component: Menu,
  subcomponents: {
    MenuContent,
    MenuItem,
    MenuTrigger,
  },
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
};
