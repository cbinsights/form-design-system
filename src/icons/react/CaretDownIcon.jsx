import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CaretDownIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__CaretDownIcona"
        d="M19.6504952,10.763477 L12.6420926,16.6919746 C12.2690362,17.0075478 11.7225546,17.0073137 11.3497687,16.691421 L4.35353192,10.7629234 C3.93218097,10.4058774 3.88005148,9.77486204 4.23709745,9.35351109 C4.42710064,9.12928778 4.70612066,9 5.00002083,9 L19.0046602,9 C19.5569449,9 20.0046602,9.44771525 20.0046602,10 C20.0046602,10.2941997 19.8751099,10.5734726 19.6504952,10.763477 L19.6504952,10.763477 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__CaretDownIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CaretDownIcon);
