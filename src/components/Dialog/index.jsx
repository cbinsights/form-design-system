import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import rafSchd from 'raf-schd';
import DenyIcon from 'lib/icons/react/DenyIcon';
import IconButton from 'components/IconButton';
import cc from 'classcat';
import noScroll from './noScroll';

export const isElementOverflowing = ({ current }) => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

const Dialog = ({
  role = 'dialog',
  width = '500px',
  height = '80vh',
  disableFocusTrap = false,
  onDismiss,
  alwaysShowBorder,
  isOpen,
  title,
  content,
  footerContent,
  disablePortal = false,
}) => {
  const contentEl = useRef(null);
  const handleKeyDown = (e) => {
    if (onDismiss && e.key === 'Escape') {
      onDismiss();
    }
  };

  const [isOverflowing, setIsOverflowing] = useState(false);

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

  useLayoutEffect(() => {
    // This toggles scrolling on and off based on whether the modal
    // is shown or not
    if (isOpen) {
      noScroll.on();
    } else {
      noScroll.off();
    }
    return () => {
      noScroll.off();
    };
  }, [isOpen]);

  const dialogNode = (
    <div>
      <div className="dialog-overlay"></div>
      <div className="dialog-zIndex dialog-wrapper">
        <div
          className="dialog elevation--3 border--focus--noTransition"
          role={role}
          aria-labelledby={title && 'a11y-dialog-title'}
          aria-describedby="a11y-dialog-desc"
          tabIndex="-1"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          style={{
            maxWidth: width,
            maxHeight: height,
          }}
        >
          {(title || onDismiss) && (
            <React.Fragment>
              <div className="dialog-header">
                <div className="bgColor--white padding--all border--bottom">
                  <div className="padding--right--xl type--head4">
                    {title ? <span id="a11y-dialog-title">{title}</span> : '\u00A0'}{' '}
                    {/* There always needs to be something (even a space) in the header for display reasons */}
                  </div>
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
            </React.Fragment>
          )}
          {content && (
            <div className="dialog-content" ref={contentEl}>
              <div className="padding--all bgColor--white">{content}</div>
            </div>
          )}
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
        </div>
      </div>
    </div>
  );

  const transitionNode = (
    <CSSTransition timeout={200} in={isOpen} classNames="dialog" unmountOnExit>
      <React.Fragment>
        {disableFocusTrap ? dialogNode : <FocusTrap>{dialogNode}</FocusTrap>}
      </React.Fragment>
    </CSSTransition>
  );

  return (
    <React.Fragment>
      {disablePortal
        ? transitionNode
        : ReactDOM.createPortal(transitionNode, document.body)}
    </React.Fragment>
  );
};

Dialog.propTypes = {
  /** Controls the role of the modal */
  role: PropTypes.oneOf(['dialog', 'alertdialog']),

  /** Controls whether the modal (and overlay) are shown or not */
  isOpen: PropTypes.bool,

  /** Add into bottom portion of modal */
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

  /** Add into content (middle) portion of modal */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),

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

  /** Disables rendering the dialog in a portal, and renders it locally instead. */
  disablePortal: PropTypes.bool,
};

export default Dialog;
