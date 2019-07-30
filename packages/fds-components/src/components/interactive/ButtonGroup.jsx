import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import GroupButton from './GroupButton';
import combine from '../../util/combine';

const ButtonGroup = ({ buttons, onChange, className, ...restBtnGroup }) => {
  const rootClass = cx('btngroup', className);
  return (
    <div className={rootClass} {...restBtnGroup}>
      {buttons.map(({ isActive, value, content, icon, onClick, label, ...restBtn }) => (
        <GroupButton
          key={value}
          isActive={isActive}
          onClick={onChange ? combine(() => onChange(value), onClick) : onClick}
          label={label || content || value}
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
      /**
       * This allows for overriding of the Chip root element
       * (Meant to accomodate `<Link />`)
       */
      as: PropTypes.func,
      /**
       * Use if labels are not unique
       */
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      isActive: PropTypes.bool,
      /**
       * `content` & `value` props are deprecated
       */
      label: PropTypes.string,
      icon: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default ButtonGroup;
