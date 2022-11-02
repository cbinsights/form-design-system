/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AddSectionIcon = ({
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
			<path d="M20,19 L12,19 C12,19 12,17 12,17 L20,17 L20,6 L4,6 L4,12 C4,12 2,12 2,12 L2,6 C2,4.66666667 2.66666667,4 4,4 L20,4 C21.3333333,4 22,4.66666667 22,6 L22,17 C22,18.3333333 21.3333333,19 20,19 Z M3,17 L3,15 L6,15 L6,12 L8,12 L8,15 L11,15 L11,17 L8,17 L8,20 L6,20 L6,17 L3,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AddSectionIcon;

