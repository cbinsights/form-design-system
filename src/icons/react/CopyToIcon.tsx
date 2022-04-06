/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CopyToIcon = ({
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
			<path d="M16.0416667,2 L9.43055556,2 C8.51326389,2 7.77777778,2.72857143 7.77777778,3.61904762 L7.77777778,16.5714286 C7.77777778,17.47 8.51326389,18.1904762 9.43055556,18.1904762 L19.3472222,18.1904762 C20.2645139,18.1904762 21,17.47 21,16.5714286 L21,6.85714286 L16.0416667,2 M19.1111111,16.2857143 L9.66666667,16.2857143 L9.66666667,3.9047619 L15.1759259,3.9047619 L15.1759259,7.77380952 L19.1111111,7.77380952 L19.1111111,16.2857143 M5.97277832,5.80952381 L5.97277832,18.9761905 C5.97277832,19.5284752 6.42049357,19.9761905 6.97277832,19.9761905 L17.2222222,19.9761905 L17.2222222,20 C17.2222222,21.1045695 16.3267917,22 15.2222222,22 L5.65277778,22 C4.73961806,22 4,21.0943452 4,19.9761905 L4,7.78230213 C4,6.74229108 4.80477301,5.89024485 5.82554756,5.81493488 L5.97277832,5.80952381 Z M14.7936508,9.61904762 L17.2222222,12 L14.7936508,14.3809524 L14.7936508,12.7936508 L11.5555556,12.7936508 L11.5555556,11.2063492 L14.7936508,11.2063492 L14.7936508,9.61904762 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CopyToIcon;

