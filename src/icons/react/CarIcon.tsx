/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Jul 06 2022 15:04:44 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const CarIcon = ({
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
			<path d="M13.832031,3.4453125 L12.167969,4.5546875 L15.130859,9 L9,9 L9,6 L7,6 L7,9 L5,9 C4.91837778,8.99984607 4.83704367,9.00968489 4.7578125,9.0292969 L1.5136719,9.8417969 C0.629246,10.063755 0,10.870038 0,11.78125 L0,17 C0,17.5522619 0.447738124,17.9999448 1,18 L3.3554688,18 C3.9222997,19.175306 5.1168481,20 6.5,20 C7.8831519,20 9.0777003,19.175306 9.6445312,18 L14.355469,18 C14.9223,19.175306 16.116848,20 17.5,20 C18.883152,20 20.0777,19.175306 20.644531,18 L23,18 C23.5522619,17.9999448 24,17.5522619 24,17 L24,11.820312 C24,10.873712 23.320385,10.045729 22.392578,9.859375 C22.3802588,9.85653653 22.3678869,9.85393189 22.355469,9.8515625 L17.589844,9.0839844 L13.832031,3.4453125 Z M5.1230469,11 L16.919922,11 L22,11.820312 L22,16 L20.949219,16 C20.701823,14.314589 19.249933,13 17.5,13 C15.750067,13 14.298177,14.314589 14.050781,16 L9.9492188,16 C9.7018235,14.314589 8.2499335,13 6.5,13 C4.7500665,13 3.2981765,14.314589 3.0507812,16 L2,16 L2,11.78125 L5.1230469,11 Z M6.5,15 C7.3402718,15 8,15.659728 8,16.5 C8,17.340272 7.3402718,18 6.5,18 C5.6597282,18 5,17.340272 5,16.5 C5,15.659728 5.6597282,15 6.5,15 Z M17.5,15 C18.340272,15 19,15.659728 19,16.5 C19,17.340272 18.340272,18 17.5,18 C16.659728,18 16,17.340272 16,16.5 C16,15.659728 16.659728,15 17.5,15 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default CarIcon;

