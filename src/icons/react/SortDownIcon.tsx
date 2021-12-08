/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Dec 06 2021 14:25:44 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SortDownIcon = ({
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
			<path d="M2,5 L2,7 L13,7 L13,5 L2,5 Z M17,3 L17,17 L14,17 L18,21 L22,17 L19,17 L19,3 L17,3 Z M2,9 L2,11 L11,11 L11,9 L2,9 Z M2,13 L2,15 L9,15 L9,13 L2,13 Z M2,17 L2,19 L7,19 L7,17 L2,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SortDownIcon;

