import React from 'react';
import cc from 'classcat';
import PropTypes from 'prop-types';
import {
  Menu as ReachMenu,
  MenuItems as ReachMenuItems,
  MenuButton as ReachMenuButton,
  MenuPopover as ReachMenuPopover,
} from '@reach/menu-button';

const Menu = ({ isDisabled = false, isInModal = false, children, trigger }) => {
  if (isDisabled) return trigger;

  const clonedTrigger = React.cloneElement(trigger, { tabIndex: '-1' });

  return (
    <ReachMenu>
      <ReachMenuButton className="resetButton border--focus rounded--all">
        {clonedTrigger}
      </ReachMenuButton>
      <ReachMenuPopover
        className={cc([
          {
            'fdsMenu--inModal': isInModal,
          },
          'elevation--2 rounded--all bgColor--white',
        ])}
      >
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

  /** Sets `z-index` to `zindex-crazy` when inside a modal. */
  isInModal: PropTypes.bool,
};

export default Menu;
