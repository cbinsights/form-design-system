/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Wed Dec 14 2022 11:46:36 GMT-0600 (Central Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const AutoBuildIcon = ({
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
			<path d="M5.15559061,17.8444094 L4,19 L4,15 L8,15 L6.57541768,16.4245823 C7.85905176,17.996444 9.81232934,19 12,19 C15.8659932,19 19,15.8659932 19,12 L21,12 C21,16.9705627 16.9705627,21 12,21 C9.26018292,21 6.8063089,19.7757322 5.15559061,17.8444094 L5.15559061,17.8444094 Z M12,7 L13.405,10.1405263 L17,10.4294737 L14.27,12.67 L15.09,16 L12,14.2331579 L8.91,16 L9.73,12.67 L7,10.4294737 L10.595,10.1405263 L12,7 Z M12,3 C14.7398171,3 17.1936911,4.22426776 18.8444094,6.15559061 L20,5 L20,9 L16,9 L17.4245823,7.57541768 C16.1409482,6.00355604 14.1876707,5 12,5 C8.13400675,5 5,8.13400675 5,12 L3,12 C3,7.02943725 7.02943725,3 12,3 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default AutoBuildIcon;

