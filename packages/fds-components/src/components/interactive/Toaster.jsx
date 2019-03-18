import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @module Toaster
 * Controller for showing, dismissing and positioning Toast components.
 */
const Toaster = ({ delay, toast }) => {
  const [isToasting, setIsToasting] = useState(Boolean(toast));

  /**
   * Removes a toast from `toasts` internal state array
   * @param {String} toastId
   */
  const dismissToast = () => {
    setIsToasting(false);
  };

  // pass dismiss function down to toast
  if (toast) {
    React.cloneElement(toast, { dismissToast });
  }

  // set a timeout of `delay` on `toast` to dismiss itself
  useEffect(() => {
    const timer = setTimeout(dismissToast, delay);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  return <div className="toaster">{isToasting && toast}</div>;
};

Toaster.defaultProps = {
  delay: 3000,
};

Toaster.propTypes = {
  /** Length of time in MS toasts should auto-dismiss */
  delay: PropTypes.number,

  /** a `Toast` element */
  toast: PropTypes.element,
};

export default Toaster;
