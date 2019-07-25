import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M15,2.00841361 L19.9970671,7 L20,7 L20,22 L4,22 L4,2 L15,2 L15,2.00841361 Z M15,5 L15,7 L17,7 L15,5 L15,5 Z M13,4 L6,4 L6,20 L18,20 L18,9 L13,9 L13,4 Z M8,16 L16,16 L16,18 L8,18 L8,16 Z M8,12 L16,12 L16,14 L8,14 L8,12 Z M8,8 L11,8 L11,10 L8,10 L8,8 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(DocumentIcon);
