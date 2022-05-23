import React from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuTrigger from './ContextMenuTrigger';
import ContextMenuContent from './ContextMenuContent';

export type ContextMenuProps = Omit<RadixContextMenu.ContextMenuProps, 'dir' | 'modal'>;

const ContextMenu = ({ children, onOpenChange }: ContextMenuProps): JSX.Element => {
  return (
    <RadixContextMenu.Root onOpenChange={onOpenChange} dir="ltr" modal>
      {children}
    </RadixContextMenu.Root>
  );
};

ContextMenu.Item = ContextMenuItem;
ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Content = ContextMenuContent;

export default ContextMenu;
