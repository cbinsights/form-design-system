import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M14,10 L17,10 L12,5 L7,10 L10,10 L10,20 L14,20 L14,10 Z M16,12 L16,22 L8,22 L8,12 L2,12 L12,2 L22,12 L16,12 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ArrowUpIcon);
