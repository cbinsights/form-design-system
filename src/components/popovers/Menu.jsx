import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu as ReachMenu,
  MenuList as ReachMenuList,
  MenuButton as ReachMenuButton,
} from '@reach/menu-button';

const Menu = ({ children, trigger, isInModal }) => (
  <ReachMenu className={isInModal && 'fdsMenu--inModal'}>
    <ReachMenuButton className="resetButton border--focus rounded--all">
      {trigger}
    </ReachMenuButton>
    <ReachMenuList className="elevation--2 rounded--all bgColor--white">
      {children}
    </ReachMenuList>
  </ReachMenu>
);

Menu.defaultProps = {
  isInModal: false,
};

Menu.propTypes = {
  /** JSX node - the element that should trigger the menu */
  trigger: PropTypes.node.isRequired,

  /** React children (should be of type `MenuItem`) */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,

  /** Sets `z-index` to `zindex-crazy` when inside a modal. */
  isInModal: PropTypes.bool,
};

export default Menu;
