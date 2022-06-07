/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SuggestionIcon = ({
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
			<path d="M17.3523536,11.0156905 L17.5,12 L6.5,12 L6.8,10 L8.51471863,10 L7.92893219,9.41421356 L15,2.34314575 L20.6568542,8 L17.6411713,11.015683 L17.3523536,11.0156905 L17.3523536,11.0156905 Z M2,15 L4.22222222,7 L8.3,7 L6.7,8.5 L5.6,8.5 L4.3,14 L19.7,14 L19.1572221,11.7036321 L20.6750229,10.2300826 L22,15 L22,19.0001925 C22,19.5523709 21.5446944,20 21.0081969,20 L2.99180311,20 C2.44404538,20 2,19.5562834 2,19.0001925 L2,15 Z M4,16 L4,18 L20,18 L20,16 L4,16 Z M15,4.46446609 L10.0502525,9.41421356 L11.6509052,11.0148663 L15.5260677,11.0094662 L18.5355339,8 L15,4.46446609 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SuggestionIcon;

