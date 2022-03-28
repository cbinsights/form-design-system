/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Mar 28 2022 10:15:40 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const NetworkIcon = ({
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
			<path d="M18,2 C16.35499,2 15,3.3549904 15,5 C15,5.1909529 15.021791,5.3771224 15.056641,5.5585938 L7.921875,9.7207031 C7.3985399,9.2778539 6.7320771,9 6,9 C4.3549904,9 3,10.35499 3,12 C3,13.64501 4.3549904,15 6,15 C6.7320771,15 7.3985399,14.722146 7.921875,14.279297 L15.056641,18.439453 C15.021555,18.621514 15,18.808386 15,19 C15,20.64501 16.35499,22 18,22 C19.64501,22 21,20.64501 21,19 C21,17.35499 19.64501,16 18,16 C17.26748,16 16.601593,16.279328 16.078125,16.722656 L8.9433594,12.558594 C8.9782095,12.377122 9,12.190953 9,12 C9,11.809047 8.9782095,11.622878 8.9433594,11.441406 L16.078125,7.2792969 C16.60146,7.7221461 17.267923,8 18,8 C19.64501,8 21,6.6450096 21,5 C21,3.3549904 19.64501,2 18,2 Z M18,4 C18.564129,4 19,4.4358706 19,5 C19,5.5641294 18.564129,6 18,6 C17.435871,6 17,5.5641294 17,5 C17,4.4358706 17.435871,4 18,4 Z M6,11 C6.5641294,11 7,11.435871 7,12 C7,12.564129 6.5641294,13 6,13 C5.4358706,13 5,12.564129 5,12 C5,11.435871 5.4358706,11 6,11 Z M18,18 C18.564129,18 19,18.435871 19,19 C19,19.564129 18.564129,20 18,20 C17.435871,20 17,19.564129 17,19 C17,18.435871 17.435871,18 18,18 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default NetworkIcon;

