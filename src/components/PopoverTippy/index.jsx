import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import FDS from 'lib/dictionary/js/styleConstants';
import hideOnEscFunc from './hideOnEsc';

const Modal = ({
  children,
  isOpen,
  placement = 'bottom-start',
  trigger = 'click',
  triggerElement,
  onClickOutside,
  appendTo = document.body,
}) => {
  const hideOnEsc = useMemo(() => hideOnEscFunc(onClickOutside), [onClickOutside]);
  return (
    <>
      <Tippy
        arrow={false}
        visible={isOpen}
        trigger={isOpen !== undefined ? undefined : trigger}
        placement={placement}
        interactive
        theme="light"
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

Modal.propTypes = {
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  children: PropTypes.node,
  /** Element that popover is positioned on */
  triggerElement: PropTypes.node,
  placement: PropTypes.oneOf([
    'top',
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
    'left-end',
    'auto',
    'auto-start',
    'auto-end',
  ]),
  isOpen: PropTypes.bool,
  onClickOutside: PropTypes.func,
  trigger: PropTypes.string,
};

export default Modal;
