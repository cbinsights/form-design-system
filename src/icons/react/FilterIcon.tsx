/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Mon Dec 06 2021 14:25:44 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const FilterIcon = ({
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
			<path d="M8,17 L16,17 L16,19 L8,19 L8,17 Z M6,13 L18,13 L18,15 L6,15 L6,13 Z M4,9 L20,9 L20,11 L4,11 L4,9 Z M2,5 L22,5 L22,7 L2,7 L2,5 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default FilterIcon;

