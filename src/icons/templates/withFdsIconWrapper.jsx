import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const IconComponent = (props) => (
  <div
    className={cx('fds-icon', `fds-icon--${props.size}`, props.className)}
    style={{ fill: props.color, width: props.customSize, height: props.customSize }}
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

export const withFdsIconWrapper = (WrappedComponent) => {
  const IconName = WrappedComponent.name;
  IconComponent.displayName = IconName;
  return (
    <IconComponent>
      <WrappedComponent />
    </IconComponent>
  );
};

export default withFdsIconWrapper;
