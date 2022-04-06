/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AdvancedSearchIcon = ({
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
			<path d="M18.208989,16.4068897 L22,20.30648 L20.3661065,22 L16.5645268,18.1031571 C15.5796413,18.7868238 14.3834871,19.1875 13.09375,19.1875 C9.72826481,19.1875 7,16.4592352 7,13.09375 C7,9.72826481 9.72826481,7 13.09375,7 C16.4592352,7 19.1875,9.72826481 19.1875,13.09375 C19.1875,14.3154395 18.8279884,15.4531607 18.208989,16.4068897 L18.208989,16.4068897 Z M9,6 C7.97930131,6.50671931 7.07411011,7.18765604 6.33055489,8 L2,8 L2,6 L9,6 L9,6 Z M17,6 L22,6 L22,8 L19.2536517,8 C18.6259128,7.18765604 17.8617144,6.50671931 17,6 L17,6 Z M5,10 C4.68949286,10.6295208 4.46016831,11.2999325 4.3242752,12 L2,12 L2,10 L5,10 L5,10 Z M4.54608607,14 C4.5968306,14.6921422 4.75224807,15.3620629 5,16 L2,16 L2,14 L4.54608607,14 L4.54608607,14 Z M2,2 L22,2 L22,4 L2,4 L2,2 Z M13,17 C15.209139,17 17,15.209139 17,13 C17,10.790861 15.209139,9 13,9 C10.790861,9 9,10.790861 9,13 C9,15.209139 10.790861,17 13,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AdvancedSearchIcon;

