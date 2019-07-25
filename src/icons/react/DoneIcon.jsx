import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const DoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z M8,12.5034965 L8.8,10.7972028 L10.8571429,13.3146853 L15.2,8 L16,9.70629371 L10.8571429,16 L8,12.5034965 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(DoneIcon);
