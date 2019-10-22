import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';
import PositionedContent from './PositionedContent';

/**
 * :TODO:
 * - styles
 * - dev story
 * - ARIA for hover vs click modes
 * - positioning logic
 * - isActive handling
 * - events!
 * - disablePortal
 */

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const Popover = ({
  trigger,
  content,
  interactionMode,
  disablePortal,
  xPosition,
  yPosition,
  xOffset,
  yOffset,
  ...otherProps
}) => {
  const positionProps = { xPosition, yPosition, xOffset, yOffset };
  const initialActiveState = interactionMode === 'controlled' && otherProps.isActive;
  const [isActive, setIsActive] = useState(initialActiveState);
  const refTrigger = useRef(null);

  const handleTriggerClick = () => {
    setIsActive(true);
  };

  return (
    <div className="fdsPopover">
      <div ref={refTrigger} className="fdsPopover-trigger" onClick={handleTriggerClick}>
        {trigger}
      </div>
      {isActive &&
        ReactDOM.createPortal(
          <PositionedContent
            referenceRect={refTrigger.current.getBoundingClientRect()}
            {...positionProps}
          >
            {content}
          </PositionedContent>,
          document.body
        )}
    </div>
  );
};

Popover.defaultProps = {
  interactionMode: 'click',
  xPosition: 'left',
  yPosition: 'bottom',
  xOffset: 0,
  yOffset: 4,
};

Popover.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state*/
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  /**
   * JSX - Content to place in the positioned popover container. The popover container
   * does not provide any default styling; content should be styled with background,
   * borders, and shadows as appropriate.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

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
  interactionMode: PropTypes.oneOf(['hover', 'click', 'controlled']),

  /** Controlls active state of popover when in fully controlled interaction mode */
  isActive: PropTypes.bool,

  /** disables portaling the popover to `document.body` */
  disablePortal: PropTypes.bool,

  /** positioning preference for horizontal alignment of popover relative to trigger */
  xPosition: PropTypes.oneOf(['left', 'center', 'right']),

  /** positioning preference for vertical alignment of popover relative to trigger */
  yPosition: PropTypes.oneOf(['bottom', 'center', 'top']),

  /** Number of pixes (negative or positive) to offset horizontal position */
  xOffset: PropTypes.number,

  /** Number of pixes (negative or positive) to offset vertical position */
  yOffset: PropTypes.number,
};

export default Popover;
