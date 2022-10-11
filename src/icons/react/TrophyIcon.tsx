/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:41 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const TrophyIcon = ({
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
		<g fillRule="nonzero">
			<g transform="translate(2.000000, 2.000000)">
				<path d="M15,2 L15,0 L5,0 L5,2 L0,2 L0,9 C0,10.1 0.9,11 2,11 L5.1,11 C5.5,12.96 7.04,14.5 9,14.9 L9,17.08 C6,17.54 6,20 6,20 L14,20 C14,20 14,17.54 11,17.08 L11,14.9 C12.96,14.5 14.5,12.96 14.9,11 L18,11 C19.1,11 20,10.1 20,9 L20,2 L15,2 M2,9 L2,4 L5,4 L5,9 L2,9 M18,9 L15,9 L15,4 L18,4 L18,9 Z"/>
			</g>
		</g>
	</g>
</svg>
  </div>
);

export default TrophyIcon;

