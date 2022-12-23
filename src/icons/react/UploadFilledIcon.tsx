/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:08:31 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UploadFilledIcon = ({
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
			<path d="M15,17.414062 L14.9999995,9.414062 L19.414062,9.414062 L11.9999995,2 L4.5859375,9.414062 L8.9999995,9.414062 L9,17.414062 L15,17.414062 Z M2,20 L2,22 L22,22 L22,20 L2,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UploadFilledIcon;

