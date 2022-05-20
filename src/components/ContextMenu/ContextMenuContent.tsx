import React from 'react';
import cc from 'classcat';
import * as ContextMenu from '@radix-ui/react-context-menu';

export type ContextMenuContentProps = Pick<
  ContextMenu.ContextMenuContentProps,
  | 'asChild'
  | 'children'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onFocusOutside'
  | 'onInteractOutside'
  | 'onPointerDownOutside'
>;

const ContextMenuContent = ({
  children,
  ...rest
}: ContextMenuContentProps): JSX.Element => (
  <ContextMenu.Content
    {...rest}
    className={cc(['fdsMenuItems elevation--2 rounded--all bgColor--white'])}
    avoidCollisions
    sideOffset={0}
    forceMount={undefined}
    loop={false}
    allowPinchZoom={false}
    collisionTolerance={0}
  >
    {children}
  </ContextMenu.Content>
);

export default ContextMenuContent;
