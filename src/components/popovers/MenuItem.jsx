import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as ReachMenuItem } from '@reach/menu-button';

const MenuItem = ({ onSelect, children }) => (
  <ReachMenuItem onSelect={onSelect}>{children}</ReachMenuItem>
);

MenuItem.propTypes = {
  /** selection callback */
  onSelect: PropTypes.func.isRequired,

  /** React children - any JSX can be used in a menu item */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MenuItem;
