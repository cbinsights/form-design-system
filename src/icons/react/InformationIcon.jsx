import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const InformationIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__InformationIcona"
        d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M11,11 L13,11 L13,17 L11,17 L11,11 Z M12,10 C11.1715729,10 10.5,9.32842712 10.5,8.5 C10.5,7.67157288 11.1715729,7 12,7 C12.8284271,7 13.5,7.67157288 13.5,8.5 C13.5,9.32842712 12.8284271,10 12,10 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__InformationIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(InformationIcon);
