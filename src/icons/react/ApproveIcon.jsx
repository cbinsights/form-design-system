import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ApproveIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <polygon points="13 11 21 11 21 13 13 13 13 21 11 21 11 13 3 13 3 11 11 11 11 3 13 3" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ApproveIcon);
