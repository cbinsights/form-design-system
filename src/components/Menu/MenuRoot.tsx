import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuRootProps = DropdownMenu.DropdownMenuProps;

const MenuRoot = ({ children, ...rest }: MenuRootProps): JSX.Element => {
  return <DropdownMenu.Root {...rest}>{children}</DropdownMenu.Root>;
};

export default MenuRoot;
