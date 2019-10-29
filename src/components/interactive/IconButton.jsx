import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const IconButton = ({
  Icon,
  disabled,
  isActive,
  radius,
  theme,
  isLoading,
  isDestructive,
  ...rest
}) => (
  <button
    {...rest}
    className={cx('fdsIconButton', 'rounded--all', {
      'fdsIconButton--disabled': disabled,
      'fdsIconButton--active': isActive,
      'fdsIconButton--circle': radius === 'circle',
      'fdsIconButton--isDestructive': isDestructive,
      'fdsIconButton--aqua': theme === 'aqua',
      'fdsIconButton--ghost': theme === 'ghost',
      'fdsIconButton--loading': isLoading,
    })}
    disabled={disabled}
  >
    <span className={isLoading ? 'fdsIconButton--hidden' : ''}>
      <Icon size="xs" />
    </span>
  </button>
);

IconButton.defaultProps = {
  radius: 'square',
  theme: 'ghost',
};

IconButton.propTypes = {
  /** Controls active style UI of button */
  isActive: PropTypes.bool,
  /** Controls radius of button (slightly rounded square, or circle) */
  radius: PropTypes.oneOf(['square', 'circle']),
  /** Controls spinner showing for icon button (normal icon is hidden) */
  isLoading: PropTypes.bool,
  /** Controls look and feel of button */
  theme: PropTypes.oneOf('ghost', 'aqua'),
  /** Controls destructive look and feel of button */
  isDestructive: PropTypes.bool,
  /** Controls whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func.isRequred,
};

export default IconButton;
