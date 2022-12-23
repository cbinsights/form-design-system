/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:08:31 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const GridIcon = ({
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
	<defs>
		<path id="Grida" d="M17,13 L13,13 L13,17 L17,17 L17,13 Z M19,13 L19,17 L21,17 L21,19 L19,19 L19,21 L17,21 L17,19 L13,19 L13,21 L11,21 L11,19 L7,19 L7,21 L5,21 L5,19 L3,19 L3,17 L5,17 L5,13 L3,13 L3,11 L5,11 L5,7 L3,7 L3,5 L5,5 L5,3 L7,3 L7,5 L11,5 L11,3 L13,3 L13,5 L17,5 L17,3 L19,3 L19,5 L21,5 L21,7 L19,7 L19,11 L21,11 L21,13 L19,13 Z M17,11 L17,7 L13,7 L13,11 L17,11 Z M11,17 L11,13 L7,13 L7,17 L11,17 Z M7,11 L11,11 L11,7 L7,7 L7,11 Z"/>
	</defs>
	<g fillRule="evenodd">
		<g>
			<path d="M17,13 L13,13 L13,17 L17,17 L17,13 Z M19,13 L19,17 L21,17 L21,19 L19,19 L19,21 L17,21 L17,19 L13,19 L13,21 L11,21 L11,19 L7,19 L7,21 L5,21 L5,19 L3,19 L3,17 L5,17 L5,13 L3,13 L3,11 L5,11 L5,7 L3,7 L3,5 L5,5 L5,3 L7,3 L7,5 L11,5 L11,3 L13,3 L13,5 L17,5 L17,3 L19,3 L19,5 L21,5 L21,7 L19,7 L19,11 L21,11 L21,13 L19,13 Z M17,11 L17,7 L13,7 L13,11 L17,11 Z M11,17 L11,13 L7,13 L7,17 L11,17 Z M7,11 L11,11 L11,7 L7,7 L7,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default GridIcon;

