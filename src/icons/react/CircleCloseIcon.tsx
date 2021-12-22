/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 22 2021 09:31:30 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CircleCloseIcon = ({
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
			<path d="M14.59,8 L12,10.59 L9.41,8 L8,9.41 L10.59,12 L8,14.59 L9.41,16 L12,13.41 L14.59,16 L16,14.59 L13.41,12 L16,9.41 L14.59,8 Z M12,2 C6.47,2 2,6.47 2,12 C2,17.53 6.47,22 12,22 C17.53,22 22,17.53 22,12 C22,6.47 17.53,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CircleCloseIcon;

