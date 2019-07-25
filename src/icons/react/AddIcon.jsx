import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const AddIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M11,11 L11,8 L13,8 L13,11 L16,11 L16,13 L13,13 L13,16 L11,16 L11,13 L8,13 L8,11 L11,11 Z M5.63603897,18.363961 C2.12132034,14.8492424 2.12132034,9.15075759 5.63603897,5.63603897 C9.15075759,2.12132034 14.8492424,2.12132034 18.363961,5.63603897 C21.8786797,9.15075759 21.8786797,14.8492424 18.363961,18.363961 C14.8492424,21.8786797 9.15075759,21.8786797 5.63603897,18.363961 Z M7.05025253,16.9497475 C9.78392257,19.6834175 14.2160774,19.6834175 16.9497475,16.9497475 C19.6834175,14.2160774 19.6834175,9.78392257 16.9497475,7.05025253 C14.2160774,4.31658249 9.78392257,4.31658249 7.05025253,7.05025253 C4.31658249,9.78392257 4.31658249,14.2160774 7.05025253,16.9497475 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(AddIcon);
