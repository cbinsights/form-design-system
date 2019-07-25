import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M14,14 L14,4 L10,4 L10,14 L7,14 L12,19 L17,14 L14,14 Z M16,12 L22,12 L12,22 L2,12 L8,12 L8,2 L16,2 L16,12 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ArrowDownIcon);
