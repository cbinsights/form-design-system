/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:45 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const VisualizeIcon = ({
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
			<path d="M11.9889385,10 C9.04780479,10.0033406 6.38482528,11.3366718 4,14 C6.38781467,16.6666667 9.05448133,18 12,18 C14.9455187,18 17.6121853,16.6666667 20,14 C17.6121853,11.3333333 14.9455187,10 12,10 L11.9960938,10 C14.2030754,10 15.9921875,11.7891121 15.9921875,13.9960938 C15.9921875,16.2030754 14.2030754,17.9921875 11.9960937,17.9921875 C9.78911211,17.9921875 8,16.2030754 8,13.9960938 C8,11.7914977 9.78524645,10.0038682 11.9889385,10 L11.9889385,10 Z M2,7.00920851 C5.0536254,5.0030695 8.38695873,4 12,4 C15.6130413,4 18.9463746,5.0030695 22,7.00920851 L22,9 L21.9859706,9 C18.9361658,7 15.6075089,6 12,6 C8.39249112,6 5.06383424,7 2.01402936,9 L2,9 L2,7.00920851 L2,7.00920851 Z M12.010376,20 C8.32847764,20 4.99514431,18 2.01037598,14 C4.99514431,10 8.32847764,8 12.010376,8 C15.6922743,8 19.0256076,10 22.010376,14 C19.0256076,18 15.6922743,20 12.010376,20 Z M12,16 C13.1045695,16 14,15.1045695 14,14 C14,12.8954305 13.1045695,12 12,12 C10.8954305,12 10,12.8954305 10,14 C10,15.1045695 10.8954305,16 12,16 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default VisualizeIcon;

