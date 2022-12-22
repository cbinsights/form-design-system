/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Thu Dec 22 2022 14:58:59 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const HistoryIcon = ({
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
			<path d="M20,2 L20,7 L15,7 L16.5624999,5.4375 C15.2685109,4.5348237 13.7026029,4 12,4 C7.5693341,4 4,7.5693339 4,12 C4,16.430666 7.4374999,20 12,20 C16.5624999,20 19.9980469,16.461986 19.9980469,12 L19.9980469,12 L21.9980469,12 C21.9980469,17.511334 17.5113336,22 12,22 C6.4886662,22 2,17.511334 2,12 C2,6.4886661 6.4886662,2 12,2 C14.2467839,2 16.3283639,2.7446772 18,4 L18,4 L20,2 Z M12.9980469,7 C13.5124325,7 13.9980469,7.4653753 13.9980469,8 L13.9980469,13 C13.9980469,13.2566586 13.9002307,13.503662 13.7250414,13.6847758 L11.5883202,15.716707 C11.2248956,16.094431 10.6340399,16.094431 10.2706153,15.716707 C9.90719076,15.3389831 9.90719076,14.7248794 10.2706153,14.3471554 L11.9980469,12.5 L11.9980469,8 C11.9980469,7.4653753 12.4836613,7 12.9980469,7 Z" transform="translate(11.999023, 12.000000) scale(-1, 1) translate(-11.999023, -12.000000)"/>
		</g>
	</g>
</svg>
  </div>
);

export default HistoryIcon;

