import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CaretLeftIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__CaretLeftIcona"
        d="M18.6504952,9.76347702 L11.6420926,15.6919746 C11.2690362,16.0075478 10.7225546,16.0073137 10.3497687,15.691421 L3.35353192,9.76292339 C2.93218097,9.40587742 2.88005148,8.77486204 3.23709745,8.35351109 C3.42710064,8.12928778 3.70612066,8 4.00002083,8 L18.0046602,8 C18.5569449,8 19.0046602,8.44771525 19.0046602,9 C19.0046602,9.29419966 18.8751099,9.57347258 18.6504952,9.76347702 L18.6504952,9.76347702 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use
          transform="translate(11.002330, 11.964249) rotate(90.000000) translate(-11.002330, -11.964249)"
          xlinkHref="#prefix__CaretLeftIcona"
        />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CaretLeftIcon);
