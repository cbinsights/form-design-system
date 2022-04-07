import React from 'react';
import cc from 'classcat';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuContentProps = DropdownMenu.DropdownMenuContentProps;

const MenuContent = ({
  children,
  align = 'start',
  ...rest
}: MenuContentProps): JSX.Element => (
  <DropdownMenu.Content
    className={cc(['fdsMenuItems elevation--2 rounded--all bgColor--white'])}
    align={align}
    {...rest}
  >
    {children}
  </DropdownMenu.Content>
);

export default MenuContent;
