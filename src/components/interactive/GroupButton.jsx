import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import baseElement from '../../util/baseElement';

export const GroupButton = (props) => {
  const { isActive, Icon, label, Link, ...rest } = props;

  const Element = baseElement({ href: rest.href, as: Link });

  const rootClass = cx('groupbtn', {
    'groupbtn--disabled': props.disabled,
    'groupbtn--active': isActive,
  });

  return (
    <Element {...rest} className={rootClass}>
      {Icon && <Icon size="xs" className="groupbtn-icon" />}
      {label}
    </Element>
  );
};

GroupButton.propTypes = {
  /** Displays active button style when true */
  isActive: PropTypes.bool,

  /**
   * Pass **only** react-router `Link` here. You may **not**
   * pass anything else here: SFC, Class Component, etc (even
   * if they use react-router `Link` underneath the hood).
   */
  Link: PropTypes.func,

  label: PropTypes.string,

  disabled: PropTypes.bool,

  /** Specify a fds-icon component */
  Icon: PropTypes.func,
};

export default GroupButton;
