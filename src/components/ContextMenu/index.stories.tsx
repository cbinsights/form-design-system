import React from 'react';
import { StoryObj } from '@storybook/react';
import ContextMenu, { ContextMenuProps } from '.';
import { ContextMenuItemProps } from './ContextMenuItem';
import { ContextMenuContentProps } from './ContextMenuContent';

type AllEvents = Pick<ContextMenuProps, 'onOpenChange'> &
  Pick<ContextMenuItemProps, 'onSelect'> &
  Pick<
    ContextMenuContentProps,
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
  render: (args): JSX.Element => {
    return (
      <ContextMenu onOpenChange={args.onOpenChange}>
        <ContextMenu.Trigger>
          <div
            style={{
              display: 'flex',
              height: '100px',
              width: '200px',
              border: '1px dotted red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            right click here
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content
          onCloseAutoFocus={args.onCloseAutoFocus}
          onEscapeKeyDown={args.onEscapeKeyDown}
          onPointerDownOutside={args.onPointerDownOutside}
          onFocusOutside={args.onFocusOutside}
          onInteractOutside={args.onInteractOutside}
        >
          <ContextMenu.Item onSelect={args.onSelect}>Copy</ContextMenu.Item>
          <ContextMenu.Item onSelect={args.onSelect}>Paste</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
  },
  argTypes: {
    ...events.root,
    ...events.content,
    ...events.item,
  },
};

export const Disabled: StoryObj = {
  render: (_args) => (
    <ContextMenu>
      <ContextMenu.Trigger>
        <div
          style={{
            display: 'flex',
            height: '100px',
            width: '200px',
            border: '1px dotted red',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          right click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item disabled>Send Email</ContextMenu.Item>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Item>Paste</ContextMenu.Item>
        <ContextMenu.Item>Undo</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  ),
};

export default {
  title: 'Components/ContextMenu',
  parameters: {
    componentSubtitle: 'Renders a context dropdown containing actions the user can take.',
  },
};
