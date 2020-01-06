import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const VALID_LIGHT_COLORS = ['white', 'haze', 'lightGray'];
const VALID_DARK_COLORS = ['orange', 'charcoal', 'navy', 'aqua', 'gray', 'red', 'purple'];
export const VALID_BG_COLORS = [...VALID_LIGHT_COLORS, ...VALID_DARK_COLORS];
export const SIZES = ['s', 'm'];

export const grabInitials = (str) =>
  str
    .split(' ')
    .slice(0, 2)
    .reduce((prev, curr) => prev + curr.charAt(0), '')
    .toUpperCase();

const Avatar = ({ bgColor, imgUrl, size, name, ...rest }) => (
  <div
    {...rest}
    role="img"
    title={name}
    className={cx('fdsAvatar', `bgColor--${bgColor}`, `fdsAvatar--${size}`, {
      'color--white': VALID_DARK_COLORS.includes(bgColor),
    })}
  >
    {imgUrl && (
      <span className="fdsAvatar-img" style={{ backgroundImage: `url(${imgUrl})` }} />
    )}
    {name && grabInitials(name)}
  </div>
);

Avatar.defaultProps = {
  bgColor: 'purple',
  size: 'm',
};

Avatar.propTypes = {
  /** Controls color of button */
  bgColor: PropTypes.oneOf(VALID_BG_COLORS),
  /** Controls the size of the button */
  size: PropTypes.oneOf(SIZES),
  /** Control initials displayed, and also used for title accessibility attribute (uses 2 words max for initials) */
  name: PropTypes.string.isRequired,
  /** Sets background image over initials */
  imgUrl: PropTypes.string,
};

export default Avatar;
