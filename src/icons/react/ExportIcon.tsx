/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Nov 01 2022 17:18:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ExportIcon = ({
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
			<path d="M6,2 C4.9057453,2 4,2.9057453 4,4 L4,20 C4,21.094255 4.9057453,22 6,22 L14,22 L14,20 L6,20 L6,4 L13,4 L13,9 L18,9 L18,13 L20,13 L20,8 L14,2 L6,2 Z M20,14 L20,17 L16,17 L16,19 L20,19 L20,22 L24,18 L20,14 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ExportIcon;

