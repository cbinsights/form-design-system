import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const HamburgerBarsIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__HamburgerBarsIcona"
        d="M21,17.75 C21,17.3398438 20.6601562,17 20.25,17 L3.75,17 C3.33984375,17 3,17.3398438 3,17.75 L3,19.25 C3,19.6601562 3.33984375,20 3.75,20 L20.25,20 C20.6601562,20 21,19.6601562 21,19.25 L21,17.75 Z M21,11.75 C21,11.3398438 20.6601562,11 20.25,11 L3.75,11 C3.33984375,11 3,11.3398438 3,11.75 L3,13.25 C3,13.6601563 3.33984375,14 3.75,14 L20.25,14 C20.6601562,14 21,13.6601563 21,13.25 L21,11.75 Z M21,5.75 C21,5.33984375 20.6601562,5 20.25,5 L3.75,5 C3.33984375,5 3,5.33984375 3,5.75 L3,7.25 C3,7.66015625 3.33984375,8 3.75,8 L20.25,8 C20.6601562,8 21,7.66015625 21,7.25 L21,5.75 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__HamburgerBarsIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(HamburgerBarsIcon);
