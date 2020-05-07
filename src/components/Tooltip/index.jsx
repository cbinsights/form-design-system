import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import Popover from 'components/Popover';

export const DEFAULT_WIDTH = '240px';

const Tooltip = ({ trigger, message, maxWidth }) => (
  <Popover
    interactionMode="hover"
    trigger={<span style={{ cursor: 'help' }}>{trigger}</span>}
    distance={parseInt(FDS.SPACE_HALF, 10)}
    position="bottom"
    alignment="center"
    transitionName="GrowFast"
  >
    <div
      role="tooltip"
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : '240px' }}
      className="bgColor--charcoal inverted align--center padding--top--half padding--bottom--half padding--left padding--right elevation--2 rounded--all fontSize--s fontWeight--bold"
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
};

export default Tooltip;
