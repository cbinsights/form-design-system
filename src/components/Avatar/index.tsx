import React, { forwardRef, HTMLAttributes } from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';
import cc from 'classcat';
import baseElement from 'util/baseElement';
import Icon from 'components/Icon';

const LIGHT_COLORS = ['white', 'haze', 'lightGray'] as const;
const DARK_COLORS = [
  'orange',
  'charcoal',
  'navy',
  'aqua',
  'gray',
  'red',
  'purple',
  'blue',
] as const;
export const RADII = ['square', 'circle'] as const;
export const BG_COLORS = [...LIGHT_COLORS, ...DARK_COLORS] as const;
export const SIZES = ['s', 'm', 'l'] as const;
export const INITIALS_LENGTH = [1, 2] as const;

export const grabInitials = (str: string, initialsCount = 2): string =>
  str
    .split(' ')
    .slice(0, initialsCount)
    .reduce((prev, curr) => prev + curr.charAt(0), '')
    .toUpperCase();

export const trimName = (str: string): string | null => {
  // We want to reject strings which only contain whitespaces
  const regex = /\S/;
  // If it doesn't only contain whitespaces, return a trimmed string,
  // otherwise return null
  return str && regex.test(str) ? str.trim() : null;
};

export interface AvatarProps
  extends HTMLAttributes<HTMLElement | HTMLButtonElement | HTMLAnchorElement> {
  /** Controls color of button */
  bgColor?: typeof BG_COLORS[number];
  /** Controls the size of the button */
  size?: typeof SIZES[number];
  /** Controls radius of button (slightly rounded square, or circle) */
  radius?: typeof RADII[number];
  /** Control initials displayed, and also used for title accessibility attribute (uses 2 words max for initials) */
  name?: string;
  /** Sets background image over initials */
  imgUrl?: string;
  /** Controls how many initials can be displayed */
  initialsLength?: typeof INITIALS_LENGTH[number];
  /**  Accepts FDS Icon. Renders if name or imgUrl are not present  */
  PlaceholderIcon?: Icon;
  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link?: React.ComponentType;
  /** Adds an aria-label to the component (we add a default one for you, but it's preferred to add one if you can.) */
  'aria-label'?: string;

  href?: string;
}

const Avatar = forwardRef(
  (
    {
      bgColor = 'purple',
      size = 'm',
      radius = 'circle',
      'aria-label': ariaLabel = 'Avatar',
      initialsLength = 2,
      imgUrl,
      name = '',
      Link,
      PlaceholderIcon,
      ...rest
    }: AvatarProps,
    _ref
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
    console.log(Element);
    return (
      <RadixAvatar.Root
        {...rest}
        // ref={ref}
        role={Element === 'div' ? 'img' : undefined}
        aria-label={ariaLabel}
        title={cleanName || 'Placeholder Avatar'}
        className={cc([
          {
            'border--focus': Element !== 'div',
            'color--white': (DARK_COLORS as ReadonlyArray<string>).includes(bgColor),
          },
          'fdsAvatar',
          'alignChild--center--center',
          `bgColor--${bgColor}`,
          `fdsAvatar--${size}`,
          `fdsAvatar--${radius}`,
        ])}
      >
        <RadixAvatar.Image className="fdsAvatar-img" src={imgUrl} />
        {cleanName && grabInitials(cleanName, initialsLength)}
        <RadixAvatar.Fallback>
          {!(cleanName || imgUrl) && PlaceholderIcon && (
            <PlaceholderIcon customSize={placeholderIconSize()} />
          )}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
