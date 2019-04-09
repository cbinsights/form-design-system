import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

/**
 * @module Toaster
 * Controller for showing, dismissing and positioning Toast components.
 */
const Toaster = ({ toast }) => {
  const [isToasting, setIsToasting] = useState(Boolean(toast));
  let clonedToast = null;

  const dismissToast = () => {
    setIsToasting(false);
  };

  // pass dismiss function down to toast
  if (toast) {
    clonedToast = React.cloneElement(toast, { dismissToast });
  }

  // set a timeout for toast to dismiss itself
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (toast && toast.props.isAutoDismiss) {
      const timer = setTimeout(dismissToast, toast.props.dismissDelay);

      return function cleanup() {
        clearTimeout(timer);
      };
    }
  });
  const onExited = (toast && toast.props && toast.props.onDismiss) || (() => {});

  return ReactDOM.createPortal(
    <div aria-live="assertive" className="toaster">
      <CSSTransition
        in={isToasting}
        appear
        unmountOnExit
        timeout={380}
        classNames="toast"
        onExited={onExited}
      >
        {clonedToast}
      </CSSTransition>
    </div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

Toaster.propTypes = {
  /** a `Toast` element */
  toast: PropTypes.element,
};

export default Toaster;
