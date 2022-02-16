/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:26 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ViewColumnsIcon = ({
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
			<path d="M5,3 C3.9069372,3 3,3.9069372 3,5 L3,19 C3,20.093063 3.9069372,21 5,21 L19,21 C20.093063,21 21,20.093063 21,19 L21,5 C21,3.9069372 20.093063,3 19,3 L5,3 Z M5,6 L19,6 L19,19 L5,19 L5,6 Z M5,9 L5,11 L19,11 L19,9 L5,9 Z M11,6 L11,9 L13,9 L13,6 L11,6 Z M11,11 L11,14 L13,14 L13,11 L11,11 Z M11,16 L11,19 L13,19 L13,16 L11,16 Z M5,14 L5,16 L19,16 L19,14 L5,14 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ViewColumnsIcon;

