/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:15:19 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SendrequestIcon = ({
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
		<g transform="translate(2.500000, 2.500000)">
			<path d="M9.5,0 L18.0573113,5.9347631 C18.6408283,6.27498967 19,6.90000083 19,7.5753 L19,7.5753 L19,17.1 C19,18.1490705 18.1490705,19 17.1,19 L17.1,19 L1.9,19 C0.850929488,19 0,18.1490705 0,17.1 L0,17.1 L0,7.5753 C0,6.90000083 0.359171682,6.27498967 0.942498528,5.93487404 L0.942498528,5.93487404 L9.5,0 Z M17.1,9.689 L9.5,14.4188889 L1.899,9.689 L1.9,17.1 L17.1,17.1 L17.1,9.689 Z M9.5,2.85 L1.999,7.514 L9.5,12.17995 L17.001,7.513 L9.5,2.85 Z M9.5,4.75 L12.35,7.6 L10.449,7.599 L10.45,9.8591 L9.5,10.45 L8.55,9.8591 L8.549,7.599 L6.65,7.6 L9.5,4.75 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SendrequestIcon;
