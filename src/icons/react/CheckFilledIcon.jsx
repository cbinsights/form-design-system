import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CheckFilledIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__CheckFilledIcona"
        d="M19,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M10.3571429,16 L5,11.1923077 L6.5,9.84615385 L10.3571429,13.3076923 L18.5,6 L20,7.34615385 L10.3571429,16 L10.3571429,16 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__CheckFilledIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CheckFilledIcon);
