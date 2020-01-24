import React from 'react';
import { useSelect } from 'downshift';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button';

function Menu({ items, label }) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });
  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <Button
        size="s"
        hasCaret
        label={selectedItem || 'Sheet'}
        {...getToggleButtonProps()}
      />
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
}

Menu.defaultProps = {
  items: PropTypes.any,
};

Menu.propTypes = {};

export default Menu;
