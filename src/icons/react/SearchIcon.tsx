/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 14 2022 11:46:36 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SearchIcon = ({
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
			<path d="M9,2 C5.1458514,2 2,5.1458514 2,9 C2,12.854149 5.1458514,16 9,16 C10.747998,16 12.345009,15.348024 13.574219,14.28125 L14,14.707031 L14,16 L20,22 L22,20 L16,14 L14.707031,14 L14.28125,13.574219 C15.348024,12.345009 16,10.747998 16,9 C16,5.1458514 12.854149,2 9,2 Z M9,4 C11.773268,4 14,6.2267316 14,9 C14,11.773268 11.773268,14 9,14 C6.2267316,14 4,11.773268 4,9 C4,6.2267316 6.2267316,4 9,4 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SearchIcon;

