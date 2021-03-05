import React from 'react';
import PropTypes from 'prop-types';

import DialogHeader from './components/DialogHeader';
import DialogContent from './components/DialogContent';
import DialogFooter from './components/DialogFooter';
import DialogAnimation from './components/DialogAnimation';
import DialogContext from './DialogContext';
import useResizeObserver from './useResizeObserver';

const Dialog = ({
  width = '500px',
  height = '80vh',
  disableFocusTrap = false,
  onDismiss,
  alwaysShowBorder,
  isOpen,
  title,
  content,
  footerContent,
}) => {
  const [ref, entry] = useResizeObserver();
  const isOverflowing =
    entry.target && entry.target.scrollHeight > entry.target.clientHeight;
  return (
    <DialogContext.Provider
      value={{
        width,
        height,
        disableFocusTrap,
        onDismiss,
        alwaysShowBorder,
        isOpen,
        title,
        content,
        footerContent,
        ref,
        isOverflowing,
      }}
    >
      <DialogAnimation>
        <DialogHeader />
        <DialogContent />
        <DialogFooter />
      </DialogAnimation>
    </DialogContext.Provider>
  );
};

Dialog.propTypes = {
  /** Controls whether the modal (and overlay) are shown or not */
  isOpen: PropTypes.bool,

  /** Add into bottom portion of modal */
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /** Add into content (middle) portion of modal */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,

  /** Controls text displayed in modal header */
  title: PropTypes.string,

  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss: PropTypes.func,

  /** Custom modal width */
  width: PropTypes.string,

  /** Custom modal height */
  height: PropTypes.string,

  /**
   * Border between content area and footer currently renders only if there is scrollable content. Set this boolean
   * so that the border always renders no matter what.
   */
  alwaysShowBorder: PropTypes.bool,

  /**
   * Disables the focus trap on the Dialog.
   * Useful when the Dialog contains components that manage focus (e.g. `Menu`)
   */
  disableFocusTrap: PropTypes.bool,
};

export default Dialog;
