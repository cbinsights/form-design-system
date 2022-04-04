import React from 'react';
// import { MenuItem as ReachMenuItem } from '@reach/menu-button';
import { noop } from 'util/index';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import cc from 'classcat';

export interface MenuItemProps extends DropdownMenu.DropdownMenuItemProps {
  /** selection callback */
  onSelect?: () => void;

  /** React children - any JSX can be used in a menu item */
  children: React.ReactNode;

  /** Styles menu item as disabled and disables selection events */
  isDisabled?: boolean;
}

export const MenuItem = ({
  children,
  isDisabled,
  onSelect,
  ...rest
}: MenuItemProps): JSX.Element => {
  return (
    <DropdownMenu.Item
      className={cc(['fdsMenuItem', isDisabled ? 'fdsMenuItem--disabled' : undefined])}
      onSelect={!isDisabled ? onSelect : noop}
      aria-disabled={isDisabled}
      {...rest}
    >
      {children}
    </DropdownMenu.Item>
  );
};

export default MenuItem;
