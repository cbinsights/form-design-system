/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:25 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HashtagIcon = ({
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
			<path d="M11,2 L10.1,8 L15.1,8 L16,2 L18,2 L17.1,8 L22,8 L22,10 L16.8,10 L16.2,14 L21,14 L21,16 L15.9,16 L15,22 L13,22 L13.9,16 L8.9,16 L8,22 L6,22 L6.9,16 L2,16 L2,14 L7.2,14 L7.8,10 L3,10 L3,8 L8.1,8 L9,2 L11,2 Z M14.8,10 L9.8,10 L9.2,14 L14.2,14 L14.8,10 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HashtagIcon;

