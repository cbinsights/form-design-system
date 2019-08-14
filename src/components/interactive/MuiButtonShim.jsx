import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

/**
 * @module MuiButtonShim
 * DO NOT DOCUMENT (not for public use)
 *
 * This shim replaces the material-ui button use cases in FDS (until we have a standard
 * button component).
 * Renders a `button` element with some basic style overrides.
 */
const MuiButtonShim = ({ children, disabled, isRound, className, ...otherProps }) => (
  <button
    className={cx(
      'fdsButton padding--all--half',
      {
        'fdsButton--round': isRound,
        'fdsButton--disabled': disabled,
      },
      className
    )}
    disabled={disabled}
    {...otherProps}
  >
    {children}
  </button>
);

MuiButtonShim.propTypes = {
  /** Makes the button a circle */
  isRound: PropTypes.bool,

  /** is the button disabled? */
  disabled: PropTypes.bool,

  /** click handler */
  onClick: PropTypes.func,

  /** custom class name */
  className: PropTypes.string,

  /** react children */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MuiButtonShim;
