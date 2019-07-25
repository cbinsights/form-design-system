import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const NavArrowDownIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g fillRule="nonzero">
        <polygon points="20 12 18.59 10.59 13 16.17 13 4 11 4 11 16.17 5.42 10.58 4 12 12 20" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(NavArrowDownIcon);
