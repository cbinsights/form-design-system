/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Feb 16 2022 10:29:25 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AddSectionSpecialIcon = ({
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
			<path d="M7,11 L8.405,14.1405263 L12,14.4294737 L9.27,16.67 L10.09,20 L7,18.2331579 L3.91,20 L4.73,16.67 L2,14.4294737 L5.595,14.1405263 L7,11 Z M20,4 C21.3333333,4 22,4.66666667 22,6 L22,17 C22,18.3333333 21.3333333,19 20,19 L13,19 L13,17 L13,17 L20,17 L20,6 L4,6 L4,11 L2,11 L2,11 L2,6 C2,4.66666667 2.66666667,4 4,4 L20,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AddSectionSpecialIcon;

