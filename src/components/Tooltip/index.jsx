import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import Tippy from '@tippyjs/react';
import { VALID_POSITIONS } from 'components/Popover';

export const DEFAULT_WIDTH = '240px';
export const DELAY_MS = 350;
export const DEFAULT_POSITION = 'bottom';
export const VALID_TEXT_ALIGN = ['left', 'center', 'right'];

const Tooltip = ({
  triggerRef,
  position = DEFAULT_POSITION,
  trigger,
  message,
  maxWidth = DEFAULT_WIDTH,
  interactive,
}) => (
  <Tippy
    arrow={false}
    interactive={interactive}
    delay={[DELAY_MS, 0]}
    reference={triggerRef}
    maxWidth={maxWidth}
    content={message}
    placement={position}
    zIndex={FDS.ZINDEX_MODAL}
    moveTransition="transform 0.2s ease-out"
    appendTo={document.body}
  >
    {trigger}
  </Tippy>
);

Tooltip.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  triggerRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.any }),
  ]),

  /** Content of the tooltip */
  message: PropTypes.node.isRequired,

  /** Maximum width of tooltip */
  maxWidth: PropTypes.number,

  /**
   * Position preference of tooltip.
   * `top` for example, will place the tooltip above the trigger.
   */
  position: PropTypes.oneOf(VALID_POSITIONS),
  interactive: PropTypes.bool,
};

export default Tooltip;
