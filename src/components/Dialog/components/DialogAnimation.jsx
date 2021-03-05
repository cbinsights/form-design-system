import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  DialogOverlay as ReachDialogOverlay,
  DialogContent as ReachDialogContent,
} from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import DialogContext from '../DialogContext';

const MotionDialogOverlay = motion(ReachDialogOverlay);
const MotionDialogContent = motion(ReachDialogContent);

const DialogAnimation = ({ children }) => {
  const { isOpen, onDismiss, disableFocusTrap, title, width, height } = useContext(
    DialogContext
  );
  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDialogOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onDismiss={onDismiss}
          dangerouslyBypassFocusLock={disableFocusTrap}
        >
          <MotionDialogContent
            aria-label={title}
            className="elevation--3"
            style={{
              maxWidth: width,
              maxHeight: height,
            }}
          >
            {children}
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
  );
};

DialogAnimation.propTypes = {
  children: PropTypes.node,
};

export default DialogAnimation;
