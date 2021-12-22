/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 22 2021 09:31:30 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HelpIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,16.430123 16.430123,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,7.5698774 7.5698774,4 12,4 Z M12,6 C9.79,6 8,7.79 8,10 L10,10 C10,8.9 10.9,8 12,8 C13.1,8 14,8.9 14,10 C14,12 11,12.367 11,15 L13,15 C13,13.349 16,12.5 16,10 C16,7.79 14.21,6 12,6 Z M11,16 L11,18 L13,18 L13,16 L11,16 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HelpIcon;

