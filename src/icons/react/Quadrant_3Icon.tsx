/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const Quadrant_3Icon = ({
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
			<path d="M20,2 L4,2 C2.8954305,2 2,2.8954305 2,4 L2,20 C2,21.1045695 2.8954305,22 4,22 L20,22 C21.1045695,22 22,21.1045695 22,20 L22,4 C22,2.8954305 21.1045695,2 20,2 Z M4,4 L20,4 L20,20 L4,20 L4,4 Z M20,20 L11,20 L11,13 L4,13 L4,11 L11,11 L11,4 L13,4 L13,11 L20,11 L20,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default Quadrant_3Icon;

