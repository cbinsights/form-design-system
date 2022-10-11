/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ArrowsIcon = ({
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
			<path d="M4,14 L12,22 L20,14 L4,14 Z M4,10 L12,2 L20,10 L4,10 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ArrowsIcon;

