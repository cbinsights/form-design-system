import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ConferenceIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M5,11 L5,19 L19,19 L19,11 L5,11 Z M14,4 L14,6 L10,6 L10,4 L14,4 Z M19,4 L21,4 L21,19.0047705 C21,20.1067053 20.1073772,21 19.0049107,21 L4.99508929,21 C3.8932319,21 3,20.101181 3,19.0047705 L3,4 L5,4 L5,9 L19,9 L19,4 Z M6.5,3 L8.5,3 L8.5,8 L6.5,8 L6.5,3 Z M15.5,3 L17.5,3 L17.5,8 L15.5,8 L15.5,3 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ConferenceIcon);
