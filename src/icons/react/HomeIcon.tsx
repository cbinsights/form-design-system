/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HomeIcon = ({
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
			<path d="M12,2 L1,12 L4,12 L4,21 L11,21 L11,15 L13,15 L13,21 L20,21 L20,12 L23,12 L12,2 Z M12,4.7910156 L18,10.191406 L18,11 L18,19 L15,19 L15,13 L9,13 L9,19 L6,19 L6,10.191406 L12,4.7910156 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HomeIcon;

