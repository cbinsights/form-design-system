import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import { CaretDownIcon } from 'lib/icons/react';

export const THEMES = ['ghost', 'aqua', 'outlined'];
export const RADII = ['square', 'circle'];
export const SIZES = ['s', 'm'];

const IconButton = forwardRef(
  (
    {
      radius = 'square',
      theme = 'ghost',
      size = 'm',
      Icon,
      disabled,
      isActive,
      isLoading,
      isDestructive,
      hasCaret,
      label,
      Link,
      ...rest
    },
    ref
  ) => {
    const Element = baseElement({ href: rest.href, onClick: true, as: Link });
    return (
      <Element
        {...rest}
        ref={ref}
        title={label}
        className={cc([
          {
            'shape--circle': radius === 'circle',
            'fdsIconButton--disabled': disabled,
            'fdsIconButton--isActive': isActive && !disabled,
            'fdsIconButton--isDestructive': isDestructive,
            'fdsIconButton--hasCaret': hasCaret,
            'fdsIconButton--loading': isLoading,
          },
          'fdsIconButton',
          'rounded--all',
          'border--focus--noTransition',
          'transition--default',
          'alignChild--center--center',
          `fdsIconButton--${theme}`,
          `fdsIconButton--${size}`,
        ])}
        disabled={disabled && Element === 'button'}
      >
        <span className={cc([{ 'fdsIconButton--hidden': isLoading }])}>
          <Icon customSize={size === 's' ? 16 : 18} />
          {hasCaret && (
            <div className="display--inlineBlock margin--left--half">
              <CaretDownIcon customSize={12} />
            </div>
          )}
        </span>
      </Element>
    );
  }
);

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.func,
  /** Controls active style UI of button */
  isActive: PropTypes.bool,
  /** Controls radius of button (slightly rounded square, or circle) */
  radius: PropTypes.oneOf(RADII),
  /** Controls spinner showing for icon button (normal icon is hidden) */
  isLoading: PropTypes.bool,
  /** Controls look and feel of button */
  theme: PropTypes.oneOf(THEMES),
  /** Controls destructive look and feel of button */
  isDestructive: PropTypes.bool,
  /** Used to control the size of the button */
  size: PropTypes.oneOf(SIZES),
  /** Controls whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func.isRequired,
  /** Accessibility label */
  label: PropTypes.string.isRequired,
  /** Controls showing CaretDown icon (right aligned) */
  hasCaret: PropTypes.bool,
};

export default IconButton;
