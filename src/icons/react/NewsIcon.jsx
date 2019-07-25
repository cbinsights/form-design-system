import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const NewsIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M21,18 C21,19.5 19.5,21 18,21 L6,21 C4.5,21 3,19.5 3,18 L3,10 L6,10 L6,3 L21,3 L21,18 Z M19,18 L19,5 L8,5 L8,17.5 L6,17.5 L6,12 L5,12 L5,18 C4.99796972,18.3501487 5,19 5,19 L19,19 C19,19 19.0021969,18.3788872 19,18 Z M10,7 L17,7 L17,11.5 L10,11.5 L10,7 Z M11.5,8.5 L11.5,10 L15.5,10 L15.5,8.5 L11.5,8.5 Z M10,13 L17,13 L17,14.5 L10,14.5 L10,13 Z M10,16 L16,16 L16,17.5 L10,17.5 L10,16 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(NewsIcon);
