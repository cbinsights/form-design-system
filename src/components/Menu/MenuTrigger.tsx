import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
export interface MenuTriggerProps {
  /** Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. */
  asChild?: boolean;

  /** ContextMenuTrigger */
  children: React.ReactNode;
}

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
