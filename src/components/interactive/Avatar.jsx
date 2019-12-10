import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const VALID_BG_COLORS = [
  'white',
  'haze',
  'lightGray',
  'orange',
  'charcoal',
  'navy',
  'aqua',
  'gray',
  'red',
];

const NON_INVERTED_BG_COLORS = ['white', 'haze', 'lightGray'];

const grabInitials = (str) =>
  str
    .split(' ')
    .splice(0, 2)
    .reduce((prev, curr) => prev + curr.charAt(0), '');

const Avatar = ({ bgColor, imgUrl, size, name, ...rest }) => (
  <div
    {...rest}
    aria-title={name}
    className={cx('fdsAvatar', `bgColor--${bgColor}`, `fdsAvatar--${size}`, {
      'color--white': !NON_INVERTED_BG_COLORS.includes(bgColor),
    })}
  >
    {imgUrl && (
      <span className="fdsAvatar-img" style={{ backgroundImage: `url(${imgUrl})` }} />
    )}
    {name && grabInitials(name)}
  </div>
);

Avatar.defaultProps = {
  bgColor: 'gray',
  size: 'm',
};

Avatar.propTypes = {
  /** Controls color of button */
  bgColor: PropTypes.oneOf(VALID_BG_COLORS),
  /** Controls the size of the button */
  size: PropTypes.oneOf(['s', 'm']),
  /** Control initials displayed, and also used for title accessibility attribute (uses 2 words max for initials) */
  name: PropTypes.string.isRequired,
  /** Sets background image over initials */
  imgUrl: PropTypes.string,
};

export default Avatar;
