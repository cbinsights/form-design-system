import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import { CaretDownIcon } from 'lib/icons/react';

export const SIZES = ['s', 'm'];
export const THEMES = ['blue', 'outlined', 'ghost'];

const Button = forwardRef(
  (
    {
      theme = 'blue',
      size = 'm',
      IconLeft,
      IconRight,
      Link,
      disabled,
      label,
      isActive,
      isLoading,
      isDestructive,
      isFullWidth,
      hasCaret,
      isBreakoutLink,
      margin,
      ...rest
    },
    ref
  ) => {
    const Element = baseElement({ href: rest.href, onClick: true, as: Link });

    const IconComponent = ({ direction }) => {
      const Icon = direction === 'left' ? IconLeft : IconRight;
      return (
        <>
          {Icon && (
            <div
              className={cc([
                {
                  'fdsButton--hidden': isLoading,
                },
                'alignChild--center--center',
                `fdsButton-icon--${direction}`,
              ])}
            >
              <Icon customSize={size === 's' ? 16 : 18} />
            </div>
          )}
        </>
      );
    };

    IconComponent.propTypes = {
      direction: PropTypes.oneOf(['left', 'right']),
    };

    const Icons = () => (
      <>
        <IconComponent direction="left" />
        <IconComponent direction="right" />
      </>
    );

    return (
      <Element
        {...rest}
        ref={ref}
        className={cc([
          {
            'fdsButton--isDestructive': isDestructive,
            'fdsButton--loading': isLoading,
            'fdsButton--disabled': disabled,
            'fdsButton--isFullWidth': isFullWidth,
            'fdsButton--isActive': isActive && !disabled,
            [`margin--${margin}`]: margin,
            breakoutLink: isBreakoutLink,
          },
          'fdsButton',
          'fontStyle--caps',
          'display--inlineFlex',
          'rounded--all',
          'alignChild--center--center',
          'border--focus--noTransition',
          'transition--default',
          `fdsButton--${size}`,
          `fdsButton--${theme}`,
        ])}
        disabled={disabled && Element === 'button'}
      >
        <div className="display--inlineFlex fdsButton--loading-spinnerWrapper">
          <div className={cc({ 'fdsButton--loading-spinner': isLoading })} />
          <span className={cc([{ 'fdsButton--hidden': isLoading }, 'fdsButton-label'])}>
            {label}
          </span>
          <Icons />
          {hasCaret && (
            <div className="margin--left--s alignChild--center--center">
              <CaretDownIcon customSize={12} />
            </div>
          )}
        </div>
      </Element>
    );
  }
);

Button.displayName = 'Button';

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
  /**  Pass in "only" a FDS Icon reference to display it (e.g. IconRight={ApproveIcon}) */
  IconRight: PropTypes.func,
  /**  Pass in "only" a FDS Icon reference to display it (e.g. IconLeft={ApproveIcon}) */
  IconLeft: PropTypes.func,
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
  /** Controls showing of an active UI state for the button */
  isActive: PropTypes.bool,
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
  /** Extend click radius of button to nearest relative parent */
  isBreakoutLink: PropTypes.bool,
  /** Allows specifying a margin class value. all--y, top--xl, etc */
  margin(props, propName) {
    // This will be split out into a reusable function the moment we
    // would like to use this elsewhere.
    const marginValue = props[propName];

    const directions = {
      all: true,
      left: true,
      right: true,
      top: true,
      bottom: true,
      x: true,
      y: true,
    };

    const amounts = {
      xs: true,
      s: true,
      m: true,
      l: true,
      xl: true,
    };

    if (marginValue) {
      const split = marginValue.split('--');
      // If the first part of the split class is not a direction, it's an invalid value.
      if (!directions[split[0]]) {
        return new Error(`Invalid margin (no valid direction detected)`);
      }
      // If there happens to be an amount (which is optional)
      if (split[1]) {
        // If a standard amount isn't detected, the class is invalid
        if (!amounts[split[1]]) {
          return new Error(`Invalid margin value (no valid value detected)`);
        }
      }
      // There should only be a single double hyphen in the value they pass else it's wrong
      if (split[2]) {
        return new Error(`Found more than one double hyphen ('--') in margin prop`);
      }
    }
    return null;
  },
};

export default Button;
