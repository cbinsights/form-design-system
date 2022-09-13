/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Sep 13 2022 10:36:25 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ActionsArrowUpIcon = ({
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
			<polygon points="12 7 4 15.097166 5.88 17 12 10.8191633 18.12 17 20 15.097166"/>
		</g>
	</g>
</svg>
  </div>
);

export default ActionsArrowUpIcon;

