import React from 'react';
import IconComponent from './IconComponent';

// Brief explanation: we're customizing the component by wrapping
// it with another component, and adding customizations to the
// wrapper component. Please refer to `IconComponent` for
// those customizations

export const withFdsIconWrapper = (WrappedComponent) => {
  // We're wrapping the component we get with our component,
  // but we want the wrapper to be synonyous with the icon name,
  // for testing / identification purposes
  IconComponent.displayName = WrappedComponent.name;
  return (
    <IconComponent>
      <WrappedComponent />
    </IconComponent>
  );
};

export default withFdsIconWrapper;
