/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed May 04 2022 16:41:33 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const LightBulbIcon = ({
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
			<path d="M11,0 L11,3 L13,3 L13,0 L11,0 Z M4.2226562,2.8085938 L2.8085938,4.2226562 L4.9296875,6.34375 L6.34375,4.9296875 L4.2226562,2.8085938 Z M19.777344,2.8085938 L17.65625,4.9296875 L19.070312,6.34375 L21.191406,4.2226562 L19.777344,2.8085938 Z M12,5 C8.1456661,5 5,8.1456661 5,12 C5,14.767788 6.6561188,17.102239 9,18.234375 L9,21 C9,22.093063 9.9069372,23 11,23 L13,23 C14.093063,23 15,22.093063 15,21 L15,18.234375 C17.343881,17.102239 19,14.767788 19,12 C19,8.1456661 15.854334,5 12,5 Z M12,7 C14.773666,7 17,9.2263339 17,12 C17,14.184344 15.605334,16.022854 13.666016,16.708984 L13,16.943359 L13,21 L11,21 L11,16.943359 L10.333984,16.708984 C8.3946664,16.022854 7,14.184344 7,12 C7,9.2263339 9.2263339,7 12,7 Z M0,11 L0,13 L3,13 L3,11 L0,11 Z M21,11 L21,13 L24,13 L24,11 L21,11 Z M4.9296875,17.65625 L2.8085938,19.777344 L4.2226562,21.191406 L6.34375,19.070312 L4.9296875,17.65625 Z M19.070312,17.65625 L17.65625,19.070312 L19.777344,21.191406 L21.191406,19.777344 L19.070312,17.65625 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default LightBulbIcon;

