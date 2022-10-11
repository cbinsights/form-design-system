/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const BarChartIcon = ({
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
			<path d="M3,3 L12,3 L12,5 L3,5 L3,3 Z M3,7 L8,7 L8,9 L3,9 L3,7 Z M3,11 L16,11 L16,13 L3,13 L3,11 Z M3,15 L21,15 L21,17 L3,17 L3,15 Z M3,19 L10,19 L10,21 L3,21 L3,19 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default BarChartIcon;

