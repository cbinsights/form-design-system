import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from 'util/baseElement';
import CaretDownIcon from 'icons/CaretDownIcon';

export const SIZES = ['s', 'm'];
export const THEMES = ['blue', 'outlined', 'ghost'];
export const ICON_PLACEMENTS = ['left', 'right'];

const Button = ({
  theme,
  iconPlacement,
  Icon,
  Link,
  size,
  disabled,
  label,
  isLoading,
  isDestructive,
  isFullWidth,
  hasCaret,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, onClick: true, as: Link });

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
        'transition--default',
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
        {label}
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
  /** Text inside the button */
  label: PropTypes.string.isRequired,
  /** Used to control the display and theme of the button */
  theme: PropTypes.oneOf(THEMES),
  /** Used to control the size of the button */
  /**
   * Controls whether button should be in a destructive UI state.
   * This only influences UI, there is no functional differences enabled
   * with this boolean
   */
  isDestructive: PropTypes.bool,
  size: PropTypes.oneOf(SIZES),
  /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
  Icon: PropTypes.func,
  /** Controls side the `Icon` renders on */
  iconPlacement: PropTypes.oneOf(ICON_PLACEMENTS),
  /** Controls showing CaretDown icon (right aligned) */
  hasCaret: PropTypes.bool,
  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled: PropTypes.bool,
  /** Controls the button going full width */
  isFullWidth: PropTypes.bool,
  /**
   * Controls whether loading spinner displays. Button text and icons are set to visibility hidden
   * to preserve the space set, whilst hiding them
   */
  isLoading: PropTypes.bool,
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.func,
};

export default Button;
