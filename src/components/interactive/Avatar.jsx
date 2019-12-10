import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

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

const INVERTED_BG_COLORS = ['gray', 'charcoal', 'navy', 'orange'];

const grabInitials = (str) =>
  str
    .split(' ')
    .splice(0, 2)
    .reduce((prev, curr) => prev + curr.charAt(0), '');

const Avatar = ({ bgColor, imgUrl, size, name, Link, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      {...rest}
      title={name}
      className={cx('fdsAvatar', `bgColor--${bgColor}`, `fdsAvatar--${size}`, {
        'color--white': INVERTED_BG_COLORS.includes(bgColor),
      })}
    >
      {imgUrl && (
        <span className="fdsAvatar-img" style={{ backgroundImage: `url(${imgUrl})` }} />
      )}
      {name && grabInitials(name)}
    </Element>
  );
};

Avatar.defaultProps = {
  bgColor: 'gray',
  size: 'm',
};

Avatar.propTypes = {
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
  /** Controls color of button */
  bgColor: PropTypes.oneOf(VALID_BG_COLORS),
  /** Controls the size of the button */
  size: PropTypes.oneOf(['s', 'm']),
  /** Control initials displayed, and also used for title accessibility attribute */
  name: PropTypes.string.isRequired,
  /** Sets background image over initials */
  imgUrl: PropTypes.string,
};

export default Avatar;
