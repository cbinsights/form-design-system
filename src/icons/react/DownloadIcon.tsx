/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:25 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const DownloadIcon = ({
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
			<path d="M9,2 L9,10 L4.5859375,10 L12,17.414062 L19.414062,10 L15,10 L15,2 C11,2 9,2 9,2 Z M11,4 L13,4 L13,12 L14.585938,12 L12,14.585938 L9.4140625,12 L11,12 L11,4 Z M2,20 L2,22 L22,22 L22,20 L2,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default DownloadIcon;

