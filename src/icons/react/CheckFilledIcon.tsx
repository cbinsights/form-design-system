/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Feb 10 2022 10:13:01 GMT-0500 (Eastern Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CheckFilledIcon = ({
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
			<path d="M19,3 L5,3 C3.895,3 3,3.895 3,5 L3,19 C3,20.105 3.895,21 5,21 L19,21 C20.105,21 21,20.105 21,19 L21,5 C21,3.895 20.105,3 19,3 Z M10,17.414 L5.293,12.707 L6.707,11.293 L10,14.586 L17.293,7.293 L18.707,8.707 L10,17.414 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CheckFilledIcon;

