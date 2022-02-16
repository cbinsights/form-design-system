/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:26 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const UserIcon = ({
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
			<path d="M12,13 C15.5664368,13 19.5,15.0211516 19.5,17.950315 C19.5,23.3581238 4.5,23.3416599 4.5,17.950315 C4.5,15.0211516 8.43356323,13 12,13 Z M12,2 C14.4858,2 16.5,4.0142 16.5,6.5 C16.5,8.9858 14.4858,11 12,11 C9.5142,11 7.5,8.9858 7.5,6.5 C7.5,4.0142 9.5142,2 12,2 Z M12,9 C13.381,9 14.5,7.881 14.5,6.5 C14.5,5.119 13.381,4 12,4 C10.619,4 9.5,5.119 9.5,6.5 C9.5,7.881 10.619,9 12,9 Z M6.5,17.750175 C6.5,20.7453666 17.5,20.7545132 17.5,17.750175 C17.5,16.122862 14.615387,15 12,15 C9.38461304,15 6.5,16.122862 6.5,17.750175 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default UserIcon;

