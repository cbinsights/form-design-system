import React from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';

export const SIZES = ['xs', 's'];

const Badge = ({ label, size = 's', ...rest }) => (
  <div {...rest} className={cc(['fdsBadge', 'wrap--singleLine', `fdsBadge--${size}`])}>
    {label}
  </div>
);

Badge.propTypes = {
  /** Text inside the button */
  label: PropTypes.string.isRequired,
  /** Controls size display */
  size: PropTypes.oneOf(SIZES),
};

export default Badge;
