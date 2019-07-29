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
  /* className is ignored */ className,
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
    <Element className={rootClass} {...rest}>
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
  children: PropTypes.any,
  hasClose: PropTypes.bool,
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
};

const Chips = ({ list, /* className is ignored */ className, ...topRest }) => (
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
       * This allows for overriding of the Chip root element.
       * Meant to accomodate  `<Link />`
       */
      rootEl: PropTypes.func,
      isActive: PropTypes.bool,
      subtitle: PropTypes.string,
    })
  ),
  /** className will be ignored */
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  theme: PropTypes.oneOf(['blue', 'gray', 'outline']),
  /**
   * You can specify hasClose on all chips here. Feel free
   * to individually specify on each chip also
   */
  hasClose: PropTypes.bool,
};

export default Chips;
