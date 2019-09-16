import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

const Button = ({
  theme,
  isLoading,
  iconPlacement,
  Icon,
  Link,
  disabled,
  children,
  isDestructive,
  isFullWidth,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      {...rest}
      className={cx(
        'fdsButton',
        'fontStyle--caps',
        'fontWeight--bold',
        'display--inlineFlex',
        'rounded--all',
        'fontSize--m',
        'alignChild--center--center',
        {
          'fdsButton--blue': theme === 'blue',
          'fdsButton--outlined': theme === 'outlined',
          'fdsButton--ghost': theme === 'ghost',
          'fdsButton--isDestructive': isDestructive,
          'fdsButton--loading': isLoading,
          'fdsButton--disabled': disabled,
          'fdsButton--isFullWidth': isFullWidth,
        }
      )}
      disabled={disabled && Element === 'button'}
    >
      <span className={cx({ 'fdsButton--hidden': isLoading })}>{children}</span>
      {Icon && (
        <div
          className={cx('fdsButton-icon', {
            'fdsButton-icon--left': iconPlacement === 'left',
            'margin--left--half': iconPlacement === 'right',
            'margin--right--half': iconPlacement === 'left',
            'fdsButton--hidden': isLoading,
          })}
        >
          <Icon size="xs" />
        </div>
      )}
    </Element>
  );
};

Button.defaultProps = {
  theme: 'blue',
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
  /**
   * Controls whether button should be in a destructive UI state.
   * This only influences UI, there is no functional differences enabled
   * with this boolean
   */
  isDestructive: PropTypes.bool,
  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled: PropTypes.bool,
  /** Controls which side the `Icon` renders on, assuming you pass it */
  iconPlacement: PropTypes.oneOf(['left', 'right']),
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func,
  /** Controls the button going full width */
  isFullWidth: PropTypes.bool,
  /** Used to control the display and theme of the button */
  theme: PropTypes.oneOf(['blue', 'outlined', 'ghost']),
  /** Contents inside the button */
  children: PropTypes.node,
};

export default Button;
