import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const RadioFilledIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__RadioFilledIcona"
        d="M7,12 C7,14.8 9.2,17 12,17 C14.8,17 17,14.8 17,12 C17,9.2 14.8,7 12,7 C9.2,7 7,9.2 7,12 Z M2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 C6.5,2 2,6.5 2,12 Z M4,12 C4,7.6 7.6,4 12,4 C16.4,4 20,7.6 20,12 C20,16.4 16.4,20 12,20 C7.6,20 4,16.4 4,12 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__RadioFilledIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(RadioFilledIcon);
