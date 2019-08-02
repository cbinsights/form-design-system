import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DenyIcon from 'fds-icons/lib/react/DenyIcon';
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
  className: PropTypes.string,
  hasClose: PropTypes.bool,
  key: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
};

const Chips = ({ list, ...topRest }) => (
  <ul className="fdsChip-ul">
    {list.map(({ hasClose, size, theme, key, ...itemRest }) => (
      <li className="fdsChip-li" key={key || itemRest.label}>
        <Chip hasClose={hasClose} size={size} theme={theme} {...topRest} {...itemRest} />
      </li>
    ))}
  </ul>
);

Chips.defaultProps = {
  theme: 'gray',
  size: 'medium',
};

Chips.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      /**
       * Use if labels are not unique
       */
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /**
       * This allows for overriding of the Chip root element
       * (Meant to accomodate `<Link />`)
       */
      as: PropTypes.func,
      hasClose: PropTypes.bool,
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
      isActive: PropTypes.bool,
      subtitle: PropTypes.string,
    })
  ).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
  /**
   * You can specify hasClose on all chips here (or individually per chip)
   */
  hasClose: PropTypes.bool,
};

export default Chips;
