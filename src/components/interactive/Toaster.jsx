import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
// import PropTypes from 'prop-types';
import Toast from './Toast';

let transitionID = uuidv4();

const Toaster = ({ toastProps = {}, dismissDelay = 4000 }) => {
  const [toast, setToast] = useState(null);

  const dismissToast = () => setToast(null);

  useEffect(() => {
    transitionID = uuidv4();
  }, [toastProps.content]);

  useEffect(() => {
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
            isAutoDismiss={toastProps.isAutoDismiss}
            content={toastProps.content}
            type={toastProps.type}
          />
        </div>
      </CSSTransition>
    );

    const timer = setTimeout(() => dismissToast(), dismissDelay);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [toastProps.content, toastProps.type]); // We can check for whatever we'd like here

  return ReactDOM.createPortal(
    <div aria-live="assertive">
      <TransitionGroup>{toast}</TransitionGroup>
    </div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

Toaster.propTypes = {};

export default Toaster;
