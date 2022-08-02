import React from 'react';
import Content from './MenuContent';
import Item from './MenuItem';
import Trigger from './MenuTrigger';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export interface MenuProps {
  /** The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state. */
  defaultOpen?: boolean;

  /** The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange. */
  open?: boolean;

  /** Event handler called when the open state of the dropdown menu changes. */
  onOpenChange?: (open: boolean) => void;

  /** The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers. */
  modal?: boolean;

  /** Menu content, items and trigger */
  children: React.ReactNode;
}

const Menu = ({ children, modal = true, ...rest }: MenuProps): JSX.Element => {
  return (
    <DropdownMenu.Root {...rest} modal={modal} dir={'ltr'}>
      {children}
    </DropdownMenu.Root>
  );
};

Menu.Content = Content;
Menu.Item = Item;
Menu.Trigger = Trigger;

export default Menu;
