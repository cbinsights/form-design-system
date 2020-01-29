import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DenyIcon from 'lib/icons/react/DenyIcon';
import baseElement from 'util/baseElement';

export const THEMES = ['blue', 'gray', 'outline'];
export const SIZES = ['s', 'm'];

const Chip = ({ size, Link, theme, isActive, label, subtitle, onClose, ...rest }) => {
  const Element = baseElement({ href: rest.href, onClick: true, as: Link });

  const rootClass = cx(
    'fdsChip',
    'border--focus--noTransition',
    'transition--default',
    `fdsChip--${size}`,
    {
      'fdsChip--active': isActive,
      'fdsChip--blue': theme === 'blue',
      'fdsChip--outline': theme === 'outline',
    }
  );
  return (
    <Element {...rest} className={rootClass}>
      <span>
        {label}
        {subtitle && <span className="fdsChip-subtitle">{subtitle}</span>}
      </span>
      {onClose && (
        <span
          role="button"
          tabIndex="-1"
          className="fdsChip-close border--focus"
          onClick={(e) => {
            onClose(e);
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <DenyIcon size="xs" />
        </span>
      )}
    </Element>
  );
};

Chip.propTypes = {
  /**
   * Text that appears in the button
   */
  label: PropTypes.string.isRequired,
  /** Controls the color (look and feel) of the chip */
  theme: PropTypes.oneOf(THEMES),
  /** Controls the isActive state of the chip, which changes colors */
  /** Specify the size of the chip */
  size: PropTypes.oneOf(SIZES),
  isActive: PropTypes.bool,
  /** Text that appears to the right of the label */
  subtitle: PropTypes.string,
  /**
   * onClick handler for close icon  (By passing this onClick handler, the close icon
   * will automatically appear)
   */
  onClose: PropTypes.func,
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

Chip.defaultProps = {
  theme: 'gray',
  size: 'm',
};

export default Chip;
