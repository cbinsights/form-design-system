import React, {
  useRef,
  useEffect,
  useState,
  Ref,
  RefObject,
  MutableRefObject,
  HTMLAttributes,
} from 'react';
import ReactDOM from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import FDS from 'dictionary/js/styleConstants';
import { isNotRefsEvent } from 'components/util/events';
import { getPopperPlacement } from './util';
import { useDisableScroll, useCloseOnScroll } from './hooks';

export type Position = 'auto' | 'top' | 'right' | 'bottom' | 'left';
export type PopperAlignment = 'start' | 'end';
export type Alignment = PopperAlignment | 'center';
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
  alignment?: Alignment;

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

const Popover = React.forwardRef<HTMLElement, PopoverProps>(
  (
    {
      interactionMode = 'click',
      disablePortal,
      position = 'auto',
      alignment = 'start',
      distance = 4,
      delay = 0,
      onUserDismiss = () => {},
      onOpen = () => {},
      onClose = () => {},
      trigger,
      children,
      isOpen,
      transitionName,
      disableScrollRef,
      closeOnScrollRef,
    }: PopoverProps,
    forwardedRef
  ) => {
    const [isActive, setIsActive] = useState(false);
    const refTriggerWrap = useRef(null);
    const refContent = forwardedRef || React.createRef();

    useCloseOnScroll(closeOnScrollRef, isActive, () => setIsActive(false));
    useDisableScroll(disableScrollRef, isActive);

    // update active state on props change to accommodate fully controlled popovers
    useEffect(() => {
      setIsActive(interactionMode === 'controlled' && !!isOpen);
    }, [interactionMode, isOpen]);

    /**
     * Called when user takes an action to dismiss the popover
     */
    const handleUserDismiss = (e: MouseEvent | KeyboardEvent) => {
      onUserDismiss(e);
      if (interactionMode !== 'controlled') {
        setIsActive(false);
      }
    };

    /**
     * Closes popover when user presses ESC
     */
    const handleKeyPress = (e: KeyboardEvent) => {
      const isEscapeKey = ['Esc', 'Escape'].some((key) => key === e.key);
      if (isEscapeKey) handleUserDismiss(e);
    };

    /**
     * Closes popover when user clicks outside of content or trigger
     */
    const handleBodyClick = (e: MouseEvent) => {
      const isNotPopoverClick = isNotRefsEvent([refTriggerWrap, refContent], e);
      if (isNotPopoverClick) handleUserDismiss(e);
    };

    useEffect(() => {
      if (isActive) {
        document.body.addEventListener('mousedown', handleBodyClick, false);
        document.body.addEventListener('keyup', handleKeyPress, false);
      }

      return () => {
        document.body.removeEventListener('mousedown', handleBodyClick, false);
        document.body.removeEventListener('keyup', handleKeyPress, false);
      };
    }, [isActive]);

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

    // https://popper.js.org/popper-documentation.html#modifiers
    const popperModifiers = [
      {
        name: 'offset',
        enabled: true,
        options: {
          offset: [0, distance],
        },
      },
      {
        name: 'preventOverflow',
        options: {
          boundary: 'viewport',
        },
      },
      {
        name: 'computeStyles',
        options: {
          // When gpuAcceleration is enabled, `react-popper` always
          // positions content to top/left 0 and uses `translate3d` to
          // nudge it into place.
          //
          // This can cause issues with CSS transitions because it sets
          // `will-change: transform`, which forces transitions to also
          // ease the `translate3d`, which causes an unintended
          // "diagonal slide" effect as the content appears.
          gpuAcceleration: false,
        },
      },
    ];

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
        <Popper
          innerRef={(node) => {
            if (typeof refContent === 'function') {
              refContent(node);
            } else {
              (refContent as MutableRefObject<HTMLElement>).current = node;
            }
          }}
          modifiers={popperModifiers}
          placement={getPopperPlacement(position, alignment)}
        >
          {({ placement, ref, style }) => (
            <div
              ref={ref}
              style={{
                ...contentStyle,
                ...style,
              }}
              data-placement={placement}
            >
              {children}
            </div>
          )}
        </Popper>
      </CSSTransition>
    );

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref} aria-haspopup="true" aria-expanded={isActive}>
              <div ref={refTriggerWrap}>{clonedTrigger}</div>
            </div>
          )}
        </Reference>
        {disablePortal
          ? popperContent
          : ReactDOM.createPortal(
              popperContent,
              document.body /* eslint-disable-line no-undef */
            )}
      </Manager>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
