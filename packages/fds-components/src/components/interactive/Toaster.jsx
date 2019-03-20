import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

/**
 * @module Toaster
 * Controller for showing, dismissing and positioning Toast components.
 */
const Toaster = ({ delay, toast }) => {
  const [isToasting, setIsToasting] = useState(Boolean(toast));
  let clonedToast = null;

  /**
   * Removes a toast from `toasts` internal state array
   */
  const dismissToast = () => {
    setIsToasting(false);
  };

  // pass dismiss function down to toast
  if (toast) {
    clonedToast = React.cloneElement(toast, { dismissToast });
  }

  // set a timeout of `delay` on `toast` to dismiss itself
  useEffect(() => {
    const timer = setTimeout(dismissToast, delay);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  /* TODO: portal this to document.body and set default styles */
  return (
    <div className="toaster">
      <CSSTransition
        in={isToasting}
        appear
        unmountOnExit
        timeout={350}
        classNames="toast"
      >
        {clonedToast}
      </CSSTransition>
    </div>
  );
};

Toaster.defaultProps = {
  delay: 3000000,
};

Toaster.propTypes = {
  /** Length of time in MS toasts should auto-dismiss */
  delay: PropTypes.number,

  /** a `Toast` element */
  toast: PropTypes.element,
};

export default Toaster;
