import React, { forwardRef } from 'react';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import { IconProps } from 'components/Icon';

export const THEMES = ['ghost', 'aqua', 'outlined'];
export const RADII = ['square', 'circle'];
export const SIZES = ['s', 'm'];

export interface IconButtonProps {
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link?: React.ElementType;
  /** Controls active style UI of button */
  isActive?: boolean;
  /** Controls radius of button (slightly rounded square, or circle) */
  radius?: 'square' | 'circle';
  /** Controls spinner showing for icon button (normal icon is hidden) */
  isLoading?: boolean;
  /** Controls look and feel of button */
  theme?: 'ghost' | 'aqua' | 'outlined';
  /** Controls destructive look and feel of button */
  isDestructive?: boolean;
  /** Used to control the size of the button */
  size?: 's' | 'm';
  /** Controls whether the button is disabled or not. */
  disabled?: boolean;
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: React.ComponentType<IconProps>;
  /** Accessibility label */
  label: string;
  /** Extend click radius of button to nearest relative parent */
  isBreakoutLink?: boolean;
  /** URL for base element */
  href?: string;
  /** Handler for on click event */
  onClick?: () => void;
}

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
      label,
      Link,
      isBreakoutLink,
      ...rest
    }: IconButtonProps,
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
            'fdsIconButton--loading': isLoading,
            breakoutLink: isBreakoutLink,
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
        <div className="fdsIconButton--loading-spinnerWrapper">
          <div className={cc({ 'fdsIconButton--loading-spinner': isLoading })} />
        </div>
        <span className={isLoading ? 'fdsIconButton--hidden' : ''}>
          <Icon customSize={size === 's' ? 16 : 18} />
        </span>
      </Element>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
