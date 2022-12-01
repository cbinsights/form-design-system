/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 01 2022 10:36:54 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const RadioEmptyIcon = ({
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
			<path d="M12,2 C6.4889971,2 2,6.4889971 2,12 C2,17.511003 6.4889971,22 12,22 C17.511003,22 22,17.511003 22,12 C22,6.4889971 17.511003,2 12,2 Z M12,4 C16.430123,4 20,7.5698774 20,12 C20,16.430123 16.430123,20 12,20 C7.5698774,20 4,16.430123 4,12 C4,7.5698774 7.5698774,4 12,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default RadioEmptyIcon;

