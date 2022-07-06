/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:45 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HourglassIcon = ({
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
		<g fillRule="nonzero">
			<path d="M5,3 L5,5 L7,5 L7,6.34375 C7,7.6692803 7.526238,8.9415505 8.4648438,9.8789062 L10.585938,12 L8.4648438,14.121094 C7.526238,15.05845 7,16.33072 7,17.65625 L7,19 L5,19 L5,21 L19,21 L19,19 L17,19 L17,17.65625 C17,16.330841 16.472461,15.058398 15.535156,14.121094 L13.414062,12 L15.535156,9.8789062 C16.473212,8.9408509 17,7.6692803 17,6.34375 L17,5 L19,5 L19,3 L5,3 Z M9,5 L15,5 L15,6.34375 C15,6.9381281 14.823391,7.5123753 14.5,8 L9.5,8 C9.1760711,7.5127919 9,6.9387149 9,6.34375 L9,5 Z M12,13.414062 L14.121094,15.535156 C14.683789,16.097852 15,16.861659 15,17.65625 L15,19 L13.802734,19 C13.309819,17.674682 12,17 12,17 C12,17 10.690181,17.674682 10.197266,19 L9,19 L9,17.65625 C9,16.85978 9.315512,16.099754 9.8789062,15.537109 L12,13.414062 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HourglassIcon;

