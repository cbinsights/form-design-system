import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const HashtagIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M7.5625,14 L7.9375,10 L5,10 L5,8 L8.125,8 L8.5,4 L10.5,4 L10.125,8 L15.125,8 L15.5,4 L17.5,4 L17.125,8 L20,8 L20,10 L16.9375,10 L16.5625,14 L19,14 L19,16 L16.375,16 L16,20 L14,20 L14.375,16 L9.375,16 L9,20 L7,20 L7.375,16 L4,16 L4,14 L7.5625,14 Z M9.5625,14 L14.5625,14 L14.9375,10 L9.9375,10 L9.5625,14 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(HashtagIcon);
