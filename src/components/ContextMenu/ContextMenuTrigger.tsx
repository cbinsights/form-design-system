import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';

export type MenuTriggerProps = Pick<
  ContextMenu.ContextMenuTriggerProps,
  'asChild' | 'children'
>;

const ContextMenuTrigger = ({
  children,
  asChild = true,
  ...rest
}: MenuTriggerProps): JSX.Element => {
  return (
    <ContextMenu.Trigger asChild={asChild} {...rest}>
      {children}
    </ContextMenu.Trigger>
  );
};

export default ContextMenuTrigger;
