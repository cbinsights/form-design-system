/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FeedIcon = ({
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
			<path d="M5,3 C3.9069372,3 3,3.9069372 3,5 L3,19 C3,20.093063 3.9069372,21 5,21 L19,21 C20.093063,21 21,20.093063 21,19 L21,5 C21,3.9069372 20.093063,3 19,3 L5,3 Z M5,5 L19,5 L19,9 L5,9 L5,5 Z M10,6 L10,8 L17,8 L17,6 L10,6 Z M14.7610559,14.0031738 L19,17.4984013 L19,19 L5,19 L5,17.8134992 L7.0172612,16.4217529 L9.38643932,18.3001709 L14.7610559,14.0031738 Z M19,11 L19,15.2128305 L14.7610559,12 L9.38643932,16.1790054 L7.0172612,14.2437324 L5,15.8356608 L5,11 L19,11 Z M8,6 L8,8 L6,8 L6,6 L8,6 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FeedIcon;

