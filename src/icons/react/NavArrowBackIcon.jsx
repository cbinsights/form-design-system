import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const NavArrowBackIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon points="20 11 7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(NavArrowBackIcon);
