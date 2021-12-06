/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Dec 06 2021 14:25:44 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CbiDataIcon = ({
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
			<path d="M11.0624638,11.5844847 L14.604054,11.5844847 L14.604054,18.024561 L12.649847,18.024561 C12.8765187,17.3920752 13,16.7104579 13,16 C13,14.2533352 12.253648,12.6809902 11.0624638,11.5844847 L11.0624638,11.5844847 Z M2,12.6822049 L2,6.56580464 C2,5.14840987 3.14885448,4 4.56580464,4 L14.604054,4 L14.604054,10.0497147 L7.77595834,10.0497147 C7.52194195,10.0169145 7.26294627,10 7,10 C4.91302925,10 3.07492154,11.0655093 2,12.6822049 L2,12.6822049 Z M22,6.56580464 L22,10 L16,10 L16,4 L19.469346,4 C20.8867408,4 22,5.14840987 22,6.56580464 Z M22,11.5844847 L22,15.4587564 C22,16.8757065 20.8867408,18 19.469346,18 L16,18 L16,11.5844847 L22,11.5844847 Z M3,17 L3,15 L6,15 L6,12 L8,12 L8,15 L11,15 L11,17 L8,17 L8,20 L6,20 L6,17 L3,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CbiDataIcon;

