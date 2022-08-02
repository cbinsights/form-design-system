import React from 'react';
import cc from 'classcat';
import * as ContextMenu from '@radix-ui/react-context-menu';

type RequiredFocusOutsideEventFn = Required<
  React.ComponentProps<typeof ContextMenu.Content>
>['onFocusOutside'];

type RequiredPointerDownOutsideEventFn = Required<
  React.ComponentProps<typeof ContextMenu.Content>
>['onPointerDownOutside'];

type FocusOutsideEvent = Parameters<RequiredFocusOutsideEventFn>[0];
type PointerDownOutsideEvent = Parameters<RequiredPointerDownOutsideEventFn>[0];

export interface ContextMenuContentProps {
  /** Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node. */
  asChild?: boolean;

  /** Event handler called when focus moves back after closing. It can be prevented by calling event.preventDefault. */
  onCloseAutoFocus?: (event: Event) => void;

  /** Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /** Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault. */
  onFocusOutside?: (event: FocusOutsideEvent) => void;

  /** Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault. */
  onInteractOutside?: (event: PointerDownOutsideEvent | FocusOutsideEvent) => void;

  /** Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault. */
  onPointerDownOutside?: (event: PointerDownOutsideEvent) => void;

  /** Content of your ContextMenu */
  children: React.ReactNode;
}

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
