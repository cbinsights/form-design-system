import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
// import PropTypes from 'prop-types';
import Toast from './Toast';

const Toaster = ({ toastProps = {}, dismissDelay = 4000 }) => {
  const [isToastShowing, setIsToastShowing] = useState(false);

  const dismissToast = () => setIsToastShowing(false);

  useEffect(() => {
    setIsToastShowing(true);

    const timer = setTimeout(() => dismissToast(), dismissDelay);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [toastProps.type, toastProps.content]); // We can check for whatever we'd like here

  return ReactDOM.createPortal(
    <div aria-live="assertive">
      <TransitionGroup>
        <CSSTransition
          key={uuidv4()} // This is the key to the re-render. We may need to only generate a new uuid under specific circumstances like progress
          appear
          unmountOnExit
          timeout={380}
          classNames="rtgSlideIn"
        >
          <div className="toaster">
            {isToastShowing && (
              <Toast
                dismissDelay={dismissDelay}
                dismissToast={dismissToast}
                isAutoDismiss={toastProps.isAutoDismiss}
                content={toastProps.content}
                type={toastProps.type}
              />
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

Toaster.propTypes = {};

export default Toaster;
