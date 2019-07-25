import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const SaveIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M7,5 L5,5 L5,19 L19,19 L19,8.11111111 L17,6.11111111 L17,11 L7,11 L7,5 Z M13.0021973,5 L13.0021973,9.4 L15,9.4 L15,5 L13.0021973,5 Z M4.63636364,3 L16.9090909,3 L21,7.09090909 L21,19.3636364 C21,20.1818182 20.1818182,21 19.3636364,21 L4.63636364,21 C3.81818182,21 3,20.1818182 3,19.3636364 L3,4.63636364 C3,3.81818182 3.81818182,3 4.63636364,3 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(SaveIcon);
