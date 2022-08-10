/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FeedsIcon = ({
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
			<path d="M20,3 L12,3 C10.9,3 10,3.9 10,5 L10,11 C10,12.1 10.9,13 12,13 L20,13 C21.1,13 22,12.1 22,11 L22,5 C22,3.9 21.1,3 20,3 Z M4,12 L4,19 L13,19 L13,21 L4,21 C2.9,21 2,20.1 2,19 L2,19 L2,12 L4,12 Z M8,8 L8,15 L17,15 L17,17 L8,17 C6.9,17 6,16.1 6,15 L6,15 L6,8 L8,8 Z M20,7 L20,11 L12,11 L12,7 L20,7 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FeedsIcon;

