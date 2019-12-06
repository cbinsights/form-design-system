import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import baseElement from '../../util/baseElement';

export const VALID_COLORS = [
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

const INVERTED_COLORS = ['gray', 'charcoal', 'navy', 'orange'];

const grabInitials = (str) =>
  str.split(' ').reduce((prev, curr) => prev + curr.charAt(0), '');

const Avatar = ({ color, size, label, Link, ...rest }) => {
  const Element = baseElement({ href: rest.href, as: Link });
  return (
    <Element
      {...rest}
      title={label}
      className={cx('fdsAvatar', `bgColor--${color}`, `fdsAvatar--${size}`, {
        'color--white': INVERTED_COLORS.includes(color),
      })}
    >
      {label && grabInitials(label)}
    </Element>
  );
};

Avatar.defaultProps = {
  color: 'gray',
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
  color: PropTypes.oneOf(VALID_COLORS),
  /** Used to control the size of the button */
  size: PropTypes.oneOf(['s', 'm']),
  /** Accessibility label */
  label: PropTypes.string,
};

export default Avatar;
