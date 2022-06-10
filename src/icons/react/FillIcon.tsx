/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 09 2022 11:47:54 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FillIcon = ({
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
			<path d="M3,3 L3,9 L5.2929688,6.7070312 L8.8925781,10.306641 L10.306641,8.8925781 L6.7070312,5.2929688 L9,3 L3,3 Z M15,3 L17.292969,5.2929688 L13.693359,8.8925781 L15.107422,10.306641 L18.707031,6.7070312 L21,9 L21,3 L15,3 Z M8.8925781,13.693359 L5.2929688,17.292969 L3,15 L3,21 L9,21 L6.7070312,18.707031 L10.306641,15.107422 L8.8925781,13.693359 Z M15.107422,13.693359 L13.693359,15.107422 L17.292969,18.707031 L15,21 L21,21 L21,15 L18.707031,17.292969 L15.107422,13.693359 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FillIcon;

