/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Oct 11 2022 15:17:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ResetIcon = ({
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
			<path d="M12,2 C6.486,2 2,6.486 2,12 C2,17.514 6.486,22 12,22 C17.514,22 22,17.514 22,12 L20,12 C20,16.411 16.411,20 12,20 C7.589,20 4,16.411 4,12 C4,7.589 7.589,4 12,4 C14.205991,4 16.202724,4.9004767 17.650391,6.3496094 L15,9 L22,9 L22,2 L19.060547,4.9394531 C17.251786,3.1262684 14.757292,2 12,2 Z" transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000)"/>
		</g>
	</g>
</svg>
  </div>
);

export default ResetIcon;

