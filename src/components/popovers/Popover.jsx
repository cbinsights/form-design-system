import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import { isNotRefsEvent } from '../util/events';

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

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Popover = ({
  trigger,
  children,
  interactionMode,
  disablePortal,
  position,
  alignment,
  distance,
  isOpen,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const refTrigger = useRef(null);
  let refContent = null; // must be assigned via setter fn in `Popper`

  // update active state on props change to accommodate fully controlled popovers
  useEffect(() => {
    setIsActive(interactionMode === 'controlled' && isOpen);
  }, [interactionMode, isOpen]);

  /**
   * Closes popover when user presses ESC
   * @param {Event} e DOMEvent
   */
  const handleKeyPress = (e) => {
    const isEscapeKey = ['Esc', 'Escape'].some((key) => key === e.key);
    if (isEscapeKey) setIsActive(false);
  };

  /**
   * Closes popover when user clicks outside of content or trigger
   * @param {Event} e DOMEvent
   */
  const handleBodyMouseMove = (e) => {
    const isNotPopoverHover = isNotRefsEvent([refTrigger, refContent], e);
    if (!isFocused && isNotPopoverHover) setIsActive(false);
  };

  /**
   * Closes popover when user clicks outside of content or trigger
   * @param {Event} e DOMEvent
   */
  const handleBodyClick = (e) => {
    const isNotPopoverClick = isNotRefsEvent([refTrigger, refContent], e);
    if (isNotPopoverClick) setIsActive(false);
  };

  useEffect(() => {
    /* eslint-disable no-undef */
    document.body.addEventListener('mousedown', handleBodyClick, false);
    document.body.addEventListener('keyup', handleKeyPress, false);

    if (interactionMode === 'hover') {
      document.body.addEventListener('mousemove', handleBodyMouseMove, false);
    }

    return () => {
      document.body.removeEventListener('mousedown', handleBodyClick, false);
      document.body.removeEventListener('keyup', handleKeyPress, false);

      if (interactionMode === 'hover') {
        document.body.removeEventListener('mousemove', handleBodyMouseMove, false);
      }
    };
    /* eslint-enable no-undef */
  });

  let triggerProps = {};
  switch (interactionMode) {
    case 'hover':
      triggerProps.onMouseEnter = () => {
        setIsActive(true);
      };
      triggerProps.onFocus = () => {
        setIsActive(true);
        setIsFocused(true);
      };
      triggerProps.onBlur = () => {
        setIsActive(false);
        setIsFocused(false);
      };
      triggerProps.tabIndex = '1';
      break;
    case 'click':
      triggerProps.onClick = () => {
        setIsActive(!isActive);
      };
      break;
    default:
      triggerProps = {};
  }

  // https://popper.js.org/popper-documentation.html#modifiers
  const popperModifiers = {
    offset: {
      enabled: interactionMode !== 'hover',
      offset: `0,${distance}`,
    },
  };

  const PopperContent = () => (
    <Popper
      innerRef={(node) => {
        refContent = node;
      }}
      modifiers={popperModifiers}
      placement={getPopperPlacement(position, alignment)}
    >
      {({ placement, ref, style }) => (
        <div ref={ref} style={style} data-placement={placement}>
          {children}
        </div>
      )}
    </Popper>
  );

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div ref={ref} aria-haspopup="true" aria-expanded={isActive.toString()}>
            <div ref={refTrigger} {...triggerProps}>
              {trigger}
            </div>
          </div>
        )}
      </Reference>
      {isActive &&
        (disablePortal ? (
          <PopperContent />
        ) : (
          ReactDOM.createPortal(
            <PopperContent />,
            document.body /* eslint-disable-line no-undef */
          )
        ))}
    </Manager>
  );
};

Popover.defaultProps = {
  interactionMode: 'click',
  position: 'auto',
  alignment: 'start',
  distance: 4,
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
   * when the `isActive` prop is set to `true`
   */
  interactionMode: PropTypes.oneOf(VALID_INTERACTION_MODES),

  /** Controlls active state of popover when in fully controlled interaction mode */
  isOpen: PropTypes.bool,

  /** disables portaling the popover to `document.body` */
  disablePortal: PropTypes.bool,

  /**
   * Places the popover content on the given side of the trigger.
   * `top` for example, will place the popover content above the trigger.
   */
  position: PropTypes.oneOf(VALID_POSITIONS),

  /** Controls alignment of popover content relative to trigger */
  alignment: PropTypes.oneOf(VALID_ALIGNMENTS),

  /** Offset distance from trigger. Ignored in 'hover' interaction mode. */
  distance: PropTypes.number,
};

export default Popover;
