import React from 'react';
import PropTypes from 'prop-types';
import { MenuLink as ReachMenuLink } from '@reach/menu-button';

const noop = () => {};

const MenuLink = ({ onSelect, children, isDisabled, href, as }) => (
  <ReachMenuLink
    className={isDisabled ? 'fdsMenuItem--disabled' : undefined}
    onSelect={!isDisabled ? onSelect : noop}
    aria-disabled={isDisabled}
    href={href}
    as={as}
  >
    {children}
  </ReachMenuLink>
);

MenuLink.propTypes = {
  /** selection callback */
  onSelect: PropTypes.func.isRequired,

  /** React children - any JSX can be used in a menu item */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Styles menu item as disabled and disables selection events */
  isDisabled: PropTypes.bool,

  href: PropTypes.string,

  /** Useful for passing react router Link */
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default MenuLink;
