import React from 'react';
import { noop } from 'util/index';
import * as ContextMenu from '@radix-ui/react-context-menu';
import cc from 'classcat';

export interface ContextMenuItemProps {
  /** Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. */
  asChild?: boolean;

  /** When true, prevents the user from interacting with the item. */
  disabled?: boolean;

  /** Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the context menu from closing when selecting that item. */
  onSelect?: (event: Event) => void;

  /** Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item. Use this when the content is complex, or you have non-textual content inside. */
  textValue?: string;

  /** Menu items */
  children: React.ReactNode;
}

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
