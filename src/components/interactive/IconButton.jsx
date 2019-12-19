import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

export const VALID_THEMES = ['aqua', 'ghost'];

const IconButton = ({
  Icon,
  disabled,
  isActive,
  radius,
  theme,
  isLoading,
  size,
  isDestructive,
  label,
  Link,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      {...rest}
      title={label}
      className={cx(
        'fdsIconButton',
        'rounded--all',
        'border--focus--notransition',
        'transition-default',
        `fdsIconButton--${theme}`,
        `fdsIconButton--${size}`,
        {
          'fdsIconButton--disabled': disabled,
          'fdsIconButton--active': isActive,
          'fdsIconButton--circle': radius === 'circle',
          'fdsIconButton--isDestructive': isDestructive,
          'fdsIconButton--loading': isLoading,
        }
      )}
      disabled={disabled && Element === 'button'}
    >
      <span className={isLoading ? 'fdsIconButton--hidden' : ''}>
        <Icon customSize={size === 's' ? 16 : 18} />
      </span>
    </Element>
  );
};

IconButton.defaultProps = {
  radius: 'square',
  theme: 'ghost',
  size: 'm',
};

IconButton.propTypes = {
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
  /** Controls active style UI of button */
  isActive: PropTypes.bool,
  /** Controls radius of button (slightly rounded square, or circle) */
  radius: PropTypes.oneOf(['square', 'circle']),
  /** Controls spinner showing for icon button (normal icon is hidden) */
  isLoading: PropTypes.bool,
  /** Controls look and feel of button */
  theme: PropTypes.oneOf(VALID_THEMES),
  /** Controls destructive look and feel of button */
  isDestructive: PropTypes.bool,
  /** Used to control the size of the button */
  size: PropTypes.oneOf(['s', 'm']),
  /** Controls whether the button is disabled or not. */
  disabled: PropTypes.bool,
  /** Used to render a FDS Icon (should only be used for FDS Icons) */
  Icon: PropTypes.func,
  /** Accessibility label */
  label: PropTypes.string,
};

export default IconButton;
