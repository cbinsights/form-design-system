/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:08:31 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const PatentIcon = ({
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
			<path d="M12,2 C16,2 19,5 19,9 C19,10.95 18.225,12.7 16.9625,13.9625 L17,14 L17,22 L12,20 L7,22 L7,14 L7.03848643,13.9634862 C5.7754037,12.7009114 5,10.9505078 5,9 C5,5 8,2 12,2 Z M15.000443,15.3387861 C14.0936687,15.7634334 13.0773591,16 12,16 C10.9230392,16 9.90708275,15.7636083 9.00056273,15.339257 L9,19 L12,18 L15,19 Z M12,4 C9.2,4 7,6.2 7,9 C7,11.8 9.2,14 12,14 C14.8,14 17,11.8 17,9 C17,6.2 14.8,4 12,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default PatentIcon;

