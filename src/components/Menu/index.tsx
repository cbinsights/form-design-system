import React from 'react';
import {
  Menu as ReachMenu,
  MenuItems as ReachMenuItems,
  MenuButton as ReachMenuButton,
  MenuPopover as ReachMenuPopover,
} from '@reach/menu-button';

export interface MenuProps {
  /** JSX node - the element that should trigger the menu */
  trigger: React.ReactElement;

  /** React children (should be of type `MenuItem`) */
  children: React.ReactNode;

  /** Prevent trigger from opening menu */
  isDisabled?: boolean;
}

const Menu = ({ isDisabled = false, children, trigger }: MenuProps): JSX.Element => {
  if (isDisabled) return trigger;

  return (
    <ReachMenu>
      <ReachMenuButton as={trigger.type} {...trigger.props} />
      <ReachMenuPopover className="elevation--2 rounded--all bgColor--white">
        <ReachMenuItems>{children}</ReachMenuItems>
      </ReachMenuPopover>
    </ReachMenu>
  );
};

export default Menu;
