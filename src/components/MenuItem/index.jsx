import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as ReachMenuItem } from '@reach/menu-button';

const MenuItem = ({ onSelect, children, isDisabled }) => (
  <ReachMenuItem
    className={isDisabled ? 'fdsMenuItem--disabled' : undefined}
    onSelect={!isDisabled && onSelect}
    aria-disabled={isDisabled}
  >
    {children}
  </ReachMenuItem>
);

MenuItem.propTypes = {
  /** selection callback */
  onSelect: PropTypes.func.isRequired,

  /** React children - any JSX can be used in a menu item */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Styles menu item as disabled and disables selection events */
  isDisabled: PropTypes.bool,
};

export default MenuItem;
