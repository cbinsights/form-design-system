/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ApproveIcon = ({
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
			<polygon points="20 13 13 13 13 20 11 20 11 13 4 13 4 11 11 11 11 4 13 4 13 11 20 11"/>
		</g>
	</g>
</svg>
  </div>
);

export default ApproveIcon;

