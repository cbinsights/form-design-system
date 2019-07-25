import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const TextIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M9,11 L9,9 L15,9 L15,11 L13,11 L13,15 L11,15 L11,11 L9,11 Z M9,19 L9,21 L3,21 L3,15 L5,15 L5,9 L3,9 L3,3 L9,3 L9,5 L15,5 L15,3 L21,3 L21,9 L19,9 L19,15 L21,15 L21,21 L15,21 L15,19 L9,19 Z M9,17 L15,17 L15,15 L17,15 L17,9 L15,9 L15,7 L9,7 L9,9 L7,9 L7,15 L9,15 L9,17 Z M5,5 L5,7 L7,7 L7,5 L5,5 Z M17,5 L17,7 L19,7 L19,5 L17,5 Z M17,17 L17,19 L19,19 L19,17 L17,17 Z M5,17 L5,19 L7,19 L7,17 L5,17 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(TextIcon);
