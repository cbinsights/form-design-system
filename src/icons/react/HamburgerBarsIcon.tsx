/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 01 2022 10:36:54 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HamburgerBarsIcon = ({
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
			<path d="M2,5 L2,7 L22,7 L22,5 L2,5 Z M2,11 L2,13 L22,13 L22,11 L2,11 Z M2,17 L2,19 L22,19 L22,17 L2,17 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default HamburgerBarsIcon;

