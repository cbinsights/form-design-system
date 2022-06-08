/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AdviseIcon = ({
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
			<path d="M5,2 C3.8954305,2 3,2.8954305 3,4 C3,5.1045695 3.8954305,6 5,6 C6.1045695,6 7,5.1045695 7,4 C7,2.8954305 6.1045695,2 5,2 Z M9,3 L9,5 L19,5 L19,14 L17,14 L17,12 L13,12 L13,14 L10,14 L10,16 L22,16 L22,14 L21,14 L21,4.5 C21,3.67 20.33,3 19.5,3 L9,3 Z M4,7 C2.895,7 2,7.895 2,9 L2,15 L2,16 L2,22 L4,22 L4,16 L6,16 L6,22 L8,22 L8,16 L8,15 L8,9 L14,9 L14,7 L8,7 L7,7 L4,7 Z M4,9 L6,9 L6,14 L4,14 L4,9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AdviseIcon;

