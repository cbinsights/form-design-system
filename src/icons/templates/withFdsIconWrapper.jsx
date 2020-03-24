import React from 'react';
import PropTypes from 'prop-types';

const IconComponent = ({ size = 's', color, customSize, children }) => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    {children}
  </div>
);

IconComponent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  customSize: PropTypes.number,
  children: PropTypes.node,
};

// Brief explanation: we're customizing the component by wrapping
// it with another component, and adding customizations to the
// wrapper component. Please refer to `IconComponent` for
// those customizations
export const withFdsIconWrapper = (WrappedComponent) => {
  IconComponent.displayName = WrappedComponent.name;

  const Wrapped = (props) => (
    <IconComponent {...props}>
      <WrappedComponent />
    </IconComponent>
  );

  Wrapped.displayName = WrappedComponent.name;

  return Wrapped;
};

export default withFdsIconWrapper;
