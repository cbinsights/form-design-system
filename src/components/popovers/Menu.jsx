import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import {
  Menu as ReachMenu,
  MenuItems as ReachMenuItems,
  MenuButton as ReachMenuButton,
  MenuPopover as ReachMenuPopover,
} from '@reach/menu-button';

const Menu = ({ isInModal = false, children, trigger }) => (
  <ReachMenu>
    <ReachMenuButton className="resetButton border--focus rounded--all">
      {trigger}
    </ReachMenuButton>
    <ReachMenuPopover
      className={cx('elevation--2 rounded--all bgColor--white', {
        'fdsMenu--inModal': isInModal,
      })}
    >
      <ReachMenuItems>{children}</ReachMenuItems>
    </ReachMenuPopover>
  </ReachMenu>
);

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
