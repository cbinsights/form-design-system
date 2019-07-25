import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const BoardIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M11,18 L11,6 L13,6 L13,15 L20,15 L20,6 L4,6 L4,18 L11,18 Z M4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(BoardIcon);
