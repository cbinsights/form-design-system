/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Sep 13 2022 10:36:25 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const MoveIcon = ({
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
			<path d="M8.75,10 C8.336,10 8,10.336 8,10.75 L8,12.25 C8,12.664 8.336,13 8.75,13 L10.25,13 C10.664,13 11,12.664 11,12.25 L11,10.75 C11,10.336 10.664,10 10.25,10 L8.75,10 Z M8.75,16 C8.336,16 8,16.336 8,16.75 L8,18.25 C8,18.664 8.336,19 8.75,19 L10.25,19 C10.664,19 11,18.664 11,18.25 L11,16.75 C11,16.336 10.664,16 10.25,16 L8.75,16 Z M8.75,4 C8.336,4 8,4.336 8,4.75 L8,6.25 C8,6.664 8.336,7 8.75,7 L10.25,7 C10.664,7 11,6.664 11,6.25 L11,4.75 C11,4.336 10.664,4 10.25,4 L8.75,4 Z M13.75,16 C13.336,16 13,16.336 13,16.75 L13,18.25 C13,18.664 13.336,19 13.75,19 L15.25,19 C15.664,19 16,18.664 16,18.25 L16,16.75 C16,16.336 15.664,16 15.25,16 L13.75,16 Z M13.75,10 C13.336,10 13,10.336 13,10.75 L13,12.25 C13,12.664 13.336,13 13.75,13 L15.25,13 C15.664,13 16,12.664 16,12.25 L16,10.75 C16,10.336 15.664,10 15.25,10 L13.75,10 Z M13.75,4 C13.336,4 13,4.336 13,4.75 L13,6.25 C13,6.664 13.336,7 13.75,7 L15.25,7 C15.664,7 16,6.664 16,6.25 L16,4.75 C16,4.336 15.664,4 15.25,4 L13.75,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default MoveIcon;

