/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const MailIcon = ({
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
			<path d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 Z M19.6,8.25 L12.53,12.67 C12.21,12.87 11.79,12.87 11.47,12.67 L4.4,8.25 C4.15,8.09 4,7.82 4,7.53 C4,6.86 4.73,6.46 5.3,6.81 L12,11 L18.7,6.81 C19.27,6.46 20,6.86 20,7.53 C20,7.82 19.85,8.09 19.6,8.25 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default MailIcon;

