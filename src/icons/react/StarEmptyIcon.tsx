/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StarEmptyIcon = ({
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
			<path d="M12,6.019 L13.618,9.298 L14.083,10.241 L15.124,10.392 L18.742,10.918 L16.124,13.47 L15.371,14.204 L15.549,15.24 L16.167,18.844 L12.931,17.143 L12,16.653 L11.069,17.142 L7.833,18.843 L8.451,15.239 L8.629,14.203 L7.876,13.47 L5.258,10.918 L8.876,10.392 L9.917,10.241 L10.382,9.298 L12,6.019 M12,1.5 L8.588,8.413 L0.96,9.521 L6.48,14.902 L5.177,22.5 L12,18.913 L18.823,22.5 L17.52,14.902 L23.04,9.521 L15.411,8.412 L12,1.5 L12,1.5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default StarEmptyIcon;

