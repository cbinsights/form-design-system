/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Apr 06 2022 11:00:31 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const LineGraphIcon = ({
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
			<path d="M3,3 L3,19 C3,20.093063 3.9069372,21 5,21 L21,21 L21,19 L5,19 L5,3 L3,3 Z M19.320312,6.3144531 L14.988281,10.605469 L11.994141,7.7421875 L6.3027344,13.283203 L7.6972656,14.716797 L12.005859,10.521484 L15.011719,13.394531 L20.728516,7.734375 L19.320312,6.3144531 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default LineGraphIcon;

