import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import FDS from 'lib/dictionary/js/styleConstants';

const Modal = ({
  children,
  isOpen,
  placement = 'bottom-start',
  trigger = 'click',
  triggerElement,
  onClickOutside,
  appendTo = document.body,
}) => {
  return (
    <>
      <Tippy
        visible={isOpen}
        placement={placement}
        trigger={trigger}
        interactive
        appendTo={appendTo}
        ignoreAttributes
        zIndex={FDS.ZINDEX_MODAL}
        moveTransition="transform 0.2s ease-out"
        render={(attrs) => (
          <div className="display--block" {...attrs}>
            {children}
          </div>
        )}
      >
        {triggerElement}
      </Tippy>
    </>
  );
};

Modal.propTypes = {
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
  /** Element that popover is positioned on */
  triggerElement: PropTypes.node,
  placement: PropTypes.string,
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
  trigger: PropTypes.string,
};

export default Modal;
