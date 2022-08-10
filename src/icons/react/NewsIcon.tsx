/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Aug 10 2022 09:54:14 GMT-0500 (Central Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const NewsIcon = ({
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
			<path d="M21,19 C21,20 20,21 19,21 L5,21 C4,21 3,20 3,19 L3,10 L6,10 C6,7.33333333 6,5.66666667 6,5 C6,4 7,3 8,3 C8.66666667,3 13,3 21,3 L21,19 Z M19,18 L19,5 L8,5 L8,17 L6,17 L6,12 L5,12 L5,18 C4.99796972,18.3501487 5,19 5,19 L19,19 C19,19 19.0021969,18.3788872 19,18 Z M10,7 L17,7 L17,12 L10,12 L10,7 Z M12,9 L12,10 L15,10 L15,9 L12,9 Z M10,13 L17,13 L17,15 L10,15 L10,13 Z M10,16 L16,16 L16,18 L10,18 L10,16 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default NewsIcon;

