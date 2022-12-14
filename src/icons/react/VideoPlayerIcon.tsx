/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 14 2022 11:46:36 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const VideoPlayerIcon = ({
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
			<path d="M15,8 L15,16 L5,16 L5,8 L15,8 M16,6 L4,6 C3.44771525,6 3,6.44771525 3,7 L3,17 C3,17.5522847 3.44771525,18 4,18 L16,18 C16.5522847,18 17,17.5522847 17,17 L17,13.5 L21,17.5 L21,6.5 L17,10.5 L17,7 C17,6.44771525 16.5522847,6 16,6 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default VideoPlayerIcon;

