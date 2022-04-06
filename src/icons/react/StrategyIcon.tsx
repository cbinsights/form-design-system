/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const StrategyIcon = ({
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
			<path d="M12,1 C10.695313,1 9.601563,1.835938 9.1875,3 L5,3 C3.894531,3 3,3.894531 3,5 L3,21 C3,22.105469 3.894531,23 5,23 L19,23 C20.105469,23 21,22.105469 21,21 L21,5 C21,3.894531 20.105469,3 19,3 L14.8125,3 C14.398438,1.835938 13.304688,1 12,1 Z M12,3 C12.550781,3 13,3.449219 13,4 C13,4.550781 12.550781,5 12,5 C11.449219,5 11,4.550781 11,4 C11,3.449219 11.449219,3 12,3 Z M5,5 L7,5 L7,7 L17,7 L17,5 L19,5 L19,21 L5,21 L5,5 Z M6.78125,8 L6.03125,8.78125 L7.25,10 L6.03125,11.25 L6.78125,12 L8,10.75 L9.21875,12 L9.96875,11.25 L8.75,10 L9.96875,8.78125 L9.21875,8 L8,9.25 L6.78125,8 Z M14.5,8 L13,10 L14,10 L14,11 L15,11 L15,10 L16,10 L14.5,8 Z M14.5,12 C13.671875,12 13,12.671875 13,13.5 C13,14.328125 13.671875,15 14.5,15 C15.328125,15 16,14.328125 16,13.5 C16,12.671875 15.328125,12 14.5,12 Z M12.40625,14.3125 L9,17.0625 L9.625,17.84375 L13,15.125 L12.40625,14.3125 Z M14.78125,16 L14.03125,16.75 L15.25,18 L14.03125,19.25 L14.78125,20 L16,18.75 L17.25,20 L18,19.25 L16.78125,18 L18,16.75 L17.25,16 L16,17.25 L14.78125,16 Z M7.5,17 C6.671875,17 6,17.671875 6,18.5 C6,19.328125 6.671875,20 7.5,20 C8.328125,20 9,19.328125 9,18.5 C9,17.671875 8.328125,17 7.5,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default StrategyIcon;

