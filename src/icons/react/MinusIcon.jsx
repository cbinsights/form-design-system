import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const MinusIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <polygon id="prefix__MinusIcona" points="2 11 2 13 22 13 22 11" />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__MinusIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(MinusIcon);
