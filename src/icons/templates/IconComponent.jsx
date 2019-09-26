import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const IconComponent = (props) => (
  <div
    className={cx('fds-icon', `fds-icon--${props.size}`, props.className)}
    style={{
      fill: props.color,
      width: props.customSize && `${props.customSize}px`,
      height: props.customSize && `${props.customSize}px`,
    }}
  >
    {props.children}
  </div>
);

IconComponent.defaultProps = {
  size: 's',
};

IconComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  className: PropTypes.string,
  customSize: PropTypes.number,
  children: PropTypes.node,
};
