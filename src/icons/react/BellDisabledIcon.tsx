/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 22 2022 14:58:59 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BellDisabledIcon = ({
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
			<path d="M13.99,20.01 C13.99,21.11 13.1,22 12,22 C10.9,22 10.01,21.11 10.01,20.01 L10.01,20.01 Z M12,2 C12.828,2 13.5,2.672 13.5,3.5 L13.5,3.5 L13.5,4.1992188 C16.079597,4.8702644 18,7.2170553 18,10 L18,10 L18,14.837891 L18.720703,17 L20,17 L20,19 L4,19 L4,17 L5.2792969,17 L6,14.837891 L6,10 C6,7.2170553 7.920403,4.8702644 10.5,4.1992188 L10.5,4.1992188 L10.5,3.5 C10.5,2.672 11.172,2 12,2 Z M12,6 C9.7796254,6 8,7.7796254 8,10 L8,10 L8,15.162109 L7.3886719,17 L16.611328,17 L16,15.162109 L16,10 C16,7.7796254 14.220375,6 12,6 Z"/>
			<rect height="3" width="27" transform="translate(12.000000, 13.000000) rotate(30.000000) translate(-12.000000, -13.000000)" x="-1.5" y="11.5"/>
		</g>
	</g>
</svg>
  </div>
);

export default BellDisabledIcon;

