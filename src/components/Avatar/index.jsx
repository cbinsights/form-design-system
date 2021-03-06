import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cc from 'classcat';
import baseElement from 'util/baseElement';

const LIGHT_COLORS = ['white', 'haze', 'lightGray'];
const DARK_COLORS = [
  'orange',
  'charcoal',
  'navy',
  'aqua',
  'gray',
  'red',
  'purple',
  'blue',
];
export const RADII = ['square', 'circle'];
export const BG_COLORS = [...LIGHT_COLORS, ...DARK_COLORS];
export const SIZES = ['s', 'm', 'l'];
export const INITIALS_LENGTH = [1, 2];

export const grabInitials = (str, initialsCount = 2) =>
  str
    .split(' ')
    .slice(0, initialsCount)
    .reduce((prev, curr) => prev + curr.charAt(0), '')
    .toUpperCase();

export const trimName = (str) => {
  // We want to reject strings which only contain whitespaces
  const regex = /\S/;
  // If it doesn't only contain whitespaces, return a trimmed string,
  // otherwise return null
  return str && regex.test(str) ? str.trim() : null;
};

const Avatar = forwardRef(
  (
    {
      bgColor = 'purple',
      size = 'm',
      radius = 'circle',
      'aria-label': ariaLabel = 'Avatar',
      initialsLength = 2,
      imgUrl,
      name,
      Link,
      PlaceholderIcon,
      ...rest
    },
    ref
  ) => {
    const cleanName = trimName(name);

    const Element = baseElement({ href: rest.href, onClick: rest.onClick, as: Link });

    const placeholderIconSize = () => {
      switch (size) {
        case 's':
          return 16;
        case 'm':
          return 18;
        case 'l':
          return 24;
        default:
          return 16;
      }
    };

    return (
      <Element
        {...rest}
        ref={ref}
        role={Element === 'div' ? 'img' : undefined}
        aria-label={ariaLabel}
        title={cleanName || 'Placeholder Avatar'}
        className={cc([
          {
            'border--focus': Element !== 'div',
            'color--white': DARK_COLORS.includes(bgColor),
          },
          'fdsAvatar',
          'alignChild--center--center',
          `bgColor--${bgColor}`,
          `fdsAvatar--${size}`,
          `fdsAvatar--${radius}`,
        ])}
      >
        {imgUrl && (
          <span className="fdsAvatar-img" style={{ backgroundImage: `url(${imgUrl})` }} />
        )}
        {cleanName && grabInitials(cleanName, initialsLength)}
        {!(cleanName || imgUrl) && PlaceholderIcon && (
          <PlaceholderIcon customSize={placeholderIconSize()} />
        )}
      </Element>
    );
  }
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  /** Controls color of button */
  bgColor: PropTypes.oneOf(BG_COLORS),
  /** Controls the size of the button */
  size: PropTypes.oneOf(SIZES),
  /** Controls radius of button (slightly rounded square, or circle) */
  radius: PropTypes.oneOf(RADII),
  /** Control initials displayed, and also used for title accessibility attribute (uses 2 words max for initials) */
  name: PropTypes.string,
  /** Sets background image over initials */
  imgUrl: PropTypes.string,
  /** Controls how many intials can be displayed */
  initialsLength: PropTypes.oneOf(INITIALS_LENGTH),
  /**  Accepts FDS Icon. Renders if name or imgUrl are not present  */
  PlaceholderIcon: PropTypes.func,
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.elementType,
  /** Adds an aria-label to the component (we add a default one for you, but it's preferred to add one if you can.) */
  'aria-label': PropTypes.string,
};

export default Avatar;
