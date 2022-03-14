import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import FocusTrap from 'focus-trap-react';
import rafSchd from 'raf-schd';
import DenyIcon from 'icons/react/DenyIcon';
import IconButton from 'components/IconButton';
import cc from 'classcat';
import * as DialogUi from '@radix-ui/react-dialog';

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

  const [isOverflowing, setIsOverflowing] = useState(false);
  const schdSetIsOverflowing = rafSchd(setIsOverflowing);

  const handleResize = () => {
    schdSetIsOverflowing(isElementOverflowing(contentEl));
  };

  useEffect(() => {
    if (!alwaysShowBorder) {
      handleResize(); // needs to fire once immediately on mount
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    return undefined;
  }, [alwaysShowBorder]);

  const dialogNode = (
    <DialogUi.Root defaultOpen onOpenChange={onDismiss}>
      <DialogUi.Overlay className="dialog-overlay"></DialogUi.Overlay>
      <div className="dialog-zIndex dialog-wrapper">
        <DialogUi.Content
          onPointerDownOutside={(event) => event.preventDefault()}
          asChild
          className="ease-in-out"
        >
          <div
            className="dialog elevation--3 border--focus--noTransition"
            role={role}
            aria-labelledby={title && 'a11y-dialog-title'}
            aria-describedby="a11y-dialog-desc"
            tabIndex={-1}
            aria-modal="true"
            style={{
              maxWidth: width,
              maxHeight: height,
            }}
            data-testid="dialog"
          >
            {(title || onDismiss) && (
              <>
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
                      <DialogUi.Trigger asChild>
                        <div className="dialog-icon">
                          <IconButton Icon={DenyIcon} aria-label="Close" label="Close" />
                        </div>
                      </DialogUi.Trigger>
                    )}
                  </div>
                </div>
              </>
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
        </DialogUi.Content>
      </div>
    </DialogUi.Root>
  );

  const transitionNode = (
    <CSSTransition timeout={200} in={isOpen} classNames="dialog" unmountOnExit>
      <>{disableFocusTrap ? dialogNode : <FocusTrap>{dialogNode}</FocusTrap>}</>
    </CSSTransition>
  );

  return (
    <>
      {disablePortal
        ? transitionNode
        : ReactDOM.createPortal(transitionNode, document.body)}
    </>
  );
};

export default Dialog;
