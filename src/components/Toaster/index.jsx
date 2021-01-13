import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import customPropTypes from 'components/util/customPropTypes';
import Toast, { TYPES } from './Toast';

const dismissDelay = 4000;

export const Toaster = ({
  isAutoDismiss = true,
  isOpen = false,
  toastInstance = {},
  id,
}) => {
  useEffect(() => {
    // We need to explicitly check of canDismiss is NOT true, as it has a default
    // parameter of true that this component does not know about
    if (
      isAutoDismiss &&
      toastInstance.type !== 'progress' &&
      toastInstance.canDismiss !== false &&
      toastInstance.onDismiss
    ) {
      const timer = setTimeout(() => toastInstance.onDismiss(), dismissDelay);

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
    toastInstance.onDismiss,
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
                dismissToast={toastInstance.onDismiss}
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

const ToasterWrapper = (props) =>
  ReactDOM.createPortal(
    <Toaster {...props} />,
    // eslint-disable-next-line no-undef
    document.body
  );

Toaster.propTypes = {
  /**  A UUID for the toast. Each new toast should have a new UUID. */
  id: PropTypes.string,
  /** Specifies whether Toast is open or not */
  isOpen: PropTypes.bool,
  /** Should this toast auto-dismiss itself? */
  isAutoDismiss: PropTypes.bool,
  /** Controls the display for your specific toast. */
  toastInstance: PropTypes.shape({
    /** JSX Content of Toast */
    content: PropTypes.node.isRequired,

    /** Type of toast */
    type: PropTypes.oneOf(TYPES),

    /** Label for action button */
    actionLabel: PropTypes.string,

    /** Callback for action button click */
    onAction: PropTypes.func,

    /* Controls if toast gets dismiss when the ActionButton is clicked */
    dismissOnAction: PropTypes.bool,

    /** Is this toast user-dismissable? */
    canDismiss: PropTypes.bool,

    /** Number 1-100 declaring % progress */
    progress: customPropTypes.range(1, 100),

    /** Function to dismiss the toast */
    dismissToast: PropTypes.func,
  }),
};

export default ToasterWrapper;
