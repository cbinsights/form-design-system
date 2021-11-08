import React, { HTMLAttributes } from 'react';
import cc from 'classcat';
import DenyIcon from 'lib/icons/react/DenyIcon';
import baseElement from 'util/baseElement';
import Icon from 'components/Icon';

export const THEMES = ['blue', 'gray', 'outline'] as const;
export const SIZES = ['s', 'm'] as const;

export interface ChipProps
  extends HTMLAttributes<HTMLElement | HTMLButtonElement | HTMLAnchorElement> {
  /**
   * Text that appears in the button
   */
  label: string;

  /** Controls the color (look and feel) of the chip */
  theme?: typeof THEMES[number];

  /** Specify the size of the chip */
  size?: typeof SIZES[number];

  /** Controls the isActive state of the chip, which changes colors */
  isActive?: boolean;

  /**  Pass in "only" a FDS Icon reference to display it (e.g. Icon={ApproveIcon}) */
  Icon?: Icon;

  /** Text that appears to the right of the label */
  subtitle?: string;

  /**
   * onClick handler for close icon  (By passing this onClick handler, the close icon
   * will automatically appear)
   */
  onClose?: React.ReactEventHandler;

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link?: React.ComponentType;

  href?: string;
}

const Chip = ({
  size = 'm',
  theme = 'gray',
  Link,
  Icon,
  isActive,
  label,
  subtitle,
  onClose,
  ...rest
}: ChipProps): JSX.Element => {
  const Element = baseElement({ href: rest.href, onClick: true, as: Link });

  const rootClass = cc([
    {
      'fdsChip--active': isActive,
    },
    'fdsChip',
    'border--focus--noTransition',
    'transition--default',
    `fdsChip--${size}`,
    `fdsChip--${theme}`,
  ]);
  return (
    <Element {...rest} className={rootClass}>
      {Icon && (
        <div className="fdsChip-icon">
          <Icon customSize={size === 'm' ? 16 : 14} />
        </div>
      )}
      <span>
        <span className="fdsChip-label">{label}</span>
        {subtitle && <span className="fdsChip-subtitle">{subtitle}</span>}
      </span>
      {onClose && (
        <span
          role="button"
          tabIndex={0}
          className="fdsChip-close border--focus"
          onClick={(e) => {
            onClose(e);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <DenyIcon customSize={10} />
        </span>
      )}
    </Element>
  );
};

export default Chip;
