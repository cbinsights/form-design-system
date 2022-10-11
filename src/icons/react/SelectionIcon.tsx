/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SelectionIcon = ({
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
		<g fillRule="nonzero">
			<path d="M4,2 C2.895,2 2,2.895 2,4 L2,16 C2,17.105 2.895,18 4,18 L16,18 C17.105,18 18,17.105 18,16 L18,4 C18,2.895 17.105,2 16,2 L4,2 Z M4,4 L16,4 L16,16 L4,16 L4,4 Z M20,6 L20,20 L6,20 L6,22 L20,22 C21.105,22 22,21.105 22,20 L22,6 L20,6 Z M13.2929688,6.2929688 L9,10.585938 L6.7070312,8.2929688 L5.2929688,9.7070312 L9,13.414062 L14.707031,7.7070312 L13.2929688,6.2929688 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SelectionIcon;

