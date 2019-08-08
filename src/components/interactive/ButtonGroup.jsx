import React from 'react';
import PropTypes from 'prop-types';
import GroupButton from './GroupButton';
import combine from '../../util/combine';

const ButtonGroup = ({ buttons, onChange, ...restBtnGroup }) => (
  <div {...restBtnGroup} className="btngroup">
    {buttons.map(({ value, content, key, Icon, icon, onClick, label, ...restBtn }) => (
      <GroupButton
        key={key || label || value}
        onClick={onChange ? combine(() => onChange(label || value), onClick) : onClick}
        label={label || content || value}
        Icon={Icon || icon}
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
       * Pass **only** react-router `Link` here. You may **not**
       * pass anything else here: SFC, Class Component, etc (even
       * if they use react-router `Link` underneath the hood).
       */
      Link: PropTypes.func,
      /**
       * Use if labels are not unique
       */
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      isActive: PropTypes.bool,
      /**
       * `content` & `value` props are deprecated
       */
      label: PropTypes.string,
      /**
       * deprecated (use `Icon` instead)
       */
      icon: PropTypes.func,
      Icon: PropTypes.func,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default ButtonGroup;
