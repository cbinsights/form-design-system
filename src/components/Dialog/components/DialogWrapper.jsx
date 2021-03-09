import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import DialogContext from '../DialogContext';

const DialogWrapper = ({ children }) => {
  const { isOpen, onDismiss, disableFocusTrap, title, width, height } = useContext(
    DialogContext
  );
  return isOpen ? (
    <DialogOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onDismiss={onDismiss}
      dangerouslyBypassFocusLock={disableFocusTrap}
    >
      <DialogContent
        aria-label={title}
        className="elevation--3"
        style={{
          maxWidth: width,
          maxHeight: height,
        }}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  ) : null;
};

DialogWrapper.propTypes = {
  children: PropTypes.node,
};

export default DialogWrapper;
