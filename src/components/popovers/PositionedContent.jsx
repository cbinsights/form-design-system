import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component responsible for positioning itself relative to `referenceRect`
 */
const PositionedContent = ({
  children,
  referenceRect,
  xPosition,
  yPosition,
  xOffset,
  yOffset,
}) => {
  const { x, y, height, width } = referenceRect;

  let containerStyle = {
    top: `${y + height + yOffset}px`,
    left: `${x + xOffset}px`,
  };

  return (
    <div className="fdsPopover-content" style={containerStyle}>
      {children}
    </div>
  );
};

PositionedContent.propTypes = {
  /** React children */
  children: PropTypes.oneOf([PropTypes.node, PropTypes.element]).isRequired,

  /** DOMRect to use as a reference for positioning */
  referenceRect: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,

  /** horizontal positioning preference */
  xPosition: PropTypes.oneOf(['left', 'center', 'right']).isRequired,

  /** vertical positioning preference */
  yPosition: PropTypes.oneOf(['bottom', 'center', 'top']).isRequired,

  /** Number of pixes (negative or positive) to offset horizontal position */
  xOffset: PropTypes.number.isRequired,

  /** Number of pixes (negative or positive) to offset vertical position */
  yOffset: PropTypes.number.isRequired,
};

export default PositionedContent;
