import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import FDS from 'lib/dictionary/js/styleConstants';
import hideOnEscFunc from './hideOnEsc';
import triggerHelper from './triggerHelper';

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
  const computedTrigger = triggerHelper(trigger, isOpen);
  return (
    <>
      <Tippy
        animation={false}
        arrow={false}
        visible={isOpen}
        theme={`popover-${theme}`}
        trigger={computedTrigger}
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
  trigger: PropTypes.oneOf(['click', 'hover']),
  /** Either takes a reference ( () => document.body ), the string `parent` to disable portalling, or passing an element */
  appendTo: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(['parent']),
    PropTypes.node,
  ]),
};

export default Popover;
