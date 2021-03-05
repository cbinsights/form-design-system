import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import rafSchd from 'raf-schd';
import DenyIcon from 'lib/icons/react/DenyIcon';
import IconButton from 'components/IconButton';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import cc from 'classcat';

export const isElementOverflowing = ({ current }) => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

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
  const Core = () => {
    const [isOverflowing, setIsOverflowing] = useState(false);

    const contentEl = useRef(null);

    const handleResize = () => {
      rafSchd(setIsOverflowing(isElementOverflowing(contentEl)));
    };

    useEffect(() => {
      if (!alwaysShowBorder) {
        handleResize(); // needs to fire once immediately on mount
        // eslint-disable-next-line no-undef
        window.addEventListener('resize', handleResize);
        return () => {
          // eslint-disable-next-line no-undef
          window.removeEventListener('resize', handleResize);
        };
      }
      return undefined;
    }, [alwaysShowBorder]);

    return (
      <>
        {(title || onDismiss) && (
          /* Do not mess with / combine the 2 lines of following classes unless you
           *thoroughly* vet responsive, header props, and long text, all at once */
          <div className="bgColor--white border--bottom">
            <div className="dialog-header padding--left padding--top padding--bottom">
              {title && (
                <span id="a11y-dialog-title" className="type--head4">
                  {title}
                </span>
              )}
              {onDismiss && (
                <div className="dialog-icon">
                  <IconButton
                    Icon={DenyIcon}
                    onClick={onDismiss}
                    aria-label="Close"
                    label="Close"
                  />
                </div>
              )}
            </div>
          </div>
        )}
        <div className="dialog-content" ref={contentEl}>
          <div className="padding--all bgColor--white">{content}</div>
        </div>
        {footerContent && (
          <div className="dialog-footer">
            <div
              className={cc([
                {
                  'border--top': alwaysShowBorder || isOverflowing,
                },
                'bgColor--white',
                'padding--all',
              ])}
            >
              {footerContent}
            </div>
          </div>
        )}
      </>
    );
  };

  const MotionDialogOverlay = motion(DialogOverlay);
  const MotionDialogContent = motion(DialogContent);

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
            <Core />
          </MotionDialogContent>
        </MotionDialogOverlay>
      )}
    </AnimatePresence>
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
