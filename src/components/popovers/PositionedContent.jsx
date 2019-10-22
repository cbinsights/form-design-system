import React from 'react';
import PropTypes from 'prop-types';

const getContainerStyle = (refRect, xPosition, yPosition, xOffset, yOffset) => {
  let top, left;

  refRect.centerY = refRect.height / 2 + refRect.top;
  refRect.centerX = refRect.width / 2 + refRect.left;

  if (yPosition === 'center') {
    top = refRect.centerY + yOffset;
  } else {
    top = refRect[yPosition] + yOffset;
  }

  if (xPosition === 'center') {
    left = refRect.centerX + xOffset;
  } else {
    left = refRect[xPosition] + xOffset;
  }

  top = `${top}px`;
  left = `${left}px`;

  console.warn('top', top);
  console.warn('left', left);
  return { top, left };
};

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
  // const style = getContainerStyle(referenceRect, xPosition, yPosition, xOffset, yOffset);
  const style = getContainerStyle(referenceRect, 'right', 'top', xOffset, yOffset);

  return (
    <div className="fdsPopover-content" style={style}>
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
