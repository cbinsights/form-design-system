import React from 'react';
import PropTypes from 'prop-types';
import GroupButton from './GroupButton';
import combine from '../../util/combine';

const ButtonGroup = ({ buttons, onChange, ...restBtnGroup }) => (
  <div {...restBtnGroup} className="btngroup">
    {buttons.map(({ value, content, key, Icon, onClick, label, ...restBtn }) => (
      <GroupButton
        key={key || label}
        onClick={onChange ? combine(() => onChange(label || value), onClick) : onClick}
        label={label}
        Icon={Icon}
        {...restBtn}
      />
    ))}
  </div>
);

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
      label: PropTypes.string,
      Icon: PropTypes.func,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default ButtonGroup;
