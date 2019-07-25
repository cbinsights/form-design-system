import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const MAIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__MAIcona"
        d="M11.8498437,12 L19,17.3298116 L18.7951254,17.5770161 C17.1750953,19.6622067 14.6660922,21 11.8498437,21 C6.96220999,21 3,16.9705627 3,12 C3,7.02943725 6.96220999,3 11.8498437,3 C14.6660922,3 17.1750953,4.33779334 18.7959133,6.42258328 L18.9918683,6.68227067 L11.8498437,12 Z M11.5804125,5 C7.94615102,5 5,8.13400675 5,12 C5,15.8659932 7.94615102,19 11.5804125,19 C13.2789044,19 14.8270985,18.3154667 15.9944933,17.1915991 L8.65578471,11.9451226 L16,6.8137083 C14.8319693,5.68668877 13.2815765,5 11.5804125,5 Z M19,15 C17.3431458,15 16,13.6568542 16,12 C16,10.3431458 17.3431458,9 19,9 C20.6568542,9 22,10.3431458 22,12 C22,13.6568542 20.6568542,15 19,15 Z M19,13 C19.5522847,13 20,12.5522847 20,12 C20,11.4477153 19.5522847,11 19,11 C18.4477153,11 18,11.4477153 18,12 C18,12.5522847 18.4477153,13 19,13 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__MAIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(MAIcon);
