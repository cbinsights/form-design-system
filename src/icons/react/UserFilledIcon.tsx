/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:45 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UserFilledIcon = ({
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
			<path d="M4.5,17.950315 C4.5,15.0211516 8.43356323,13 12,13 C15.5664368,13 19.5,15.0211516 19.5,17.950315 C19.5,23.3581238 4.5,23.3416599 4.5,17.950315 Z M12,11 C9.5142,11 7.5,8.9858 7.5,6.5 C7.5,4.0142 9.5142,2 12,2 C14.4858,2 16.5,4.0142 16.5,6.5 C16.5,8.9858 14.4858,11 12,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UserFilledIcon;

