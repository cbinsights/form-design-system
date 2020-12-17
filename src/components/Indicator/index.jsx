import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const SIZES = ['xs', 's'];

const Indicator = ({ label, size = 's', ...rest }) => (
  <div
    {...rest}
    className={cc(['fdsIndicator', 'wrap--singleLine', `fdsIndicator--${size}`])}
  >
    {label}
  </div>
);

Indicator.propTypes = {
  /** Text inside the button */
  label: PropTypes.string.isRequired,
  /** Controls size display */
  size: PropTypes.oneOf(SIZES),
};

export default Indicator;
