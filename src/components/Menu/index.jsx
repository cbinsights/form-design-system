import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu as ReachMenu,
  MenuItems as ReachMenuItems,
  MenuButton as ReachMenuButton,
  MenuPopover as ReachMenuPopover,
} from '@reach/menu-button';

const Menu = ({ isDisabled = false, children, trigger }) => {
  if (isDisabled) return trigger;

  return (
    <ReachMenu>
      <ReachMenuButton as="div">{trigger}</ReachMenuButton>
      <ReachMenuPopover className="elevation--2 rounded--all bgColor--white">
        <ReachMenuItems>{children}</ReachMenuItems>
      </ReachMenuPopover>
    </ReachMenu>
  );
};

Menu.propTypes = {
  /** JSX node - the element that should trigger the menu */
  trigger: PropTypes.node.isRequired,

  /** React children (should be of type `MenuItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Prevent trigger from opening menu */
  isDisabled: PropTypes.bool,
};

export default Menu;
