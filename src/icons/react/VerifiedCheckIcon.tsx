/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const VerifiedCheckIcon = ({
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
		<g>
			<path d="M23,12 L20.56,9.21 L20.9,5.52 L17.29,4.7 L15.4,1.5 L12,2.96 L8.6,1.5 L6.71,4.69 L3.1,5.5 L3.44,9.2 L1,12 L3.44,14.79 L3.1,18.49 L6.71,19.31 L8.6,22.5 L12,21.03 L15.4,22.49 L17.29,19.3 L20.9,18.48 L20.56,14.79 L23,12 Z M10.09,16.72 L6.29,12.91 L7.77,11.43 L10.09,13.76 L15.94,7.89 L17.42,9.37 L10.09,16.72 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default VerifiedCheckIcon;

