/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AttachmentIcon = ({
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
			<path d="M11,1 C8.8026661,1 7,2.8026661 7,5 L7,17.5 C7,20.525577 9.4744232,23 12.5,23 C15.525577,23 18,20.525577 18,17.5 L18,6 L16,6 L16,17.5 C16,19.444423 14.444423,21 12.5,21 C10.555577,21 9,19.444423 9,17.5 L9,5 C9,3.8833339 9.8833339,3 11,3 C12.116666,3 13,3.8833339 13,5 L13,15.5 C13,15.786937 12.786937,16 12.5,16 C12.213063,16 12,15.786937 12,15.5 L12,6 L10,6 L10,15.5 C10,16.869063 11.130937,18 12.5,18 C13.869063,18 15,16.869063 15,15.5 L15,5 C15,2.8026661 13.197334,1 11,1 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AttachmentIcon;

