import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const NavArrowForwardIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon points="12 4 10.59 5.41 16.17 11 4 11 4 13 16.17 13 10.59 18.59 12 20 20 12" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(NavArrowForwardIcon);
