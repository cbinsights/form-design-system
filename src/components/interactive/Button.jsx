import React from 'react';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

const Button = ({ theme, isLoading, iconPlacement, Icon, Link, children, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      className={cx('niceButton', {
        'niceButton--contained-blue': theme === 'contained--blue',
        'niceButton--contained-red': theme === 'contained--red',
      })}
      {...rest}
    >
      {Icon && iconPlacement === 'left' && (
        <div className="margin--right--half niceButton-icon">
          <Icon size="xs" />
        </div>
      )}
      {isLoading && <div class="spinner"></div>}
      <span className={cx({ 'niceButton--hiddenLabel': isLoading })}>{children}</span>
      {Icon && iconPlacement === 'right' && (
        <div className="margin--left--half niceButton-icon">
          <Icon size="xs" />
        </div>
      )}
    </Element>
  );
};

Button.defaultProps = {
  theme: 'primary--blue',
  iconPlacement: 'right',
};

export default Button;
