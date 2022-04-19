import React from 'react';
import { noop } from 'util/index';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import cc from 'classcat';

export type MenuItemProps = Pick<
  DropdownMenu.DropdownMenuItemProps,
  'asChild' | 'disabled' | 'onSelect' | 'textValue' | 'children'
>;

const MenuItem = ({
  children,
  disabled,
  onSelect,
  ...rest
}: MenuItemProps): JSX.Element => (
  <DropdownMenu.Item
    className={cc(['fdsMenuItem', { 'fdsMenuItem--disabled': disabled }])}
    onSelect={disabled ? noop : onSelect}
    aria-disabled={disabled}
    disabled={disabled}
    {...rest}
  >
    {children}
  </DropdownMenu.Item>
);

export default MenuItem;
