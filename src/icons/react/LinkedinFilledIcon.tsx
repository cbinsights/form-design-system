/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 14 2022 11:46:36 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const LinkedinFilledIcon = ({
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
			<g transform="translate(3.000000, 3.000000)">
				<path d="M16,0 C17.1045695,0 18,0.8954305 18,2 L18,16 C18,17.1045695 17.1045695,18 16,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 L16,0 M15.5,15.5 L15.5,10.2 C15.5,8.39955172 14.0404483,6.94 12.24,6.94 C11.39,6.94 10.4,7.46 9.92,8.24 L9.92,7.13 L7.13,7.13 L7.13,15.5 L9.92,15.5 L9.92,10.57 C9.92,9.8 10.54,9.17 11.31,9.17 C12.0831986,9.17 12.71,9.79680135 12.71,10.57 L12.71,15.5 L15.5,15.5 M3.88,5.56 C4.80783838,5.56 5.56,4.80783838 5.56,3.88 C5.56,2.95 4.81,2.19 3.88,2.19 C2.94663877,2.19 2.19,2.94663877 2.19,3.88 C2.19,4.81 2.95,5.56 3.88,5.56 M5.27,15.5 L5.27,7.13 L2.5,7.13 L2.5,15.5 L5.27,15.5 Z"/>
			</g>
		</g>
	</g>
</svg>
  </div>
);

export default LinkedinFilledIcon;

