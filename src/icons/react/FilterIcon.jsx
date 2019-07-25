import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const FilterIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M8,17 L16,17 L16,19 L8,19 L8,17 Z M6,13 L18,13 L18,15 L6,15 L6,13 Z M4,9 L20,9 L20,11 L4,11 L4,9 Z M2,5 L22,5 L22,7 L2,7 L2,5 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(FilterIcon);
