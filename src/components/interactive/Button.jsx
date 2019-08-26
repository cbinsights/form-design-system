import React from 'react';
import cx from 'classnames';

const Button = ({ theme, iconPlacement, Icon }) => (
  <button
    className={cx('niceButton', {
      'niceButton--primary': theme === 'primary--blue',
    })}
  >
    {Icon && iconPlacement === 'left' && (
      <div className="margin--right--half niceButton-icon">
        <Icon size="xs" />
      </div>
    )}
    <div class="spinner"></div>
    {Icon && iconPlacement === 'right' && (
      <div className="margin--left--half niceButton-icon">
        <Icon size="xs" />
      </div>
    )}
  </button>
);

Button.defaultProps = {
  theme: 'primary--blue',
  iconPlacement: 'right',
};

export default Button;
