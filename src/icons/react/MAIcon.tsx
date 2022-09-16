/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Tue Sep 13 2022 10:36:25 GMT-0400 (Eastern Daylight Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const MAIcon = ({
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
			<path d="M12,2 C14.755754,2 17.2559596,3.12245492 19.0671239,4.93387172 L12,12 L19.0661283,19.0671239 C17.2550434,20.8779564 14.755249,22 12,22 C6.4889971,22 2,17.511003 2,12 C2,6.4889971 6.4889971,2 12,2 Z M12,4 C7.5698774,4 4,7.5698774 4,12 C4,16.430123 7.5698774,20 12,20 C13.4417757,20 14.7924371,19.6218909 15.9585823,18.9590748 L9,12 L15.9595913,5.04149893 C14.7932162,4.37832725 13.4421915,4 12,4 Z M19,9 C20.6568542,9 22,10.3431458 22,12 C22,13.6568542 20.6568542,15 19,15 C17.3431458,15 16,13.6568542 16,12 C16,10.3431458 17.3431458,9 19,9 Z M19,11 C18.4477153,11 18,11.4477153 18,12 C18,12.5522847 18.4477153,13 19,13 C19.5522847,13 20,12.5522847 20,12 C20,11.4477153 19.5522847,11 19,11 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default MAIcon;

