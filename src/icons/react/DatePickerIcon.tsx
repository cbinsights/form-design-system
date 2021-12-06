/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Dec 06 2021 14:25:44 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const DatePickerIcon = ({
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
		<g fillRule="nonzero">
			<path d="M9,11 L7,11 L7,13 L9,13 L9,11 Z M13,11 L11,11 L11,13 L13,13 L13,11 Z M17,11 L15,11 L15,13 L17,13 L17,11 Z M19,4 L18,4 L18,2 L16,2 L16,4 L8,4 L8,2 L6,2 L6,4 L5,4 C3.89,4 3.01,4.9 3.01,6 L3,20 C3,21.1 3.89,22 5,22 L19,22 C20.1,22 21,21.1 21,20 L21,6 C21,4.9 20.1,4 19,4 Z M19,20 L5,20 L5,9 L19,9 L19,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default DatePickerIcon;

