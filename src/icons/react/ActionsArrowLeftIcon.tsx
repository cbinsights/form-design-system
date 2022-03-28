/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const ActionsArrowLeftIcon = ({
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
			<polygon points="17 6.645 15.097166 5 7 12 15.097166 19 17 17.355 10.8191633 12"/>
		</g>
	</g>
</svg>
  </div>
);

export default ActionsArrowLeftIcon;

