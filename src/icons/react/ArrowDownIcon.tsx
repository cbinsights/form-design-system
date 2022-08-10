/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Aug 10 2022 09:54:14 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ArrowDownIcon = ({
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
			<path d="M14,14 L14,4 L10,4 L10,14 L7,14 L12,19 L17,14 L14,14 Z M16,12 L22,12 L12,22 L2,12 L8,12 L8,3 L8,2 L9,2 L16,2 L16,12 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ArrowDownIcon;

