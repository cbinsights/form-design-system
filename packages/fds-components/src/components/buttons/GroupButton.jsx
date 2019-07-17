import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const GroupButton = (props) => {
  const { className, isActive, Icon, label, ...rest } = props;

  const rootClass = cx('groupbtn', className, {
    active: isActive,
  });

  return (
    <button className={rootClass} {...rest}>
      {Icon && <Icon size="xs" className="groupbtn-icon" />}
      {label}
    </button>
  );
};

GroupButton.propTypes = {
  /** Displays active button style when true */
  isActive: PropTypes.bool,

  label: PropTypes.string,

  className: PropTypes.string,

  /** Specify a fds-icon component */
  Icon: PropTypes.func,
};

export default GroupButton;
