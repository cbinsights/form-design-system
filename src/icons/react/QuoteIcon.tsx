/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 01 2022 10:36:54 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const QuoteIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g transform="translate(3.000000, 3.000000)">
			<path d="M16.2,0 L1.8,0 C0.81,0 0,0.81 0,1.8 L0,12.6 C0,13.59 0.81,14.4 1.8,14.4 L5.4,14.4 L5.4,17.1 C5.4,17.64 5.76,18 6.3,18 L6.75,18 C6.93,18 7.2,17.91 7.38,17.73 L10.71,14.4 L16.2,14.4 C17.19,14.4 18,13.59 18,12.6 L18,1.8 C18,0.81 17.19,0 16.2,0 M8.1,9.9 L4.5,9.9 L4.5,6.12 L5.67,3.6 L7.47,3.6 L6.21,6.3 L8.1,6.3 L8.1,9.9 M13.5,9.9 L9.9,9.9 L9.9,6.12 L11.07,3.6 L12.87,3.6 L11.61,6.3 L13.5,6.3 L13.5,9.9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default QuoteIcon;

