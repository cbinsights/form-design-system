import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Toast, { ToastProps } from './Toast';

const dismissDelay = 4000;

export interface ToasterProps {
  /**  A UUID for the toast. Each new toast should have a new UUID. */
  id?: string;

  /** Specifies whether Toast is open or not */
  isOpen?: boolean;

  /** Should this toast auto-dismiss itself? */
  isAutoDismiss?: boolean;

  onDismiss?: (...args: unknown[]) => void;

  /** Controls the display for your specific toast. */
  toastInstance?: ToastProps;
}

export const Toaster = ({
  isAutoDismiss = true,
  isOpen = false,
  onDismiss,
  toastInstance = {
    content: null,
  },
  id,
}: ToasterProps): JSX.Element => {
  useEffect(() => {
    // We need to explicitly check of canDismiss is NOT true, as it has a default
    // parameter of true that this component does not know about
    if (
      isAutoDismiss &&
      toastInstance.type !== 'progress' &&
      toastInstance.canDismiss !== false &&
      onDismiss
    ) {
      const timer = setTimeout(() => onDismiss(), dismissDelay);

      return function cleanup() {
        clearTimeout(timer);
      };
    }

    return undefined;
  }, [
    id,
    isOpen,
    isAutoDismiss,
    toastInstance.type,
    toastInstance.canDismiss,
    onDismiss,
  ]);

  return (
    <div aria-live="assertive">
      <TransitionGroup>
        {isOpen && (
          <CSSTransition
            key={id}
            appear
            unmountOnExit
            timeout={380}
            classNames="rtgSlideIn"
          >
            <div className="toaster">
              <Toast
                dismissDelay={dismissDelay}
                isAutoDismiss={isAutoDismiss}
                dismissToast={onDismiss}
                content={toastInstance.content}
                type={toastInstance.type}
                progress={toastInstance.progress}
                canDismiss={toastInstance.canDismiss}
                actionLabel={toastInstance.actionLabel}
                onAction={toastInstance.onAction}
                dismissOnAction={toastInstance.dismissOnAction}
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

const ToasterWrapper = (props: ToasterProps): React.ReactNode =>
  ReactDOM.createPortal(
    <Toaster {...props} />,
    // eslint-disable-next-line no-undef
    document.body
  );

export default ToasterWrapper;
