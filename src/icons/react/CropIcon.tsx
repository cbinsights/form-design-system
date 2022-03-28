/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CropIcon = ({
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
			<path d="M17,15 L19,15 L19,7 C19,5.9 18.1,5 17,5 L9,5 L9,7 L17,7 L17,15 Z M7,17 L7,1 L5,1 L5,5 L1,5 L1,7 L5,7 L5,17 C5,18.1 5.9,19 7,19 L17,19 L17,23 L19,23 L19,19 L23,19 L23,17 L7,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CropIcon;

