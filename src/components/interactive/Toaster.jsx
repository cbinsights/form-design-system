import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
import Toast from './Toast';

let transitionID = uuidv4();

export const Toaster = ({
  toastProps = {},
  dismissDelay = 4000,
  isAutoDismiss = true,
}) => {
  const [toast, setToast] = useState(null);

  const dismissToast = () => setToast(null);

  useEffect(() => {
    transitionID = uuidv4();
    // We check for the props here that we want to re-render the toast animation
  }, [toastProps.content, toastProps.type]);

  useEffect(() => {
    if (Object.keys(toastProps).length) {
      setToast(
        <CSSTransition
          key={transitionID}
          appear
          unmountOnExit
          timeout={380}
          classNames="rtgSlideIn"
        >
          <div className="toaster">
            <Toast
              dismissDelay={dismissDelay}
              dismissToast={dismissToast}
              isAutoDismiss={isAutoDismiss}
              content={toastProps.content}
              type={toastProps.type}
              progress={toastProps.progress}
              canDismiss={toastProps.canDismiss}
              actionLabel={toastProps.actionLabel}
              onAction={toastProps.onAction}
              dismissOnAction={toastProps.dismissOnAction}
            />
          </div>
        </CSSTransition>
      );
    } else {
      setToast(null);
    }

    if (isAutoDismiss && toastProps.type !== 'progress' && toastProps.canDismiss) {
      const timer = setTimeout(() => dismissToast(), dismissDelay);

      return function cleanup() {
        clearTimeout(timer);
      };
    }

    return undefined;

    // We need to check for all toastProps and all Toaster props here so that
    // an update of them re-renders the Toast (without animation).
    // Note: you "cannot" spread props here... do not attempt to do so :)
    // You may be able to spread "propTypes" from Toast if you're ambitious.
  }, [
    toastProps.content,
    toastProps.type,
    toastProps.progress,
    toastProps.actionLabel,
    toastProps.canDismiss,
    toastProps.onAction,
    toastProps.dismissOnAction,
    isAutoDismiss,
    dismissDelay,
  ]);

  return (
    <div aria-live="assertive">
      <TransitionGroup>{toast}</TransitionGroup>
    </div>
  );
};

const ToasterWrapper = (props) =>
  ReactDOM.createPortal(
    <Toaster {...props} />,
    // eslint-disable-next-line no-undef
    document.body
  );

Toaster.propTypes = {
  /** Accepts all props that `Toast` accepts. Refer to Toast component for full documentation */
  toastProps: Toast.propTypes,
  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,
  /** Time in ms to auto-dismiss toast */
  dismissDelay: PropTypes.number,
};

export default ToasterWrapper;
