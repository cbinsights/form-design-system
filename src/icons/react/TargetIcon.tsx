/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 16:29:01 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const TargetIcon = ({
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
			<path d="M11,1 L11,2.0488281 C6.2749186,2.5176034 2.5176034,6.2749186 2.0488281,11 L1,11 L1,13 L2.0488281,13 C2.5176034,17.725081 6.2749186,21.482397 11,21.951172 L11,23 L13,23 L13,21.951172 C17.725081,21.482397 21.482397,17.725081 21.951172,13 L23,13 L23,11 L21.951172,11 C21.482397,6.2749186 17.725081,2.5176034 13,2.0488281 L13,1 L11,1 Z M11,4.0683594 L11,6 L13,6 L13,4.0683594 C16.611121,4.5218946 19.478105,7.3888787 19.931641,11 L18,11 L18,13 L19.931641,13 C19.478105,16.611121 16.611121,19.478105 13,19.931641 L13,18 L11,18 L11,19.931641 C7.3888787,19.478105 4.5218946,16.611121 4.0683594,13 L6,13 L6,11 L4.0683594,11 C4.5218946,7.3888787 7.3888787,4.5218946 11,4.0683594 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default TargetIcon;

