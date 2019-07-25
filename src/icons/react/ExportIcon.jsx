import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ExportIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M11,6 L7,6 L12,2 L17,6 L13,6 L13,15 L11,15 L11,6 Z M8,9 L8,11 L7,11 L7,19 L17,19 L17,11 L16,11 L16,9 L16.9941413,9 C18.1019465,9 19,9.90195036 19,11.0085302 L19,18.9914698 C19,20.1007504 18.1029399,21 16.9941413,21 L7.00585866,21 C5.89805351,21 5,20.0980496 5,18.9914698 L5,11.0085302 C5,9.8992496 5.89706013,9 7.00585866,9 L8,9 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ExportIcon);
