import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import DenyIcon from 'fds-icons/lib/react/DenyIcon';

/**
 * Common pattern where we use href to generate whether
 * an href or a button is returned, and also allow a master
 * override where you can specify any element / component as
 * the root
 */
const baseElement = ({ href, rootEl }) => {
  let Element;
  if (rootEl) {
    Element = rootEl;
  } else if (href) {
    Element = 'a';
  } else {
    Element = 'button';
  }
  return Element;
};

const Chip = ({
  size,
  rootEl,
  theme,
  isActive,
  children,
  label,
  subtitle,
  hasClose,
  ...rest
}) => {
  const Element = baseElement({ href: rest.href, rootEl });

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
  label: PropTypes.string,
  /**
   * This allows for overriding of the Chip root element.
   * Meant to accomodate  `<Link />`
   */
  rootEl: PropTypes.func,
  isActive: PropTypes.bool,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  hasClose: PropTypes.bool,
  value: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
};

const Chips = ({ list, ...topRest }) => (
  <ul className="fdsChip-ul">
    {list.map((listItem) => (
      <li className="fdsChip-li" key={listItem.value || listItem.label}>
        <Chip {...topRest} {...listItem} />
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
      label: PropTypes.string,
      /**
       * Use if labels are not unique
       */
      value: PropTypes.string.isRequired,
      /**
       * This allows for overriding of the Chip root element
       * (Meant to accomodate `<Link />`)
       */
      rootEl: PropTypes.func,
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
