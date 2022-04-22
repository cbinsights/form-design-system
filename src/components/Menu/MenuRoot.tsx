import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuRootProps = Omit<DropdownMenu.DropdownMenuProps, 'modal' | 'dir'>;

const MenuRoot = ({ children, ...rest }: MenuRootProps): JSX.Element => {
  return (
    <DropdownMenu.Root {...rest} modal={true} dir={'ltr'}>
      {children}
    </DropdownMenu.Root>
  );
};

export default MenuRoot;
