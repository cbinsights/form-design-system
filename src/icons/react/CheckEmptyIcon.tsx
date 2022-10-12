/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 16:29:00 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CheckEmptyIcon = ({
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
			<path d="M5,3 C3.9069372,3 3,3.9069372 3,5 L3,19 C3,20.093063 3.9069372,21 5,21 L19,21 C20.093063,21 21,20.093063 21,19 L21,5 C21,3.9069372 20.093063,3 19,3 L5,3 Z M5,5 L19,5 L19,19 L5,19 L5,5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CheckEmptyIcon;

