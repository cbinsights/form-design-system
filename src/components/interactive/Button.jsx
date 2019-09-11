import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

const Button = ({ theme, isLoading, iconPlacement, Icon, Link, children, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      className={cx('fdsButton', {
        'fdsButton--contained-blue': theme === 'contained--blue',
        'fdsButton--contained-red': theme === 'contained--red',
        'fdsButton--loading': isLoading,
      })}
      {...rest}
    >
      {Icon && iconPlacement === 'left' && (
        <div className="margin--right--half fdsButton-icon">
          <Icon size="xs" />
        </div>
      )}
      <span className={cx({ 'fdsButton--hiddenLabel': isLoading })}>{children}</span>
      {Icon && iconPlacement === 'right' && (
        <div className="margin--left--half fdsButton-icon">
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

Button.propTypes = {
  /**
   * Pass **only** react-router `Link` here. You may **not**
   * pass anything else here: SFC, Class Component, etc (even
   * if they use react-router `Link` underneath the hood).
   */
  Link: PropTypes.func,
  /**
   * Controls whether loading spinner displays. Button text and icons are set to visibility hidden
   * to preserve the space set, whilst hiding them
   */
  isLoading: PropTypes.bool,
  /** Controls which side the `Icon` renders on, assuming you pass it */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func,
  /** Used to control the display and theme of the button */
  theme: PropTypes.oneOf(['container--blue', 'container--red']),
  /** Contents inside the button */
  children: PropTypes.node,
};

export default Button;
