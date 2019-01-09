/* eslint-disable */
import React from 'react';

const withFdsIconWrapper = (WrappedComponent) => (props) => (
  <div className={['fds-icon', props].join(' ')} style={{ fill: props.color }}>
    <WrappedComponent />
  </div>
);

withFdsIconWrapper.displayName = 'FdsIcon';

export default withFdsIconWrapper;
