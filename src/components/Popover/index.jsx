import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import FDS from 'lib/dictionary/js/styleConstants';
import hideOnEscFunc from './hideOnEsc';

const Popover = ({
  children,
  isOpen,
  placement = 'bottom-start',
  trigger = 'click',
  triggerElement,
  onUserDismiss,
  theme = 'default',
  appendTo = () => document.body,
}) => {
  const hideOnEsc = useMemo(() => hideOnEscFunc(onUserDismiss), [onUserDismiss]);
  /* Tippy will throw a warning if you attempt to pass a trigger when
     isOpen is passed. This will avoid showing that warning. */
  const triggerHelper = isOpen !== undefined ? undefined : trigger;
  return (
    <>
      <Tippy
        animation={false}
        arrow={false}
        visible={isOpen}
        theme={`popover-${theme}`}
        trigger={triggerHelper}
        placement={placement}
        interactive
        appendTo={appendTo}
        onClickOutside={onUserDismiss || (() => {})}
        plugins={[hideOnEsc]}
        ignoreAttributes
        zIndex={FDS.ZINDEX_MODAL}
        moveTransition="transform 0.2s ease-out"
        content={children}
      >
        {triggerElement}
      </Tippy>
    </>
  );
};

Popover.propTypes = {
  /** the UI display */
  theme: PropTypes.oneOf(['default', 'unthemed']),
  children: PropTypes.node,
  /** Element that popover is positioned on */
  triggerElement: PropTypes.node,
  /** Position preference of the popover */
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'bottom-start', 'left']),
  /** Controls the popover */
  isOpen: PropTypes.bool,
  /** calls this callback when user clicks outside popover or presses esc key */
  onUserDismiss: PropTypes.func,
  /** What mode of interaction triggers the popover */
  trigger: PropTypes.oneOf(['click', 'mouseenter focus']),
  /** Either takes a reference ( () => document.body ), the string `parent` to disable portalling, or passing an element */
  appendTo: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(['parent']),
    PropTypes.node,
  ]),
};

export default Popover;
