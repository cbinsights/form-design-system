import React, { useEffect, useState, RefObject, HTMLAttributes, useRef } from 'react';
import cc from 'classcat';
import * as RadixPopover from '@radix-ui/react-popover';
import { CSSTransition } from 'react-transition-group';
import FDS from 'dictionary/js/styleConstants';
import { useDisableScroll, useCloseOnScroll } from './hooks';

export type Position = 'top' | 'right' | 'bottom' | 'left';
export type InteractionMode = 'hover' | 'click' | 'controlled';

// gets non-optional function type because Parameters doesnt take `undefined`
type RequiredOnInteractOutsideFn = Required<
  React.ComponentProps<typeof RadixPopover.Content>
>['onInteractOutside'];

// getting the type of the event parameter to use in onUserDismiss from the tuple returned by Parameters
type InteractOutsideEvent = Parameters<RequiredOnInteractOutsideFn>[0];
export interface PopoverProps {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: React.ReactElement;

  /**
   * JSX - Content to place in the positioned popover container. The popover container
   * does not provide any default styling; content should be styled with background,
   * borders, and shadows as appropriate.
   */
  children: React.ReactNode;

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
  onUserDismiss?: (e: MouseEvent | KeyboardEvent | InteractOutsideEvent) => void;

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
  ref?: RefObject<HTMLDivElement>;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      alignment = 'start',
      children,
      closeOnScrollRef,
      delay = 0,
      disablePortal,
      disableScrollRef,
      distance = 4,
      interactionMode = 'click',
      isOpen = false,
      onClose = () => {},
      onOpen = () => {},
      onUserDismiss = () => {},
      position = 'bottom',
      transitionName,
      trigger,
    }: PopoverProps,
    forwardedRef
  ) => {
    const [isActive, setIsActive] = useState(isOpen);
    const refContent = forwardedRef || useRef<HTMLDivElement>(null);
    useCloseOnScroll(closeOnScrollRef, isActive, () => {
      handleChange(false);
    });
    useDisableScroll(disableScrollRef, isActive);

    const isHover = interactionMode === 'hover';
    const isControlled = interactionMode === 'controlled';

    // update active state on props change to accommodate fully controlled popovers
    useEffect(() => {
      setIsActive(isControlled && !!isOpen);
    }, [interactionMode, isOpen]);

    const triggerProps: HTMLAttributes<HTMLElement> = {
      style:
        isActive && isControlled
          ? { ...trigger.props.style, pointerEvents: 'none' }
          : trigger.props.style,
    };

    let hoverTimeout: NodeJS.Timeout;
    if (interactionMode === 'hover') {
      triggerProps.onMouseEnter = () => {
        if (delay > 0) {
          hoverTimeout = setTimeout(handleChange, delay, true);
        } else {
          handleChange(true);
        }
      };
      triggerProps.onMouseLeave = () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        handleChange(false);
      };
      triggerProps.onClick = (e) => {
        e.stopPropagation();
        handleChange(false);
      };
      triggerProps.tabIndex = 1;
    } else if (interactionMode === 'click') {
      triggerProps.onClick = (e) => {
        e.stopPropagation();
        handleChange(!isActive);
      };
    }

    const clonedTrigger = React.cloneElement(trigger, triggerProps);

    const contentStyle = {
      zIndex: Number(FDS.ZINDEX_MODAL),
    };

    const popperContent = (
      <CSSTransition
        in={isActive}
        unmountOnExit={isHover}
        timeout={transitionName ? 200 : 0}
        classNames={transitionName && !isActive ? `rtg${transitionName}` : undefined}
      >
        <div
          style={{
            ...contentStyle,
          }}
        >
          {children}
        </div>
      </CSSTransition>
    );

    const handleChange = (open: boolean) => {
      if (!isControlled) {
        setIsActive(open);
        if (open) {
          onOpen();
        } else {
          onClose();
        }
      }
    };

    return (
      <RadixPopover.Root open={isActive} onOpenChange={handleChange}>
        <RadixPopover.Trigger asChild>
          <div className="display--flex width--fit">{clonedTrigger}</div>
        </RadixPopover.Trigger>
        <RadixPopover.Content
          ref={refContent}
          className={cc([{ 'ease-in-out': !closeOnScrollRef }])}
          align={alignment}
          side={position}
          sideOffset={distance}
          portalled={!disablePortal}
          onEscapeKeyDown={onUserDismiss}
          onInteractOutside={onUserDismiss}
          avoidCollisions
          collisionTolerance={0}
        >
          {popperContent}
        </RadixPopover.Content>
      </RadixPopover.Root>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
