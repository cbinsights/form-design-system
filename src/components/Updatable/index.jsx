import React from 'react';
import PropTypes from 'prop-types';
import Status from 'components/Status';

const Updatable = ({ message, children }) => (
  <div className="updatable">
    {children}
    <div className="updatable-indicator">
      <Status label={message} type="update" />
    </div>
  </div>
);

Updatable.propTypes = {
  /** Count or message for the updates bubble */
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  /** React children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Updatable;
