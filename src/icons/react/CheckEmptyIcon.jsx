import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CheckEmptyIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M3,3.99339768 C3,3.44475929 3.44494629,3 3.99339768,3 L20.0066023,3 C20.5552407,3 21,3.44494629 21,3.99339768 L21,20.0066023 C21,20.5552407 20.5550537,21 20.0066023,21 L3.99339768,21 C3.44475929,21 3,20.5550537 3,20.0066023 L3,3.99339768 Z M5,5 L5,19 L19,19 L19,5 L5,5 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CheckEmptyIcon);
