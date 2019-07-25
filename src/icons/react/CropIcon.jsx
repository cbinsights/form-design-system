import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CropIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M8,16 L15,16 L15,18 L6,18 L6,3 L8,3 L8,16 Z M18,6 L18,21 L16,21 L16,8 L9,8 L9,6 L18,6 Z M3,6 L5,6 L5,8 L3,8 L3,6 Z M19,16 L21,16 L21,18 L19,18 L19,16 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CropIcon);
