import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import Popover, { VALID_POSITIONS } from 'components/Popover';

export const DEFAULT_WIDTH = '240px';
export const DELAY_MS = 350;
export const DEFAULT_POSITION = 'bottom';

const Tooltip = ({ trigger, message, maxWidth, position = DEFAULT_POSITION }) => (
  <Popover
    interactionMode="hover"
    trigger={<span style={{ cursor: 'help' }}>{trigger}</span>}
    distance={parseInt(FDS.SPACE_S, 10)}
    position={position}
    alignment="center"
    transitionName="GrowFast"
    delay={DELAY_MS}
  >
    <div
      role="tooltip"
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : DEFAULT_WIDTH }}
      className="bgColor--charcoal inverted align--center padding--y--s padding--x elevation--2 rounded--all fontSize--s fontWeight--bold"
    >
      {message}
    </div>
  </Popover>
);

Tooltip.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  /** Content of the tooltip */
  message: PropTypes.string.isRequired,

  /** Maximum width of tooltip */
  maxWidth: PropTypes.number,

  /**
   * Position preference of tooltip.
   * `top` for example, will place the tooltip above the trigger.
   */
  position: PropTypes.oneOf(VALID_POSITIONS),
};

export default Tooltip;
