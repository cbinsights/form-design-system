import React from 'react';
import withFdsIconWrapper from './withFdsIconWrapper';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24">
    <g fillRule="evenodd">
      <g>
        <path d="M16.4915607,15.011942 L22.1799752,19.7850885 L20.8944,21.3171774 L15.0808084,16.4389948 C13.8137669,17.4177173 12.2248832,18 10.5,18 C6.35786438,18 3,14.6421356 3,10.5 C3,6.35786438 6.35786438,3 10.5,3 C14.6421356,3 18,6.35786438 18,10.5 C18,12.1937748 17.4385309,13.7564116 16.4915607,15.011942 L16.4915607,15.011942 Z M10.5,16 C13.5375661,16 16,13.5375661 16,10.5 C16,7.46243388 13.5375661,5 10.5,5 C7.46243388,5 5,7.46243388 5,10.5 C5,13.5375661 7.46243388,16 10.5,16 Z" />
      </g>
    </g>
  </svg>
);

export default withFdsIconWrapper(SearchIcon);
