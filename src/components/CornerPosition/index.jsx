import React from 'react';
import PropTypes from 'prop-types';

const CornerPosition = ({ decoration, children }) => (
  <div className="cornerPosition-root">
    {children}
    {decoration && <div className="cornerPosition-decoration">{decoration}</div>}
  </div>
);

CornerPosition.propTypes = {
  /** decoration to add to Node */
  decoration: PropTypes.node,
  /** Node to decorate */
  children: PropTypes.node,
};

export default CornerPosition;
