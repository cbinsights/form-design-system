import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';
import CaretDownIcon from '../../../lib/icons/react/CaretDownIcon';

const Button = ({
  theme,
  iconPlacement,
  Icon,
  Link,
  size,
  disabled,
  children,
  isLoading,
  isDestructive,
  isFullWidth,
  hasCaret,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, as: Link });

  return (
    <Element
      {...rest}
      className={cx(
        'fdsButton',
        'fontStyle--caps',
        'display--inlineFlex',
        'rounded--all',
        'alignChild--center--center',
        'border--focus--noTransition',
        'transition-default',
        {
          'fdsButton--s': size === 's',
          'fdsButton--m': size === 'm',
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
      <span className={cx('fdsButton-label', { 'fdsButton--hidden': isLoading })}>
        {children}
      </span>
      {Icon && (
        <div
          className={cx('alignChild--center--center', {
            'fdsButton-icon--left': iconPlacement === 'left',
            'fdsButton-icon--right': iconPlacement === 'right',
            'fdsButton--hidden': isLoading,
          })}
        >
          <Icon customSize={size === 's' ? 16 : 18} />
        </div>
      )}
      {hasCaret && (
        <div className="margin--left--half alignChild--center--center">
          <CaretDownIcon customSize={12} />
        </div>
      )}
    </Element>
  );
};

Button.defaultProps = {
  theme: 'blue',
  iconPlacement: 'right',
  size: 'm',
};

Button.propTypes = {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   * ```
   * import { Link } from 'react-router'
   * Link={Link}
   * ```
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
  /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
  Icon: PropTypes.func,
  /** Controls the button going full width */
  isFullWidth: PropTypes.bool,
  /** Controls showing CaretDown icon (right aligned) */
  hasCaret: PropTypes.bool,
  /** Used to control the display and theme of the button */
  theme: PropTypes.oneOf(['blue', 'outlined', 'ghost']),
  /** Used to control the size of the button */
  size: PropTypes.oneOf(['s', 'm']),
  /** Contents inside the button */
  children: PropTypes.node,
};

export default Button;
