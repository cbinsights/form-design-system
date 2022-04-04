import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export interface MenuProps {
  /** JSX node - the element that should trigger the menu */
  trigger: React.ReactElement;

  /** React children (should be of type `MenuItem`) */
  children: React.ReactNode;

  /** Prevent trigger from opening menu */
  isDisabled?: boolean;

  defaultOpen?: boolean;

  open?: boolean;

  align?: DropdownMenu.DropdownMenuContentProps['align'];
}

export const Menu = ({
  children,
  isDisabled,
  trigger,
  defaultOpen,
  open,
  align = 'start',
}: MenuProps): JSX.Element => {
  if (isDisabled) return trigger;
  return (
    <DropdownMenu.Root defaultOpen={defaultOpen} open={open}>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content
        align={align}
        className="fdsMenuItems elevation--2 rounded--all bgColor--white"
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default Menu;
