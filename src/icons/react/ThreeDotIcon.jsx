import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const ThreeDotIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M12,7 C10.8954305,7 10,6.1045695 10,5 C10,3.8954305 10.8954305,3 12,3 C13.1045695,3 14,3.8954305 14,5 C14,6.1045695 13.1045695,7 12,7 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M12,21 C10.8954305,21 10,20.1045695 10,19 C10,17.8954305 10.8954305,17 12,17 C13.1045695,17 14,17.8954305 14,19 C14,20.1045695 13.1045695,21 12,21 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(ThreeDotIcon);
