import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuTriggerProps = Pick<
  DropdownMenu.DropdownMenuTriggerProps,
  'asChild' | 'children'
>;

const MenuTrigger = ({
  children,
  asChild = true,
  ...rest
}: MenuTriggerProps): JSX.Element => {
  return (
    <DropdownMenu.Trigger asChild={asChild} {...rest}>
      {children}
    </DropdownMenu.Trigger>
  );
};

export default MenuTrigger;
