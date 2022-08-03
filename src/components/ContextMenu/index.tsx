import React from 'react';
import * as RadixContextMenu from '@radix-ui/react-context-menu';
import ContextMenuItem from './ContextMenuItem';
import ContextMenuTrigger from './ContextMenuTrigger';
import ContextMenuContent from './ContextMenuContent';
export interface ContextMenuProps {
  /** Event handler called when the open state of the context menu changes. */
  onOpenChange?: (open: boolean) => void;

  /** ContextMenu content, items and trigger */
  children: React.ReactNode;
}

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
