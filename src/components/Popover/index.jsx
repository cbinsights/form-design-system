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
  onClickOutside,
  theme = 'default',
  appendTo = () => document.body,
}) => {
  const hideOnEsc = useMemo(() => hideOnEscFunc(onClickOutside), [onClickOutside]);
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
        onClickOutside={onClickOutside || (() => {})}
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
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
  /** Element that popover is positioned on */
  triggerElement: PropTypes.node,
  placement: PropTypes.oneOf(['auto', 'top', 'right', 'bottom', 'bottom-start', 'left']),
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
  trigger: PropTypes.oneOf(['click', 'mouseenter focus']),
  theme: PropTypes.oneOf(['default', 'unthemed']),
};

export default Popover;
