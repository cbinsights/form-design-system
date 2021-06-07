import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import { CaretDownIcon } from 'lib/icons/react';

export const SIZES = ['s', 'm'];
export const THEMES = ['blue', 'orange', 'outlined', 'outlined--blue', 'ghost'];

export interface ButtonProps {
  /** Text inside the button */
  label: string;

  /** Used to control the display and theme of the button */
  theme?: typeof THEMES[number];

  /** Used to control the size of the button */
  /**
   * Controls whether button should be in a destructive UI state.
   * This only influences UI, there is no functional differences enabled
   * with this boolean
   */
  isDestructive?: boolean;

  size?: typeof SIZES[number];

  /**  Pass in "only" a FDS Icon reference to display it (e.g. IconRight={ApproveIcon}) */
  IconRight?: any; // Not sure how to type this yet

  /**  Pass in "only" a FDS Icon reference to display it (e.g. IconLeft={ApproveIcon}) */
  IconLeft?: any; // Not sure how to type this yet

  /** Controls showing CaretDown icon (right aligned) */
  hasCaret?: boolean;

  /**
   * Controls whether the button is disabled or not. Will control the disabled
   * presentation of either an anchor or button rendered under the hood,
   * but will only add a disabled attribute for buttons
   */
  disabled?: boolean;

  /** Controls the button going full width */
  isFullWidth?: boolean;

  /** Controls showing of an active UI state for the button */
  isActive?: boolean;
  /**
   * Controls whether loading spinner displays. Button text and icons are set to visibility hidden
   * to preserve the space set, whilst hiding them
   */
  isLoading?: boolean;

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link?: any; // Not sure how to type this yet

  /** Extend click radius of button to nearest relative parent */
  isBreakoutLink?: boolean;

  href?: string;

  // Allows rest props for now without having to introduce a complicated interface extend
  // on an element
  [x: string]: any;
}

export const Button = forwardRef(
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
      href,
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const Element = baseElement({ href, onClick: true, as: Link });

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
        href={href}
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

export default Button;
