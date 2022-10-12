/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 16:29:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BellIcon = ({
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
			<path d="M12,2 C11.172,2 10.5,2.672 10.5,3.5 L10.5,4.1992188 C7.920403,4.8702644 6,7.2170553 6,10 L6,14.837891 L5.2792969,17 L4,17 L4,19 L20,19 L20,17 L18.720703,17 L18,14.837891 L18,10 C18,7.2170553 16.079597,4.8702644 13.5,4.1992188 L13.5,3.5 C13.5,2.672 12.828,2 12,2 Z M12,6 C14.220375,6 16,7.7796254 16,10 L16,15.162109 L16.611328,17 L7.3886719,17 L8,15.162109 L8,10 C8,7.7796254 9.7796254,6 12,6 Z M10.01,20.01 C10.01,21.11 10.9,22 12,22 C13.1,22 13.99,21.11 13.99,20.01 L10.01,20.01 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BellIcon;

