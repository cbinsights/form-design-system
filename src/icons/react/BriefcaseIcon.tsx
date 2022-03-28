/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BriefcaseIcon = ({
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
			<path d="M8,3 C7.448,3 7,3.448 7,4 L7,6 L4,6 C2.9069372,6 2,6.9069372 2,8 L2,19 C2,20.093063 2.9069372,21 4,21 L20,21 C21.093063,21 22,20.093063 22,19 L22,8 C22,6.9069372 21.093063,6 20,6 L17,6 L17,4 C17,3.448 16.552,3 16,3 L8,3 Z M9,5 L15,5 L15,6 L9,6 L9,5 Z M4,8 L20,8 L20,19 L4,19 L4,8 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BriefcaseIcon;

