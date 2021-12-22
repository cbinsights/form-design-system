/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 22 2021 09:31:30 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BankIcon = ({
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
			<path d="M12,2.5 L3,6.5 L3,9 L5,9 L5,17 L7,17 L7,9 L9,9 L9,17 L11,17 L11,9 L13,9 L13,17 L15,17 L15,9 L17,9 L17,17 L19,17 L19,9 L21,9 L21,6.5 L12,2.5 Z M12,4.6894531 L17.201172,7 L6.7988281,7 L12,4.6894531 Z M3,19 L3,21 L21,21 L21,19 L3,19 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BankIcon;

