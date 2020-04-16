import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import FDS from 'lib/dictionary/js/styleConstants';
import { isNotRefsEvent } from 'components/util/events';

export const VALID_POSITIONS = ['auto', 'top', 'right', 'bottom', 'left'];
export const VALID_ALIGNMENTS = ['start', 'end', 'center'];
export const VALID_INTERACTION_MODES = ['hover', 'click', 'controlled'];

/**
 * https://popper.js.org/popper-documentation.html#Popper.placements
 *
 * @param {String} position prop value
 * @param {String} alignment prop value
 * @returns {String} valid `placement` value for PopperJS `Popper` component
 */
export const getPopperPlacement = (position, alignment) => {
  // Popperjs does not have a "center" placement variation. It centers by default.
  // Our component explicitly accepts a `center` value for alignment.
  const variation = !alignment || alignment === 'center' ? '' : `-${alignment}`;
  return `${position}${variation}`;
};

let overflowStyle = null;

const useDisableScroll = (disableScrollRef, isDisabled) => {
  useEffect(() => {
    if (disableScrollRef) {
      const domNode = disableScrollRef.current || disableScrollRef;
      if (isDisabled) {
        overflowStyle = domNode.style.overflow;
        domNode.style.overflow = 'hidden';
      } else if (overflowStyle !== null) {
        domNode.style.overflow = overflowStyle;
      }
    }
  }, [disableScrollRef, isDisabled]);
};

const useCloseOnScroll = (closeOnScrollRef, isActive, closeCallback) => {
  useEffect(() => {
    if (closeOnScrollRef && isActive) {
      const scrollRef = closeOnScrollRef.current || closeOnScrollRef;
      scrollRef.addEventListener('scroll', function scrollLogic() {
        closeCallback();
        scrollRef.removeEventListener('scroll', scrollLogic);
      });
    }
  }, [closeOnScrollRef, isActive]);
};

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Popover = ({
  interactionMode = 'click',
  disablePortal,
  position = 'auto',
  alignment = 'start',
  distance = 4,
  onOpen = () => {},
  onClose = () => {},
  trigger,
  children,
  isOpen,
  transitionName,
  disableScrollRef,
  closeOnScrollRef,
}) => {
  const [isActive, setIsActive] = useState(false);
  const refTriggerWrap = useRef(null);
  const refContent = useRef(null);

  const handleSetIsActive = (newValue) => {
    setIsActive(() => {
      if (newValue) {
        onOpen();
      } else {
        onClose();
      }
      return newValue;
    });
  };

  useCloseOnScroll(closeOnScrollRef, isActive, () => handleSetIsActive(false));
  useDisableScroll(disableScrollRef, isActive);

  // update active state on props change to accommodate fully controlled popovers
  useEffect(() => {
    handleSetIsActive(interactionMode === 'controlled' && isOpen);
  }, [interactionMode, isOpen]);

  /**
   * Closes popover when user presses ESC
   * @param {Event} e DOMEvent
   */
  const handleKeyPress = (e) => {
    const isEscapeKey = ['Esc', 'Escape'].some((key) => key === e.key);
    if (isEscapeKey) handleSetIsActive(false);
  };

  /**
   * Closes popover when user clicks outside of content or trigger
   * @param {Event} e DOMEvent
   */
  const handleBodyClick = (e) => {
    const isNotPopoverClick = isNotRefsEvent([refTriggerWrap, refContent], e);
    if (isNotPopoverClick) handleSetIsActive(false);
  };

  useEffect(() => {
    /* eslint-disable no-undef */
    document.body.addEventListener('mousedown', handleBodyClick, false);
    document.body.addEventListener('keyup', handleKeyPress, false);

    return () => {
      document.body.removeEventListener('mousedown', handleBodyClick, false);
      document.body.removeEventListener('keyup', handleKeyPress, false);
    };
    /* eslint-enable no-undef */
  });

  let triggerProps = {};
  switch (interactionMode) {
    case 'hover':
      triggerProps.onMouseEnter = () => {
        handleSetIsActive(true);
      };
      triggerProps.onMouseLeave = () => {
        handleSetIsActive(false);
      };
      triggerProps.onKeyUp = (e) => {
        if (e.key === 'Tab') {
          handleSetIsActive(true);
        }
      };
      triggerProps.onKeyDown = (e) => {
        if (e.key === 'Tab') {
          handleSetIsActive(false);
        }
      };
      triggerProps.tabIndex = '1';
      break;
    case 'click':
      triggerProps.onClick = () => {
        handleSetIsActive(!isActive);
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
        offset: `0,${distance}`,
      },
    },
    {
      name: 'preventOverflow',
      options: {
        boundariesElement: 'viewport',
      },
    },
    {
      name: 'computeStyle',
      options: {
        gpuAcceleration: false,
      },
    },
  ];

  const contentStyle = {
    zIndex: FDS.ZINDEX_POPOVER,
  };

  const popperContent = (
    <CSSTransition
      in={isActive}
      unmountOnExit
      timeout={transitionName ? 200 : 0}
      classNames={transitionName ? `rtg${transitionName}` : undefined}
    >
      <Popper
        innerRef={(node) => {
          refContent.current = node;
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
          <div ref={ref} aria-haspopup="true" aria-expanded={isActive.toString()}>
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
};

Popover.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  /**
   * JSX - Content to place in the positioned popover container. The popover container
   * does not provide any default styling; content should be styled with background,
   * borders, and shadows as appropriate.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  /**
   * What mode of interaction triggers the active/inactive state of the popover.
   *
   * `hover` - popover opens on trigger hover/focus
   *
   * `click` - popover opens on trigger click
   *
   * `controlled` - enables "fully controlled" mode in which the popover is only active
   * when the `isOpen` prop is set to `true`
   */
  interactionMode: PropTypes.oneOf(VALID_INTERACTION_MODES),

  /** Controlls active state of popover when in fully controlled interaction mode */
  isOpen: PropTypes.bool,

  /** disables portaling the popover to `document.body` */
  disablePortal: PropTypes.bool,

  /**
   * Vertical position preference of popover content.
   * `top` for example, will place the popover content above the trigger.
   */
  position: PropTypes.oneOf(VALID_POSITIONS),

  /** Horizontal alignment preference of popover content relative to trigger */
  alignment: PropTypes.oneOf(VALID_ALIGNMENTS),

  /** Offset distance from trigger. */
  distance: PropTypes.number,

  /** Name of transition for popover content */
  transitionName: PropTypes.oneOf(['GrowFast']),

  /** Callback called when popover opens */
  onOpen: PropTypes.func,

  /** Callback called when popover closes */
  onClose: PropTypes.func,

  // When popover opens, this element should freeze scrolling. When the popover closes, the scrollability of this element should resume.
  disableScrollRef: PropTypes.func,

  // When the Popover detects scroll events from this ref, the popover should close.
  closeOnScrollRef: PropTypes.func,
};

export default Popover;
