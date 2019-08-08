import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DenyIcon from '../../../lib/icons/react/DenyIcon';
import baseElement from '../../util/baseElement';

const Chip = ({ size, as, theme, isActive, label, subtitle, hasClose, ...rest }) => {
  const Element = baseElement({ href: rest.href, as });

  const rootClass = cx('fdsChip', {
    'fdsChip--active': isActive,
    'fdsChip--small': size === 'small',
    'fdsChip--large': size === 'large',
    'fdsChip--blue': theme === 'blue',
    'fdsChip--outline': theme === 'outline',
  });
  return (
    <Element {...rest} className={rootClass}>
      {label}
      {subtitle && <span className="fdsChip-subtitle">{subtitle}</span>}
      {hasClose && (
        <span className="fdsChip-close">
          <DenyIcon size="xs" />
        </span>
      )}
    </Element>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  /**
   * This allows for overriding of the Chip root element.
   * Meant to accomodate  `<Link />`
   */
  as: PropTypes.func,
  isActive: PropTypes.bool,
  subtitle: PropTypes.string,
  hasClose: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
};

Chip.defaultProps = {
  theme: 'gray',
  size: 'medium',
};

export default Chip;
