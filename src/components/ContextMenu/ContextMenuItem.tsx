import React from 'react';
import { noop } from 'util/index';
import * as ContextMenu from '@radix-ui/react-context-menu';
import cc from 'classcat';

export type ContextMenuItemProps = Pick<
  ContextMenu.ContextMenuItemProps,
  'asChild' | 'disabled' | 'onSelect' | 'textValue' | 'children'
>;

const ContextMenuItem = ({
  children,
  disabled,
  onSelect,
  ...rest
}: ContextMenuItemProps): JSX.Element => (
  <ContextMenu.Item
    className={cc(['fdsMenuItem', { 'fdsMenuItem--disabled': disabled }])}
    onSelect={disabled ? noop : onSelect}
    aria-disabled={disabled}
    disabled={disabled}
    {...rest}
  >
    {children}
  </ContextMenu.Item>
);

export default ContextMenuItem;
