import * as RadixPopover from '@radix-ui/react-popover';
import React, { useEffect, useState, Ref, RefObject, HTMLAttributes } from 'react';
import { CSSTransition } from 'react-transition-group';
import FDS from 'dictionary/js/styleConstants';
import { useDisableScroll, useCloseOnScroll } from './hooks';

export type Position = 'top' | 'right' | 'bottom' | 'left';
export type InteractionMode = 'hover' | 'click' | 'controlled';

export interface PopoverProps {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: React.ReactElement;

  /**
   * JSX - Content to place in the positioned popover container. The popover container
   * does not provide any default styling; content should be styled with background,
   * borders, and shadows as appropriate.
   */
  children: React.ReactNode | React.ReactElement;

  /**
   * What mode of interaction triggers the active/inactive state of the popover.
   *
   * `hover` - popover opens on trigger hover/focus
   *
   * `click` - popover opens on trigger click
   *
   * `controlled` - enables "fully controlled" mode in which the popover is only active
   * when the `isOpen` prop is set to `true`. Use `onUserDismiss` to handle dismissal
   * events from user interaction.
   */
  interactionMode?: InteractionMode;

  /** Controlls active state of popover when in fully controlled interaction mode */
  isOpen?: boolean;

  /**
   * Callback fired when user takes an action to dismiss the popover.
   * (e.g. ESC press, clicking outside, etc.)
   * Useful for updating `isOpen` in controlled mode.
   * Function is invoked with the DOM event as the argument.
   */
  onUserDismiss?: (e: MouseEvent | KeyboardEvent) => void;

  /** disables portaling the popover to `document.body` */
  disablePortal?: boolean;

  /**
   * Vertical position preference of popover content.
   * `top` for example, will place the popover content above the trigger.
   */
  position?: Position;

  /** Horizontal alignment preference of popover content relative to trigger */
  alignment?: 'start' | 'center' | 'end';

  /** Offset distance from trigger. */
  distance?: number;

  /** Delay in milliseconds for popover to trigger (hover mode only) */
  delay?: number;

  /** Name of transition for popover content */
  transitionName?: 'GrowFast';

  /** Callback called when popover opens */
  onOpen?: () => void;

  /** Callback called when popover closes */
  onClose?: () => void;

  /** When popover opens, this element should freeze scrolling. When the popover closes, the scrollability of this element should resume. */
  disableScrollRef?: RefObject<HTMLElement>;

  /** When the Popover detects scroll events from this ref, the popover should close. */
  closeOnScrollRef?: RefObject<HTMLElement>;

  /** Ref to forward to the content container of the popover */
  ref?: Ref<HTMLElement>;
}

const Popover = ({
  interactionMode = 'click',
  disablePortal,
  position = 'bottom',
  alignment = 'start',
  distance = 4,
  delay = 0,
  onOpen = () => {},
  onClose = () => {},
  trigger,
  children,
  isOpen,
  transitionName,
  disableScrollRef,
  closeOnScrollRef,
}: PopoverProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);
  useCloseOnScroll(closeOnScrollRef, isActive, () => setIsActive(false));
  useDisableScroll(disableScrollRef, isActive);

  // update active state on props change to accommodate fully controlled popovers
  useEffect(() => {
    setIsActive(interactionMode === 'controlled' && !!isOpen);
  }, [interactionMode, isOpen]);

  let triggerProps: HTMLAttributes<HTMLElement> = {};
  let hoverTimeout: number;
  switch (interactionMode) {
    case 'hover':
      triggerProps.onMouseEnter = () => {
        if (delay > 0) {
          hoverTimeout = setTimeout(setIsActive, delay, true);
        } else {
          setIsActive(true);
        }
      };
      triggerProps.onMouseLeave = () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        setIsActive(false);
      };
      triggerProps.onKeyUp = (e) => {
        if (e.key === 'Tab') {
          setIsActive(true);
        }
      };
      triggerProps.onKeyDown = (e) => {
        if (e.key === 'Tab') {
          setIsActive(false);
        }
      };
      triggerProps.onClick = (e) => {
        e.stopPropagation();
        setIsActive(false);
      };
      triggerProps.tabIndex = 1;
      break;
    case 'click':
      triggerProps.onClick = (e) => {
        e.stopPropagation();
        setIsActive(!isActive);
      };
      break;
    default:
      triggerProps = {};
  }

  const clonedTrigger = React.cloneElement(trigger, triggerProps);

  const contentStyle = {
    zIndex: Number(FDS.ZINDEX_MODAL),
  };

  const popperContent = (
    <CSSTransition
      onEntered={onOpen}
      onExited={onClose}
      in={isActive}
      unmountOnExit
      timeout={transitionName ? 200 : 0}
      classNames={transitionName ? `rtg${transitionName}` : undefined}
    >
      <div>{children}</div>
    </CSSTransition>
  );

  return (
    <RadixPopover.Root defaultOpen={isOpen}>
      <RadixPopover.Trigger asChild>{clonedTrigger}</RadixPopover.Trigger>
      <RadixPopover.Content
        style={{
          ...contentStyle,
        }}
        className="ease-in-out"
        align={alignment}
        side={position}
        sideOffset={distance}
        portalled={!!disablePortal}
      >
        {popperContent}
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
};

Popover.displayName = 'Popover';

export default Popover;
