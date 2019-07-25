import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <polygon
        id="prefix__CheckIcona"
        points="8.36363636 15.8656716 3.59090909 11.1641791 2 12.7313433 8.36363636 19 22 5.56716418 20.4090909 4"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__CheckIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CheckIcon);
