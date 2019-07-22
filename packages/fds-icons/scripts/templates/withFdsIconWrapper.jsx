/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const withFdsIconWrapper = (WrappedComponent) => {
  const IconComponent = (props) => {
    const classNames = cx('fds-icon', `fds-icon--${props.size}`, props.className);

    const otherProps = {};
    if (props.color) {
      otherProps.style = { fill: props.color };
    }

    return (
      <div className={classNames} {...otherProps}>
        <WrappedComponent />
      </div>
    );
  };

  IconComponent.defaultProps = {
    size: 's',
  };

  IconComponent.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    className: PropTypes.string,
  };

  // This removes the suffix "Icon from the name", as "getComponentName"
  // already adds this for us
  // e.g. DenyIcon --> Deny
  const IconName = WrappedComponent.name.slice(0, -4);

  IconComponent.displayName = IconName;

  return IconComponent;
};

export default withFdsIconWrapper;
