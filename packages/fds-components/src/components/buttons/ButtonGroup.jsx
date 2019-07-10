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

const ButtonGroup = ({ buttons, onChange, className, ...restBtnGroup }) => {
  const rootClass = cx('btngroup', className);
  return (
    <div className={rootClass} {...restBtnGroup}>
      {buttons.map(({ isActive, value, content, icon, onClick, ...restBtn }) => (
        <GroupButton
          key={value}
          isActive={isActive}
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
  /** Each object in array accepts value, content, onClick, and icon, and also will pass through any extra props */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      isActive: PropTypes.bool,
      value: PropTypes.string.isRequired,
      /** content is for when we want the value under the hood, and the content shown in the button, to be different */
      content: PropTypes.string,
      icon: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default ButtonGroup;
