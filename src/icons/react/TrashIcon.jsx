import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const TrashIcon = () => (
  <svg viewBox="0 0 24 24">
    <defs>
      <path
        id="prefix__TrashIcona"
        d="M19,8 L19,20 C19,21.104 18.106,22 17,22 L7.001,22 C5.896,22 5,21.104 5,20 L5,8 L19,8 Z M7,8 L7,20 L17,20 L17,8 L7,8 Z M7,4 C7,4 7,2 9,2 L15,2 C17,2 17,4 17,4 L17,6 L21,5.99866711 L21,8 L3,8 L3,5.99866711 L7,5.99866711 L7,4 Z M11,4 C9,4 9,4 9,6 L15,6 C15,4 15,4 13,4 L11,4 Z M9,10 L11,10 L11,20 L9,20 L9,10 Z M13,10 L15,10 L15,20 L13,20 L13,10 Z"
      />
    </defs>
    <g fillRule="evenodd">
      <g>
        <use xlinkHref="#prefix__TrashIcona" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(TrashIcon);
