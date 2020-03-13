import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from 'util/baseElement';

const LIGHT_COLORS = ['white', 'haze', 'lightGray'];
const DARK_COLORS = ['orange', 'charcoal', 'navy', 'aqua', 'gray', 'red', 'purple'];
export const RADII = ['square', 'circle'];
export const BG_COLORS = [...LIGHT_COLORS, ...DARK_COLORS];
export const SIZES = ['s', 'm'];
export const INITIALS_LENGTH = [1, 2];

export const grabInitials = (str, initialsCount = 2) =>
  str
    .split(' ')
    .slice(0, initialsCount)
    .reduce((prev, curr) => prev + curr.charAt(0), '')
    .toUpperCase();

const Avatar = ({
  bgColor,
  imgUrl,
  size,
  name,
  initialsLength,
  radius,
  Link,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, onClick: rest.onClick, as: Link });
  return (
    <Element
      {...rest}
      role={Element === 'div' && 'img'}
      title={name}
      className={cx(
        'fdsAvatar',
        `bgColor--${bgColor}`,
        `fdsAvatar--${size}`,
        `fdsAvatar--${radius}`,
        {
          'border--focus': Element !== 'div',
          'color--white': DARK_COLORS.includes(bgColor),
        }
      )}
    >
      {imgUrl && (
        <span className="fdsAvatar-img" style={{ backgroundImage: `url(${imgUrl})` }} />
      )}
      {name && grabInitials(name, initialsLength)}
    </Element>
  );
};

Avatar.defaultProps = {
  bgColor: 'purple',
  size: 'm',
  radius: 'circle',
  initialsLength: 2,
};

Avatar.propTypes = {
  /** Controls color of button */
  bgColor: PropTypes.oneOf(BG_COLORS),
  /** Controls the size of the button */
  size: PropTypes.oneOf(SIZES),
  /** Controls radius of button (slightly rounded square, or circle) */
  radius: PropTypes.oneOf(RADII),
  /** Control initials displayed, and also used for title accessibility attribute (uses 2 words max for initials) */
  name: PropTypes.string.isRequired,
  /** Sets background image over initials */
  imgUrl: PropTypes.string,
  /** Controls how many intials can be displayed */
  initialsLength: PropTypes.oneOf(INITIALS_LENGTH),
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

export default Avatar;
