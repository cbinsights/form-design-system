import React from 'react';
import { MenuItem as ReachMenuItem } from '@reach/menu-button';
import { noop } from 'util/index';

export interface MenuItemProps {
  /** selection callback */
  onSelect: () => void;

  /** React children - any JSX can be used in a menu item */
  children: Array<React.ReactNode> | React.ReactNode;

  /** Styles menu item as disabled and disables selection events */
  isDisabled?: boolean;
}

const MenuItem = ({
  onSelect,
  children,
  isDisabled,
  ...rest
}: MenuItemProps): JSX.Element => (
  <ReachMenuItem
    className={isDisabled ? 'fdsMenuItem--disabled' : undefined}
    onSelect={!isDisabled ? onSelect : noop}
    aria-disabled={isDisabled}
    {...rest}
  >
    {children}
  </ReachMenuItem>
);

export default MenuItem;
