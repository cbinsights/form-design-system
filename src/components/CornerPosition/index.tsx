import React from 'react';

export interface CornerPositionProps {
  /** Node to decorate */
  children: React.ReactNode;
  /** Decoration to add to Node */
  decoration: React.ReactNode;
}

const CornerPosition = ({ decoration, children }: CornerPositionProps): JSX.Element => (
  <div className="cornerPosition-root">
    {children}
    {decoration && <div className="cornerPosition-decoration">{decoration}</div>}
  </div>
);

export default CornerPosition;
