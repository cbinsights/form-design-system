import React from 'react';
import cc from 'classcat';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export type MenuContentProps = Pick<
  DropdownMenu.DropdownMenuContentProps,
  | 'asChild'
  | 'children'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onFocusOutside'
  | 'onInteractOutside'
  | 'onPointerDownOutside'
  | 'portalled'
>;

const MenuContent = ({ children, ...rest }: MenuContentProps): JSX.Element => (
  <DropdownMenu.Content
    {...rest}
    className={cc(['fdsMenuItems elevation--2 rounded--all bgColor--white'])}
    align={'start'}
    avoidCollisions
    sideOffset={0}
    forceMount={undefined}
    loop={false}
    allowPinchZoom={false}
    side={'bottom'}
    collisionTolerance={0}
  >
    {children}
  </DropdownMenu.Content>
);

export default MenuContent;
