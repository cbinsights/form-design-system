import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const CommentedIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M8,16 L3,21 L3,5 C3,3.8954305 3.8954305,3 5,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,14 C21,15.1045695 20.1045695,16 19,16 L8,16 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(CommentedIcon);
