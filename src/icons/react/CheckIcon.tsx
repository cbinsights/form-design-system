/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CheckIcon = ({
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
			<polygon points="19.28125 5.28125 9 15.5625 4.71875 11.28125 3.28125 12.71875 8.28125 17.71875 9 18.40625 9.71875 17.71875 20.71875 6.71875"/>
		</g>
	</g>
</svg>
  </div>
);

export default CheckIcon;

