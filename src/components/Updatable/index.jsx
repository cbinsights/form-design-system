import React from 'react';
import PropTypes from 'prop-types';

const Updatable = ({ message, children }) => (
  <div className="updatable">
    {children}
    {message && <div className="updatable-indicator">{message}</div>}
  </div>
);

Updatable.propTypes = {
  /** Count or message for the updates bubble */
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** React children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Updatable;
