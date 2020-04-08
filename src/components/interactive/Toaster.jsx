import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
import Toast from './Toast';

export const Toaster = ({
  toastProps = {},
  dismissDelay = 4000,
  isAutoDismiss = true,
  isOpen = false,
  onDismiss,
}) => {
  return (
    <div aria-live="assertive">
      <TransitionGroup>
        <CSSTransition
          key={uuidv4()}
          appear
          unmountOnExit
          timeout={380}
          classNames="rtgSlideIn"
        >
          <div className="toaster">
            {isOpen && (
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
            )}
          </div>
        </CSSTransition>
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
