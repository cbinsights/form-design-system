import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} props react props
 * @returns {ReactElement}
 */
const DecoratedInput = ({ before, after, children }) => (
  <div className="fdsDecoratedInput" data-before={before} data-after={after}>
    {children}
  </div>
);

DecoratedInput.propTypes = {
  /** String to place to the left of the input */
  before: PropTypes.string,

  /** String to place to the right of the input */
  after: PropTypes.string,

  /** React children */
  children: PropTypes.node,
};

export default DecoratedInput;
