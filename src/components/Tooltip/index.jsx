import React from 'react';
import PropTypes from 'prop-types';
import FDS from 'lib/dictionary/js/styleConstants';
import Tippy from '@tippyjs/react';

export const DEFAULT_WIDTH = 240;
export const DELAY_MS = 350;
export const DEFAULT_POSITION = 'bottom';
export const VALID_TEXT_ALIGN = ['left', 'center', 'right'];

const Tooltip = ({
  position = DEFAULT_POSITION,
  trigger,
  message,
  maxWidth = DEFAULT_WIDTH,
  textAlign = 'center',
}) => (
  <Tippy
    arrow={false}
    theme="tooltip"
    delay={[DELAY_MS, 0]}
    maxWidth={maxWidth}
    content={message}
    placement={position}
    zIndex={FDS.ZINDEX_MODAL}
    moveTransition="transform 0.2s ease-out"
    appendTo={document.body}
    className={`bgColor--charcoal inverted align--${textAlign} padding--top--half padding--bottom--half padding--left padding--right elevation--2 rounded--all fontSize--s fontWeight--bold`}
  >
    {trigger}
  </Tippy>
);

Tooltip.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),

  /** Content of the tooltip */
  message: PropTypes.string.isRequired,

  /** Maximum width of tooltip */
  maxWidth: PropTypes.number,

  /** Position preference of tooltip. */
  position: PropTypes.oneOf([
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'auto',
    'auto-start',
    'auto-end',
  ]),
  /** Text align for the message */
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Tooltip;
