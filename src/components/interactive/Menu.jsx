import React from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';
import PropTypes from 'prop-types';

// TODO:
// - [x] prop name cleanup
// - [ ] custom trigger support
// - [ ] popover
// - [ ] jsdoc it

const Menu = ({ items, trigger }) => {
  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  return (
    <div>
      <div {...getToggleButtonProps()}>{trigger}</div>
      <ul className={cx('fdsMenu', 'rounded--all', 'elevation--2')} {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
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
    </div>
  );
};

Menu.defaultProps = {};

Menu.propTypes = {
  /** JSX - Acts as a positioning reference for the popover and triggers active state */
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,

  items: PropTypes.any,
};

export default Menu;
