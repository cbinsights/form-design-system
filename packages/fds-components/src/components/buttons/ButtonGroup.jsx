import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import GroupButton from './GroupButton';

/* Allows you to combine functions */
function combine(...functions) {
  return (...args) =>
    functions
      .filter((func) => typeof func === 'function')
      .forEach((func) => func(...args));
}

const ButtonGroup = ({ activeValue, buttons, onChange, className, ...restBtnGroup }) => {
  const rootClass = cx('btngroup', className);
  return (
    <div className={rootClass} {...restBtnGroup}>
      {buttons.map(({ value, content, icon, onClick, ...restBtn }) => (
        <GroupButton
          key={value}
          isActive={activeValue === value}
          onClick={combine(() => onChange(value), onClick)}
          label={content || value}
          Icon={icon}
          {...restBtn}
        />
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  activeValue: PropTypes.string,
  /** Each object in array accepts value, content, onClick, and icon, and also will pass through any extra props */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      content: PropTypes.string,
      icon: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default ButtonGroup;
