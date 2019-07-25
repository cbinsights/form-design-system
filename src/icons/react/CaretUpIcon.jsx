import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CaretUpIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__CaretUpIcona"
        d="M19.6553429,13.2228184 C19.8779719,13.4128113 20.0061918,13.690799 20.0061918,13.9834779 C20.0061918,14.5357627 19.5584765,14.9834779 19.0061918,14.9834779 L5.0000186,14.9834779 C4.70774411,14.9834779 4.43009862,14.8556107 4.24011108,14.6335091 C3.88110876,14.2138238 3.93030206,13.5825727 4.34998739,13.2235704 L11.3448667,7.24009249 C11.718768,6.92025418 12.2697777,6.91993526 12.644049,7.23934052 L19.6553429,13.2228184 L19.6553429,13.2228184 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__CaretUpIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CaretUpIcon);
