import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from '@reach/menu-button';

// TODO: factor out this component
export const MenuItem = ({ onSelect, children }) => (
  <ReachMenuItem onSelect={onSelect}>{children}</ReachMenuItem>
);

const Menu = ({ children, trigger }) => {
  return (
    <ReachMenu>
      <ReachMenuButton className="resetButton border--focus rounded--all">
        {trigger}
      </ReachMenuButton>
      <ReachMenuList className="elevation--2 rounded--all bgColor--white">
        {children}
      </ReachMenuList>
    </ReachMenu>
  );
};

Menu.defaultProps = {};

Menu.propTypes = {
  /** JSX node - the element that should trigger the menu */
  trigger: PropTypes.node.isRequired,

  /** React children (should be of type `MenuItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};

export default Menu;
