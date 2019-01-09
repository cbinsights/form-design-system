/* eslint-disable */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const withFdsIconWrapper = (WrappedComponent) => (props) => {
  const classNames = cx('fds-icon', `fds-icon--${props.size}`, props.className);

  const otherProps = {};
  if (props.color) {
    otherProps.style = { fill: props.color };
  }

  const Component = (
    <div className={classNames} {...otherProps}>
      <WrappedComponent />
    </div>
  );

  Component.defaultProps = {
    size: 's',
  };

  Component.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
    className: PropTypes.string,
  };

  return Component;
};

withFdsIconWrapper.displayName = 'FdsIcon';

export default withFdsIconWrapper;
