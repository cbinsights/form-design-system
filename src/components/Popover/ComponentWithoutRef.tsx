import React from 'react';

const ComponentWithoutRef = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <a>{children}</a>;
};

export default ComponentWithoutRef;
