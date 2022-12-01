/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 01 2022 10:36:53 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CollectionExpertIcon = ({
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
			<path d="M17,10.8405263 L20.708,13 L19.724,8.93 L23,6.19157895 L18.686,5.83842105 L17,2 L15.314,5.83842105 L11,6.19157895 L14.276,8.93 L13.292,13 L17,10.8405263 Z M14,2 L14.0030766,4 L7,4 L7,18 L12,14 L17,18 L17,14 L19,14 L19,22 L12,17 L5,22 L5,2 L14,2 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CollectionExpertIcon;

