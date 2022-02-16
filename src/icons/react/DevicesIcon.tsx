/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:25 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const DevicesIcon = ({
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
			<path d="M3,6 L21,6 L21,4 L3,4 C1.9,4 1,4.9 1,6 L1,18 C1,19.1 1.9,20 3,20 L7,20 L7,18 L3,18 L3,6 Z M13,12 L9,12 L9,13.78 C8.39,14.33 8,15.11 8,16 C8,16.89 8.39,17.67 9,18.22 L9,20 L13,20 L13,18.22 C13.61,17.67 14,16.88 14,16 C14,15.12 13.61,14.33 13,13.78 L13,12 Z M11,17.5 C10.17,17.5 9.5,16.83 9.5,16 C9.5,15.17 10.17,14.5 11,14.5 C11.83,14.5 12.5,15.17 12.5,16 C12.5,16.83 11.83,17.5 11,17.5 Z M22,8 L16,8 C15.5,8 15,8.5 15,9 L15,19 C15,19.5 15.5,20 16,20 L22,20 C22.5,20 23,19.5 23,19 L23,9 C23,8.5 22.5,8 22,8 Z M21,18 L17,18 L17,10 L21,10 L21,18 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default DevicesIcon;

