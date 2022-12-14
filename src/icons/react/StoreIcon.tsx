/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 14 2022 11:46:36 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StoreIcon = ({
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
			<path d="M4,3 L4,7 L2,11 L2,13 L3,13 L3,19 C3,20.105 3.895,21 5,21 L19,21 C20.105,21 21,20.105 21,19 L21,13 L22,13 L22,11 L20,7 L20,3 L4,3 Z M6,5 L18,5 L18,7 L6,7 L6,5 Z M5.2363281,9 L18.763672,9 L19.763672,11 L4.2363281,11 L5.2363281,9 Z M5,13 L7,13 L7,17 L13,17 L13,13 L15,13 L15,19 L5,19 L5,13 Z M9,13 L11,13 L11,15 L9,15 L9,13 Z M17,13 L19,13 L19,19 L17,19 L17,13 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default StoreIcon;

