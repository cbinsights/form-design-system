import React from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Popover from '../popovers/Popover';

// TODO:
// - [x] prop name cleanup
// - [x] custom trigger support
// - [x] popover
// - [ ] selected state callbacks
// - [ ] jsdoc it

const Menu = ({ items, trigger, onChange, disablePortal }) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    onSelectedItemChange: (o) => onChange(o.selectedItem),
  });

  const clonedTrigger = React.cloneElement(trigger, getToggleButtonProps());

  return (
    <Popover
      trigger={clonedTrigger}
      interactionMode="controlled"
      isOpen={isOpen}
      disablePortal={disablePortal}
    >
      <ul className="fdsMenu elevation--2 rounded--all" {...getMenuProps()}>
        {items.map((item, index) => (
          <li
            className={cx('fdsMenu-item', {
              'fdsMenu-item--active': highlightedIndex === index,
            })}
            key={`${item}${index}`}
            {...getItemProps({ item, index })}
          >
            {item}
          </li>
        ))}
      </ul>
    </Popover>
  );
};

Menu.defaultProps = {
  disablePortal: false,
  onChange: () => {},
};

Menu.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  /** Array of JSX items
   *
   * Example - mapping companies to JSX elements:
   * `items={companies.map((c) => <div><strong>{c.name}</strong> {c.description}</div>)}`
   */
  items: PropTypes.any,

  /** disables portaling the popover to `document.body` */
  disablePortal: PropTypes.bool,

  /** change callback */
  onChange: PropTypes.func,
};

export default Menu;
