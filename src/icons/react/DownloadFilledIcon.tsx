/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:15:19 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const DownloadFilledIcon = ({
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
			<path d="M9,2 L9,10 L4.5859375,10 L12,17.414062 L19.414062,10 L15,10 L15,2 C15,2 13,2 9,2 Z M2,20 L2,22 L22,22 L22,20 L2,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default DownloadFilledIcon;

