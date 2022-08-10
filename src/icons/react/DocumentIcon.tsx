/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Aug 11 2022 10:23:19 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const DocumentIcon = ({
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
			<path d="M6,2 C4.9057453,2 4,2.9057453 4,4 L4,20 C4,21.094255 4.9057453,22 6,22 L18,22 C19.094255,22 20,21.094255 20,20 L20,8 L14,2 L6,2 Z M6,4 L13,4 L13,9 L18,9 L18,20 L6,20 L6,4 Z M8,12 L8,14 L16,14 L16,12 L8,12 Z M8,16 L8,18 L16,18 L16,16 L8,16 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default DocumentIcon;

