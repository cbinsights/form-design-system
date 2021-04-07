import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink as ReachMenuLink } from '@reach/menu-button';

const noop = () => {};

const MenuLink = ({ onSelect, children, isDisabled, Link, ...rest }) => (
  <ReachMenuLink
    className={isDisabled ? 'fdsMenuItem--disabled' : undefined}
    onSelect={!isDisabled ? onSelect : noop}
    aria-disabled={isDisabled}
    as={Link}
    {...rest}
  >
    {children}
  </ReachMenuLink>
);

MenuLink.propTypes = {
  /** selection callback */
  onSelect: PropTypes.func,

  /** React children - any JSX can be used in a menu item */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Styles menu item as disabled and disables selection events */
  isDisabled: PropTypes.bool,

  /**
   * Takes in a react-router `Link` reference and sets it
   * as the base element. You may ONLY use it like the
   * following:
   *
   * - `import { Link } from 'react-router'`
   * - `Link={Link}`
   */
  Link: PropTypes.elementType,
};

export default MenuLink;
