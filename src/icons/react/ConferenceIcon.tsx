/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Aug 10 2022 09:54:14 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ConferenceIcon = ({
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
			<path d="M6,2 L6,4 L5,4 C3.9,4 3,4.9 3,6 L3,20 C3,21.1 3.9,22 5,22 L19,22 C20.1,22 21,21.1 21,20 L21,6 C21,4.9 20.1,4 19,4 L18,4 L18,2 L16,2 L16,4 L8,4 L8,2 L6,2 Z M5,6 L6,6 L8,6 L16,6 L18,6 L19,6 L19,8 L5,8 L5,6 Z M5,10 L19,10 L19,20 L5,20 L5,10 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ConferenceIcon;

