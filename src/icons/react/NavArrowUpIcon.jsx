import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const NavArrowUpIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon points="4 12 5.41 13.41 11 7.83 11 20 13 20 13 7.83 18.58 13.42 20 12 12 4" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(NavArrowUpIcon);
