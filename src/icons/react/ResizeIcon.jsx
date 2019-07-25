import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ResizeIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon points="7 11 17 11 17 7 22 12 17 17 17 13 7 13 7 17 2 12 7 7" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ResizeIcon);
