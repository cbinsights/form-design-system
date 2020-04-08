import React, { useState, useEffect, useRef } from 'react';
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
  isOpen = false,
  onDismiss,
}) => {
  const [toast, setToast] = useState(null);
  const prevContent = useRef();

  const coreLogic = () => {
    if (isOpen) {
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
              dismissToast={onDismiss}
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

    // We need to explicitly check of canDismiss is NOT true, as it has a default
    // parameter of true that this component does not know about
    if (
      isAutoDismiss &&
      toastProps.type !== 'progress' &&
      toastProps.canDismiss !== false
    ) {
      const timer = setTimeout(() => onDismiss(), dismissDelay);

      return function cleanup() {
        clearTimeout(timer);
      };
    }

    return undefined;

    // We need to check for all toastProps and all Toaster props here so that
    // an update of them re-renders the Toast (without animation).
    // Note: you "cannot" spread props here... do not attempt to do so :)
    // You may be able to spread "propTypes" from Toast if you're ambitious.
  };

  useEffect(() => {
    console.log('component remounted');
  }, []);

  useEffect(() => {
    transitionID = uuidv4();
    // We check for the props here that we want to re-render the toast animation
  }, [toastProps.content, toastProps.type]);

  useEffect(coreLogic, [
    toastProps.type,
    toastProps.progress,
    toastProps.actionLabel,
    toastProps.canDismiss,
    toastProps.onAction,
    toastProps.dismissOnAction,
    isAutoDismiss,
    dismissDelay,
  ]);

  useEffect(() => {
    // This logic is specifically meant to handle not re-rendering
    // the toast if the same html is passed into content
    const content = JSON.stringify(toastProps.content);
    const didContentChange = content !== prevContent.current;
    if (didContentChange && prevContent.current !== undefined) coreLogic();
    prevContent.current = content;
  }, [toastProps.content]);

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
  /** Specifies whether Toast is open or not */
  isOpen: PropTypes.bool,
  /** Accepts all props that `Toast` accepts. Refer to Toast component for full documentation */
  toastProps: PropTypes.shape(Toast.propTypes),
  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,
  /** Time in ms to auto-dismiss toast */
  dismissDelay: PropTypes.number,
  /** Callback that is fired when toast is dismissed */
  onDismiss: PropTypes.func,
};

export default ToasterWrapper;
