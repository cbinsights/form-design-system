/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Jun 23 2022 10:17:42 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ViewIcon = ({
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
			<path d="M13.0917969,7 C16.4572821,7 19.1855469,9.72826481 19.1855469,13.09375 C19.1855469,14.3154395 18.8260353,15.4531607 18.2070359,16.4068897 L21.9980469,20.30648 L20.3641534,22 L16.5625737,18.1031571 C15.5776882,18.7868238 14.381534,19.1875 13.0917969,19.1875 C9.72631171,19.1875 6.9980469,16.4592352 6.9980469,13.09375 C6.9980469,9.72826481 9.72631171,7 13.0917969,7 Z M19.9980469,2 C21.0980469,2 21.9980469,2.9 21.9980469,4 L21.9980469,4 L21.9980469,10 L19.9980469,10 L19.9980469,4 L3.9980469,4 L4,16 L5.9980469,16 L5.9980469,18 L4,18 C2.895,18 2,17.103047 2,15.998047 L2,15.998047 L2.0078125,4 C2.0078125,2.9 2.8980469,2 3.9980469,2 L3.9980469,2 Z M12.9980469,9 C10.7889079,9 8.9980469,10.790861 8.9980469,13 C8.9980469,15.209139 10.7889079,17 12.9980469,17 C15.2071859,17 16.9980469,15.209139 16.9980469,13 C16.9980469,10.790861 15.2071859,9 12.9980469,9 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default ViewIcon;

