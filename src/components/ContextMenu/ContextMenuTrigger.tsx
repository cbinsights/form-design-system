import React from 'react';
import * as ContextMenu from '@radix-ui/react-context-menu';

export interface ContextMenuTriggerProps {
  /** Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. */
  asChild?: boolean;

  /** ContextMenuTrigger */
  children: React.ReactNode;
}

const ContextMenuTrigger = ({
  children,
  asChild = true,
  ...rest
}: ContextMenuTriggerProps): JSX.Element => {
  return (
    <ContextMenu.Trigger asChild={asChild} {...rest}>
      {children}
    </ContextMenu.Trigger>
  );
};

export default ContextMenuTrigger;
