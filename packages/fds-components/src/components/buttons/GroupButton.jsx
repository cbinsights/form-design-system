import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const GroupButton = (props) => {
  const { className, active, Icon, children, ...rest } = props;

  const rootClass = cx('group-btn', className, {
    active,
  });

  return (
    <button className={rootClass} {...rest}>
      {Icon && <Icon size="xs" className="margin--right--half" />}
      {children}
    </button>
  );
};

GroupButton.propTypes = {
  /** Displays active button style when true */
  active: PropTypes.bool,

  children: PropTypes.node,

  className: PropTypes.string,

  /** Specify a fds-icon component */
  Icon: PropTypes.func,
};

export default GroupButton;
