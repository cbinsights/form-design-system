import React from 'react';
import PropTypes from 'prop-types';

const Updatable = ({ message, component }) => (
  <div className="updatable">
    {component}
    {message && <div className="updatable-indicator">{message}</div>}
  </div>
);

Updatable.propTypes = {
  /** Count or message for the updates bubble */
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** The component to apply the updates bubble to */
  component: PropTypes.element.isRequired,
};

export default Updatable;
