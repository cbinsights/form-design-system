import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const TableIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M3,3 L6,3 L6,6 L3,6 L3,3 Z M3,8 L6,8 L6,11 L3,11 L3,8 Z M3,13 L6,13 L6,16 L3,16 L3,13 Z M3,18 L6,18 L6,21 L3,21 L3,18 Z M8,3 L21,3 L21,6 L8,6 L8,3 Z M8,8 L21,8 L21,11 L8,11 L8,8 Z M8,13 L21,13 L21,16 L8,16 L8,13 Z M8,18 L21,18 L21,21 L8,21 L8,18 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(TableIcon);
