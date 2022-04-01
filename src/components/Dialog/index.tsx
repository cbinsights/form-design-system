import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import rafSchd from 'raf-schd';
import DenyIcon from 'icons/react/DenyIcon';
import IconButton from 'components/IconButton';
import cc from 'classcat';
import noScroll from './noScroll';

export const isElementOverflowing = ({
  current,
}: React.MutableRefObject<HTMLDivElement | null>): boolean => {
  // Checking for current first is safer just in case,
  // and will also fail gracefully in tests
  if (current) {
    return current.scrollHeight > current.clientHeight;
  }
  return false;
};

export interface DialogProps {
  /** Controls the role of the modal */
  role?: 'dialog' | 'alertdialog';

  /** Controls whether the modal (and overlay) are shown or not */
  isOpen?: boolean;

  /** Add into bottom portion of modal */
  footerContent?: React.ReactNode | string;

  /** Add into content (middle) portion of modal */
  content?: React.ReactNode | string;

  /** Controls text displayed in modal header */
  title?: string;

  /**
   * Callback that user can pass in, to be conditionally fired when
   * user attempts to close modal. When defined, the modal close button appears
   */
  onDismiss?: () => void;

  /** Custom modal width */
  width?: string;

  /** Custom modal height */
  height?: string;

  /**
   * Border between content area and footer currently renders only if there is scrollable content. Set this boolean
   * so that the border always renders no matter what.
   */
  alwaysShowBorder?: boolean;

  /**
   * Disables the focus trap on the Dialog.
   * Useful when the Dialog contains components that manage focus (e.g. `Menu`)
   */
  disableFocusTrap?: boolean;

  /** Disables rendering the dialog in a portal, and renders it locally instead. */
  disablePortal?: boolean;

  /** Add content below the title */
  subTitle?: React.ReactNode;
}

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
  subTitle,
  disablePortal = false,
}: DialogProps): JSX.Element => {
  const contentEl = useRef<HTMLDivElement>(null);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onDismiss && e.key === 'Escape') {
      onDismiss();
    }
  };

  const [isOverflowing, setIsOverflowing] = useState(false);
  const schdSetIsOverflowing = rafSchd(setIsOverflowing);

  const handleResize = () => {
    schdSetIsOverflowing(isElementOverflowing(contentEl));
  };

  useEffect(() => {
    if (!alwaysShowBorder) {
      handleResize(); // needs to fire one time immediately on mount
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
          tabIndex={-1}
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
                  <div>
                    <div className="padding--right--xl type--head4">
                      {title ? <span id="a11y-dialog-title">{title}</span> : '\u00A0'}{' '}
                      {/* There always needs to be something (even a space) in the header for display reasons */}
                    </div>
                    {subTitle}
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

export default Dialog;
