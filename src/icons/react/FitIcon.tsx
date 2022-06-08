/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jun 08 2022 16:40:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FitIcon = ({
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
			<path d="M16.2875062,6.26578331 L19.5788839,3 L21.0041809,4.41421356 L17.7128032,7.67999687 L20.0512038,10.0002136 L14.0041809,10.0002136 L14.0041809,4.00021362 L16.2875062,6.26578331 L16.2875062,6.26578331 Z M17.7383416,16.3117554 L21.0041809,19.5757303 L19.5788839,21.0002136 L16.3130447,17.7362387 L14.0041809,20.0437844 L14.0041809,14.0002136 L20.0512038,14.0002136 L17.7383416,16.3117554 L17.7383416,16.3117554 Z M7.68396416,17.7067187 L4.41421356,21.0002136 L3,19.5757303 L6.2697506,16.2822354 L4.00418091,14.0002136 L10.0041809,14.0002136 L10.0041809,20.0437844 L7.68396416,17.7067187 L7.68396416,17.7067187 Z M6.29509048,7.70930405 L3,4.41421356 L4.41421356,3 L7.70930405,6.29509048 L10.0041809,4.00021362 L10.0041809,10.0002136 L4.00418091,10.0002136 L6.29509048,7.70930405 L6.29509048,7.70930405 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FitIcon;

